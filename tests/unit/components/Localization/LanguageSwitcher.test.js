// Localization/LanguageSwitcher.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LanguageSwitcher from '../../../src/components/Localization/LanguageSwitcher';

test('renders language switcher with available options', () => {
  render(<LanguageSwitcher />);
  expect(screen.getByText('English')).toBeInTheDocument();
  expect(screen.getByText('Español')).toBeInTheDocument();
  expect(screen.getByText('Français')).toBeInTheDocument();
});

test('calls handleLanguageChange on option click', () => {
  const handleLanguageChange = jest.fn();
  render(<LanguageSwitcher onLanguageChange={handleLanguageChange} />);
  fireEvent.click(screen.getByText('Español'));
  expect(handleLanguageChange).toHaveBeenCalledWith('es');
});
