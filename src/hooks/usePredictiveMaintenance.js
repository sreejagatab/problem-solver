// usePredictiveMaintenance.js
import { useState, useEffect } from 'react';
import { fetchEquipmentData, getPredictedFailures } from '../utils/predictiveMaintenance';

const usePredictiveMaintenance = () => {
  const [equipment, setEquipment] = useState([]);
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const equipmentData = await fetchEquipmentData();
      const failurePredictions = await getPredictedFailures();
      setEquipment(equipmentData);
      setPredictions(failurePredictions);
    };
    fetchData();
  }, []);

  return { equipment, predictions };
};

export default usePredictiveMaintenance;