// DigitalTwins/DigitalTwinModelCard.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DigitalTwinModelCard from '../../../src/components/DigitalTwins/DigitalTwinModelCard';

test('renders digital twin model information', () => {
  const mockModel = {
    id: 1,
    name: 'Manufacturing Process Twin',
    domain: 'Manufacturing',
    description: 'Detailed digital twin model of a manufacturing process',
    efficiency: 92,
  };

  render(<DigitalTwinModelCard model={mockModel} />);

  expect(screen.getByText('Manufacturing Process Twin')).toBeInTheDocument();
  expect(screen.getByText('Manufacturing')).toBeInTheDocument();
  expect(screen.getByText('Detailed digital twin model of a manufacturing process')).toBeInTheDocument();
  expect(screen.getByText('92% Efficient')).toBeInTheDocument();
});

test('calls viewModel handler when view button is clicked', () => {
  const mockViewModel = jest.fn();
  const mockModel = {
    id: 1,
    name: 'Manufacturing Process Twin',
    domain: 'Manufacturing',
    description: 'Detailed digital twin model of a manufacturing process',
    efficiency: 92,
  };

  render(<DigitalTwinModelCard model={mockModel} viewModel={mockViewModel} />);
  screen.getByText('View Model').click();
  expect(mockViewModel).toHaveBeenCalledTimes(1);
});
