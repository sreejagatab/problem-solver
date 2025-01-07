// useProblemSolvingLifecycle.test.js
import { renderHook, act } from '@testing-library/react-hooks';
import { useProblemSolvingLifecycle } from '../../src/components/hooks/useProblemSolvingLifecycle';

test('useProblemSolvingLifecycle manages the problem-solving lifecycle', () => {
  const { result } = renderHook(() => useProblemSolvingLifecycle());

  expect(result.current.currentStep).toEqual('problem-definition');

  act(() => {
    result.current.advanceToNextStep();
  });
  expect(result.current.currentStep).toEqual('data-exploration');

  act(() => {
    result.current.resetLifecycle();
  });
  expect(result.current.currentStep).toEqual('problem-definition');
});
