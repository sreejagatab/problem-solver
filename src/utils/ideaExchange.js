// ideaExchange.js
import axios from 'axios';

export const fetchIdeas = async () => {
  try {
    const response = await axios.get('/api/ideas');
    return response.data;
  } catch (error) {
    console.error('Error fetching ideas:', error);
    throw error;
  }
};

export const submitIdea = async (idea) => {
  try {
    const response = await axios.post('/api/ideas', idea);
    return response.data;
  } catch (error) {
    console.error('Error submitting idea:', error);
    throw error;
  }
};
