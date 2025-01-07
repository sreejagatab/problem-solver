// localization.js
import axios from 'axios';

export const changeLanguage = async (language) => {
  try {
    const response = await axios.post('/api/localization/language', { language });
    return response.data;
  } catch (error) {
    console.error('Error changing language:', error);
    throw error;
  }
};

export const getCurrencyRates = async () => {
  try {
    const response = await axios.get('/api/localization/currency-rates');
    return response.data;
  } catch (error) {
    console.error('Error fetching currency rates:', error);
    throw error;
  }
};
