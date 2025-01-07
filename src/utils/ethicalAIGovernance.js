// ethicalAIGovernance.js
import axios from 'axios';

export const fetchDeployedModels = async () => {
  try {
    const response = await axios.get('/api/deployed-models');
    return response.data;
  } catch (error) {
    console.error('Error fetching deployed models:', error);
    throw error;
  }
};

export const getModelAuditReport = async (modelId) => {
  try {
    const response = await axios.get(`/api/deployed-models/${modelId}/audit`);
    return response.data;
  } catch (error) {
    console.error('Error fetching model audit report:', error);
    throw error;
  }
};

export const checkEthicsCompliance = async () => {
  try {
    const response = await axios.get('/api/ethics-compliance');
    return response.data;
  } catch (error) {
    console.error('Error checking ethics compliance:', error);
    throw error;
  }
};
