// Governance/HealthMonitor.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HealthMonitor from '../../../src/components/Governance/HealthMonitor';

const mockSystemHealth = {
  uptime: '99.9%',
  latency: '15ms',
  errors: 5,
  incidents: 2,
};

test('renders system health information', () => {
  render(<HealthMonitor />);
  expect(screen.getByText('Uptime')).toBeInTheDocument();
  expect(screen.getByText('Latency')).toBeInTheDocument();
  expect(screen.getByText('Errors')).toBeInTheDocument();
  expect(screen.getByText('Incidents')).toBeInTheDocument();
});

test('calls viewIncidentReport function on button click', () => {
  const handleViewIncidentReport = jest.fn();
  render(<HealthMonitor onViewIncidentReport={handleViewIncidentReport} />);
  fireEvent.click(screen.getByText('View Incident Report'));
  expect(handleViewIncidentReport).toHaveBeenCalled();
});
