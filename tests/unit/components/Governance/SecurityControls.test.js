// Governance/SecurityControls.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SecurityControls from '../../../src/components/Governance/SecurityControls';

test('renders security controls with action buttons', () => {
  render(<SecurityControls />);
  expect(screen.getByText('View Security Settings')).toBeInTheDocument();
  expect(screen.getByText('Enable Multi-Factor Authentication')).toBeInTheDocument();
  expect(screen.getByText('View Audit Logs')).toBeInTheDocument();
});

test('calls corresponding functions on button clicks', () => {
  const handleViewSecuritySettings = jest.fn();
  const handleEnableMultiFactorAuth = jest.fn();
  const handleViewAuditLogs = jest.fn();

  render(
    <SecurityControls
      onViewSecuritySettings={handleViewSecuritySettings}
      onEnableMultiFactorAuth={handleEnableMultiFactorAuth}
      onViewAuditLogs={handleViewAuditLogs}
    />
  );

  fireEvent.click(screen.getByText('View Security Settings'));
  expect(handleViewSecuritySettings).toHaveBeenCalled();

  fireEvent.click(screen.getByText('Enable Multi-Factor Authentication'));
  expect(handleEnableMultiFactorAuth).toHaveBeenCalled();

  fireEvent.click(screen.getByText('View Audit Logs'));
  expect(handleViewAuditLogs).toHaveBeenCalled();
});
