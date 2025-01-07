// Layout/Footer.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../../../src/components/Layout/Footer';

test('renders footer with copyright and navigation links', () => {
  render(
    <Router>
      <Footer />
    </Router>
  );
  expect(screen.getByText('Problem Solver')).toBeInTheDocument();
  expect(screen.getByText('©')).toBeInTheDocument();
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(screen.getByText('Contact')).toBeInTheDocument();
});

test('links to navigation pages on click', () => {
  render(
    <Router>
      <Footer />
    </Router>
  );
  fireEvent.click(screen.getByText('About'));
  expect(window.location.pathname).toBe('/about');
});
