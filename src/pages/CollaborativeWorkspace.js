// CollaborativeWorkspace.js
import React from 'react';
import { Heading, Text, Card } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { CollaborativeWhiteboard } from '../components/Productivity';

const CollaborativeWorkspace = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Collaborative Workspace</Heading>
            <Text variant="lead" className="mt-4">
              Ideate and problem-solve together with your team in real-time.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Slide>
            <Card className="p-8">
              <CollaborativeWhiteboard />
            </Card>
          </Slide>
        </div>
      </section>
    </div>
  );
};

export default CollaborativeWorkspace;