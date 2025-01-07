// socialMedia.js
import axios from 'axios';

export const connectSocialAccounts = async (accounts) => {
  try {
    const response = await axios.post('/api/social-media/connect', accounts);
    return response.data;
  } catch (error) {
    console.error('Error connecting social media accounts:', error);
    throw error;
  }
};

export const schedulePost = async (post) => {
  try {
    const response = await axios.post('/api/social-media/posts', post);
    return response.data;
  } catch (error) {
    console.error('Error scheduling social media post:', error);
    throw error;
  }
};