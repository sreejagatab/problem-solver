// quantum.js
import axios from 'axios';

export const optimizeProblem = async (problemDescription) => {
  try {
    const response = await axios.post('/api/quantum-optimization', { problemDescription });
    return response.data;
  } catch (error) {
    console.error('Error optimizing problem:', error);
    throw error;
  }
};