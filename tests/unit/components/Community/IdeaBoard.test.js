// Community/IdeaBoard.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import IdeaBoard from '../../../src/components/Community/IdeaBoard';

const mockIdeas = [
  {
    id: 1,
    title: 'Predictive Maintenance System',
    description: 'Develop an AI-powered system to predict equipment failures and optimize maintenance schedules.',
    author: 'John Doe',
  },
  {
    id: 2,
    title: 'Decentralized Problem Solving Platform',
    description: 'Create a blockchain-based platform to enable secure and transparent problem-solving collaboration.',
    author: 'Jane Smith',
  },
];

test('renders idea board with listed ideas', () => {
  render(<IdeaBoard />);
  expect(screen.getByText('Predictive Maintenance System')).toBeInTheDocument();
  expect(screen.getByText('Decentralized Problem Solving Platform')).toBeInTheDocument();
});

test('calls viewIdea function on button click', () => {
  const handleViewIdea = jest.fn();
  render(<IdeaBoard onViewIdea={handleViewIdea} />);
  fireEvent.click(screen.getByText('View Idea'));
  expect(handleViewIdea).toHaveBeenCalledWith(mockIdeas[0]);
});