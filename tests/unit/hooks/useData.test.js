// useData.test.js
import { renderHook, act } from '@testing-library/react-hooks';
import { useData } from '../../src/components/hooks/useData';
import { fetchData, uploadData } from '../../src/utils/data';

jest.mock('../../src/utils/data');

test('useData fetches data and provides an add function', async () => {
  const mockData = [{ id: 1, value: 'Data 1' }];

  fetchData.mockResolvedValueOnce(mockData);
  uploadData.mockResolvedValueOnce({ id: 2, value: 'Data 2' });

  const { result, waitForNextUpdate } = renderHook(() => useData());

  await waitForNextUpdate();
  expect(result.current.data).toEqual(mockData);

  act(() => {
    result.current.addData({ value: 'Data 2' });
  });
  expect(result.current.data).toEqual([...mockData, { id: 2, value: 'Data 2' }]);
});