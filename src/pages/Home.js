// Home.js
import React from 'react';
import { Heading, Text, Button, Card, Grid } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { RecommendationEngine, InteractiveDemo } from '../components';

const Home = () => {
  return (
    <div>
      <section className="bg-primary-500 py-20 text-white">
        <Fade>
          <div className="container mx-auto px-4">
            <Heading level={1}>Welcome to Problem Solver</Heading>
            <Text variant="lead" className="mt-4">
              Unlock your problem-solving potential with our advanced platform.
            </Text>
            <div className="mt-8">
              <Button variant="secondary" className="mr-4">
                Get Started
              </Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </Fade>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Slide direction="up">
            <Heading level={2} className="text-center">
              Featured Solutions
            </Heading>
          </Slide>
          <Grid className="mt-8">
            <Card>
              <Heading level={4}>Predictive Maintenance</Heading>
              <Text>Leverage AI to predict equipment failures and optimize your operations.</Text>
              <Button variant="primary" className="mt-4">
                Explore Solution
              </Button>
            </Card>
            <Card>
              <Heading level={4}>Workflow Automation</Heading>
              <Text>Streamline your problem-solving tasks with custom workflow solutions.</Text>
              <Button variant="primary" className="mt-4">
                Explore Solution
              </Button>
            </Card>
            <Card>
              <Heading level={4}>Quantum Optimization</Heading>
              <Text>Solve complex problems using quantum-inspired optimization techniques.</Text>
              <Button variant="primary" className="mt-4">
                Explore Solution
              </Button>
            </Card>
          </Grid>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RecommendationEngine />
            <InteractiveDemo />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;