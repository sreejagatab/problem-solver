// useContainerization.js
import { useState, useEffect } from 'react';
import { fetchContainerResources, allocateContainerResource } from '../utils/containerization';

const useContainerization = () => {
  const [containerResources, setContainerResources] = useState([]);

  useEffect(() => {
    const loadContainerResources = async () => {
      const resources = await fetchContainerResources();
      setContainerResources(resources);
    };
    loadContainerResources();
  }, []);

  const allocateResource = async (resourceId) => {
    const allocatedResource = await allocateContainerResource(resourceId);
    setContainerResources(containerResources.map((r) => (r.id === resourceId ? allocatedResource : r)));
  };

  return { containerResources, allocateResource };
};

export default useContainerization;