// AnomalyDetectionDashboard.js
import React from 'react';
import { Heading, Text, Card, Grid } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { OperationalDashboard, AlertNotifications } from '../components/PredictiveIntelligence';

const AnomalyDetectionDashboard = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Anomaly Detection Dashboard</Heading>
            <Text variant="lead" className="mt-4">
              Proactively identify and address critical issues with the help of advanced AI and monitoring capabilities.
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

export default AnomalyDetectionDashboard;