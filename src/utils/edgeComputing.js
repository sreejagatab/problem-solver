// edgeComputing.js
import axios from 'axios';

export const registerEdgeDevice = async (device) => {
  try {
    const response = await axios.post('/api/edge-devices', device);
    return response.data;
  } catch (error) {
    console.error('Error registering edge device:', error);
    throw error;
  }
};

export const fetchEdgeDeviceData = async (deviceId) => {
  try {
    const response = await axios.get(`/api/edge-devices/${deviceId}/data`);
    return response.data;
  } catch (error) {
    console.error('Error fetching edge device data:', error);
    throw error;
  }
};