// Dashboard.js
import React from 'react';
import { Heading, Text, Button, Card, Grid } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { ProblemCard, SolutionCard, ReinforcementRecommender } from '../components';

const Dashboard = () => {
  const problems = [
    {
      id: 1,
      title: 'Optimize Production Schedule',
      domain: 'Manufacturing',
      description:
        'Develop an AI-powered solution to optimize the production schedule and improve efficiency.',
      difficulty: 'Advanced',
    },
    {
      id: 2,
      title: 'Predict Customer Churn',
      domain: 'Finance',
      description:
        'Build a machine learning model to accurately predict customer churn and implement retention strategies.',
      difficulty: 'Intermediate',
    },
    {
      id: 3,
      title: 'Enhance Supply Chain Visibility',
      domain: 'Logistics',
      description:
        'Create a comprehensive dashboard to improve supply chain visibility and streamline operations.',
      difficulty: 'Expert',
    },
  ];

  const solutions = [
    {
      id: 1,
      title: 'Optimized Production Scheduling',
      author: 'John Doe',
      description:
        'Leveraged reinforcement learning and quantum-inspired optimization to create a highly efficient production schedule.',
      performance: 92,
    },
    {
      id: 2,
      title: 'Churn Prediction Model',
      author: 'Jane Smith',
      description:
        'Developed a deep learning-based model that accurately predicts customer churn with 85% accuracy.',
      performance: 85,
    },
    {
      id: 3,
      title: 'Supply Chain Visibility Dashboard',
      author: 'Bob Johnson',
      description:
        'Designed an interactive dashboard that provides real-time visibility into the entire supply chain.',
      performance: 90,
    },
  ];

  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Welcome to Your Dashboard</Heading>
            <Text variant="lead" className="mt-4">
              Explore the latest problem-solving tools and resources.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Slide direction="up">
            <Heading level={2}>Recent Problems</Heading>
          </Slide>
          <Grid className="mt-8">
            {problems.map((problem) => (
              <ProblemCard key={problem.id} problem={problem} />
            ))}
          </Grid>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Slide direction="up">
            <Heading level={2}>Featured Solutions</Heading>
          </Slide>
          <Grid className="mt-8">
            {solutions.map((solution) => (
              <SolutionCard key={solution.id} solution={solution} />
            ))}
          </Grid>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ReinforcementRecommender />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;