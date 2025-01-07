// Accessibility/HighContrastMode.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HighContrastMode from '../../../src/components/Accessibility/HighContrastMode';

test('renders high contrast mode information', () => {
  render(<HighContrastMode />);
  expect(screen.getByText('Current Mode:')).toBeInTheDocument();
  expect(screen.getByText('Normal')).toBeInTheDocument();
});

test('toggles high contrast mode on button click', () => {
  render(<HighContrastMode />);
  fireEvent.click(screen.getByText('Enable High Contrast'));
  expect(screen.getByText('High Contrast')).toBeInTheDocument();
});