// Animations/Scale.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Scale from '../../../src/components/Animations/Scale';

test('renders child component with scale animation', () => {
  render(
    <Scale>
      <div>Scaling content</div>
    </Scale>
  );
  expect(screen.getByText('Scaling content')).toBeInTheDocument();
});
