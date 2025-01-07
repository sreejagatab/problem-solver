// api.test.js
import api from '../../src/utils/api';
import axios from 'axios';

jest.mock('axios');

test('api instance has the correct base URL and headers', () => {
  expect(api.defaults.baseURL).toEqual('/api');
  expect(api.defaults.headers['Content-Type']).toEqual('application/json');
});

test('api instance handles request interceptors', () => {
  const mockConfig = { headers: { Authorization: 'Bearer token' } };
  const interceptedConfig = api.interceptors.request.handlers[0].fulfilled(mockConfig);
  expect(interceptedConfig).toEqual(mockConfig);
});

test('api instance handles response interceptors', () => {
  const mockResponse = { data: { key: 'value' } };
  const interceptedResponse = api.interceptors.response.handlers[0].fulfilled(mockResponse);
  expect(interceptedResponse).toEqual(mockResponse);
});
