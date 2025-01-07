// analytics.js
import axios from 'axios';

export const trackPageView = (path) => {
  try {
    axios.post('/api/analytics/pageview', { path });
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
};

export const trackEvent = (category, action, label, value) => {
  try {
    axios.post('/api/analytics/event', { category, action, label, value });
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};