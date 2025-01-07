// projectManagement.js
import axios from 'axios';

export const fetchProjects = async () => {
  try {
    const response = await axios.get('/api/projects');
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

export const updateProject = async (projectId, updates) => {
  try {
    const response = await axios.put(`/api/projects/${projectId}`, updates);
    return response.data;
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
};