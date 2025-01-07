// neuromorphic.js
import axios from 'axios';

export const fetchNeuromorphicModels = async () => {
  try {
    const response = await axios.get('/api/neuromorphic-models');
    return response.data;
  } catch (error) {
    console.error('Error fetching neuromorphic models:', error);
    throw error;
  }
};

export const deployNeuromorphicModel = async (modelId) => {
  try {
    const response = await axios.post(`/api/neuromorphic-models/${modelId}/deploy`);
    return response.data;
  } catch (error) {
    console.error('Error deploying neuromorphic model:', error);
    throw error;
  }
};