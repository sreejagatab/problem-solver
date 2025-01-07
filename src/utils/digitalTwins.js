// digitalTwins.js
import axios from 'axios';

export const fetchDigitalTwinModels = async () => {
  try {
    const response = await axios.get('/api/digital-twins');
    return response.data;
  } catch (error) {
    console.error('Error fetching digital twin models:', error);
    throw error;
  }
};

export const deployDigitalTwin = async (modelId) => {
  try {
    const response = await axios.post(`/api/digital-twins/${modelId}/deploy`);
    return response.data;
  } catch (error) {
    console.error('Error deploying digital twin:', error);
    throw error;
  }
};
