// OfflineSupport/ProgressiveEnhancement.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressiveEnhancement from '../../../src/components/OfflineSupport/ProgressiveEnhancement';

test('renders progressive enhancement information', () => {
  render(<ProgressiveEnhancement />);
  expect(screen.getByText('Responsive Design')).toBeInTheDocument();
  expect(screen.getByText('Browser Support')).toBeInTheDocument();
  expect(screen.getByText('Accessibility')).toBeInTheDocument();
  expect(screen.getByText('Learn More')).toBeInTheDocument();
});
