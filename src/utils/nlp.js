// nlp.js
import axios from 'axios';

export const extractKeywords = async (text) => {
  try {
    const response = await axios.post('/api/nlp/keywords', { text });
    return response.data.keywords;
  } catch (error) {
    console.error('Error extracting keywords:', error);
    throw error;
  }
};

export const classifyText = async (text) => {
  try {
    const response = await axios.post('/api/nlp/classify', { text });
    return response.data.classification;
  } catch (error) {
    console.error('Error classifying text:', error);
    throw error;
  }
};
