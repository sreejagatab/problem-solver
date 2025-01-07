// Personalization/RecommendationEngine.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RecommendationEngine from '../../../src/components/Personalization/RecommendationEngine';

const mockRecommendations = [
  {
    id: 1,
    title: 'Optimize your problem-solving workflow',
    description: 'Based on your past activities, we have recommendations to help you work more efficiently.',
  },
  {
    id: 2,
    title: 'Explore new problem domains',
    description: 'Our AI-powered recommendation engine suggests problems outside your usual areas of focus that you may find interesting.',
  },
];

test('renders personalized recommendations', () => {
  render(<RecommendationEngine />);
  expect(screen.getByText('Optimize your problem-solving workflow')).toBeInTheDocument();
  expect(screen.getByText('Explore new problem domains')).toBeInTheDocument();
});

test('calls viewRecommendation function on button click', () => {
  const handleViewRecommendation = jest.fn();
  render(<RecommendationEngine onViewRecommendation={handleViewRecommendation} />);
  fireEvent.click(screen.getByText('View Recommendation'));
  expect(handleViewRecommendation).toHaveBeenCalledWith(mockRecommendations[0]);
});