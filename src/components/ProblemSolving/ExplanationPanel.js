// ExplanationPanel.js
import React from 'react';
import { Card, Heading, Text, Button, Expandable } from '../UI';
import { Fade } from '../Animations';

const ExplanationPanel = ({ solution }) => {
  const handleViewExplanation = () => {
    // Implement logic to view the solution explanation
    console.log('Viewing solution explanation:', solution);
  };

  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>Solution Explanation</Heading>
        <Text variant="lead" className="mt-2">
          Understand the reasoning behind the proposed solution.
        </Text>
        <Expandable title="Explanation" className="mt-4">
          <Text>{solution.explanation}</Text>
        </Expandable>
        <Button variant="primary" onClick={handleViewExplanation} className="mt-4">
          View Full Explanation
        </Button>
      </Card>
    </Fade>
  );
};

export default ExplanationPanel;