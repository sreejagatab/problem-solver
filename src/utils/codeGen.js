// codeGen.js
import axios from 'axios';

export const generateCode = async (prompt) => {
  try {
    const response = await axios.post('/api/code-generation', { prompt });
    return response.data.code;
  } catch (error) {
    console.error('Error generating code:', error);
    throw error;
  }
};