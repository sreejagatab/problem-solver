// useQuantumOptimizer.js
import { useState } from 'react';
import { optimizeProblem } from '../utils/quantum';

const useQuantumOptimizer = () => {
  const [optimizationResults, setOptimizationResults] = useState(null);

  const optimizeWithQuantum = async (problemDescription) => {
    const results = await optimizeProblem(problemDescription);
    setOptimizationResults(results);
  };

  return { optimizationResults, optimizeWithQuantum };
};

export default useQuantumOptimizer;