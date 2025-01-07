// EdgeComputing.js
import React from 'react';
import { Heading, Text, Card } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { DistributedResourceManager, EdgeDeviceConnector } from '../components/HybridCompute';

const EdgeComputing = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Edge Computing</Heading>
            <Text variant="lead" className="mt-4">
              Leverage the power of edge devices and distributed computing for real-time problem-solving.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Grid>
            <DistributedResourceManager />
            <EdgeDeviceConnector />
          </Grid>
        </div>
      </section>
    </div>
  );
};

export default EdgeComputing;