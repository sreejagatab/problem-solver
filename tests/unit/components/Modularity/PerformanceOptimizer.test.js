// Modularity/PerformanceOptimizer.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PerformanceOptimizer from '../../../src/components/Modularity/PerformanceOptimizer';

test('starts optimization and displays progress', () => {
  render(<PerformanceOptimizer />);
  fireEvent.click(screen.getByText('Optimize Now'));
  expect(screen.getByText('Optimizing website performance...')).toBeInTheDocument();
  expect(screen.getByText('100%')).toBeInTheDocument();
});
