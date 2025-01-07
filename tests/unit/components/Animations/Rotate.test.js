// Animations/Rotate.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Rotate from '../../../src/components/Animations/Rotate';

test('renders child component with rotate animation', () => {
  render(
    <Rotate>
      <div>Rotating content</div>
    </Rotate>
  );
  expect(screen.getByText('Rotating content')).toBeInTheDocument();
});
