// ProblemDetail.js
import React from 'react';
import { Heading, Text, Button, Card, Flex } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { ExplanationPanel } from '../components/ProblemSolving';

const ProblemDetail = () => {
  const problem = {
    title: 'Optimize Production Schedule',
    domain: 'Manufacturing',
    description:
      'Develop an AI-powered solution to optimize the production schedule and improve efficiency.',
    difficulty: 'Advanced',
    explanation:
      'The proposed solution leverages a combination of reinforcement learning and quantum-inspired optimization algorithms to analyze historical production data, identify bottlenecks, and generate an optimized schedule that minimizes downtime, resource utilization, and delivery times.',
  };

  const solution = {
    title: 'Optimized Production Scheduling',
    author: 'John Doe',
    description:
      'Leveraged reinforcement learning and quantum-inspired optimization to create a highly efficient production schedule.',
    performance: 92,
  };

  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Problem Detail</Heading>
            <Text variant="lead" className="mt-4">
              Explore the problem statement and the proposed solution.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Flex>
            <Card className="p-8 flex-1 mr-4">
              <Heading level={2}>{problem.title}</Heading>
              <Text variant="small" className="mt-1">
                {problem.domain}
              </Text>
              <Text variant="body" className="mt-4">
                {problem.description}
              </Text>
              <div className="mt-4">
                <Heading level={4}>Difficulty</Heading>
                <Text>{problem.difficulty}</Text>
              </div>
            </Card>
            <Card className="p-8 flex-1">
              <Heading level={2}>{solution.title}</Heading>
              <Text variant="small" className="mt-1">
                {solution.author}
              </Text>
              <Text variant="body" className="mt-4">
                {solution.description}
              </Text>
              <div className="mt-4">
                <Heading level={4}>Performance</Heading>
                <Text>{solution.performance}%</Text>
              </div>
            </Card>
          </Flex>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Slide>
            <Card className="p-8">
              <ExplanationPanel solution={solution} />
            </Card>
          </Slide>
        </div>
      </section>
    </div>
  );
};

export default ProblemDetail;