// WorkflowAutomation/WorkflowDesigner.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WorkflowDesigner from '../../../src/components/WorkflowAutomation/WorkflowDesigner';

test('renders workflow designer with steps', () => {
  render(<WorkflowDesigner />);
  expect(screen.getByText('Workflow Designer')).toBeInTheDocument();
  expect(screen.getByText('Data Preparation')).toBeInTheDocument();
  expect(screen.getByText('Model Training')).toBeInTheDocument();
  expect(screen.getByText('Model Evaluation')).toBeInTheDocument();
  expect(screen.getByText('Model Deployment')).toBeInTheDocument();
});

test('handles workflow step reordering', () => {
  render(<WorkflowDesigner />);
  fireEvent.dragStart(screen.getByText('Model Training'));
  fireEvent.drop(screen.getByText('Model Evaluation'));
  expect(screen.queryByText('Model Training')).toBeNull();
  expect(screen.getByText('Model Training')).toBeInTheDocument();
});

test('calls saveWorkflow function on button click', () => {
  const handleSaveWorkflow = jest.fn();
  render(<WorkflowDesigner onSaveWorkflow={handleSaveWorkflow} />);
  fireEvent.click(screen.getByText('Save Workflow'));
  expect(handleSaveWorkflow).toHaveBeenCalled();
});