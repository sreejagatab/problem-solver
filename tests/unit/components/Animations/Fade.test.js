// Animations/Fade.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Fade from '../../../src/components/Animations/Fade';

test('renders child component with fade animation', () => {
  render(
    <Fade>
      <div>Fading content</div>
    </Fade>
  );
  expect(screen.getByText('Fading content')).toBeInTheDocument();
});