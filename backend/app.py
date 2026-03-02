from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import joblib
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the trained model and preprocessing objects
try:
    model = joblib.load('model/placement_model.pkl')
    scaler = joblib.load('model/scaler.pkl')
    label_encoders = joblib.load('model/label_encoders.pkl')
    print("✅ Model loaded successfully!")
    print(f"📊 Model accuracy: 88.37%")
except Exception as e:
    print(f"❌ Error loading model: {e}")
    model = None
    scaler = None
    label_encoders = None

# Feature names for reference
FEATURE_NAMES = [
    'gender', 'ssc_p', 'ssc_b', 'hsc_p', 'hsc_b', 'hsc_s', 
    'degree_p', 'degree_t', 'workex', 'etest_p', 'specialisation', 'mba_p'
]

@app.route('/')
def home():
    return jsonify({
        "message": "Placement Prediction API",
        "status": "running", 
        "version": "1.0.0",
        "model_accuracy": "88.37%"
    })

@app.route('/api/predict', methods=['POST'])
def predict_placement():
    try:
        # Get data from request
        data = request.get_json()
        
        if not data:
            return jsonify({"error": "No data provided"}), 400
        
        # Validate all required features are present
        missing_features = [feature for feature in FEATURE_NAMES if feature not in data]
        if missing_features:
            return jsonify({"error": f"Missing features: {missing_features}"}), 400
        
        # Prepare features in correct order - FIXED VERSION
        features = []
        for feature in FEATURE_NAMES:
            value = data[feature]
            
            # Convert numeric fields
            if feature in ['ssc_p', 'hsc_p', 'degree_p', 'etest_p', 'mba_p']:
                features.append(float(value))
            # Keep categorical fields as strings (they get encoded later)
            else:
                features.append(str(value))
        
        # Convert to numpy array and reshape
        features_array = np.array(features).reshape(1, -1)
        
        # ENCODE CATEGORICAL VARIABLES BEFORE SCALING
        features_encoded = []
        for i, feature_name in enumerate(FEATURE_NAMES):
            value = features_array[0][i]
            
            if feature_name in ['ssc_p', 'hsc_p', 'degree_p', 'etest_p', 'mba_p']:
                # Already numeric, keep as is
                features_encoded.append(value)
            else:
                # Encode categorical variables using the saved label encoders
                if feature_name in label_encoders:
                    try:
                        encoded_value = label_encoders[feature_name].transform([value])[0]
                        features_encoded.append(encoded_value)
                    except ValueError as e:
                        # If value not seen during training, use default
                        print(f"Warning: Unknown value '{value}' for feature '{feature_name}'. Using default.")
                        features_encoded.append(0)
                else:
                    features_encoded.append(value)
        
        # Convert back to numpy array
        features_encoded_array = np.array(features_encoded).reshape(1, -1)
        
        # Scale the features
        features_scaled = scaler.transform(features_encoded_array)
        
        # Make prediction
        prediction = model.predict(features_scaled)[0]
        probability = model.predict_proba(features_scaled)[0]
        
        # Convert prediction back to original label
        placed = bool(prediction == list(label_encoders['status'].classes_).index('Placed'))
        confidence = float(probability[prediction])
        
        # Generate feedback based on features
        feedback = generate_feedback(data, confidence)
        
        # Estimate salary if placed
        estimated_salary = estimate_salary(data) if placed else 0
        
        response = {
            "placed": placed,
            "confidence": round(confidence * 100, 2),
            "estimated_salary": estimated_salary,
            "feedback": feedback,
            "probability_distribution": {
                "placed": round(probability[1] * 100, 2) if len(probability) > 1 else 0,
                "not_placed": round(probability[0] * 100, 2)
            }
        }
        
        return jsonify(response)
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

def generate_feedback(data, confidence):
    feedback = []
    
    # Academic performance feedback
    if float(data.get('mba_p', 0)) < 65:
        feedback.append("Improve MBA percentage to at least 65% for better placement chances")
    
    if float(data.get('degree_p', 0)) < 65:
        feedback.append("Focus on improving your degree percentage")
    
    if data.get('workex') == 'No':
        feedback.append("Gain work experience through internships - it increases placement chances by 36%")
    
    if float(data.get('etest_p', 0)) < 65:
        feedback.append("Prepare better for employability tests")
    
    if data.get('specialisation') == 'Mkt&HR' and confidence < 0.7:
        feedback.append("Consider Mkt&Fin specialization for better placement opportunities")
    
    if len(feedback) == 0:
        feedback.append("Maintain your current performance levels for optimal placement chances")
    
    return ". ".join(feedback) + "."

def estimate_salary(data):
    """Estimate salary based on academic performance"""
    base_salary = 250000  # 2.5 LPA base
    
    # Add bonuses based on performance
    mba_bonus = float(data.get('mba_p', 0)) * 2000  # 2k per percentage point
    degree_bonus = float(data.get('degree_p', 0)) * 1500  # 1.5k per percentage point
    workex_bonus = 50000 if data.get('workex') == 'Yes' else 0
    spec_bonus = 30000 if data.get('specialisation') == 'Mkt&Fin' else 0
    
    total_salary = base_salary + mba_bonus + degree_bonus + workex_bonus + spec_bonus
    
    return int(total_salary)

@app.route('/api/insights', methods=['GET'])
def get_insights():
    """Return dataset insights for the dashboard"""
    try:
        df = pd.read_excel('data/Placement_Data_Full_Class.xlsx')
        
        total_students = len(df)
        placed_students = len(df[df['status'] == 'Placed'])
        placement_rate = (placed_students / total_students) * 100
        
        # Gender analysis
        gender_placement = df.groupby('gender')['status'].apply(
            lambda x: (x == 'Placed').mean() * 100
        ).to_dict()
        
        # Work experience impact
        workex_placement = df.groupby('workex')['status'].apply(
            lambda x: (x == 'Placed').mean() * 100
        ).to_dict()
        
        # Specialization performance
        spec_placement = df.groupby('specialisation')['status'].apply(
            lambda x: (x == 'Placed').mean() * 100
        ).to_dict()
        
        # Salary statistics
        placed_df = df[df['status'] == 'Placed']
        avg_salary = placed_df['salary'].mean()
        max_salary = placed_df['salary'].max()
        
        insights = {
            "overall": {
                "total_students": total_students,
                "placed_students": placed_students,
                "placement_rate": round(placement_rate, 2),
                "avg_salary": round(avg_salary, 2),
                "max_salary": round(max_salary, 2)
            },
            "by_gender": gender_placement,
            "by_workex": workex_placement,
            "by_specialisation": spec_placement,
            "model_accuracy": 88.37
        }
        
        return jsonify(insights)
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        "status": "healthy", 
        "model_loaded": model is not None,
        "accuracy": "88.37%"
    })

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    print(f"🚀 Starting Flask server on port {port}...")
    print(f"📊 Model Accuracy: 88.37%")
    app.run(host='0.0.0.0', port=port, debug=True)