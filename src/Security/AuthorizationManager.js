// Security/AuthorizationManager.js
import axios from 'axios';

export const checkPermission = async (userId, action) => {
  try {
    const response = await axios.post('/api/auth/check-permission', { userId, action });
    return response.data.allowed;
  } catch (error) {
    console.error('Error checking permission:', error);
    throw error;
  }
};

export const updateUserRole = async (userId, role) => {
  try {
    await axios.put(`/api/auth/users/${userId}/role`, { role });
  } catch (error) {
    console.error('Error updating user role:', error);
    throw error;
  }
};