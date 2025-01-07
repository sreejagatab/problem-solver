// Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../src/pages/Home';

test('renders home page content', () => {
  render(<Home />);

  expect(screen.getByText('Welcome to Problem Solver')).toBeInTheDocument();
  expect(screen.getByText('Unlock your problem-solving potential')).toBeInTheDocument();
  expect(screen.getByText('Get Started')).toBeInTheDocument();
  expect(screen.getByText('Learn More')).toBeInTheDocument();
});

