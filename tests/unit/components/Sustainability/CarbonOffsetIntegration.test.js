// Sustainability/CarbonOffsetIntegration.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CarbonOffsetIntegration from '../../../src/components/Sustainability/CarbonOffsetIntegration';

test('renders carbon offset information', () => {
  render(<CarbonOffsetIntegration />);

  expect(screen.getByText('Your platforms estimated carbon footprint is 10 tons of CO2.')).toBeInTheDocument();
  expect(screen.getByLabelText('Offset Amount')).toBeInTheDocument();
});

test('calls purchaseCarbonOffsets handler when purchase button is clicked', () => {
  const mockPurchaseCarbonOffsets = jest.fn();
  render(<CarbonOffsetIntegration purchaseCarbonOffsets={mockPurchaseCarbonOffsets} />);
  screen.getByText('Purchase Carbon Offsets').click();
  expect(mockPurchaseCarbonOffsets).toHaveBeenCalledTimes(1);
});