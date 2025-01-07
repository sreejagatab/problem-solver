// Localization/CurrencyConverter.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CurrencyConverter from '../../../src/components/Localization/CurrencyConverter';

test('converts currency and displays the result', () => {
  render(<CurrencyConverter />);
  fireEvent.change(screen.getByLabelText('Amount'), { target: { value: '100' } });
  fireEvent.change(screen.getByLabelText('From'), { target: { value: 'USD' } });
  fireEvent.change(screen.getByLabelText('To'), { target: { value: 'EUR' } });
  fireEvent.click(screen.getByText('Convert'));
  expect(screen.getByText('85.00')).toBeInTheDocument();
});