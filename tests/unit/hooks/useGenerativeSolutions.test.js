// useGenerativeSolutions.test.js
import { renderHook, act } from '@testing-library/react-hooks';
import { useGenerativeSolutions } from '../../src/components/hooks/useGenerativeSolutions';
import { generateSolution } from '../../src/utils/generative';

jest.mock('../../src/utils/generative');

test('useGenerativeSolutions generates a solution and updates the state', async () => {
  const mockGeneratedSolution = 'Optimize resource allocation and production scheduling to improve efficiency';

  generateSolution.mockResolvedValueOnce(mockGeneratedSolution);

  const { result, waitForNextUpdate } = renderHook(() => useGenerativeSolutions());

  act(() => {
    result.current.generateSolutionWithAI('Optimize resource allocation');
  });

  await waitForNextUpdate();
  expect(result.current.generatedSolution).toEqual(mockGeneratedSolution);
});