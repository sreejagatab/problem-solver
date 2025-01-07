// useReinforcementRecommender.test.js
import { renderHook, act } from '@testing-library/react-hooks';
import { useReinforcementRecommender } from '../../src/components/hooks/useReinforcementRecommender';
import { fetchRecommendations, applyReinforcementFeedback } from '../../src/utils/reinforcement';

jest.mock('../../src/utils/reinforcement');

test('useReinforcementRecommender fetches recommendations and provides feedback', async () => {
  const mockRecommendations = [
    { id: 1, title: 'Recommendation 1' },
    { id: 2, title: 'Recommendation 2' },
  ];

  fetchRecommendations.mockResolvedValueOnce(mockRecommendations);
  applyReinforcementFeedback.mockResolvedValueOnce();

  const { result, waitForNextUpdate } = renderHook(() => useReinforcementRecommender());

  await waitForNextUpdate();
  expect(result.current.recommendations).toEqual(mockRecommendations);

  act(() => {
    result.current.provideReinforcementFeedback(mockRecommendations[0], 'Positive');
  });
  expect(applyReinforcementFeedback).toHaveBeenCalledWith(mockRecommendations[0], 'Positive');
});
