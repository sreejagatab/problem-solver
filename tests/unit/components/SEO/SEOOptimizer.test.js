// SEO/SEOOptimizer.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SEOOptimizer from '../../../src/components/SEO/SEOOptimizer';

test('renders SEO optimizer information', () => {
  render(<SEOOptimizer />);

  expect(screen.getByText('Keyword research and optimization')).toBeInTheDocument();
  expect(screen.getByText('Content structure and readability')).toBeInTheDocument();
  expect(screen.getByText('Image and media optimization')).toBeInTheDocument();
  expect(screen.getByText('Technical SEO audits')).toBeInTheDocument();
  expect(screen.getByText('Schema markup and structured data')).toBeInTheDocument();
});

test('calls runSEOAnalysis handler when run analysis button is clicked', () => {
  const mockRunSEOAnalysis = jest.fn();
  render(<SEOOptimizer runSEOAnalysis={mockRunSEOAnalysis} />);
  screen.getByText('Run SEO Analysis').click();
  expect(mockRunSEOAnalysis).toHaveBeenCalledTimes(1);
});