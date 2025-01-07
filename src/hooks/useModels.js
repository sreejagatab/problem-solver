// useModels.js
import { useState, useEffect } from 'react';
import { fetchModels, deployModel } from '../utils/marketplace';

const useModels = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchAvailableModels = async () => {
      const modelData = await fetchModels();
      setModels(modelData);
    };
    fetchAvailableModels();
  }, []);

  const deploySelectedModel = async (modelId) => {
    const deployedModel = await deployModel(modelId);
    setModels(models.map((m) => (m.id === modelId ? deployedModel : m)));
  };

  return { models, deploySelectedModel };
};

export default useModels;