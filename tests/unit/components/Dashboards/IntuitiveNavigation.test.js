// Dashboards/IntuitiveNavigation.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import IntuitiveNavigation from '../../../src/components/Dashboards/IntuitiveNavigation';

test('renders intuitive navigation information', () => {
  render(<IntuitiveNavigation />);
  expect(screen.getByText('Intuitive Navigation')).toBeInTheDocument();
  expect(screen.getByText('A well-structured and easy-to-use navigation system.')).toBeInTheDocument();
  expect(screen.getByText('Logical Information Architecture')).toBeInTheDocument();
  expect(screen.getByText('Consistent Navigation Patterns')).toBeInTheDocument();
  expect(screen.getByText('Contextual Guidance')).toBeInTheDocument();
});