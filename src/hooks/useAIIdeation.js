// useAIIdeation.js
import { useState } from 'react';
import { generateSolution } from '../utils/aiIdeation';

const useAIIdeation = () => {
  const [generatedSolution, setGeneratedSolution] = useState('');

  const generateSolutionWithAI = async (problemDescription) => {
    const solution = await generateSolution(problemDescription);
    setGeneratedSolution(solution);
  };

  return { generatedSolution, generateSolutionWithAI };
};

export default useAIIdeation;