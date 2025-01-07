// Animations/Parallax.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Parallax from '../../../src/components/Animations/Parallax';

test('renders child component with parallax animation', () => {
  render(
    <Parallax>
      <div>Parallax content</div>
    </Parallax>
  );
  expect(screen.getByText('Parallax content')).toBeInTheDocument();
});