// integration.js
import axios from 'axios';

export const connectIntegration = async (integrationId) => {
  try {
    const response = await axios.post(`/api/integrations/${integrationId}/connect`);
    return response.data;
  } catch (error) {
    console.error('Error connecting integration:', error);
    throw error;
  }
};

export const disconnectIntegration = async (integrationId) => {
  try {
    const response = await axios.post(`/api/integrations/${integrationId}/disconnect`);
    return response.data;
  } catch (error) {
    console.error('Error disconnecting integration:', error);
    throw error;
  }
};
