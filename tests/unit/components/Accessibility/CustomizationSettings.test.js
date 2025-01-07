// Accessibility/CustomizationSettings.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CustomizationSettings from '../../../src/components/Accessibility/CustomizationSettings';

test('renders customization settings', () => {
  render(<CustomizationSettings />);
  expect(screen.getByLabelText('Font Size')).toBeInTheDocument();
  expect(screen.getByLabelText('Line Height')).toBeInTheDocument();
  expect(screen.getByLabelText('Font Family')).toBeInTheDocument();
});

test('saves customization settings', () => {
  const handleSaveSettings = jest.fn();
  render(<CustomizationSettings onSaveSettings={handleSaveSettings} />);
  fireEvent.change(screen.getByLabelText('Font Size'), { target: { value: '18' } });
  fireEvent.change(screen.getByLabelText('Line Height'), { target: { value: '1.8' } });
  fireEvent.change(screen.getByLabelText('Font Family'), { target: { value: 'Times New Roman' } });
  fireEvent.click(screen.getByText('Save Settings'));
  expect(handleSaveSettings).toHaveBeenCalledWith({ fontSize: 18, lineHeight: 1.8, fontFamily: 'Times New Roman' });
});