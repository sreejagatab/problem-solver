// ModelManagement.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ModelManagement from '../../src/pages/ModelManagement';

test('renders model management page content', () => {
  render(<ModelManagement />);

  expect(screen.getByText('Model Management')).toBeInTheDocument();
  expect(screen.getByText('Discover and manage the AI models powering your problem-solving efforts')).toBeInTheDocument();
  expect(screen.getByText('Available Models')).toBeInTheDocument();
  expect(screen.getByText('Explore Model Marketplace')).toBeInTheDocument();
});
