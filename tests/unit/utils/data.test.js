// data.test.js
import { fetchData, uploadData } from '../../src/utils/data';
import axios from 'axios';

jest.mock('axios');

test('fetchData makes a GET request to the specified endpoint', async () => {
  const mockData = { key: 'value' };
  axios.get.mockResolvedValueOnce({ data: mockData });

  const data = await fetchData('test-endpoint', { param: 'value' });
  expect(data).toEqual(mockData);
  expect(axios.get).toHaveBeenCalledWith('/api/test-endpoint', { params: { param: 'value' } });
});

test('uploadData makes a POST request to the specified endpoint', async () => {
  const mockData = { key: 'value' };
  axios.post.mockResolvedValueOnce({ data: mockData });

  const data = await uploadData('test-endpoint', mockData);
  expect(data).toEqual(mockData);
  expect(axios.post).toHaveBeenCalledWith('/api/test-endpoint', mockData);
});