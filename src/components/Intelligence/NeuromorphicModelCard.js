// NeuromorphicModelCard.js
import React from 'react';
import { Card, Heading, Text, Button, Tooltip } from '../UI';
import { Slide } from '../Animations';

const NeuromorphicModelCard = ({ model }) => {
  const handleViewModel = () => {
    // Implement logic to view the neuromorphic model details
    console.log('Viewing neuromorphic model:', model);
  };

  return (
    <Slide>
      <Card className="p-6">
        <Heading level={4}>{model.name}</Heading>
        <Text variant="small" className="mt-1">
          {model.domain}
        </Text>
        <Text variant="body" className="mt-2">
          {model.description}
        </Text>
        <div className="mt-4 flex justify-between items-center">
          <div>
            <Tooltip content="Model Efficiency">
              <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md text-sm">
                {model.efficiency}% Efficient
              </span>
            </Tooltip>
          </div>
          <Button variant="primary" onClick={handleViewModel}>
            View Model
          </Button>
        </div>
      </Card>
    </Slide>
  );
};

export default NeuromorphicModelCard;