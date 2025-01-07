// Sustainability/GreenComputingOptions.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GreenComputingOptions from '../../../src/components/Sustainability/GreenComputingOptions';

test('renders green computing options information', () => {
  render(<GreenComputingOptions />);

  expect(screen.getByText('Cloud infrastructure with renewable energy sources')).toBeInTheDocument();
  expect(screen.getByText('Energy-efficient hardware and devices')).toBeInTheDocument();
  expect(screen.getByText('Serverless and containerized architectures')).toBeInTheDocument();
  expect(screen.getByText('Intelligent resource scaling and optimization')).toBeInTheDocument();
  expect(screen.getByText('Sustainable data center practices')).toBeInTheDocument();
});

test('calls viewGreenOptions handler when view button is clicked', () => {
  const mockViewGreenOptions = jest.fn();
  render(<GreenComputingOptions viewGreenOptions={mockViewGreenOptions} />);
  screen.getByText('View Green Computing Options').click();
  expect(mockViewGreenOptions).toHaveBeenCalledTimes(1);
});