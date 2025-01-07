// Productivity/ReportGenerator.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReportGenerator from '../../../src/components/Productivity/ReportGenerator';

test('renders report generator with input fields', () => {
  render(<ReportGenerator />);
  expect(screen.getByLabelText('Report Title')).toBeInTheDocument();
  expect(screen.getByLabelText('Report Content')).toBeInTheDocument();
  expect(screen.getByText('Generate Report')).toBeInTheDocument();
});

test('updates report details on input change', () => {
  render(<ReportGenerator />);
  fireEvent.change(screen.getByLabelText('Report Title'), { target: { value: 'Test Report' } });
  fireEvent.change(screen.getByLabelText('Report Content'), { target: { value: 'This is a test report.' } });
  expect(screen.getByDisplayValue('Test Report')).toBeInTheDocument();
  expect(screen.getByDisplayValue('This is a test report.')).toBeInTheDocument();
});

test('calls generateReport function on button click', () => {
  const handleGenerateReport = jest.fn();
  render(<ReportGenerator onGenerateReport={handleGenerateReport} />);
  fireEvent.click(screen.getByText('Generate Report'));
  expect(handleGenerateReport).toHaveBeenCalled();
});
