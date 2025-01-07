// useDigitalTwins.js
import { useState, useEffect } from 'react';
import { fetchDigitalTwinModels, deployDigitalTwin } from '../utils/digitalTwins';

const useDigitalTwins = () => {
  const [digitalTwinModels, setDigitalTwinModels] = useState([]);

  useEffect(() => {
    const loadDigitalTwinModels = async () => {
      const models = await fetchDigitalTwinModels();
      setDigitalTwinModels(models);
    };
    loadDigitalTwinModels();
  }, []);

  const deployTwin = async (modelId) => {
    const deployedTwin = await deployDigitalTwin(modelId);
    setDigitalTwinModels(digitalTwinModels.map((m) => (m.id === modelId ? deployedTwin : m)));
  };

  return { digitalTwinModels, deployTwin };
};

export default useDigitalTwins;