// PredictiveIntelligence/OperationalDashboard.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import OperationalDashboard from '../../../src/components/PredictiveIntelligence/OperationalDashboard';

test('renders operational data', () => {
  const mockOperationalData = {
    revenueData: [
      { name: 'Jan', value: 400 },
      { name: 'Feb', value: 300 },
    ],
    costData: [
      { name: 'Salaries', value: 200 },
      { name: 'Rent', value: 100 },
    ],
    utilization: 85,
    incidents: 3,
  };

  render(<OperationalDashboard operationalData={mockOperationalData} />);

  expect(screen.getByText('Revenue Over Time')).toBeInTheDocument();
  expect(screen.getByText('Costs by Category')).toBeInTheDocument();
  expect(screen.getByText('85%')).toBeInTheDocument();
  expect(screen.getByText('3 reported incidents')).toBeInTheDocument();
});

test('calls viewDetails handler when view details button is clicked', () => {
  const mockViewDetails = jest.fn();
  render(<OperationalDashboard viewDetails={mockViewDetails} />);
  screen.getByText('View Details').click();
  expect(mockViewDetails).toHaveBeenCalledTimes(1);
});