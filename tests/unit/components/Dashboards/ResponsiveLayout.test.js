// Dashboards/ResponsiveLayout.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ResponsiveLayout from '../../../src/components/Dashboards/ResponsiveLayout';

test('renders responsive layout information', () => {
  render(<ResponsiveLayout />);
  expect(screen.getByText('Responsive Layout')).toBeInTheDocument();
  expect(screen.getByText('The website adapts seamlessly to different screen sizes and devices.')).toBeInTheDocument();
  expect(screen.getByText('Desktop')).toBeInTheDocument();
  expect(screen.getByText('Tablet')).toBeInTheDocument();
  expect(screen.getByText('Mobile')).toBeInTheDocument();
});