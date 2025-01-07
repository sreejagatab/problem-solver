
// quantum.test.js
import { optimizeProblem } from '../../src/utils/quantum';
import axios from 'axios';

jest.mock('axios');

test('optimizeProblem makes a POST request to the quantum optimization endpoint', async () => {
  const mockProblemDescription = 'Optimize production schedule';
  const mockOptimizationResults = { bestSolution: 'Optimize production schedule', performance: 85 };
  axios.post.mockResolvedValueOnce({ data: mockOptimizationResults });

  const results = await optimizeProblem(mockProblemDescription);
  expect(results).toEqual(mockOptimizationResults);
  expect(axios.post).toHaveBeenCalledWith('/api/quantum-optimization', { problemDescription: mockProblemDescription });
});
