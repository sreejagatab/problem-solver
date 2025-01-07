// GreenComputingOptions.js
import React from 'react';
import { Card, Heading, Text, Button } from '../UI';
import { Fade } from '../Animations';

const GreenComputingOptions = () => {
  const handleViewGreenOptions = () => {
    // Implement logic to view the available green computing options
    console.log('Viewing green computing options');
  };

  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>Green Computing Options</Heading>
        <Text variant="lead" className="mt-2">
          Explore eco-friendly ways to power your problem-solving workloads.
        </Text>
        <div className="mt-4 space-y-4">
          <Text>
            The platform offers several green computing options to help reduce your environmental impact,
            including:
          </Text>
          <ul className="list-disc pl-6">
            <li>Cloud infrastructure with renewable energy sources</li>
            <li>Energy-efficient hardware and devices</li>
            <li>Serverless and containerized architectures</li>
            <li>Intelligent resource scaling and optimization</li>
            <li>Sustainable data center practices</li>
          </ul>
          <Button variant="primary" onClick={handleViewGreenOptions}>
            View Green Computing Options
          </Button>
        </div>
      </Card>
    </Fade>
  );
};

export default GreenComputingOptions;