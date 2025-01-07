// Dashboards/MinimalistDesign.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import MinimalistDesign from '../../../src/components/Dashboards/MinimalistDesign';

test('renders minimalist design information', () => {
  render(<MinimalistDesign />);
  expect(screen.getByText('Minimalist Design')).toBeInTheDocument();
  expect(screen.getByText('A clean and uncluttered interface to enhance focus and productivity.')).toBeInTheDocument();
  expect(screen.getByText('Uncluttered Layouts')).toBeInTheDocument();
  expect(screen.getByText('Focused Attention')).toBeInTheDocument();
  expect(screen.getByText('Intuitive Interactions')).toBeInTheDocument();
});