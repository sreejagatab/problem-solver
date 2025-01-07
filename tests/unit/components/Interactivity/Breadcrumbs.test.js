// Interactivity/Breadcrumbs.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Breadcrumbs from '../../../src/components/Interactivity/Breadcrumbs';

test('renders breadcrumbs with links', () => {
  render(
    <Router>
      <Breadcrumbs items={[
        { label: 'Home', path: '/' },
        { label: 'Category', path: '/category' },
        { label: 'Page', path: '/page' },
      ]} />
    </Router>
  );
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Category')).toBeInTheDocument();
  expect(screen.getByText('Page')).toBeInTheDocument();
});

test('navigates to correct paths on click', () => {
  render(
    <Router>
      <Breadcrumbs items={[
        { label: 'Home', path: '/' },
        { label: 'Category', path: '/category' },
        { label: 'Page', path: '/page' },
      ]} />
    </Router>
  );
  fireEvent.click(screen.getByText('Category'));
  expect(window.location.pathname).toBe('/category');
});
