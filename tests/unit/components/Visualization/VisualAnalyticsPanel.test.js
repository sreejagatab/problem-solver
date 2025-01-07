// Visualization/VisualAnalyticsPanel.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import VisualAnalyticsPanel from '../../../src/components/Visualization/VisualAnalyticsPanel';

test('renders visual analytics panel with chart selection', () => {
  render(<VisualAnalyticsPanel />);
  expect(screen.getByText('Visual Analytics Panel')).toBeInTheDocument();
  expect(screen.getByText('Line Chart')).toBeInTheDocument();
  expect(screen.getByText('Bar Chart')).toBeInTheDocument();
  expect(screen.getByText('Pie Chart')).toBeInTheDocument();
});

test('switches between chart types on button click', () => {
  render(<VisualAnalyticsPanel />);
  fireEvent.click(screen.getByText('Bar Chart'));
  expect(screen.getByText('Costs by Category')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Pie Chart'));
  expect(screen.getByText('Monthly Revenue')).toBeInTheDocument();
});
