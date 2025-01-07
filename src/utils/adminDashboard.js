// utils/adminDashboard.js
import axios from 'axios';

export const getSystemMetrics = async () => {
  try {
    const response = await axios.get('/api/admin/system-metrics');
    return response.data;
  } catch (error) {
    console.error('Error fetching system metrics:', error);
    throw error;
  }
};

export const getFeatures = async () => {
  try {
    const response = await axios.get('/api/admin/features');
    return response.data;
  } catch (error) {
    console.error('Error fetching features:', error);
    throw error;
  }
};

export const updateFeatureStatus = async (featureId, status) => {
  try {
    await axios.put(`/api/admin/features/${featureId}`, { status });
  } catch (error) {
    console.error('Error updating feature status:', error);
    throw error;
  }
};

export const getActivityLogs = async () => {
  try {
    const response = await axios.get('/api/admin/activity-logs');
    return response.data;
  } catch (error) {
    console.error('Error fetching activity logs:', error);
    throw error;
  }
};

export const getAnalyticsData = async () => {
  try {
    const response = await axios.get('/api/admin/analytics');
    return response.data;
  } catch (error) {
    console.error('Error fetching analytics data:', error);
    throw error;
  }
};

export const getCompetitorData = async () => {
  try {
    const response = await axios.get('/api/admin/competitors');
    return response.data;
  } catch (error) {
    console.error('Error fetching competitor data:', error);
    throw error;
  }
};

export const analyzeCompetitorData = async (data) => {
  try {
    const response = await axios.post('/api/admin/competitor-analysis', { data });
    return response.data;
  } catch (error) {
    console.error('Error analyzing competitor data:', error);
    throw error;
  }
};
