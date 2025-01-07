// Personalization/AdaptiveUI.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AdaptiveUI from '../../../src/components/Personalization/AdaptiveUI';

test('renders adaptive UI based on system preference', () => {
  jest.spyOn(window, 'matchMedia').mockImplementation((query) => ({
    matches: query.includes('(prefers-color-scheme: dark)'),
    addListener: () => {},
    removeListener: () => {},
  }));

  render(<AdaptiveUI />);
  expect(screen.getByText('Current Theme:')).toBeInTheDocument();
  expect(screen.getByText('Dark')).toBeInTheDocument();
});

test('toggles theme on button click', () => {
  jest.spyOn(window, 'matchMedia').mockImplementation((query) => ({
    matches: query.includes('(prefers-color-scheme: light)'),
    addListener: () => {},
    removeListener: () => {},
  }));

  render(<AdaptiveUI />);
  expect(screen.getByText('Light')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Toggle Theme'));
  expect(screen.getByText('Dark')).toBeInTheDocument();
});
