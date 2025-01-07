// personalization.js
import axios from 'axios';

export const updateUserProfile = async (updates) => {
  try {
    const response = await axios.put('/api/user-profile', updates);
    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};

export const getRecommendations = async () => {
  try {
    const response = await axios.get('/api/recommendations');
    return response.data;
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    throw error;
  }
};