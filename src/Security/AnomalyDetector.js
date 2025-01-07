// Security/AnomalyDetector.js
import axios from 'axios';

export const detectAnomalies = async (data) => {
  try {
    const response = await axios.post('/api/security/anomalies', { data });
    return response.data.anomalies;
  } catch (error) {
    console.error('Error detecting anomalies:', error);
    throw error;
  }
};

export const reportAnomaly = async (anomaly) => {
  try {
    await axios.post('/api/security/anomalies', anomaly);
  } catch (error) {
    console.error('Error reporting anomaly:', error);
    throw error;
  }
};
