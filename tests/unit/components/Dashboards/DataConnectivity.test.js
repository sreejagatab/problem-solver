// Dashboards/DataConnectivity.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import DataConnectivity from '../../../src/components/Dashboards/DataConnectivity';

test('renders data connectivity information', () => {
  render(<DataConnectivity />);
  expect(screen.getByText('Data Connectivity')).toBeInTheDocument();
  expect(screen.getByText('Seamlessly integrate your data sources and external applications.')).toBeInTheDocument();
  expect(screen.getByText('Cloud Storage Integrations')).toBeInTheDocument();
  expect(screen.getByText('Database Connectors')).toBeInTheDocument();
  expect(screen.getByText('API Integrations')).toBeInTheDocument();
});