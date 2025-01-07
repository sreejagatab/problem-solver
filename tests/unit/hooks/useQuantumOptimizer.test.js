// useQuantumOptimizer.test.js
import { renderHook, act } from '@testing-library/react-hooks';
import { useQuantumOptimizer } from '../../src/components/hooks/useQuantumOptimizer';
import { optimizeProblem } from '../../src/utils/quantum';

jest.mock('../../src/utils/quantum');

test('useQuantumOptimizer optimizes a problem and updates the state', async () => {
  const mockOptimizationResults = { bestSolution: 'Optimize production schedule', performance: 85 };

  optimizeProblem.mockResolvedValueOnce(mockOptimizationResults);

  const { result, waitForNextUpdate } = renderHook(() => useQuantumOptimizer());

  act(() => {
    result.current.optimizeWithQuantum('Optimize production schedule');
  });

  await waitForNextUpdate();
  expect(result.current.optimizationResults).toEqual(mockOptimizationResults);
});
