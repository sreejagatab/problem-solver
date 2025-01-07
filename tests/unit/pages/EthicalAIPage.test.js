// EthicalAIPage.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import EthicalAIPage from '../../src/pages/EthicalAIPage';

test('renders ethical AI page content', () => {
  render(<EthicalAIPage />);

  expect(screen.getByText('Ethical AI Governance')).toBeInTheDocument();
  expect(screen.getByText('Ensure responsible and transparent use of AI in problem-solving')).toBeInTheDocument();
});