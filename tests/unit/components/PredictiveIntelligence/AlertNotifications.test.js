// PredictiveIntelligence/AlertNotifications.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AlertNotifications from '../../../src/components/PredictiveIntelligence/AlertNotifications';

test('renders alert notifications', () => {
  const mockAlerts = [
    { id: 1, title: 'High CPU Usage', message: 'Server CPU usage is above 90%', severity: 'warning' },
    { id: 2, title: 'Database Connectivity Issue', message: 'Unable to connect to the database', severity: 'error' },
  ];

  render(<AlertNotifications alerts={mockAlerts} />);

  expect(screen.getByText('High CPU Usage')).toBeInTheDocument();
  expect(screen.getByText('Database Connectivity Issue')).toBeInTheDocument();
  expect(screen.getByText('warning')).toBeInTheDocument();
  expect(screen.getByText('error')).toBeInTheDocument();
});

test('calls viewAlert and dismissAlert handlers', () => {
  const mockViewAlert = jest.fn();
  const mockDismissAlert = jest.fn();
  const mockAlerts = [
    { id: 1, title: 'High CPU Usage', message: 'Server CPU usage is above 90%', severity: 'warning' },
  ];

  render(<AlertNotifications alerts={mockAlerts} viewAlert={mockViewAlert} dismissAlert={mockDismissAlert} />);

  screen.getByText('View Alert').click();
  expect(mockViewAlert).toHaveBeenCalledTimes(1);

  screen.getByText('Dismiss').click();
  expect(mockDismissAlert).toHaveBeenCalledTimes(1);
});