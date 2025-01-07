// utils/selfLearning.js
import axios from 'axios';

export const analyzeUserInteractions = async () => {
  try {
    const response = await axios.get('/api/self-learning/user-interactions');
    return response.data;
  } catch (error) {
    console.error('Error fetching user interactions:', error);
    throw error;
  }
};

export const getRecommendedImprovements = async (interactions) => {
  try {
    const response = await axios.post('/api/self-learning/recommendations', { interactions });
    return response.data;
  } catch (error) {
    console.error('Error getting recommended improvements:', error);
    throw error;
  }
};

export const analyzeSystemPerformance = async () => {
  try {
    const response = await axios.get('/api/self-learning/system-performance');
    return response.data;
  } catch (error) {
    console.error('Error fetching system performance:', error);
    throw error;
  }
};

export const implementPerformanceOptimizations = async () => {
  try {
    const response = await axios.post('/api/self-learning/performance-optimizations');
    return response.data;
  } catch (error) {
    console.error('Error implementing performance optimizations:', error);
    throw error;
  }
};

export const monitorCompetitors = async () => {
  try {
    const response = await axios.get('/api/self-learning/competitors');
    return response.data;
  } catch (error) {
    console.error('Error fetching competitor data:', error);
    throw error;
  }
};

export const analyzeCompetitorData = async (data) => {
  try {
    const response = await axios.post('/api/self-learning/competitor-analysis', { data });
    return response.data;
  } catch (error) {
    console.error('Error analyzing competitor data:', error);
    throw error;
  }
};