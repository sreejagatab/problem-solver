// Scrollable.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Scrollable from '../../../src/components/UI/Scrollable';

test('renders scrollable container with children', () => {
  render(
    <Scrollable>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Scrollable>
  );
  expect(screen.getAllByText(/Item/).length).toBe(3);
});

test('applies custom className to scrollable container', () => {
  render(<Scrollable className="custom-class">Test Content</Scrollable>);
  expect(screen.getByText('Test Content')).toHaveClass('custom-class');
});
