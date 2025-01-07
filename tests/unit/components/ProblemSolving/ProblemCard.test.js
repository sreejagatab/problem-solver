// ProblemSolving/ProblemCard.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProblemCard from '../../../src/components/ProblemSolving/ProblemCard';

const mockProblem = {
  id: 1,
  title: 'Optimize Production Schedule',
  domain: 'Manufacturing',
  description: 'Develop an AI-powered solution to optimize the production schedule and improve efficiency.',
  difficulty: 'Advanced',
};

test('renders problem card with correct information', () => {
  render(<ProblemCard problem={mockProblem} />);
  expect(screen.getByText('Optimize Production Schedule')).toBeInTheDocument();
  expect(screen.getByText('Manufacturing')).toBeInTheDocument();
  expect(screen.getByText('Develop an AI-powered solution to optimize the production schedule and improve efficiency.')).toBeInTheDocument();
  expect(screen.getByText('Advanced')).toBeInTheDocument();
});

test('calls viewProblem function on button click', () => {
  const handleViewProblem = jest.fn();
  render(<ProblemCard problem={mockProblem} onViewProblem={handleViewProblem} />);
  fireEvent.click(screen.getByText('View Problem'));
  expect(handleViewProblem).toHaveBeenCalledWith(mockProblem);
});