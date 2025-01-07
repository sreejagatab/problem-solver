// Sustainability/EnvironmentalImpactTracker.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import EnvironmentalImpactTracker from '../../../src/components/Sustainability/EnvironmentalImpactTracker';

test('renders environmental impact data', () => {
  const mockEnvironmentalData = {
    carbonFootprint: 100,
    energyConsumption: 50000,
    waterUsage: 10000,
    wasteGeneration: 2,
  };

  render(<EnvironmentalImpactTracker environmentalData={mockEnvironmentalData} />);

  expect(screen.getByText('100 tons of CO2')).toBeInTheDocument();
  expect(screen.getByText('50000 kWh')).toBeInTheDocument();
  expect(screen.getByText('10000 gallons')).toBeInTheDocument();
  expect(screen.getByText('2 tons')).toBeInTheDocument();
});

test('calls viewFullReport handler when view full report button is clicked', () => {
  const mockViewFullReport = jest.fn();
  render(<EnvironmentalImpactTracker viewFullReport={mockViewFullReport} />);
  screen.getByText('View Full Report').click();
  expect(mockViewFullReport).toHaveBeenCalledTimes(1);
});