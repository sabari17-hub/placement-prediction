import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score
import joblib
import os

def train_placement_model():
    print("🚀 Starting ML Model Training...")
    
    try:
        # Load your dataset
        df = pd.read_excel('data/Placement_Data_Full_Class.xlsx')
        
        print(f"✅ Dataset loaded: {df.shape[0]} students, {df.shape[1]} features")
        print(f"📊 First few rows:")
        print(df.head())
        
        # Data preprocessing
        df_clean = df.copy()
        df_clean['salary'] = df_clean['salary'].fillna(0)
        
        print(f"💰 Salary column cleaned - Missing values filled with 0")
        
        # Encode categorical variables
        categorical_cols = ['gender', 'ssc_b', 'hsc_b', 'hsc_s', 'degree_t', 'workex', 'specialisation', 'status']
        label_encoders = {}
        
        print("🔤 Encoding categorical variables...")
        for col in categorical_cols:
            le = LabelEncoder()
            df_clean[col] = le.fit_transform(df_clean[col].astype(str))
            label_encoders[col] = le
            print(f"   Encoded {col}: {list(le.classes_)}")
        
        # Prepare features and target
        X = df_clean.drop(['sl_no', 'status', 'salary'], axis=1)
        y = df_clean['status']
        
        print("🎯 Features used for prediction:", list(X.columns))
        print(f"📈 Target variable: status (0=Not Placed, 1=Placed)")
        
        # Split the data
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.2, random_state=42, stratify=y
        )
        
        print(f"📊 Data split - Train: {X_train.shape[0]}, Test: {X_test.shape[0]}")
        
        # Scale the features
        scaler = StandardScaler()
        X_train_scaled = scaler.fit_transform(X_train)
        X_test_scaled = scaler.transform(X_test)
        
        print("⚖️ Features scaled using StandardScaler")
        
        # Train SVM model
        print("🤖 Training SVM model...")
        svm_model = SVC(probability=True, random_state=42)
        svm_model.fit(X_train_scaled, y_train)
        
        # Make predictions
        y_pred = svm_model.predict(X_test_scaled)
        accuracy = accuracy_score(y_test, y_pred)
        
        print(f"🎯 Model trained successfully!")
        print(f"📊 Accuracy: {accuracy:.4f} ({accuracy*100:.2f}%)")
        
        # Calculate placement rate in test set
        placement_rate = (y_test == 1).mean() * 100
        print(f"📈 Actual placement rate in test set: {placement_rate:.2f}%")
        
        # Save model and preprocessing objects
        joblib.dump(svm_model, 'model/placement_model.pkl')
        joblib.dump(scaler, 'model/scaler.pkl')
        joblib.dump(label_encoders, 'model/label_encoders.pkl')
        
        print("💾 Model saved as: model/placement_model.pkl")
        print("💾 Scaler saved as: model/scaler.pkl")
        print("💾 Label encoders saved as: model/label_encoders.pkl")
        
        # Feature importance (basic analysis)
        print("\n🔍 Feature Analysis:")
        print("Features used in order:", list(X.columns))
        
        return accuracy
        
    except Exception as e:
        print(f"❌ Error during training: {e}")
        return None

if __name__ == "__main__":
    print("=" * 50)
    print("🎓 STUDENT PLACEMENT PREDICTION MODEL TRAINING")
    print("=" * 50)
    
    accuracy = train_placement_model()
    
    if accuracy:
        print(f"\n🎉 Training completed! Model accuracy: {accuracy*100:.2f}%")
        print("✅ Your ML model is ready for the Flask API!")
    else:
        print("\n❌ Training failed. Please check the error above.")