// ModelMarketplace.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ModelMarketplace from '../../src/pages/ModelMarketplace';

test('renders model marketplace page content', () => {
  render(<ModelMarketplace />);

  expect(screen.getByText('Model Marketplace')).toBeInTheDocument();
  expect(screen.getByText('Discover and deploy advanced AI models to enhance your problem-solving capabilities')).toBeInTheDocument();
  expect(screen.getByText('Available Models')).toBeInTheDocument();
});
