// CollaborativeKnowledge.js
import React from 'react';
import { Heading, Text, Card } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { IdeaBoard } from '../components/Community';

const CollaborativeKnowledge = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Collaborative Knowledge</Heading>
            <Text variant="lead" className="mt-4">
              Foster a culture of shared knowledge and collective problem-solving.
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

export default CollaborativeKnowledge;