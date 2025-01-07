
// predictiveMaintenance.test.js
import { fetchEquipmentData, getPredictedFailures } from '../../src/utils/predictiveMaintenance';
import axios from 'axios';

jest.mock('axios');

test('fetchEquipmentData makes a GET request to the equipment data endpoint', async () => {
  const mockEquipmentData = [
    { id: 1, name: 'Machine A' },
    { id: 2, name: 'Machine B' },
  ];
  axios.get.mockResolvedValueOnce({ data: mockEquipmentData });

  const data = await fetchEquipmentData();
  expect(data).toEqual(mockEquipmentData);
  expect(axios.get).toHaveBeenCalledWith('/api/equipment');
});

test('getPredictedFailures makes a GET request to the predicted failures endpoint', async () => {
  const mockPredictedFailures = [
    { id: 1, equipment: 'Machine A', description: 'Bearing failure' },
    { id: 2, equipment: 'Machine B', description: 'Overheating' },
  ];
  axios.get.mockResolvedValueOnce({ data: mockPredictedFailures });

  const data = await getPredictedFailures();
  expect(data).toEqual(mockPredictedFailures);
  expect(axios.get).toHaveBeenCalledWith('/api/predicted-failures');
});