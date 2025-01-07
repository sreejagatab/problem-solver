// Accessibility.js
import React from 'react';
import { Heading, Text, Card, Grid } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { KeyboardNavigation, ScreenReaderSupport, HighContrastMode, CustomizationSettings } from '../components/Accessibility';

const Accessibility = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Accessibility</Heading>
            <Text variant="lead" className="mt-4">
              Ensuring an inclusive and barrier-free experience for all users.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Grid>
            <KeyboardNavigation />
            <ScreenReaderSupport />
            <HighContrastMode />
            <CustomizationSettings />
          </Grid>
        </div>
      </section>
    </div>
  );
};

export default Accessibility;