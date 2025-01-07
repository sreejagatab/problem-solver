// multiTenancy.js
import axios from 'axios';

export const fetchTenantData = async (tenantId) => {
  try {
    const response = await axios.get(`/api/tenants/${tenantId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching tenant data:', error);
    throw error;
  }
};

export const updateTenantSettings = async (tenantId, settings) => {
  try {
    const response = await axios.put(`/api/tenants/${tenantId}/settings`, settings);
    return response.data;
  } catch (error) {
    console.error('Error updating tenant settings:', error);
    throw error;
  }
};