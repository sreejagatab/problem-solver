// WorkflowTemplates.js
import React from 'react';
import { Card, Heading, Text, Button } from '../UI';
import { Fade } from '../Animations';

const WorkflowTemplates = () => {
  const handleUseTemplate = (template) => {
    // Implement logic to use the selected workflow template
    console.log('Using workflow template:', template);
  };

  const workflowTemplates = [
    {
      id: 'template1',
      name: 'Data Analysis Workflow',
      description: 'A comprehensive workflow for data exploration, cleaning, and analysis.',
    },
    {
      id: 'template2',
      name: 'Model Training Workflow',
      description: 'A streamlined workflow for machine learning model training and evaluation.',
    },
    {
      id: 'template3',
      name: 'Problem Solving Lifecycle',
      description: 'A structured workflow to guide you through the entire problem-solving process.',
    },
  ];

  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>Workflow Templates</Heading>
        <Text variant="lead" className="mt-2">
          Get started quickly with our pre-built workflow templates.
        </Text>
        <div className="mt-4 space-y-4">
          {workflowTemplates.map((template) => (
            <div key={template.id}>
              <Heading level={4}>{template.name}</Heading>
              <Text>{template.description}</Text>
              <Button variant="primary" onClick={() => handleUseTemplate(template)} className="mt-2">
                Use Template
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </Fade>
  );
};

export default WorkflowTemplates;