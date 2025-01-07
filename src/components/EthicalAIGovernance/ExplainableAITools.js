// ExplainableAITools.js
import React from 'react';
import { Card, Heading, Text, Button } from '../UI';
import { Slide } from '../Animations';

const ExplainableAITools = () => {
  const handleViewExplainableAITools = () => {
    // Implement logic to view the available explainable AI tools
    console.log('Viewing explainable AI tools');
  };

  return (
    <Slide>
      <Card className="p-8">
        <Heading level={2}>Explainable AI Tools</Heading>
        <Text variant="lead" className="mt-2">
          Understand the inner workings of your AI models and ensure transparency.
        </Text>
        <div className="mt-4 space-y-4">
          <Text>
            The platform provides a suite of explainable AI tools to help you interpret and understand your
            machine learning models, including:
          </Text>
          <ul className="list-disc pl-6">
            <li>Feature Importance Visualization</li>
            <li>Model Interpretability Dashboards</li>
            <li>Counterfactual Explanation Generators</li>
            <li>Bias and Fairness Analysis Utilities</li>
          </ul>
          <Button variant="primary" onClick={handleViewExplainableAITools}>
            Explore Explainable AI Tools
          </Button>
        </div>
      </Card>
    </Slide>
  );
};

export default ExplainableAITools;