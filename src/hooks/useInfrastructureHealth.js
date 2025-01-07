// useInfrastructureHealth.js
import { useState, useEffect } from 'react';
import { getSystemHealth, reportIncident } from '../utils/infrastructure';

const useInfrastructureHealth = () => {
  const [systemHealth, setSystemHealth] = useState({});

  useEffect(() => {
    const fetchHealth = async () => {
      const health = await getSystemHealth();
      setSystemHealth(health);
    };
    const interval = setInterval(fetchHealth, 60000);
    return () => clearInterval(interval);
  }, []);

  const logIncident = async (incident) => {
    await reportIncident(incident);
  };

  return { systemHealth, logIncident };
};

export default useInfrastructureHealth;