// useDecentralization.js
import { useState, useEffect } from 'react';
import { fetchCommunityIdeas, submitCommunityIdea } from '../utils/decentralization';

const useDecentralization = () => {
  const [communityIdeas, setCommunityIdeas] = useState([]);

  useEffect(() => {
    const loadIdeas = async () => {
      const ideas = await fetchCommunityIdeas();
      setCommunityIdeas(ideas);
    };
    loadIdeas();
  }, []);

  const postNewIdea = async (idea) => {
    const newIdea = await submitCommunityIdea(idea);
    setCommunityIdeas([...communityIdeas, newIdea]);
  };

  return { communityIdeas, postNewIdea };
};

export default useDecentralization;