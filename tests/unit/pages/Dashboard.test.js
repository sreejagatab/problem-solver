// Dashboard.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../../src/pages/Dashboard';

test('renders dashboard page content', () => {
  render(<Dashboard />);

  expect(screen.getByText('Welcome to Your Dashboard')).toBeInTheDocument();
  expect(screen.getByText('Explore the latest problem-solving tools and resources')).toBeInTheDocument();
  expect(screen.getByText('Recent Problems')).toBeInTheDocument();
  expect(screen.getByText('Featured Solutions')).toBeInTheDocument();
});