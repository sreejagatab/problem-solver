// useAnomalyDetection.js
import { useState, useEffect } from 'react';
import { fetchOperationalMetrics, reportIncident } from '../utils/anomalyDetection';

const useAnomalyDetection = () => {
  const [operationalMetrics, setOperationalMetrics] = useState({});
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const loadMetrics = async () => {
      const metrics = await fetchOperationalMetrics();
      setOperationalMetrics(metrics);
    };
    loadMetrics();
  }, []);

  const logIncident = async (incident) => {
    const reportedIncident = await reportIncident(incident);
    setIncidents([...incidents, reportedIncident]);
  };

  return { operationalMetrics, incidents, logIncident };
};

export default useAnomalyDetection;