// IntegrationHub.js
import React from 'react';
import { Heading, Text, Card } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { IntegrationConnector } from '../components/DataManagement';

const IntegrationHub = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Integration Hub</Heading>
            <Text variant="lead" className="mt-4">
              Seamlessly connect your favorite tools and services to the platform.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Slide>
            <Card className="p-8">
              <IntegrationConnector />
            </Card>
          </Slide>
        </div>
      </section>
    </div>
  );
};

export default IntegrationHub;