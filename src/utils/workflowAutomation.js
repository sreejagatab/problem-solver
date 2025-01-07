// workflowAutomation.js
import axios from 'axios';

export const fetchWorkflows = async () => {
  try {
    const response = await axios.get('/api/workflows');
    return response.data;
  } catch (error) {
    console.error('Error fetching workflows:', error);
    throw error;
  }
};

export const saveWorkflow = async (workflow) => {
  try {
    const response = await axios.post('/api/workflows', workflow);
    return response.data;
  } catch (error) {
    console.error('Error saving workflow:', error);
    throw error;
  }
};

export const runWorkflow = async (workflowId) => {
  try {
    const response = await axios.post(`/api/workflows/${workflowId}/run`);
    return response.data;
  } catch (error) {
    console.error('Error running workflow:', error);
    throw error;
  }
};