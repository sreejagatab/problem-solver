// federated.test.js
import { fetchFederatedData, trainFederatedModel } from '../../src/utils/federated';
import axios from 'axios';

jest.mock('axios');

test('fetchFederatedData makes a GET request to the federated data endpoint', async () => {
  const mockModelId = 'model-123';
  const mockClientId = 'client-456';
  const mockData = { key: 'value' };
  axios.get.mockResolvedValueOnce({ data: mockData });

  const data = await fetchFederatedData(mockModelId, mockClientId);
  expect(data).toEqual(mockData);
  expect(axios.get).toHaveBeenCalledWith(`/api/federated/data?modelId=${mockModelId}&clientId=${mockClientId}`);
});

test('trainFederatedModel makes a POST request to the federated model training endpoint', async () => {
  const mockModelId = 'model-123';
  const mockUpdates = { key: 'value' };
  const mockResponse = { result: 'success' };
  axios.post.mockResolvedValueOnce({ data: mockResponse });

  const result = await trainFederatedModel(mockModelId, mockUpdates);
  expect(result).toEqual(mockResponse);
  expect(axios.post).toHaveBeenCalledWith(`/api/federated/train/${mockModelId}`, mockUpdates);
});
