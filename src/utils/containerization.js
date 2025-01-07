// containerization.js
import axios from 'axios';

export const fetchContainerResources = async () => {
  try {
    const response = await axios.get('/api/containers/resources');
    return response.data;
  } catch (error) {
    console.error('Error fetching container resources:', error);
    throw error;
  }
};

export const allocateContainerResource = async (resourceId) => {
  try {
    const response = await axios.post(`/api/containers/resources/${resourceId}/allocate`);
    return response.data;
  } catch (error) {
    console.error('Error allocating container resource:', error);
    throw error;
  }
};