// SEO/SitemapGenerator.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import SitemapGenerator from '../../../src/components/SEO/SitemapGenerator';

test('renders sitemap information', () => {
  const mockSitemapUrl = 'https://example.com/sitemap.xml';

  render(<SitemapGenerator sitemapUrl={mockSitemapUrl} />);

  expect(screen.getByText('Your sitemap is available at:')).toBeInTheDocument();
  expect(screen.getByText(mockSitemapUrl)).toBeInTheDocument();
});

test('calls downloadSitemap handler when download button is clicked', () => {
  const mockDownloadSitemap = jest.fn();
  render(<SitemapGenerator downloadSitemap={mockDownloadSitemap} />);
  screen.getByText('Download Sitemap').click();
  expect(mockDownloadSitemap).toHaveBeenCalledTimes(1);
});
