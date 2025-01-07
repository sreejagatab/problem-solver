// infrastructure.js
import axios from 'axios';

export const getSystemHealth = async () => {
  try {
    const response = await axios.get('/api/system-health');
    return response.data;
  } catch (error) {
    console.error('Error fetching system health:', error);
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