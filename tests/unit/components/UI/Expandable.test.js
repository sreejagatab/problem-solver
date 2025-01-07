// Expandable.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Expandable from '../../../src/components/UI/Expandable';

test('renders expandable panel with title and content', () => {
  render(
    <Expandable title="Test Expandable">
      <div>Expandable content</div>
    </Expandable>
  );
  expect(screen.getByText('Test Expandable')).toBeInTheDocument();
  expect(screen.queryByText('Expandable content')).not.toBeInTheDocument();
});

test('toggles expandable panel on click', () => {
  render(
    <Expandable title="Test Expandable">
      <div>Expandable content</div>
    </Expandable>
  );
  fireEvent.click(screen.getByText('Test Expandable'));
  expect(screen.getByText('Expandable content')).toBeInTheDocument();
});