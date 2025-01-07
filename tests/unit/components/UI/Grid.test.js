// Grid.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Grid from '../../../src/components/UI/Grid';

test('renders grid with children', () => {
  render(
    <Grid>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Grid>
  );
  expect(screen.getAllByText(/Item/).length).toBe(3);
});

test('applies custom className to grid', () => {
  render(<Grid className="custom-class">Test Content</Grid>);
  expect(screen.getByText('Test Content')).toHaveClass('custom-class');
});
