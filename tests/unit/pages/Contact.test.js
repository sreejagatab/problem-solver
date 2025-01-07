
// Contact.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../../src/pages/Contact';

test('renders contact page content', () => {
  render(<Contact />);

  expect(screen.getByText('Contact Us')).toBeInTheDocument();
  expect(screen.getByText('Get in touch with our team for any inquiries or support')).toBeInTheDocument();
  expect(screen.getByText('General Inquiries')).toBeInTheDocument();
  expect(screen.getByText('Technical Support')).toBeInTheDocument();
});