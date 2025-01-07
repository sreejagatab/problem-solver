// ProblemDetail.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProblemDetail from '../../src/pages/ProblemDetail';

test('renders problem detail page content', () => {
  const mockProblem = {
    title: 'Optimize Production Schedule',
    domain: 'Manufacturing',
    description: 'Develop an AI-powered solution to optimize the production schedule and improve efficiency',
    difficulty: 'Advanced',
  };

  const mockSolution = {
    title: 'Optimized Production Scheduling',
    author: 'John Doe',
    description: 'Leveraged reinforcement learning and quantum-inspired optimization to create a highly efficient production schedule',
    performance: 92,
  };

  render(<ProblemDetail problem={mockProblem} solution={mockSolution} />);

  expect(screen.getByText('Optimize Production Schedule')).toBeInTheDocument();
  expect(screen.getByText('Manufacturing')).toBeInTheDocument();
  expect(screen.getByText('Develop an AI-powered solution to optimize the production schedule and improve efficiency')).toBeInTheDocument();
  expect(screen.getByText('Advanced')).toBeInTheDocument();
  expect(screen.getByText('Optimized Production Scheduling')).toBeInTheDocument();
  expect(screen.getByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('Leveraged reinforcement learning and quantum-inspired optimization to create a highly efficient production schedule')).toBeInTheDocument();
  expect(screen.getByText('92%')).toBeInTheDocument();
});