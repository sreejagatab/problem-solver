// ProblemSolving/SolutionCard.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SolutionCard from '../../../src/components/ProblemSolving/SolutionCard';

const mockSolution = {
  id: 1,
  title: 'Optimized Production Scheduling',
  author: 'John Doe',
  description: 'Leveraged reinforcement learning and quantum-inspired optimization to create a highly efficient production schedule.',
  performance: 92,
};

test('renders solution card with correct information', () => {
  render(<SolutionCard solution={mockSolution} />);
  expect(screen.getByText('Optimized Production Scheduling')).toBeInTheDocument();
  expect(screen.getByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('Leveraged reinforcement learning and quantum-inspired optimization to create a highly efficient production schedule.')).toBeInTheDocument();
  expect(screen.getByText('92%')).toBeInTheDocument();
});

test('calls viewSolution function on button click', () => {
  const handleViewSolution = jest.fn();
  render(<SolutionCard solution={mockSolution} onViewSolution={handleViewSolution} />);
  fireEvent.click(screen.getByText('View Solution'));
  expect(handleViewSolution).toHaveBeenCalledWith(mockSolution);
});
