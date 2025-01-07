// usePredictiveIntelligence.js
import { useState, useEffect } from 'react';
import { fetchEquipmentData, getPredictedFailures, fetchOperationalData, fetchAlerts } from '../utils/predictiveIntelligence';

const usePredictiveIntelligence = () => {
  const [equipment, setEquipment] = useState([]);
  const [predictedFailures, setPredictedFailures] = useState([]);
  const [operationalData, setOperationalData] = useState({});
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const equipmentData = await fetchEquipmentData();
      const failurePredictions = await getPredictedFailures();
      const operational = await fetchOperationalData();
      const alertData = await fetchAlerts();
      setEquipment(equipmentData);
      setPredictedFailures(failurePredictions);
      setOperationalData(operational);
      setAlerts(alertData);
    };
    fetchData();
  }, []);

  return { equipment, predictedFailures, operationalData, alerts };
};

export default usePredictiveIntelligence;