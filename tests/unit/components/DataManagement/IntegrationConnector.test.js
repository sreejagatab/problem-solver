// DataManagement/IntegrationConnector.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import IntegrationConnector from '../../../src/components/DataManagement/IntegrationConnector';
import { connectPublicIntegration, connectPrivateIntegration } from '../../../src/utils/integration';

jest.mock('../../../src/utils/integration', () => ({
  connectPublicIntegration: jest.fn(),
  connectPrivateIntegration: jest.fn(),
}));

test('renders integration connector with public and private options', () => {
  render(<IntegrationConnector />);
  expect(screen.getByText('Connect to External Data Sources')).toBeInTheDocument();
  expect(screen.getByText('Utilize External Tools and Services')).toBeInTheDocument();
});

test('calls connectPublicIntegration on public integration button click', () => {
  render(<IntegrationConnector />);
  fireEvent.click(screen.getByText('Connect Public Integration'));
  expect(connectPublicIntegration).toHaveBeenCalled();
});

test('calls connectPrivateIntegration on private integration button click', () => {
  render(<IntegrationConnector />);
  fireEvent.click(screen.getByText('Connect Private Integration'));
  expect(connectPrivateIntegration).toHaveBeenCalled();
});
