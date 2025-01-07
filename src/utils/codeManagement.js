// utils/codeManagement.js
import axios from 'axios';

export const uploadCode = async (files) => {
  try {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files', file);
    });
    await axios.post('/api/code/upload', formData);
  } catch (error) {
    console.error('Error uploading code:', error);
    throw error;
  }
};

export const downloadCode = async () => {
  try {
    const response = await axios.get('/api/code/download');
    return response.data;
  } catch (error) {
    console.error('Error downloading code:', error);
    throw error;
  }
};

export const generateCode = async (prompt) => {
  try {
    const response = await axios.post('/api/code/generate', { prompt });
    return response.data.code;
  } catch (error) {
    console.error('Error generating code:', error);
    throw error;
  }
};

export const repairCode = async (code) => {
  try {
    const response = await axios.post('/api/code/repair', { code });
    return response.data.repairedCode;
  } catch (error) {
    console.error('Error repairing code:', error);
    throw error;
  }
};

export const debugCode = async (code) => {
  try {
    const response = await axios.post('/api/code/debug', { code });
    return response.data.debuggedCode;
  } catch (error) {
    console.error('Error debugging code:', error);
    throw error;
  }
};

export const fetchPublicCodeDatasets = async () => {
    try {
      const response = await axios.get('/api/code-datasets/public');
      return response.data;
    } catch (error) {
      console.error('Error fetching public code datasets:', error);
      throw error;
    }
  };
  
  export const fetchPrivateCodeDatasets = async () => {
    try {
      const response = await axios.get('/api/code-datasets/private');
      return response.data;
    } catch (error) {
      console.error('Error fetching private code datasets:', error);
      throw error;
    }
  };
  
  export const fetchPublicCodeModels = async () => {
    try {
      const response = await axios.get('/api/code-models/public');
      return response.data;
    } catch (error) {
      console.error('Error fetching public code models:', error);
      throw error;
    }
  };
  
  export const fetchPrivateCodeModels = async () => {
    try {
      const response = await axios.get('/api/code-models/private');
      return response.data;
    } catch (error) {
      console.error('Error fetching private code models:', error);
      throw error;
    }
  };