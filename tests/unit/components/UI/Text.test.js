// Text.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from '../../../src/components/UI/Text';

test('renders text with correct variant', () => {
  render(<Text variant="lead">This is a lead text</Text>);
  expect(screen.getByText('This is a lead text')).toHaveClass('text-lg');
});

test('applies custom className to text', () => {
  render(<Text variant="small" className="custom-class">This is small text</Text>);
  expect(screen.getByText('This is small text')).toHaveClass('custom-class');
});