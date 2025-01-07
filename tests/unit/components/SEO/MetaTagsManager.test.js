// SEO/MetaTagsManager.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MetaTagsManager from '../../../src/components/SEO/MetaTagsManager';

test('renders meta tags input fields', () => {
  render(<MetaTagsManager />);

  expect(screen.getByLabelText('Title')).toBeInTheDocument();
  expect(screen.getByLabelText('Description')).toBeInTheDocument();
  expect(screen.getByLabelText('Keywords')).toBeInTheDocument();
});

test('calls saveMetaTags handler when save button is clicked', () => {
  const mockSaveMetaTags = jest.fn();
  render(<MetaTagsManager saveMetaTags={mockSaveMetaTags} />);
  screen.getByText('Save Meta Tags').click();
  expect(mockSaveMetaTags).toHaveBeenCalledTimes(1);
});