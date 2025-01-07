// Productivity/CollaborativeWhiteboard.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CollaborativeWhiteboard from '../../../src/components/Productivity/CollaborativeWhiteboard';

test('renders collaborative whiteboard with canvas', () => {
  render(<CollaborativeWhiteboard />);
  expect(screen.getByRole('canvas')).toBeInTheDocument();
  expect(screen.getByText('Clear Whiteboard')).toBeInTheDocument();
});

test('clears the whiteboard on button click', () => {
  render(<CollaborativeWhiteboard />);
  const canvas = screen.getByRole('canvas');
  const initialCanvasData = canvas.toDataURL();
  fireEvent.click(screen.getByText('Clear Whiteboard'));
  expect(canvas.toDataURL()).not.toEqual(initialCanvasData);
});
