// VisualAnalytics.js
import React from 'react';
import { Heading, Text, Card } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { VisualAnalyticsPanel } from '../components/Visualization';

const VisualAnalytics = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Visual Analytics</Heading>
            <Text variant="lead" className="mt-4">
              Unlock valuable insights through interactive data visualizations.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Slide>
            <Card className="p-8">
              <VisualAnalyticsPanel />
            </Card>
          </Slide>
        </div>
      </section>
    </div>
  );
};

export default VisualAnalytics;