// PredictiveIntelligence/PredictiveMaintenanceModel.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import PredictiveMaintenanceModel from '../../../src/components/PredictiveIntelligence/PredictiveMaintenanceModel';

test('renders equipment and predicted failures', () => {
  const mockEquipment = [
    { id: 1, name: 'Machine A' },
    { id: 2, name: 'Machine B' },
  ];
  const mockPredictedFailures = [
    { id: 1, equipment: 'Machine A', description: 'Bearing failure' },
    { id: 2, equipment: 'Machine B', description: 'Overheating' },
  ];

  render(<PredictiveMaintenanceModel equipment={mockEquipment} predictedFailures={mockPredictedFailures} />);

  expect(screen.getByText('Machine A')).toBeInTheDocument();
  expect(screen.getByText('Machine B')).toBeInTheDocument();
  expect(screen.getByText('Bearing failure')).toBeInTheDocument();
  expect(screen.getByText('Overheating')).toBeInTheDocument();
});

test('calls viewPredictions handler when view predictions button is clicked', () => {
  const mockViewPredictions = jest.fn();
  render(<PredictiveMaintenanceModel viewPredictions={mockViewPredictions} />);
  screen.getByText('View Predictions').click();
  expect(mockViewPredictions).toHaveBeenCalledTimes(1);
});