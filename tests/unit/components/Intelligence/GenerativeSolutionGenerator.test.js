// Intelligence/GenerativeSolutionGenerator.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GenerativeSolutionGenerator from '../../../src/components/Intelligence/GenerativeSolutionGenerator';

test('renders generative solution generator with input field and button', () => {
  render(<GenerativeSolutionGenerator />);
  expect(screen.getByPlaceholderText('Describe your problem...')).toBeInTheDocument();
  expect(screen.getByText('Generate Solution')).toBeInTheDocument();
});

test('displays generated solution after clicking the button', () => {
  render(<GenerativeSolutionGenerator />);
  fireEvent.change(screen.getByPlaceholderText('Describe your problem...'), {
    target: { value: 'Optimize resource allocation and production scheduling' },
  });
  fireEvent.click(screen.getByText('Generate Solution'));
  expect(screen.getByText('Generated Solution')).toBeInTheDocument();
});