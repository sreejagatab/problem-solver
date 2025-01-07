// EdgeComputing/DistributedResourceManager.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DistributedResourceManager from '../../../src/components/EdgeComputing/DistributedResourceManager';

test('renders distributed resources', () => {
  const mockResources = [
    { id: 1, name: 'Resource A', status: 'available' },
    { id: 2, name: 'Resource B', status: 'allocated' },
  ];

  render(<DistributedResourceManager resources={mockResources} />);

  expect(screen.getByText('Resource A')).toBeInTheDocument();
  expect(screen.getByText('Resource B')).toBeInTheDocument();
  expect(screen.getByText('available')).toBeInTheDocument();
  expect(screen.getByText('allocated')).toBeInTheDocument();
});

test('calls allocateResource handler when allocate button is clicked', () => {
  const mockAllocateResource = jest.fn();
  render(<DistributedResourceManager allocateResource={mockAllocateResource} />);
  screen.getByText('Allocate').click();
  expect(mockAllocateResource).toHaveBeenCalledTimes(1);
});
