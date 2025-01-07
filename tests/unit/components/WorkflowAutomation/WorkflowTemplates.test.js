// WorkflowAutomation/WorkflowTemplates.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WorkflowTemplates from '../../../src/components/WorkflowAutomation/WorkflowTemplates';

const mockWorkflowTemplates = [
  {
    id: 'template1',
    name: 'Data Analysis Workflow',
    description: 'A comprehensive workflow for data exploration, cleaning, and analysis.',
  },
  {
    id: 'template2',
    name: 'Model Training Workflow',
    description: 'A streamlined workflow for machine learning model training and evaluation.',
  },
];

test('renders workflow templates', () => {
  render(<WorkflowTemplates />);
  expect(screen.getByText('Workflow Templates')).toBeInTheDocument();
  expect(screen.getByText('Data Analysis Workflow')).toBeInTheDocument();
  expect(screen.getByText('Model Training Workflow')).toBeInTheDocument();
});

test('calls useTemplate function on button click', () => {
  const handleUseTemplate = jest.fn();
  render(<WorkflowTemplates onUseTemplate={handleUseTemplate} />);
  fireEvent.click(screen.getByText('Use Template'));
  expect(handleUseTemplate).toHaveBeenCalledWith(mockWorkflowTemplates[0]);
});
