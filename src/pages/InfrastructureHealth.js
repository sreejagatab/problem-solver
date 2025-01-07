// InfrastructureHealth.js
import React from 'react';
import { Heading, Text, Card } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { HealthMonitor } from '../components/Governance';

const InfrastructureHealth = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Infrastructure Health</Heading>
            <Text variant="lead" className="mt-4">
              Monitor the performance and reliability of the platform's underlying infrastructure.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Slide>
            <Card className="p-8">
              <HealthMonitor />
            </Card>
          </Slide>
        </div>
      </section>
    </div>
  );
};

export default InfrastructureHealth;