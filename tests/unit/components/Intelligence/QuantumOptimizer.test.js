// Intelligence/QuantumOptimizer.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import QuantumOptimizer from '../../../src/components/Intelligence/QuantumOptimizer';

test('renders quantum optimizer with input field and button', () => {
  render(<QuantumOptimizer />);
  expect(screen.getByPlaceholderText('Describe your optimization problem...')).toBeInTheDocument();
  expect(screen.getByText('Optimize Problem')).toBeInTheDocument();
});

test('displays optimization results after clicking the button', () => {
  render(<QuantumOptimizer />);
  fireEvent.change(screen.getByPlaceholderText('Describe your optimization problem...'), {
    target: { value: 'Optimize production schedule' },
  });
  fireEvent.click(screen.getByText('Optimize Problem'));
  expect(screen.getByText('Optimization Results')).toBeInTheDocument();
  expect(screen.getByText('Best Solution:')).toBeInTheDocument();
  expect(screen.getByText('Performance:')).toBeInTheDocument();
});
