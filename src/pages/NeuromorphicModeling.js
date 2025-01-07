// NeuromorphicModeling.js
import React from 'react';
import { Heading, Text, Card, Grid } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { NeuromorphicModelCard } from '../components';

const NeuromorphicModeling = () => {
  const models = [
    {
      id: 1,
      name: 'Predictive Maintenance Model',
      domain: 'Manufacturing',
      description:
        'Neuromorphic model that predicts equipment failures and optimizes maintenance schedules.',
      efficiency: 90,
    },
    {
      id: 2,
      name: 'Supply Chain Optimization Model',
      domain: 'Logistics',
      description:
        'Neuromorphic optimization model that enhances supply chain visibility and efficiency.',
      efficiency: 85,
    },
    {
      id: 3,
      name: 'Anomaly Detection Model',
      domain: 'Finance',
      description:
        'Neuromorphic model that identifies anomalies and suspicious activities in financial data.',
      efficiency: 92,
    },
    {
      id: 4,
      name: 'Natural Language Processing Model',
      domain: 'Customer Service',
      description:
        'Neuromorphic NLP model that provides contextual understanding and intelligent response generation.',
      efficiency: 88,
    },
  ];

  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Neuromorphic Modeling</Heading>
            <Text variant="lead" className="mt-4">
              Explore the power of brain-inspired AI models to solve complex problems.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Slide>
            <Heading level={2}>Available Neuromorphic Models</Heading>
          </Slide>
          <Grid className="mt-8">
            {models.map((model) => (
              <NeuromorphicModelCard key={model.id} model={model} />
            ))}
          </Grid>
        </div>
      </section>
    </div>
  );
};

export default NeuromorphicModeling;