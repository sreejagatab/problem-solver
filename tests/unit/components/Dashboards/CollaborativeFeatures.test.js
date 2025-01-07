// Dashboards/CollaborativeFeatures.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import CollaborativeFeatures from '../../../src/components/Dashboards/CollaborativeFeatures';

test('renders collaborative features information', () => {
  render(<CollaborativeFeatures />);
  expect(screen.getByText('Collaborative Features')).toBeInTheDocument();
  expect(screen.getByText('Enable effective teamwork and knowledge sharing among users.')).toBeInTheDocument();
  // Add more assertions based on the actual implementation
});