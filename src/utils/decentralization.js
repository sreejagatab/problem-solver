// decentralization.js
import axios from 'axios';

export const fetchCommunityIdeas = async () => {
  try {
    const response = await axios.get('/api/community-ideas');
    return response.data;
  } catch (error) {
    console.error('Error fetching community ideas:', error);
    throw error;
  }
};

export const submitCommunityIdea = async (idea) => {
  try {
    const response = await axios.post('/api/community-ideas', idea);
    return response.data;
  } catch (error) {
    console.error('Error submitting community idea:', error);
    throw error;
  }
};