// Governance/EthicalAIPanel.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EthicalAIPanel from '../../../src/components/Governance/EthicalAIPanel';

test('renders ethical AI panel with action buttons', () => {
  render(<EthicalAIPanel />);
  expect(screen.getByText('View Model Audit Tracker')).toBeInTheDocument();
  expect(screen.getByText('Explore Explainable AI Tools')).toBeInTheDocument();
  expect(screen.getByText('Access Ethics Compliance Dashboard')).toBeInTheDocument();
});

test('calls corresponding functions on button clicks', () => {
  const handleViewAuditTracker = jest.fn();
  const handleViewExplainableAITools = jest.fn();
  const handleViewComplianceDashboard = jest.fn();

  render(
    <EthicalAIPanel
      onViewAuditTracker={handleViewAuditTracker}
      onViewExplainableAITools={handleViewExplainableAITools}
      onViewComplianceDashboard={handleViewComplianceDashboard}
    />
  );

  fireEvent.click(screen.getByText('View Model Audit Tracker'));
  expect(handleViewAuditTracker).toHaveBeenCalled();

  fireEvent.click(screen.getByText('Explore Explainable AI Tools'));
  expect(handleViewExplainableAITools).toHaveBeenCalled();

  fireEvent.click(screen.getByText('Access Ethics Compliance Dashboard'));
  expect(handleViewComplianceDashboard).toHaveBeenCalled();
});