
// CloudIntegrationHub.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button, Expandable } from '../UI';
import { Slide } from '../Animations';

const CloudIntegrationHub = () => {
  const [cloudProviders, setCloudProviders] = useState([]);
  const [selectedProviders, setSelectedProviders] = useState([]);

  useEffect(() => {
    // Fetch available cloud providers from the backend
    const fetchCloudProviders = async () => {
      const response = await fetch('/api/cloud-providers');
      const data = await response.json();
      setCloudProviders(data);
    };
    fetchCloudProviders();
  }, []);

  const handleProviderSelection = (provider) => {
    setSelectedProviders((prevSelectedProviders) => {
      if (prevSelectedProviders.includes(provider)) {
        return prevSelectedProviders.filter((p) => p !== provider);
      } else {
        return [...prevSelectedProviders, provider];
      }
    });
  };

  const handleIntegrateProviders = () => {
    // Implement logic to integrate the selected cloud providers
    console.log('Integrating cloud providers:', selectedProviders);
  };

  return (
    <Slide>
      <Card className="p-8">
        <Heading level={2}>Cloud Integration Hub</Heading>
        <Text variant="lead" className="mt-2">
          Connect your platform to various cloud services for seamless data management.
        </Text>
        <Expandable title="Available Cloud Providers" className="mt-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cloudProviders.map((provider) => (
              <div
                key={provider.id}
                className={`bg-gray-100 dark:bg-gray-800 p-4 rounded-lg cursor-pointer ${
                  selectedProviders.includes(provider)
                    ? 'border-2 border-primary-500'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => handleProviderSelection(provider)}
              >
                <img src={provider.logo} alt={provider.name} className="h-8 mx-auto" />
                <Text variant="small" className="mt-2">
                  {provider.name}
                </Text>
              </div>
            ))}
          </div>
        </Expandable>
        <Button variant="primary" onClick={handleIntegrateProviders} className="mt-4">
          Integrate Cloud Providers
        </Button>
      </Card>
    </Slide>
  );
};

export default CloudIntegrationHub;