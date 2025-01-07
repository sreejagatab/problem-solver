// reinforcement.js
import axios from 'axios';

export const fetchRecommendations = async () => {
  try {
    const response = await axios.get('/api/recommendations');
    return response.data;
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    throw error;
  }
};

export const applyReinforcementFeedback = async (recommendation, feedback) => {
  try {
    const response = await axios.post('/api/recommendations/feedback', { recommendation, feedback });
    return response.data;
  } catch (error) {
    console.error('Error applying reinforcement feedback:', error);
    throw error;
  }
};
