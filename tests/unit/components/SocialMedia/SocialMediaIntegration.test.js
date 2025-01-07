// SocialMedia/SocialMediaIntegration.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SocialMediaIntegration from '../../../src/components/SocialMedia/SocialMediaIntegration';

test('renders social media integration information', () => {
  render(<SocialMediaIntegration />);

  expect(screen.getByText('Connect Your Accounts')).toBeInTheDocument();
  expect(screen.getByText('Engage with Your Network')).toBeInTheDocument();
});

test('calls connectSocialAccounts handler when connect button is clicked', () => {
  const mockConnectSocialAccounts = jest.fn();
  render(<SocialMediaIntegration connectSocialAccounts={mockConnectSocialAccounts} />);
  screen.getByText('Connect Social Media').click();
  expect(mockConnectSocialAccounts).toHaveBeenCalledTimes(1);
});
