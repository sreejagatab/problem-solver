// marketplace.test.js
import { fetchModels, deployModel } from '../../src/utils/marketplace';
import axios from 'axios';

jest.mock('axios');

test('fetchModels makes a GET request to the models endpoint', async () => {
  const mockModels = [
    { id: 1, name: 'Model A', domain: 'Computer Vision' },
    { id: 2, name: 'Model B', domain: 'Natural Language Processing' },
  ];
  axios.get.mockResolvedValueOnce({ data: mockModels });

  const models = await fetchModels();
  expect(models).toEqual(mockModels);
  expect(axios.get).toHaveBeenCalledWith('/api/models');
});

test('deployModel makes a POST request to the model deployment endpoint', async () => {
  const mockModelId = 'model-123';
  const mockDeployedModel = { id: mockModelId, name: 'Deployed Model' };
  axios.post.mockResolvedValueOnce({ data: mockDeployedModel });

  const model = await deployModel(mockModelId);
  expect(model).toEqual(mockDeployedModel);
  expect(axios.post).toHaveBeenCalledWith(`/api/models/${mockModelId}/deploy`);
});
