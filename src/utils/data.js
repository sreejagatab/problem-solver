// data.js
import axios from 'axios';

export const fetchData = async (endpoint, params = {}) => {
  try {
    const response = await axios.get(`/api/${endpoint}`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const uploadData = async (endpoint, data) => {
  try {
    const response = await axios.post(`/api/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error('Error uploading data:', error);
    throw error;
  }
};


