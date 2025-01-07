// PersonalizedExperience.js
import React from 'react';
import { Heading, Text, Card, Grid } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { UserProfileManager, RecommendationEngine, AdaptiveUI } from '../components/Personalization';

const PersonalizedExperience = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Personalized Experience</Heading>
            <Text variant="lead" className="mt-4">
              Tailor the platform to your individual preferences and needs.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Grid>
            <UserProfileManager />
            <RecommendationEngine />
            <AdaptiveUI />
          </Grid>
        </div>
      </section>
    </div>
  );
};

export default PersonalizedExperience;