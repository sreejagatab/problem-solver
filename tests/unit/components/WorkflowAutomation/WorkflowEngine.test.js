// WorkflowAutomation/WorkflowEngine.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WorkflowEngine from '../../../src/components/WorkflowAutomation/WorkflowEngine';

const mockWorkflows = [
  { id: 1, name: 'Data Analysis Workflow', description: 'A comprehensive workflow for data exploration, cleaning, and analysis.' },
  { id: 2, name: 'Model Training Workflow', description: 'A streamlined workflow for machine learning model training and evaluation.' },
];

test('renders workflow engine with workflow selection', () => {
  render(<WorkflowEngine />);
  expect(screen.getByText('Workflow Engine')).toBeInTheDocument();
  expect(screen.getByText('Select Workflow')).toBeInTheDocument();
});

test('displays workflow details and run/stop buttons', () => {
  render(<WorkflowEngine />);
  fireEvent.change(screen.getByRole('combobox'), { target: { value: '1' } });
  expect(screen.getByText('Data Analysis Workflow')).toBeInTheDocument();
  expect(screen.getByText('Run Workflow')).toBeInTheDocument();
  expect(screen.getByText('Stop Workflow')).toBeInTheDocument();
});

test('calls runWorkflow and stopWorkflow functions', () => {
  const handleRunWorkflow = jest.fn();
  const handleStopWorkflow = jest.fn();
  render(<WorkflowEngine onRunWorkflow={handleRunWorkflow} onStopWorkflow={handleStopWorkflow} />);
  fireEvent.click(screen.getByText('Run Workflow'));
  expect(handleRunWorkflow).toHaveBeenCalled();
  fireEvent.click(screen.getByText('Stop Workflow'));
  expect(handleStopWorkflow).toHaveBeenCalled();
});