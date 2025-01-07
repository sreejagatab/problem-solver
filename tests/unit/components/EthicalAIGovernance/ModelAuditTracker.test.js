// EthicalAIGovernance/ModelAuditTracker.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ModelAuditTracker from '../../../src/components/EthicalAIGovernance/ModelAuditTracker';

test('renders model audit information', () => {
  const mockModels = [
    { id: 1, name: 'Model A', domain: 'Computer Vision', lastAudit: '2023-04-15', auditScore: 92 },
    { id: 2, name: 'Model B', domain: 'Natural Language Processing', lastAudit: '2023-03-01', auditScore: 85 },
  ];

  render(<ModelAuditTracker models={mockModels} />);

  expect(screen.getByText('Model A')).toBeInTheDocument();
  expect(screen.getByText('Model B')).toBeInTheDocument();
  expect(screen.getByText('Computer Vision')).toBeInTheDocument();
  expect(screen.getByText('Natural Language Processing')).toBeInTheDocument();
  expect(screen.getByText('2023-04-15')).toBeInTheDocument();
  expect(screen.getByText('2023-03-01')).toBeInTheDocument();
  expect(screen.getByText('92')).toBeInTheDocument();
  expect(screen.getByText('85')).toBeInTheDocument();
});

test('calls viewAuditReport handler when view audit report button is clicked', () => {
  const mockViewAuditReport = jest.fn();
  const mockModels = [
    { id: 1, name: 'Model A', domain: 'Computer Vision', lastAudit: '2023-04-15', auditScore: 92 },
  ];

  render(<ModelAuditTracker models={mockModels} viewAuditReport={mockViewAuditReport} />);
  screen.getByText('View Audit Report').click();
  expect(mockViewAuditReport).toHaveBeenCalledTimes(1);
});
