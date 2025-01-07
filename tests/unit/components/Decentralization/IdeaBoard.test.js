// Decentralization/IdeaBoard.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import IdeaBoard from '../../../src/components/Decentralization/IdeaBoard';

test('renders idea board', () => {
  const mockIdeas = [
    { id: 1, title: 'Idea 1', description: 'This is the first idea', author: 'John Doe' },
    { id: 2, title: 'Idea 2', description: 'This is the second idea', author: 'Jane Smith' },
  ];

  render(<IdeaBoard ideas={mockIdeas} />);

  expect(screen.getByText('Idea 1')).toBeInTheDocument();
  expect(screen.getByText('Idea 2')).toBeInTheDocument();
  expect(screen.getByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('Jane Smith')).toBeInTheDocument();
});

test('calls viewIdea handler when view idea button is clicked', () => {
  const mockViewIdea = jest.fn();
  const mockIdeas = [
    { id: 1, title: 'Idea 1', description: 'This is the first idea', author: 'John Doe' },
  ];

  render(<IdeaBoard ideas={mockIdeas} viewIdea={mockViewIdea} />);
  screen.getByText('View Idea').click();
  expect(mockViewIdea).toHaveBeenCalledTimes(1);
});
