// collaboration.js
import axios from 'axios';

export const joinCollaborativeSession = async (projectId) => {
  try {
    const response = await axios.post(`/api/collaboration/join/${projectId}`);
    return response.data;
  } catch (error) {
    console.error('Error joining collaborative session:', error);
    throw error;
  }
};

export const leaveCollaborativeSession = async (sessionId) => {
  try {
    const response = await axios.post(`/api/collaboration/leave/${sessionId}`);
    return response.data;
  } catch (error) {
    console.error('Error leaving collaborative session:', error);
    throw error;
  }
};