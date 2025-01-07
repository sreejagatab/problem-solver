// ProblemCard.js
import React from 'react';
import { Card, Heading, Text, Button, Tooltip } from '../UI';
import { Slide } from '../Animations';

const ProblemCard = ({ problem }) => {
  const handleViewProblem = () => {
    // Implement logic to view the problem details
    console.log('Viewing problem:', problem);
  };

  return (
    <Slide>
      <Card className="p-6">
        <Heading level={4}>{problem.title}</Heading>
        <Text variant="small" className="mt-1">
          {problem.domain}
        </Text>
        <Text variant="body" className="mt-2">
          {problem.description}
        </Text>
        <div className="mt-4 flex justify-between items-center">
          <div>
            <Tooltip content="Problem Difficulty">
              <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md text-sm">
                {problem.difficulty}
              </span>
            </Tooltip>
          </div>
          <Button variant="primary" onClick={handleViewProblem}>
            View Problem
          </Button>
        </div>
      </Card>
    </Slide>
  );
};

export default ProblemCard;