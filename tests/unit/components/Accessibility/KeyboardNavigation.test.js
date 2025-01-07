// Accessibility/KeyboardNavigation.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import KeyboardNavigation from '../../../src/components/Accessibility/KeyboardNavigation';

test('renders keyboard navigation information', () => {
  render(<KeyboardNavigation />);
  expect(screen.getByText('Skip to Main Content')).toBeInTheDocument();
  expect(screen.getByText('Navigate with Keyboard')).toBeInTheDocument();
});

test('calls skipToContent function on button click', () => {
  const handleSkipToContent = jest.fn();
  render(<KeyboardNavigation onSkipToContent={handleSkipToContent} />);
  fireEvent.click(screen.getByText('Skip to Main Content'));
  expect(handleSkipToContent).toHaveBeenCalled();
});