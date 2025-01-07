
// DecentralizedProblemSolving.js
import React from 'react';
import { Heading, Text, Card, Grid } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { IdeaBoard } from '../components/Community';

const DecentralizedProblemSolving = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Decentralized Problem Solving</Heading>
            <Text variant="lead" className="mt-4">
              Empower a global community to collaborate and solve complex problems in a decentralized way.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Slide>
            <Card className="p-8">
              <IdeaBoard />
            </Card>
          </Slide>
        </div>
      </section>
    </div>
  );
};

export default DecentralizedProblemSolving;