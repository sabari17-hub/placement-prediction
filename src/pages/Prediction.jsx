import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { predictionService } from '../services/api';

const Prediction = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    ssc_p: '',
    ssc_b: '',
    hsc_p: '',
    hsc_b: '',
    hsc_s: '',
    degree_p: '',
    degree_t: '',
    workex: '',
    etest_p: '',
    specialisation: '',
    mba_p: ''
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Remove name field as it's not used in prediction
      const { name, ...predictionData } = formData;
      
      // Convert numeric fields to numbers
      const processedData = {
        ...predictionData,
        ssc_p: parseFloat(predictionData.ssc_p),
        hsc_p: parseFloat(predictionData.hsc_p),
        degree_p: parseFloat(predictionData.degree_p),
        etest_p: parseFloat(predictionData.etest_p),
        mba_p: parseFloat(predictionData.mba_p)
      };
      
      // Use real API call
      const result = await predictionService.getPrediction(processedData);
      setPrediction(result);
    } catch (err) {
      setError('Failed to get prediction. Please try again.');
      console.error('Prediction error:', err);
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = () => {
    return (
      formData.name &&
      formData.gender &&
      formData.ssc_p &&
      formData.ssc_b &&
      formData.hsc_p &&
      formData.hsc_b &&
      formData.hsc_s &&
      formData.degree_p &&
      formData.degree_t &&
      formData.workex &&
      formData.etest_p &&
      formData.specialisation &&
      formData.mba_p
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen py-8 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Placement Prediction
          </h1>
          <p className="text-lg text-gray-600">
            Fill in your academic details to get your placement probability prediction
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Prediction Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Academic Information
            </h2>
            
            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700">{error}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Gender */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                  </select>
                </div>

                {/* Work Experience */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Work Experience *
                  </label>
                  <select
                    name="workex"
                    value={formData.workex}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="">Select Option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* SSC Percentage */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    SSC Percentage *
                  </label>
                  <input
                    type="number"
                    name="ssc_p"
                    min="0"
                    max="100"
                    step="0.1"
                    value={formData.ssc_p}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="85.0"
                    required
                  />
                </div>

                {/* SSC Board */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    SSC Board *
                  </label>
                  <select
                    name="ssc_b"
                    value={formData.ssc_b}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="">Select Board</option>
                    <option value="Central">Central</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* HSC Percentage */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    HSC Percentage *
                  </label>
                  <input
                    type="number"
                    name="hsc_p"
                    min="0"
                    max="100"
                    step="0.1"
                    value={formData.hsc_p}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="78.5"
                    required
                  />
                </div>

                {/* HSC Board */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    HSC Board *
                  </label>
                  <select
                    name="hsc_b"
                    value={formData.hsc_b}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="">Select Board</option>
                    <option value="Central">Central</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* HSC Stream */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    HSC Stream *
                  </label>
                  <select
                    name="hsc_s"
                    value={formData.hsc_s}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="">Select Stream</option>
                    <option value="Science">Science</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Arts">Arts</option>
                  </select>
                </div>

                {/* Degree Percentage */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Degree Percentage *
                  </label>
                  <input
                    type="number"
                    name="degree_p"
                    min="0"
                    max="100"
                    step="0.1"
                    value={formData.degree_p}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="72.3"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Degree Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Degree Type *
                  </label>
                  <select
                    name="degree_t"
                    value={formData.degree_t}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="">Select Degree Type</option>
                    <option value="Comm&Mgmt">Commerce & Management</option>
                    <option value="Sci&Tech">Science & Technology</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                {/* E-Test Percentage */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Employability Test % *
                  </label>
                  <input
                    type="number"
                    name="etest_p"
                    min="0"
                    max="100"
                    step="0.1"
                    value={formData.etest_p}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="68.5"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Specialization */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    MBA Specialization *
                  </label>
                  <select
                    name="specialisation"
                    value={formData.specialisation}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="">Select Specialization</option>
                    <option value="Mkt&Fin">Marketing & Finance</option>
                    <option value="Mkt&HR">Marketing & HR</option>
                  </select>
                </div>

                {/* MBA Percentage */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    MBA Percentage *
                  </label>
                  <input
                    type="number"
                    name="mba_p"
                    min="0"
                    max="100"
                    step="0.1"
                    value={formData.mba_p}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="65.8"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={!isFormValid() || loading}
                className={`w-full py-3 px-4 rounded-lg font-semibold shadow-lg transition-all duration-200 transform hover:scale-105 ${
                  !isFormValid() || loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Predicting...
                  </div>
                ) : (
                  'Get Placement Prediction'
                )}
              </button>
            </form>
          </motion.div>

          {/* Prediction Result */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Prediction Result
            </h2>
            
            {prediction ? (
              <div className={`p-6 rounded-lg ${
                prediction.placed 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-yellow-50 border border-yellow-200'
              }`}>
                <div className="text-center">
                  <div className={`text-6xl mb-4 ${
                    prediction.placed ? 'text-green-500' : 'text-yellow-500'
                  }`}>
                    {prediction.placed ? '🎉' : '⚠️'}
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${
                    prediction.placed ? 'text-green-700' : 'text-yellow-700'
                  }`}>
                    {prediction.placed 
                      ? 'High Placement Probability!' 
                      : 'Need to Improve Some Areas'}
                  </h3>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Confidence Score:</span>
                      <span className="font-semibold text-blue-600">
                        {prediction.confidence}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          prediction.placed ? 'bg-green-500' : 'bg-yellow-500'
                        }`}
                        style={{ width: `${prediction.confidence}%` }}
                      ></div>
                    </div>
                  </div>
                  {prediction.placed && prediction.estimated_salary > 0 && (
                    <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Estimated Package</h4>
                      <p className="text-2xl font-bold text-blue-600">
                        ₹{prediction.estimated_salary.toLocaleString()}
                      </p>
                      <p className="text-sm text-blue-600">Based on academic performance</p>
                    </div>
                  )}
                  <div className="bg-white rounded-lg p-4 text-left">
                    <h4 className="font-semibold text-gray-800 mb-2">Recommendations:</h4>
                    <p className="text-gray-600">{prediction.feedback}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <div className="text-6xl mb-4">🔮</div>
                <p className="text-lg mb-2">Fill out the form to get your prediction</p>
                <p className="text-sm">We'll analyze your academic profile and provide personalized recommendations</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Prediction;