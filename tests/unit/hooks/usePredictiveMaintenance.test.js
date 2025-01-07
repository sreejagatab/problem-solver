// usePredictiveMaintenance.test.js
import { renderHook } from '@testing-library/react-hooks';
import { usePredictiveMaintenance } from '../../src/components/hooks/usePredictiveMaintenance';
import { fetchEquipmentData, getPredictedFailures } from '../../src/utils/predictiveMaintenance';

jest.mock('../../src/utils/predictiveMaintenance');

test('usePredictiveMaintenance fetches equipment data and predicted failures', async () => {
  const mockEquipment = [
    { id: 1, name: 'Machine A' },
    { id: 2, name: 'Machine B' },
  ];
  const mockPredictedFailures = [
    { id: 1, equipment: 'Machine A', description: 'Bearing failure' },
    { id: 2, equipment: 'Machine B', description: 'Overheating' },
  ];

  fetchEquipmentData.mockResolvedValueOnce(mockEquipment);
  getPredictedFailures.mockResolvedValueOnce(mockPredictedFailures);

  const { result, waitForNextUpdate } = renderHook(() => usePredictiveMaintenance());

  await waitForNextUpdate();
  expect(result.current.equipment).toEqual(mockEquipment);
  expect(result.current.predictions).toEqual(mockPredictedFailures);
});
