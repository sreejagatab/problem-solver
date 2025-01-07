// WorkflowAutomator.js
import React, { useState } from 'react';
import { Card, Heading, Text, Button, Expandable } from '../UI';
import { Fade } from '../Animations';

const WorkflowAutomator = () => {
  const [workflowName, setWorkflowName] = useState('');
  const [workflowSteps, setWorkflowSteps] = useState(['']);

  const handleAddStep = () => {
    setWorkflowSteps([...workflowSteps, '']);
  };

  const handleRemoveStep = (index) => {
    const updatedSteps = [...workflowSteps];
    updatedSteps.splice(index, 1);
    setWorkflowSteps(updatedSteps);
  };

  const handleSaveWorkflow = () => {
    // Implement logic to save the workflow
    console.log('Saving workflow:', {
      name: workflowName,
      steps: workflowSteps,
    });
  };

  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>Workflow Automator</Heading>
        <Text variant="lead" className="mt-2">
          Streamline your problem-solving tasks with automated workflows.
        </Text>
        <Expandable title="Workflow Builder" className="mt-4">
          <div className="space-y-4">
            <div>
              <Heading level={4}>Workflow Name</Heading>
              <input
                type="text"
                value={workflowName}
                onChange={(e) => setWorkflowName(e.target.value)}
                className="border rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <Heading level={4}>Workflow Steps</Heading>
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="text"
                    value={step}
                    onChange={(e) => {
                      const updatedSteps = [...workflowSteps];
                      updatedSteps[index] = e.target.value;
                      setWorkflowSteps(updatedSteps);
                    }}
                    className="border rounded-md px-3 py-2 flex-1 mr-2"
                  />
                  <Button variant="tertiary" onClick={() => handleRemoveStep(index)}>
                    Remove
                  </Button>
                </div>
              ))}
              <Button variant="primary" onClick={handleAddStep} className="mt-2">
                Add Step
              </Button>
            </div>
          </div>
        </Expandable>
        <Button variant="primary" onClick={handleSaveWorkflow} className="mt-4">
          Save Workflow
        </Button>
      </Card>
    </Fade>
  );
};

export default WorkflowAutomator;