// PredictiveMaintenance.js
import React from 'react';
import { Heading, Text, Card } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { PredictiveMaintenanceModel, OperationalDashboard } from '../components/PredictiveIntelligence';

const PredictiveMaintenance = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Predictive Maintenance</Heading>
            <Text variant="lead" className="mt-4">
              Leverage AI-powered predictive maintenance to optimize your operations.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Grid>
            <PredictiveMaintenanceModel />
            <OperationalDashboard />
          </Grid>
        </div>
      </section>
    </div>
  );
};

export default PredictiveMaintenance;