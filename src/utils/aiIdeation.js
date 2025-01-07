// aiIdeation.js
import axios from 'axios';

export const generateSolution = async (problemDescription) => {
  try {
    const response = await axios.post('/api/generative-solutions', { problemDescription });
    return response.data.solution;
  } catch (error) {
    console.error('Error generating solution:', error);
    throw error;
  }
};
