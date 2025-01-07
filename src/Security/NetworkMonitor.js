// Security/NetworkMonitor.js
import axios from 'axios';

export const monitorNetwork = async () => {
  try {
    const response = await axios.get('/api/network/status');
    return response.data;
  } catch (error) {
    console.error('Error monitoring network:', error);
    throw error;
  }
};

export const reportNetworkIssue = async (issue) => {
  try {
    await axios.post('/api/network/issues', issue);
  } catch (error) {
    console.error('Error reporting network issue:', error);
    throw error;
  }
};
