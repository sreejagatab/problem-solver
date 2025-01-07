// SustainabilityTracker.js
import React from 'react';
import { Heading, Text, Card } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { EnvironmentalImpactTracker, GreenComputingOptions, CarbonOffsetIntegration } from '../components/Sustainability';

const SustainabilityTracker = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Sustainability Tracker</Heading>
            <Text variant="lead" className="mt-4">
              Monitor and reduce the environmental impact of your problem-solving activities.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Grid>
            <EnvironmentalImpactTracker />
            <GreenComputingOptions />
            <CarbonOffsetIntegration />
          </Grid>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityTracker;