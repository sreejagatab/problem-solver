// useFederatedLearning.test.js
import { renderHook, act } from '@testing-library/react-hooks';
import { useFederatedLearning } from '../../src/components/hooks/useFederatedLearning';
import { fetchFederatedData, trainFederatedModel } from '../../src/utils/federated';

jest.mock('../../src/utils/federated');

test('useFederatedLearning fetches client data and updates the model', async () => {
  const mockClientData = [{ id: 1, value: 'Data 1' }];
  const mockModelUpdates = { accuracy: 0.92 };

  fetchFederatedData.mockResolvedValueOnce(mockClientData);
  trainFederatedModel.mockResolvedValueOnce(mockModelUpdates);

  const { result, waitForNextUpdate } = renderHook(() => useFederatedLearning('model-123'));

  await waitForNextUpdate();
  expect(result.current.clientData).toEqual(mockClientData);

  act(() => {
    result.current.updateModel();
  });
  expect(result.current.modelUpdates).toEqual(mockModelUpdates);
});
