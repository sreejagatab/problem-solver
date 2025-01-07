// generative.test.js
import { generateSolution } from '../../src/utils/generative';
import axios from 'axios';

jest.mock('axios');

test('generateSolution makes a POST request to the generative solutions endpoint', async () => {
  const mockProblemDescription = 'Optimize resource allocation';
  const mockGeneratedSolution = 'Optimize resource allocation and production scheduling to improve efficiency';
  axios.post.mockResolvedValueOnce({ data: { solution: mockGeneratedSolution } });

  const solution = await generateSolution(mockProblemDescription);
  expect(solution).toEqual(mockGeneratedSolution);
  expect(axios.post).toHaveBeenCalledWith('/api/generative-solutions', { problemDescription: mockProblemDescription });
});