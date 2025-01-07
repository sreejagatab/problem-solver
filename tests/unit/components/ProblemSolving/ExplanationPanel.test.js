// ProblemSolving/ExplanationPanel.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ExplanationPanel from '../../../src/components/ProblemSolving/ExplanationPanel';

const mockSolution = {
  explanation: 'This solution leverages a combination of reinforcement learning and quantum-inspired optimization algorithms to analyze historical production data and generate an optimized schedule that minimizes downtime, resource utilization, and delivery times.',
};

test('renders explanation panel with solution explanation', () => {
  render(<ExplanationPanel solution={mockSolution} />);
  expect(screen.getByText('Solution Explanation')).toBeInTheDocument();
  expect(screen.getByText(mockSolution.explanation)).toBeInTheDocument();
});

test('calls viewExplanation function on button click', () => {
  const handleViewExplanation = jest.fn();
  render(<ExplanationPanel solution={mockSolution} onViewExplanation={handleViewExplanation} />);
  fireEvent.click(screen.getByText('View Full Explanation'));
  expect(handleViewExplanation).toHaveBeenCalledWith(mockSolution);
});
