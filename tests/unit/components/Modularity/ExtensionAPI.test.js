
// Modularity/ExtensionAPI.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ExtensionAPI from '../../../src/components/Modularity/ExtensionAPI';

test('renders extension API information', () => {
  render(<ExtensionAPI />);
  expect(screen.getByText('Extension API')).toBeInTheDocument();
  expect(screen.getByText('Develop Custom Components')).toBeInTheDocument();
  expect(screen.getByText('Extend Existing Functionality')).toBeInTheDocument();
  expect(screen.getByText('Integrate with Third-Party Services')).toBeInTheDocument();
});

test('calls onClick handler for buttons', () => {
  const handleClick = jest.fn();
  render(<ExtensionAPI onClick={handleClick} />);
  fireEvent.click(screen.getByText('Learn More'));
  fireEvent.click(screen.getByText('Explore Extensions'));
  fireEvent.click(screen.getByText('API Documentation'));
  expect(handleClick).toHaveBeenCalledTimes(3);
});