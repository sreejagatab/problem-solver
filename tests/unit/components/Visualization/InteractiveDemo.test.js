// Visualization/InteractiveDemo.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InteractiveDemo from '../../../src/components/Visualization/InteractiveDemo';

test('renders interactive demo with step-by-step instructions', () => {
  render(<InteractiveDemo />);
  expect(screen.getByText('Interactive Demo')).toBeInTheDocument();
  expect(screen.getByText('Step 1: Data Exploration')).toBeInTheDocument();
  expect(screen.getByText('Start Demo')).toBeInTheDocument();
});

test('navigates through the interactive demo steps', () => {
  render(<InteractiveDemo />);
  fireEvent.click(screen.getByText('Start Demo'));
  expect(screen.getByText('Step 2: Problem Modeling')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Next Step'));
  expect(screen.getByText('Step 3: Solution Interpretation')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Reset Demo'));
  expect(screen.getByText('Step 1: Data Exploration')).toBeInTheDocument();
});
