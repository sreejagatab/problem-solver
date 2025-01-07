// seo.js
import axios from 'axios';

export const runSEOAnalysis = async () => {
  try {
    const response = await axios.post('/api/seo-analysis');
    return response.data;
  } catch (error) {
    console.error('Error running SEO analysis:', error);
    throw error;
  }
};

export const generateSitemap = async () => {
  try {
    const response = await axios.get('/api/sitemap');
    return response.data;
  } catch (error) {
    console.error('Error generating sitemap:', error);
    throw error;
  }
};