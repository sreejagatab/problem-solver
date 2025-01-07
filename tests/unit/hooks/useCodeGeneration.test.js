// useCodeGeneration.test.js
import { renderHook, act } from '@testing-library/react-hooks';
import { useCodeGeneration } from '../../src/components/hooks/useCodeGeneration';
import { generateCode } from '../../src/utils/codeGen';

jest.mock('../../src/utils/codeGen');

test('useCodeGeneration generates code and updates the state', async () => {
  const mockGeneratedCode = 'console.log("Hello, Problem Solver!");';

  generateCode.mockResolvedValueOnce(mockGeneratedCode);

  const { result, waitForNextUpdate } = renderHook(() => useCodeGeneration());

  act(() => {
    result.current.generateCustomCode('console.log("Hello")');
  });

  await waitForNextUpdate();
  expect(result.current.generatedCode).toEqual(mockGeneratedCode);
});
