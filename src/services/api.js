const API_BASE_URL = 'http://localhost:5000/api';

export const predictionService = {
  async getPrediction(studentData) {
    try {
      const response = await fetch(`${API_BASE_URL}/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      });
      
      if (!response.ok) {
        throw new Error('Prediction request failed');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Prediction API error:', error);
      throw error;
    }
  },

  async getInsights() {
    try {
      const response = await fetch(`${API_BASE_URL}/insights`);
      
      if (!response.ok) {
        throw new Error('Insights request failed');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Insights API error:', error);
      throw error;
    }
  },

  async healthCheck() {
    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      return await response.json();
    } catch (error) {
      console.error('Health check failed:', error);
      return { status: 'unhealthy', model_loaded: false };
    }
  }
};