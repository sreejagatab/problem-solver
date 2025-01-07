// Heading.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Heading from '../../../src/components/UI/Heading';

test('renders heading with correct level', () => {
  render(<Heading level={2}>Test Heading</Heading>);
  expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
});

test('applies custom className to heading', () => {
  render(<Heading level={3} className="custom-class">Test Heading</Heading>);
  expect(screen.getByRole('heading', { level: 3 })).toHaveClass('custom-class');
});