// visualAnalytics.js
import axios from 'axios';

export const fetchVisualizationData = async (datasetId) => {
  try {
    const response = await axios.get(`/api/visualization/data/${datasetId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching visualization data:', error);
    throw error;
  }
};

export const generateVisualizations = async (datasetId, visualizationType) => {
  try {
    const response = await axios.post(`/api/visualization/generate`, { datasetId, visualizationType });
    return response.data;
  } catch (error) {
    console.error('Error generating visualizations:', error);
    throw error;
  }
};
