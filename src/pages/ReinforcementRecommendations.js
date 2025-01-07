// ReinforcementRecommendations.js
import React from 'react';
import { Heading, Text, Card } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { ReinforcementRecommender } from '../components/Intelligence';

const ReinforcementRecommendations = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Reinforcement Recommendations</Heading>
            <Text variant="lead" className="mt-4">
              Discover personalized recommendations powered by advanced AI.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Slide>
            <Card className="p-8">
              <ReinforcementRecommender />
            </Card>
          </Slide>
        </div>
      </section>
    </div>
  );
};

export default ReinforcementRecommendations;