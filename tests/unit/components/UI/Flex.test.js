// Flex.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Flex from '../../../src/components/UI/Flex';

test('renders flex container with children', () => {
  render(
    <Flex>
      <div>Item 1</div>
      <div>Item 2</div>
    </Flex>
  );
  expect(screen.getAllByText(/Item/).length).toBe(2);
});

test('applies custom className to flex container', () => {
  render(<Flex className="custom-class">Test Content</Flex>);
  expect(screen.getByText('Test Content')).toHaveClass('custom-class');
});
