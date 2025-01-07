// federated.js
import axios from 'axios';

export const fetchFederatedData = async (modelId, clientId) => {
  try {
    const response = await axios.get(`/api/federated/data?modelId=${modelId}&clientId=${clientId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching federated data:', error);
    throw error;
  }
};

export const trainFederatedModel = async (modelId, updates) => {
  try {
    const response = await axios.post(`/api/federated/train/${modelId}`, updates);
    return response.data;
  } catch (error) {
    console.error('Error training federated model:', error);
    throw error;
  }
};
