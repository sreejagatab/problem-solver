// anomalyDetection.js
import axios from 'axios';

export const fetchOperationalMetrics = async () => {
  try {
    const response = await axios.get('/api/operational-metrics');
    return response.data;
  } catch (error) {
    console.error('Error fetching operational metrics:', error);
    throw error;
  }
};

export const reportIncident = async (incident) => {
  try {
    const response = await axios.post('/api/incidents', incident);
    return response.data;
  } catch (error) {
    console.error('Error reporting incident:', error);
    throw error;
  }
};
