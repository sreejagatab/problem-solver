// Personalization/UserProfileManager.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserProfileManager from '../../../src/components/Personalization/UserProfileManager';
import { useAuth } from '../../../src/hooks/useAuth';

jest.mock('../../../src/hooks/useAuth');

test('displays user profile information', () => {
  useAuth.mockReturnValue({
    user: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      preferences: {
        theme: 'light',
        language: 'en',
        currency: 'USD',
      },
    },
  });

  render(<UserProfileManager />);
  expect(screen.getByDisplayValue('John Doe')).toBeInTheDocument();
  expect(screen.getByDisplayValue('john.doe@example.com')).toBeInTheDocument();
  expect(screen.getByDisplayValue('light')).toBeInTheDocument();
  expect(screen.getByDisplayValue('en')).toBeInTheDocument();
  expect(screen.getByDisplayValue('USD')).toBeInTheDocument();
});

test('calls updateUser function on save', () => {
  const updateUser = jest.fn();
  useAuth.mockReturnValue({ user: {}, updateUser });

  render(<UserProfileManager />);
  fireEvent.change(screen.getByDisplayValue('John Doe'), { target: { value: 'Jane Doe' } });
  fireEvent.click(screen.getByText('Save Profile'));
  expect(updateUser).toHaveBeenCalledWith({ name: 'Jane Doe', email: '', preferences: { theme: 'light', language: 'en', currency: 'USD' } });
});
