
// About.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../../src/pages/About';

test('renders about page content', () => {
  render(<About />);

  expect(screen.getByText('About Problem Solver')).toBeInTheDocument();
  expect(screen.getByText('Discover how our platform empowers you to tackle complex challenges')).toBeInTheDocument();
  expect(screen.getByText('Our Mission')).toBeInTheDocument();
  expect(screen.getByText('Our Approach')).toBeInTheDocument();
  expect(screen.getByText('Join Our Mission')).toBeInTheDocument();
});