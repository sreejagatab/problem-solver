// Productivity/WorkflowAutomator.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WorkflowAutomator from '../../../src/components/Productivity/WorkflowAutomator';

test('renders workflow builder with input fields', () => {
  render(<WorkflowAutomator />);
  expect(screen.getByLabelText('Workflow Name')).toBeInTheDocument();
  expect(screen.getByText('Workflow Steps')).toBeInTheDocument();
  expect(screen.getByText('Add Step')).toBeInTheDocument();
  expect(screen.getByText('Save Workflow')).toBeInTheDocument();
});

test('adds and removes workflow steps', () => {
  render(<WorkflowAutomator />);
  fireEvent.click(screen.getByText('Add Step'));
  expect(screen.getAllByRole('textbox')).toHaveLength(2);
  fireEvent.click(screen.getAllByRole('button', { name: 'Remove' })[0]);
  expect(screen.getAllByRole('textbox')).toHaveLength(1);
});

test('calls saveWorkflow function on button click', () => {
  const handleSaveWorkflow = jest.fn();
  render(<WorkflowAutomator onSaveWorkflow={handleSaveWorkflow} />);
  fireEvent.click(screen.getByText('Save Workflow'));
  expect(handleSaveWorkflow).toHaveBeenCalled();
});