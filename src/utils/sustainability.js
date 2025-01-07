// sustainability.js
import axios from 'axios';

export const fetchEnvironmentalData = async () => {
  try {
    const response = await axios.get('/api/environmental-data');
    return response.data;
  } catch (error) {
    console.error('Error fetching environmental data:', error);
    throw error;
  }
};

export const purchaseCarbonOffsets = async (amount) => {
  try {
    const response = await axios.post('/api/carbon-offsets', { amount });
    return response.data;
  } catch (error) {
    console.error('Error purchasing carbon offsets:', error);
    throw error;
  }
};
