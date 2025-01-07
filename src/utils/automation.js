// automation.js
import axios from 'axios';

export const triggerAutomatedProcess = async (processId) => {
  try {
    const response = await axios.post(`/api/automation/processes/${processId}/trigger`);
    return response.data;
  } catch (error) {
    console.error('Error triggering automated process:', error);
    throw error;
  }
};

export const monitorAutomatedProcess = async (processId) => {
  try {
    const response = await axios.get(`/api/automation/processes/${processId}/status`);
    return response.data;
  } catch (error) {
    console.error('Error monitoring automated process:', error);
    throw error;
  }
};
