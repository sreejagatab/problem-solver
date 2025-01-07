// accessibility.js
import axios from 'axios';

export const updateAccessibilitySettings = async (settings) => {
  try {
    const response = await axios.put('/api/accessibility', settings);
    return response.data;
  } catch (error) {
    console.error('Error updating accessibility settings:', error);
    throw error;
  }
};

export const toggleHighContrastMode = async () => {
  try {
    const response = await axios.post('/api/accessibility/high-contrast');
    return response.data;
  } catch (error) {
    console.error('Error toggling high contrast mode:', error);
    throw error;
  }
};