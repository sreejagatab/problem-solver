// Layout/UserMenu.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserMenu from '../../../src/components/Layout/UserMenu';

test('opens user menu on button click', () => {
  render(<UserMenu />);
  fireEvent.click(screen.getByRole('button'));
  expect(screen.getByText('Profile')).toBeInTheDocument();
  expect(screen.getByText('Settings')).toBeInTheDocument();
  expect(screen.getByText('Logout')).toBeInTheDocument();
});

test('closes user menu on menu item click', () => {
  render(<UserMenu />);
  fireEvent.click(screen.getByRole('button'));
  fireEvent.click(screen.getByText('Profile'));
  expect(screen.queryByText('Settings')).not.toBeInTheDocument();
});