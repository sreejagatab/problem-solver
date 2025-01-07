// Dashboards/Personalization.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Personalization from '../../../src/components/Dashboards/Personalization';

test('renders personalization information', () => {
  render(<Personalization />);
  expect(screen.getByText('Personalization')).toBeInTheDocument();
  expect(screen.getByText('Tailor the platform to your individual preferences and needs.')).toBeInTheDocument();
  expect(screen.getByText('Customizable Dashboards')).toBeInTheDocument();
  expect(screen.getByText('Personalized Recommendations')).toBeInTheDocument();
  expect(screen.getByText('Adaptive User Interface')).toBeInTheDocument();
});