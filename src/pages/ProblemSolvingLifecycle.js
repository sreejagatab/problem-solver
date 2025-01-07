// ProblemSolvingLifecycle.js
import React from 'react';
import { Heading, Text, Card, Accordion } from '../components/UI';
import { Fade, Slide } from '../components/Animations';

const ProblemSolvingLifecycle = () => {
  const lifecycle = [
    {
      title: 'Problem Definition',
      content:
        'Clearly articulate the problem statement, identify the key objectives, and gather relevant data and information.',
    },
    {
      title: 'Data Exploration',
      content:
        'Analyze and visualize the data to uncover patterns, trends, and insights that can inform the problem-solving process.',
    },
    {
      title: 'Model Selection',
      content:
        'Choose the appropriate machine learning models and algorithms based on the problem characteristics and data availability.',
    },
    {
      title: 'Model Training',
      content:
        'Prepare the data, train the selected models, and optimize their performance using advanced techniques.',
    },
    {
      title: 'Solution Evaluation',
      content:
        'Assess the generated solutions, interpret the results, and determine the most effective approach to address the problem.',
    },
    {
      title: 'Deployment and Monitoring',
      content:
        'Implement the chosen solution, continuously monitor its performance, and make adjustments as needed.',
    },
  ];

  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Problem Solving Lifecycle</Heading>
            <Text variant="lead" className="mt-4">
              Explore the comprehensive process of solving complex problems.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Slide>
            <Card className="p-8">
              <Heading level={2}>The Problem Solving Lifecycle</Heading>
              <Text variant="lead" className="mt-4">
                Understand the key stages involved in tackling complex challenges.
              </Text>
              <Accordion className="mt-8">
                {lifecycle.map((step, index) => (
                  <div key={index} className="border-b">
                    <Accordion.Item title={step.title}>
                      <Text>{step.content}</Text>
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

export default ProblemSolvingLifecycle;