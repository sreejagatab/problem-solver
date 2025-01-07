// ModelMarketplace.js
import React from 'react';
import { Heading, Text, Card, Grid } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { ModelCard } from '../components';

const ModelMarketplace = () => {
  const models = [
    {
      id: 1,
      name: 'Predictive Maintenance Model',
      domain: 'Manufacturing',
      description:
        'AI-powered model that predicts equipment failures and optimizes maintenance schedules.',
      efficiency: 92,
    },
    {
      id: 2,
      name: 'Customer Churn Prediction Model',
      domain: 'Finance',
      description:
        'Machine learning model that accurately forecasts customer churn to enable targeted retention strategies.',
      efficiency: 85,
    },
    {
      id: 3,
      name: 'Supply Chain Optimization Model',
      domain: 'Logistics',
      description:
        'Quantum-inspired optimization model that enhances supply chain visibility and efficiency.',
      efficiency: 88,
    },
    {
      id: 4,
      name: 'Generative Solution Model',
      domain: 'Problem-Solving',
      description:
        'Cutting-edge generative AI model that creates innovative solutions to complex problems.',
      efficiency: 92,
    },
  ];

  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Model Marketplace</Heading>
            <Text variant="lead" className="mt-4">
              Discover and deploy advanced AI models to enhance your problem-solving capabilities.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Slide>
            <Heading level={2}>Available Models</Heading>
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

export default ModelMarketplace;