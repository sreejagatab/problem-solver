// hybridCompute.js
import axios from 'axios';

export const fetchDistributedResources = async () => {
  try {
    const response = await axios.get('/api/distributed-resources');
    return response.data;
  } catch (error) {
    console.error('Error fetching distributed resources:', error);
    throw error;
  }
};

export const allocateDistributedResource = async (resourceId) => {
  try {
    const response = await axios.post(`/api/distributed-resources/${resourceId}/allocate`);
    return response.data;
  } catch (error) {
    console.error('Error allocating distributed resource:', error);
    throw error;
  }
};

export const fetchCloudIntegrationData = async () => {
  try {
    const response = await axios.get('/api/cloud-integration');
    return response.data;
  } catch (error) {
    console.error('Error fetching cloud integration data:', error);
    throw error;
  }
};
