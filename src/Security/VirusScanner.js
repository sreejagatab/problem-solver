// Security/VirusScanner.js
import axios from 'axios';

export const scanForViruses = async (file) => {
  try {
    const response = await axios.post('/api/security/virus-scan', { file });
    return response.data.virusFound;
  } catch (error) {
    console.error('Error scanning for viruses:', error);
    throw error;
  }
};