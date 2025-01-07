// Tooltip.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Tooltip from '../../../src/components/UI/Tooltip';

test('renders tooltip on hover', () => {
  render(
    <Tooltip content="Tooltip content">
      <button>Hover me</button>
    </Tooltip>
  );
  fireEvent.mouseEnter(screen.getByText('Hover me'));
  expect(screen.getByText('Tooltip content')).toBeInTheDocument();
});

test('hides tooltip on mouse leave', () => {
  render(
    <Tooltip content="Tooltip content">
      <button>Hover me</button>
    </Tooltip>
  );
  fireEvent.mouseEnter(screen.getByText('Hover me'));
  fireEvent.mouseLeave(screen.getByText('Hover me'));
  expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument();
});
