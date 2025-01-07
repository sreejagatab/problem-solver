// Layout/Header.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../../src/components/Layout/Header';
import UserMenu from '../../../src/components/Layout/UserMenu';

test('renders header with logo and user menu', () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  expect(screen.getByText('Problem Solver')).toBeInTheDocument();
  expect(screen.getByTestId('user-menu')).toBeInTheDocument();
});

test('links to home page on logo click', () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  fireEvent.click(screen.getByText('Problem Solver'));
  expect(window.location.pathname).toBe('/');
});
