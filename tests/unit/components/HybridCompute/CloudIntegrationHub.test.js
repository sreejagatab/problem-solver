// HybridCompute/CloudIntegrationHub.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import CloudIntegrationHub from '../../../src/components/HybridCompute/CloudIntegrationHub';

test('renders cloud integration data', () => {
  const mockCloudData = {
    cloudProviders: ['AWS', 'Google Cloud', 'Azure'],
    integratedServices: ['S3', 'Kinesis', 'Cloud Functions'],
    networkThroughput: '1 Gbps',
  };

  render(<CloudIntegrationHub cloudData={mockCloudData} />);

  expect(screen.getByText('AWS')).toBeInTheDocument();
  expect(screen.getByText('Google Cloud')).toBeInTheDocument();
  expect(screen.getByText('Azure')).toBeInTheDocument();
  expect(screen.getByText('S3')).toBeInTheDocument();
  expect(screen.getByText('Kinesis')).toBeInTheDocument();
  expect(screen.getByText('Cloud Functions')).toBeInTheDocument();
  expect(screen.getByText('1 Gbps')).toBeInTheDocument();
});