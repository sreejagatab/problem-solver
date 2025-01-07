// OfflineSupport/OfflineFallback.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import OfflineFallback from '../../../src/components/OfflineSupport/OfflineFallback';

test('renders offline fallback content', () => {
  render(<OfflineFallback />);
  expect(screen.getByText('Oops! You\'re offline.')).toBeInTheDocument();
  expect(screen.getByText('Retry')).toBeInTheDocument();
});
