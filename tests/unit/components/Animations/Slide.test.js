// Animations/Slide.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Slide from '../../../src/components/Animations/Slide';

test('renders child component with slide animation', () => {
  render(
    <Slide>
      <div>Sliding content</div>
    </Slide>
  );
  expect(screen.getByText('Sliding content')).toBeInTheDocument();
});