// useProblems.test.js
import { renderHook, act } from '@testing-library/react-hooks';
import { useProblems } from '../../src/components/hooks/useProblems';
import { ProblemRepository } from '../../src/database/repositories/ProblemRepository';

jest.mock('../../src/database/repositories/ProblemRepository');

test('useProblems fetches problems and provides CRUD operations', async () => {
  const mockProblems = [
    { id: 1, title: 'Problem 1' },
    { id: 2, title: 'Problem 2' },
  ];

  ProblemRepository.findAll.mockResolvedValueOnce(mockProblems);
  ProblemRepository.create.mockResolvedValueOnce({ id: 3, title: 'Problem 3' });

  const { result, waitForNextUpdate } = renderHook(() => useProblems());

  await waitForNextUpdate();
  expect(result.current.problems).toEqual(mockProblems);

  act(() => {
    result.current.createProblem({ title: 'Problem 3' });
  });
  expect(result.current.problems).toEqual([...mockProblems, { id: 3, title: 'Problem 3' }]);
});