// ModelManagement.js
import React from 'react';
import { Heading, Text, Button, Card, Grid } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { ModelCard } from '../components';

const ModelManagement = () => {
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
            <Heading level={1}>Model Management</Heading>
            <Text variant="lead" className="mt-4">
              Discover and manage the AI models powering your problem-solving efforts.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Slide direction="up">
            <Heading level={2}>Available Models</Heading>
          </Slide>
          <Grid className="mt-8">
            {models.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </Grid>
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <Slide direction="up">
            <div className="text-center">
              <Heading level={2}>Explore Model Marketplace</Heading>
              <Text variant="lead" className="mt-4">
                Browse our curated collection of advanced AI models to enhance your problem-solving
                capabilities.
              </Text>
              <Button variant="primary" className="mt-8">
                Visit Marketplace
              </Button>
            </div>
          </Slide>
        </div>
      </section>
    </div>
  );
};

export default ModelManagement;