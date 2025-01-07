// DigitalTwinMarketplace.js
import React from 'react';
import { Heading, Text, Card, Grid } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { ModelCard } from '../components';

const DigitalTwinMarketplace = () => {
  const models = [
    {
      id: 1,
      name: 'Manufacturing Process Twin',
      domain: 'Manufacturing',
      description:
        'Detailed digital twin model of a manufacturing process, enabling simulation and optimization.',
      efficiency: 92,
    },
    {
      id: 2,
      name: 'Supply Chain Digital Twin',
      domain: 'Logistics',
      description:
        'Comprehensive digital twin of the supply chain, providing real-time visibility and predictive capabilities.',
      efficiency: 88,
    },
    {
      id: 3,
      name: 'Building Energy Digital Twin',
      domain: 'Facilities',
      description:
        'Intelligent digital twin model of a building s energy systems, supporting efficiency improvements.',
      efficiency: 85,
    },
    {
      id: 4,
      name: 'Patient Health Digital Twin',
      domain: 'Healthcare',
      description:
        'Personalized digital twin model of a patient s health, enabling predictive care and wellness optimization.',
      efficiency: 90,
    },
  ];

  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Digital Twin Marketplace</Heading>
            <Text variant="lead" className="mt-4">
              Explore and deploy advanced digital twin models to enhance your problem-solving capabilities.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Slide>
            <Heading level={2}>Available Digital Twins</Heading>
          </Slide>
          <Grid className="mt-8">
            {models.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </Grid>
        </div>
      </section>
    </div>
  );
};

export default DigitalTwinMarketplace;