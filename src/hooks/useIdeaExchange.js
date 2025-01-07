// useIdeaExchange.js
import { useState, useEffect } from 'react';
import { fetchIdeas, submitIdea } from '../utils/ideaExchange';

const useIdeaExchange = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const loadIdeas = async () => {
      const ideaData = await fetchIdeas();
      setIdeas(ideaData);
    };
    loadIdeas();
  }, []);

  const addNewIdea = async (idea) => {
    const newIdea = await submitIdea(idea);
    setIdeas([...ideas, newIdea]);
  };

  return { ideas, addNewIdea };
};

export default useIdeaExchange;