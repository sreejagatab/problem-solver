// marketplace.js
import axios from 'axios';

export const fetchModels = async () => {
  try {
    const response = await axios.get('/api/models');
    return response.data;
  } catch (error) {
    console.error('Error fetching models:', error);
    throw error;
  }
};

export const deployModel = async (modelId) => {
  try {
    const response = await axios.post(`/api/models/${modelId}/deploy`);
    return response.data;
  } catch (error) {
    console.error('Error deploying model:', error);
    throw error;
  }
};