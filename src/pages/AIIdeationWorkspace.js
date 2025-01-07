// AIIdeationWorkspace.js
import React from 'react';
import { Heading, Text, Card } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { GenerativeSolutionGenerator } from '../components/Intelligence';

const AIIdeationWorkspace = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>AI Ideation Workspace</Heading>
            <Text variant="lead" className="mt-4">
              Unlock innovative solutions with the power of advanced generative AI.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Slide>
            <Card className="p-8">
              <GenerativeSolutionGenerator />
            </Card>
          </Slide>
        </div>
      </section>
    </div>
  );
};

export default AIIdeationWorkspace;