// IDE.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import IDE from '../../src/pages/IDE';

test('renders IDE page content', () => {
  render(<IDE />);

  expect(screen.getByText('Integrated Development Environment')).toBeInTheDocument();
  expect(screen.getByText('Write, test, and deploy your problem-solving code directly within the platform')).toBeInTheDocument();
});
