// useHybridCompute.js
import { useState, useEffect } from 'react';
import { fetchDistributedResources, allocateDistributedResource, fetchCloudIntegrationData } from '../utils/hybridCompute';

const useHybridCompute = () => {
  const [distributedResources, setDistributedResources] = useState([]);
  const [cloudIntegrationData, setCloudIntegrationData] = useState({});

  useEffect(() => {
    const loadResources = async () => {
      const resources = await fetchDistributedResources();
      setDistributedResources(resources);
    };
    const loadCloudData = async () => {
      const data = await fetchCloudIntegrationData();
      setCloudIntegrationData(data);
    };
    loadResources();
    loadCloudData();
  }, []);

  const allocateResource = async (resourceId) => {
    const allocatedResource = await allocateDistributedResource(resourceId);
    setDistributedResources(distributedResources.map((r) => (r.id === resourceId ? allocatedResource : r)));
  };

  return { distributedResources, cloudIntegrationData, allocateResource };
};

export default useHybridCompute;