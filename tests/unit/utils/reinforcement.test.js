// reinforcement.test.js
import { fetchRecommendations, applyReinforcementFeedback } from '../../src/utils/reinforcement';
import axios from 'axios';

jest.mock('axios');

test('fetchRecommendations makes a GET request to the recommendations endpoint', async () => {
  const mockRecommendations = [
    { id: 1, title: 'Recommendation 1', description: 'This is the first recommendation' },
    { id: 2, title: 'Recommendation 2', description: 'This is the second recommendation' },
  ];
  axios.get.mockResolvedValueOnce({ data: mockRecommendations });

  const recommendations = await fetchRecommendations();
  expect(recommendations).toEqual(mockRecommendations);
  expect(axios.get).toHaveBeenCalledWith('/api/recommendations');
});

test('applyReinforcementFeedback makes a POST request to the feedback endpoint', async () => {
  const mockRecommendation = { id: 1, title: 'Recommendation 1' };
  const mockFeedback = 'Positive feedback';
  const mockResult = { success: true };
  axios.post.mockResolvedValueOnce({ data: mockResult });

  const result = await applyReinforcementFeedback(mockRecommendation, mockFeedback);
  expect(result).toEqual(mockResult);
  expect(axios.post).toHaveBeenCalledWith('/api/recommendations/feedback', { recommendation: mockRecommendation, feedback: mockFeedback });
});