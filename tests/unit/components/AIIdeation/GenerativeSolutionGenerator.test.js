// AIIdeation/GenerativeSolutionGenerator.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GenerativeSolutionGenerator from '../../../src/components/AIIdeation/GenerativeSolutionGenerator';

test('renders generative solution generator', () => {
  render(<GenerativeSolutionGenerator />);

  expect(screen.getByLabelText('Problem Description')).toBeInTheDocument();
  expect(screen.getByText('Generate Solution')).toBeInTheDocument();
});

test('calls generateSolutionWithAI handler when generate button is clicked', () => {
  const mockGenerateSolutionWithAI = jest.fn();
  render(<GenerativeSolutionGenerator generateSolutionWithAI={mockGenerateSolutionWithAI} />);
  screen.getByText('Generate Solution').click();
  expect(mockGenerateSolutionWithAI).toHaveBeenCalledTimes(1);
});