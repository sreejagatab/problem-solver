// SolutionCard.js
import React from 'react';
import { Card, Heading, Text, Button, Tooltip } from '../UI';
import { Slide } from '../Animations';

const SolutionCard = ({ solution }) => {
  const handleViewSolution = () => {
    // Implement logic to view the solution details
    console.log('Viewing solution:', solution);
  };

  return (
    <Slide>
      <Card className="p-6">
        <Heading level={4}>{solution.title}</Heading>
        <Text variant="small" className="mt-1">
          {solution.author}
        </Text>
        <Text variant="body" className="mt-2">
          {solution.description}
        </Text>
        <div className="mt-4 flex justify-between items-center">
          <div>
            <Tooltip content="Solution Performance">
              <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md text-sm">
                {solution.performance}
              </span>
            </Tooltip>
          </div>
          <Button variant="primary" onClick={handleViewSolution}>
            View Solution
          </Button>
        </div>
      </Card>
    </Slide>
  );
};

export default SolutionCard;