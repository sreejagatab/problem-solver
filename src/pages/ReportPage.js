// ReportPage.js
import React from 'react';
import { Heading, Text, Button, Card } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { ReportGenerator } from '../components/Productivity';

const ReportPage = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Report Generator</Heading>
            <Text variant="lead" className="mt-4">
              Create comprehensive reports to document your problem-solving efforts.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Slide>
            <Card className="p-8">
              <ReportGenerator />
            </Card>
          </Slide>
        </div>
      </section>
    </div>
  );
};

export default ReportPage;