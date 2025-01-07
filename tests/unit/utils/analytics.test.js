// analytics.test.js
import { trackPageView, trackEvent } from '../../src/utils/analytics';
import axios from 'axios';

jest.mock('axios');

test('trackPageView makes a POST request to the pageview endpoint', async () => {
  await trackPageView('/test-page');
  expect(axios.post).toHaveBeenCalledWith('/api/analytics/pageview', { path: '/test-page' });
});

test('trackEvent makes a POST request to the event endpoint', async () => {
  await trackEvent('test-category', 'test-action', 'test-label', 123);
  expect(axios.post).toHaveBeenCalledWith('/api/analytics/event', {
    category: 'test-category',
    action: 'test-action',
    label: 'test-label',
    value: 123,
  });
});