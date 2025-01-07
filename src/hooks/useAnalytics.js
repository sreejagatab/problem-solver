// useAnalytics.js
import { useState } from 'react';
import { trackPageView, trackEvent } from '../utils/analytics';

const useAnalytics = () => {
  const [pageViews, setPageViews] = useState(0);
  const [events, setEvents] = useState([]);

  const logPageView = (path) => {
    setPageViews(pageViews + 1);
    trackPageView(path);
  };

  const logEvent = (category, action, label, value) => {
    setEvents([...events, { category, action, label, value }]);
    trackEvent(category, action, label, value);
  };

  return { pageViews, events, logPageView, logEvent };
};

export default useAnalytics;