// Tutorial.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Tutorial from '../../src/pages/Tutorial';

test('renders tutorial page content', () => {
  render(<Tutorial />);

  expect(screen.getByText('Tutorial')).toBeInTheDocument();
  expect(screen.getByText('Get started with the Problem Solver platform with our comprehensive tutorials')).toBeInTheDocument();
  expect(screen.getByText('Learn the Basics')).toBeInTheDocument();
});
