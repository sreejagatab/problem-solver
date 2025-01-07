// ExtensionAPI.js
import React from 'react';
import { Card, Button, Heading, Text } from './UI';

const ExtensionAPI = () => {
  return (
    <div className="p-8">
      <Heading level={2}>Extension API</Heading>
      <Card className="mt-8">
        <Heading level={3}>Develop Custom Components</Heading>
        <Text variant="lead" className="mt-2">
          Leverage our robust Extension API to build your own UI components and integrate them seamlessly.
        </Text>
        <Button variant="primary" className="mt-4">
          Learn More
        </Button>
      </Card>

      <Card className="mt-8">
        <Heading level={3}>Extend Existing Functionality</Heading>
        <Text variant="lead" className="mt-2">
          Enhance the platform's capabilities by developing custom extensions and integrations.
        </Text>
        <Button variant="primary" className="mt-4">
          Explore Extensions
        </Button>
      </Card>

      <Card className="mt-8">
        <Heading level={3}>Integrate with Third-Party Services</Heading>
        <Text variant="lead" className="mt-2">
          Connect your favorite tools and applications with our extensible API.
        </Text>
        <Button variant="primary" className="mt-4">
          API Documentation
        </Button>
      </Card>
    </div>
  );
};

export default ExtensionAPI;