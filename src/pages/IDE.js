// IDE.js
import React from 'react';
import { Heading, Text, Card } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { CodeEditor } from '../components/Productivity';

const IDE = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Integrated Development Environment</Heading>
            <Text variant="lead" className="mt-4">
              Write, test, and deploy your problem-solving code directly within the platform.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Slide>
            <Card className="p-8">
              <CodeEditor />
            </Card>
          </Slide>
        </div>
      </section>
    </div>
  );
};

export default IDE;