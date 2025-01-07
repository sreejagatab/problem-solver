// Accessibility/ScreenReaderSupport.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ScreenReaderSupport from '../../../src/components/Accessibility/ScreenReaderSupport';

test('renders screen reader support information', () => {
  render(<ScreenReaderSupport />);
  expect(screen.getByText('Semantic HTML')).toBeInTheDocument();
  expect(screen.getByText('ARIA Attributes')).toBeInTheDocument();
  expect(screen.getByText('Alternative Text')).toBeInTheDocument();
});
