// useEcosystem.js
import { useState, useEffect } from 'react';
import { fetchEcosystemModels, deployEcosystemModel } from '../utils/ecosystem';

const useEcosystem = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    const loadEcosystemModels = async () => {
      const modelData = await fetchEcosystemModels();
      setModels(modelData);
    };
    loadEcosystemModels();
  }, []);

  const deployModel = async (modelId) => {
    const deployedModel = await deployEcosystemModel(modelId);
    setModels(models.map((m) => (m.id === modelId ? deployedModel : m)));
  };

  return { models, deployModel };
};

export default useEcosystem;