// predictiveIntelligence.js
import axios from 'axios';

export const fetchEquipmentData = async () => {
  try {
    const response = await axios.get('/api/equipment');
    return response.data;
  } catch (error) {
    console.error('Error fetching equipment data:', error);
    throw error;
  }
};

export const getPredictedFailures = async () => {
  try {
    const response = await axios.get('/api/predicted-failures');
    return response.data;
  } catch (error) {
    console.error('Error fetching predicted failures:', error);
    throw error;
  }
};

export const fetchOperationalData = async () => {
  try {
    const response = await axios.get('/api/operational-data');
    return response.data;
  } catch (error) {
    console.error('Error fetching operational data:', error);
    throw error;
  }
};

export const fetchAlerts = async () => {
  try {
    const response = await axios.get('/api/alerts');
    return response.data;
  } catch (error) {
    console.error('Error fetching alerts:', error);
    throw error;
  }
};