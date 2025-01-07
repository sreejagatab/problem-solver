// EdgeComputing/EdgeDeviceConnector.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EdgeDeviceConnector from '../../../src/components/EdgeComputing/EdgeDeviceConnector';

test('renders edge device information', () => {
  const mockEdgeDevices = [
    { id: 1, name: 'Device A', status: 'connected' },
    { id: 2, name: 'Device B', status: 'disconnected' },
  ];

  render(<EdgeDeviceConnector edgeDevices={mockEdgeDevices} />);

  expect(screen.getByText('Device A')).toBeInTheDocument();
  expect(screen.getByText('Device B')).toBeInTheDocument();
  expect(screen.getByText('connected')).toBeInTheDocument();
  expect(screen.getByText('disconnected')).toBeInTheDocument();
});

test('calls fetchDeviceData handler when view device data button is clicked', () => {
  const mockFetchDeviceData = jest.fn();
  render(<EdgeDeviceConnector fetchDeviceData={mockFetchDeviceData} />);
  screen.getByText('View Device Data').click();
  expect(mockFetchDeviceData).toHaveBeenCalledTimes(1);
});
