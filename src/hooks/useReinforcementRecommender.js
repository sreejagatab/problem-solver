// useReinforcementRecommender.js
import { useState, useEffect } from 'react';
import { fetchRecommendations, applyReinforcementFeedback } from '../utils/reinforcement';

const useReinforcementRecommender = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const loadRecommendations = async () => {
      const recommendationData = await fetchRecommendations();
      setRecommendations(recommendationData);
    };
    loadRecommendations();
  }, []);

  const provideReinforcementFeedback = async (recommendation, feedback) => {
    await applyReinforcementFeedback(recommendation, feedback);
    setRecommendations(recommendations.map((r) => (r.id === recommendation.id ? { ...r, feedback } : r)));
  };

  return { recommendations, provideReinforcementFeedback };
};

export default useReinforcementRecommender;