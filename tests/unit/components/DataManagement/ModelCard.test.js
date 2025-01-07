// DataManagement/ModelCard.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ModelCard from '../../../src/components/DataManagement/ModelCard';

const mockModel = {
  id: 1,
  name: 'Predictive Maintenance Model',
  domain: 'Manufacturing',
  description: 'AI-powered model that predicts equipment failures and optimizes maintenance schedules.',
  efficiency: 92,
};

test('renders model card with correct information', () => {
  render(<ModelCard model={mockModel} />);
  expect(screen.getByText('Predictive Maintenance Model')).toBeInTheDocument();
  expect(screen.getByText('Manufacturing')).toBeInTheDocument();
  expect(screen.getByText('AI-powered model that predicts equipment failures and optimizes maintenance schedules.')).toBeInTheDocument();
  expect(screen.getByText('92%')).toBeInTheDocument();
});

test('calls viewModel function on button click', () => {
  const handleViewModel = jest.fn();
  render(<ModelCard model={mockModel} onViewModel={handleViewModel} />);
  fireEvent.click(screen.getByText('View Model'));
  expect(handleViewModel).toHaveBeenCalledWith(mockModel);
});