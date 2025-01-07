// About.js
import React from 'react';
import { Heading, Text, Button, Card } from '../components/UI';
import { Fade, Slide } from '../components/Animations';

const About = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>About Problem Solver</Heading>
            <Text variant="lead" className="mt-4">
              Discover how our platform empowers you to tackle complex challenges.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Slide direction="left">
              <Card>
                <Heading level={3}>Our Mission</Heading>
                <Text>
                  At Problem Solver, our mission is to provide a cutting-edge platform that empowers
                  individuals and teams to tackle complex challenges and drive innovation.
                </Text>
              </Card>
            </Slide>
            <Slide direction="right">
              <Card>
                <Heading level={3}>Our Approach</Heading>
                <Text>
                  We believe in the power of data-driven problem-solving, leveraging the latest
                  advancements in AI, machine learning, and quantum computing to deliver
                  comprehensive solutions.
                </Text>
              </Card>
            </Slide>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <Slide direction="up">
            <div className="text-center">
              <Heading level={2}>Join Our Mission</Heading>
              <Text variant="lead" className="mt-4">
                Become a part of the Problem Solver community and help shape the future of
                problem-solving.
              </Text>
              <Button variant="primary" className="mt-8">
                Get Started
              </Button>
            </div>
          </Slide>
        </div>
      </section>
    </div>
  );
};

export default About;