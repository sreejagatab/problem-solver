// useNeuromorphicModeling.js
import { useState, useEffect } from 'react';
import { fetchNeuromorphicModels, deployNeuromorphicModel } from '../utils/neuromorphic';

const useNeuromorphicModeling = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    const loadNeuromorphicModels = async () => {
      const modelData = await fetchNeuromorphicModels();
      setModels(modelData);
    };
    loadNeuromorphicModels();
  }, []);

  const deployModel = async (modelId) => {
    const deployedModel = await deployNeuromorphicModel(modelId);
    setModels(models.map((m) => (m.id === modelId ? deployedModel : m)));
  };

  return { models, deployModel };
};

export default useNeuromorphicModeling;