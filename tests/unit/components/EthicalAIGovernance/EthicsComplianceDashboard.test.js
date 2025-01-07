
// EthicalAIGovernance/EthicsComplianceDashboard.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import EthicsComplianceDashboard from '../../../src/components/EthicalAIGovernance/EthicsComplianceDashboard';

test('renders ethics compliance information', () => {
  const mockComplianceStatus = {
    overall: 'Compliant',
    modelCompliance: 'Compliant',
    dataQuality: 'Needs Improvement',
    privacy: 'Compliant',
  };

  render(<EthicsComplianceDashboard complianceStatus={mockComplianceStatus} />);

  expect(screen.getByText('Overall Compliance')).toBeInTheDocument();
  expect(screen.getByText('Model Compliance')).toBeInTheDocument();
  expect(screen.getByText('Data Quality')).toBeInTheDocument();
  expect(screen.getByText('Privacy')).toBeInTheDocument();
  expect(screen.getByText('Compliant')).toBeInTheDocument();
  expect(screen.getByText('Needs Improvement')).toBeInTheDocument();
});

test('calls viewComplianceDetails handler when view details button is clicked', () => {
  const mockViewComplianceDetails = jest.fn();
  render(<EthicsComplianceDashboard viewComplianceDetails={mockViewComplianceDetails} />);
  screen.getByText('View Compliance Details').click();
  expect(mockViewComplianceDetails).toHaveBeenCalledTimes(1);
});