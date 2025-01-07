// Dashboards/DynamicVisualizations.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import DynamicVisualizations from '../../../src/components/Dashboards/DynamicVisualizations';

test('renders dynamic visualizations panel', () => {
  render(<DynamicVisualizations />);
  expect(screen.getByText('Dynamic Visualizations')).toBeInTheDocument();
  expect(screen.getByText('Explore your data through a variety of interactive visualizations.')).toBeInTheDocument();
  expect(screen.getByText('Line Chart')).toBeInTheDocument();
  expect(screen.getByText('Bar Chart')).toBeInTheDocument();
  expect(screen.getByText('Pie Chart')).toBeInTheDocument();
  expect(screen.getByText('Scatter Chart')).toBeInTheDocument();
});