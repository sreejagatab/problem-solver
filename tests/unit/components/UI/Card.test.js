// Card.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../../../src/components/UI/Card';

test('renders card with children', () => {
  render(<Card>Test Content</Card>);
  expect(screen.getByText('Test Content')).toBeInTheDocument();
});

test('applies custom className to card', () => {
  render(<Card className="custom-class">Test Content</Card>);
  expect(screen.getByText('Test Content')).toHaveClass('custom-class');
});
