// ecosystem.js
import axios from 'axios';

export const fetchEcosystemModels = async () => {
  try {
    const response = await axios.get('/api/ecosystem/models');
    return response.data;
  } catch (error) {
    console.error('Error fetching ecosystem models:', error);
    throw error;
  }
};

export const deployEcosystemModel = async (modelId) => {
  try {
    const response = await axios.post(`/api/ecosystem/models/${modelId}/deploy`);
    return response.data;
  } catch (error) {
    console.error('Error deploying ecosystem model:', error);
    throw error;
  }
};