// Tutorial.js
import React from 'react';
import { Heading, Text, Button, Card, Accordion } from '../components/UI';
import { Fade, Slide } from '../components/Animations';

const Tutorial = () => {
  const tutorials = [
    {
      title: 'Getting Started',
      content:
        'Learn how to navigate the platform, create an account, and start solving problems with our easy-to-follow guide.',
    },
    {
      title: 'Data Exploration',
      content:
        'Discover how to upload, analyze, and visualize your data using the advanced tools and features within the platform.',
    },
    {
      title: 'Problem Modeling',
      content:
        'Explore the process of defining your problem, selecting the appropriate machine learning models, and configuring the necessary parameters.',
    },
    {
      title: 'Solution Interpretation',
      content:
        'Understand how to interpret the generated solutions, gain insights, and take actionable steps to address your problem effectively.',
    },
    {
      title: 'Collaboration and Sharing',
      content:
        'Learn how to collaborate with team members, share your problem-solving efforts, and leverage the collective knowledge of the community.',
    },
  ];

  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Tutorial</Heading>
            <Text variant="lead" className="mt-4">
              Get started with the Problem Solver platform with our comprehensive tutorials.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Slide direction="up">
            <Card className="p-8">
              <Heading level={2}>Learn the Basics</Heading>
              <Text variant="lead" className="mt-4">
                Explore our step-by-step tutorials to master the key features and functionalities of the
                Problem Solver platform.
              </Text>
              <Accordion className="mt-8">
                {tutorials.map((tutorial, index) => (
                  <div key={index} className="border-b">
                    <Accordion.Item title={tutorial.title}>
                      <Text>{tutorial.content}</Text>
                    </Accordion.Item>
                  </div>
                ))}
              </Accordion>
            </Card>
          </Slide>
        </div>
      </section>
    </div>
  );
};

export default Tutorial;