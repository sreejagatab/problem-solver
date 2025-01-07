// AutomatedTroubleshooting.js
import React from 'react';
import { Heading, Text, Card } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { OperationalDashboard, AlertNotifications } from '../components/PredictiveIntelligence';

const AutomatedTroubleshooting = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Automated Troubleshooting</Heading>
            <Text variant="lead" className="mt-4">
              Proactively identify and resolve issues with the help of advanced AI and monitoring capabilities.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Grid>
            <OperationalDashboard />
            <AlertNotifications />
          </Grid>
        </div>
      </section>
    </div>
  );
};

export default AutomatedTroubleshooting;