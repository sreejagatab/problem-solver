// ModelCard.js
import React from 'react';
import { Card, Heading, Text, Button } from '../UI';
import { Slide } from '../Animations';

const ModelCard = ({ model }) => {
  const handleViewModel = () => {
    // Implement logic to view the model details
    console.log('Viewing model:', model);
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
        <div className="mt-4 flex justify-end">
          <Button variant="primary" onClick={handleViewModel}>
            View Model
          </Button>
        </div>
      </Card>
    </Slide>
  );
};

export default ModelCard;