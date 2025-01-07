// HybridCloudManagement.js
import React from 'react';
import { Heading, Text, Card, Grid } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { DistributedResourceManager, CloudIntegrationHub } from '../components/HybridCompute';

const HybridCloudManagement = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Hybrid Cloud Management</Heading>
            <Text variant="lead" className="mt-4">
              Manage and optimize your hybrid cloud infrastructure for maximum flexibility and performance.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Grid>
            <DistributedResourceManager />
            <CloudIntegrationHub />
          </Grid>
        </div>
      </section>
    </div>
  );
};

export default HybridCloudManagement;