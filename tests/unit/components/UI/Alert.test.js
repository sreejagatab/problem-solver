// Alert.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Alert from '../../../src/components/UI/Alert';

test('renders alert with message', () => {
  render(<Alert>This is an alert</Alert>);
  expect(screen.getByText('This is an alert')).toBeInTheDocument();
});

test('applies correct variant class based on props', () => {
  render(<Alert variant="success">Success message</Alert>);
  expect(screen.getByText('Success message')).toHaveClass('bg-green-100');
});