// auth.js
import axios from 'axios';

export const login = async (username, password) => {
  try {
    const response = await axios.post('/api/auth/login', { username, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await axios.post('/api/auth/logout');
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};
