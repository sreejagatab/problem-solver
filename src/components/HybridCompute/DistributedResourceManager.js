// DistributedResourceManager.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button } from '../UI';
import { Fade } from '../Animations';

const DistributedResourceManager = () => {
  const [resources, setResources] = useState([]);
  const [selectedResources, setSelectedResources] = useState([]);

  useEffect(() => {
    // Fetch available computing resources from the backend
    const fetchResources = async () => {
      const response = await fetch('/api/resources');
      const data = await response.json();
      setResources(data);
    };
    fetchResources();
  }, []);

  const handleResourceSelection = (resource) => {
    setSelectedResources((prevSelectedResources) => {
      if (prevSelectedResources.includes(resource)) {
        return prevSelectedResources.filter((r) => r !== resource);
      } else {
        return [...prevSelectedResources, resource];
      }
    });
  };

  const handleOptimizeResources = () => {
    // Implement logic to optimize the selected computing resources
    console.log('Optimizing resources:', selectedResources);
  };

  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>Distributed Resource Manager</Heading>
        <Text variant="lead" className="mt-2">
          Intelligently manage your computing resources across cloud and edge devices.
        </Text>
        <div className="mt-4 space-y-4">
          <div>
            <Heading level={4}>Available Resources</Heading>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {resources.map((resource) => (
                <div
                  key={resource.id}
                  className={`bg-gray-100 dark:bg-gray-800 p-4 rounded-lg cursor-pointer ${
                    selectedResources.includes(resource)
                      ? 'border-2 border-primary-500'
                      : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => handleResourceSelection(resource)}
                >
                  <Text>{resource.name}</Text>
                  <Text variant="small">{resource.type}</Text>
                </div>
              ))}
            </div>
          </div>
          <Button variant="primary" onClick={handleOptimizeResources}>
            Optimize Resources
          </Button>
        </div>
      </Card>
    </Fade>
  );
};

export default DistributedResourceManager;