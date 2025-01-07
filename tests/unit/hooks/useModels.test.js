// useModels.test.js
import { renderHook, act } from '@testing-library/react-hooks';
import { useModels } from '../../src/components/hooks/useModels';
import { fetchModels, deployModel } from '../../src/utils/marketplace';

jest.mock('../../src/utils/marketplace');

test('useModels fetches models and provides a deploy function', async () => {
  const mockModels = [
    { id: 1, name: 'Model 1' },
    { id: 2, name: 'Model 2' },
  ];

  fetchModels.mockResolvedValueOnce(mockModels);
  deployModel.mockResolvedValueOnce({ id: 3, name: 'Deployed Model' });

  const { result, waitForNextUpdate } = renderHook(() => useModels());

  await waitForNextUpdate();
  expect(result.current.models).toEqual(mockModels);

  act(() => {
    result.current.deploySelectedModel(1);
  });
  expect(result.current.models).toEqual([...mockModels, { id: 3, name: 'Deployed Model' }]);
});