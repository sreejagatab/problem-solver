// useSustainability.js
import { useState, useEffect } from 'react';
import { fetchEnvironmentalData, purchaseCarbonOffsets } from '../utils/sustainability';

const useSustainability = () => {
  const [environmentalImpact, setEnvironmentalImpact] = useState({});

  useEffect(() => {
    const loadEnvironmentalData = async () => {
      const data = await fetchEnvironmentalData();
      setEnvironmentalImpact(data);
    };
    loadEnvironmentalData();
  }, []);

  const offsetCarbon = async (amount) => {
    await purchaseCarbonOffsets(amount);
  };

  return { environmentalImpact, offsetCarbon };
};

export default useSustainability;