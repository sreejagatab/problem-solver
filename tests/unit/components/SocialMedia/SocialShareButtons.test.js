// SocialMedia/SocialShareButtons.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SocialShareButtons from '../../../src/components/SocialMedia/SocialShareButtons';

test('renders social share buttons', () => {
  render(<SocialShareButtons />);

  expect(screen.getByText('Share on Facebook')).toBeInTheDocument();
  expect(screen.getByText('Share on Twitter')).toBeInTheDocument();
  expect(screen.getByText('Share on LinkedIn')).toBeInTheDocument();
});