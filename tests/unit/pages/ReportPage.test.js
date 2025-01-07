// ReportPage.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ReportPage from '../../src/pages/ReportPage';

test('renders report page content', () => {
  render(<ReportPage />);

  expect(screen.getByText('Report Generator')).toBeInTheDocument();
  expect(screen.getByText('Create comprehensive reports to document your problem-solving efforts')).toBeInTheDocument();
});