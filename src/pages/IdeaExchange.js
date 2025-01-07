// IdeaExchange.js
import React from 'react';
import { Heading, Text, Card, Expandable } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { IdeaBoard } from '../components/Community';

const IdeaExchange = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Idea Exchange</Heading>
            <Text variant="lead" className="mt-4">
              Collaborate and share innovative ideas with the Problem Solver community.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Slide>
            <Card className="p-8">
              <Heading level={2}>Idea Board</Heading>
              <Text variant="lead" className="mt-4">
                Explore and contribute to the growing collection of problem-solving ideas.
              </Text>
              <IdeaBoard />
            </Card>
          </Slide>
        </div>
      </section>
    </div>
  );
};

export default IdeaExchange;