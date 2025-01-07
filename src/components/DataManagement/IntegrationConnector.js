// IntegrationConnector.js
import React from 'react';
import { Card, Heading, Text, Button } from '../UI';
import { Fade } from '../Animations';

const IntegrationConnector = () => {
  const handleConnectIntegration = () => {
    // Implement logic to connect the integration
    console.log('Connecting integration');
  };

  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>Integration Connector</Heading>
        <Text variant="lead" className="mt-2">
          Seamlessly integrate your favorite tools and services with the platform.
        </Text>
        <div className="mt-4 space-y-4">
          <div>
            <Heading level={4}>Connect to External Data Sources</Heading>
            <Text>
              Integrate with various cloud storage, database, and API providers to access your data directly within the platform.
            </Text>
            <Button variant="primary" onClick={handleConnectIntegration} className="mt-2">
              Connect Integration
            </Button>
          </div>
          <div>
            <Heading level={4}>Utilize External Tools and Services</Heading>
            <Text>
              Extend the platform's capabilities by connecting to your preferred analysis, visualization, and collaboration tools.
            </Text>
            <Button variant="primary" onClick={handleConnectIntegration} className="mt-2">
              Connect Integration
            </Button>
          </div>
        </div>
      </Card>
    </Fade>
  );
};

export default IntegrationConnector;