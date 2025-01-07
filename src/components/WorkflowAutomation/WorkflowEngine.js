// WorkflowEngine.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button, Alert } from '../UI';
import { Slide } from '../Animations';

const WorkflowEngine = () => {
  const [workflows, setWorkflows] = useState([]);
  const [selectedWorkflow, setSelectedWorkflow] = useState(null);
  const [workflowStatus, setWorkflowStatus] = useState('');

  useEffect(() => {
    // Fetch the user's saved workflows from the backend
    const fetchWorkflows = async () => {
      const response = await fetch('/api/workflows');
      const data = await response.json();
      setWorkflows(data);
    };
    fetchWorkflows();
  }, []);

  const handleRunWorkflow = () => {
    // Implement logic to execute the selected workflow
    setWorkflowStatus('Running');
    console.log('Running workflow:', selectedWorkflow);
  };

  const handleStopWorkflow = () => {
    // Implement logic to stop the running workflow
    setWorkflowStatus('Stopped');
    console.log('Stopping workflow:', selectedWorkflow);
  };

  return (
    <Slide>
      <Card className="p-8">
        <Heading level={2}>Workflow Engine</Heading>
        <Text variant="lead" className="mt-2">
          Execute your custom workflows to streamline your problem-solving process.
        </Text>
        <div className="mt-4 space-y-4">
          <div>
            <Heading level={4}>Select Workflow</Heading>
            <select
              value={selectedWorkflow?.id}
              onChange={(e) => setSelectedWorkflow(workflows.find((wf) => wf.id === e.target.value))}
              className="border rounded-md px-3 py-2 w-full"
            >
              <option value="">Select a workflow</option>
              {workflows.map((workflow) => (
                <option key={workflow.id} value={workflow.id}>
                  {workflow.name}
                </option>
              ))}
            </select>
          </div>
          {selectedWorkflow && (
            <div>
              <Heading level={4}>Workflow Details</Heading>
              <Text>{selectedWorkflow.description}</Text>
              {workflowStatus === '' && (
                <Button variant="primary" onClick={handleRunWorkflow} className="mt-2">
                  Run Workflow
                </Button>
              )}
              {workflowStatus === 'Running' && (
                <Alert variant="info" className="mt-2">
                  Workflow is currently running.{' '}
                  <Button variant="primary" onClick={handleStopWorkflow}>
                    Stop Workflow
                  </Button>
                </Alert>
              )}
              {workflowStatus === 'Stopped' && (
                <Alert variant="success" className="mt-2">
                  Workflow has been stopped.
                </Alert>
              )}
            </div>
          )}
        </div>
      </Card>
    </Slide>
  );
};

export default WorkflowEngine;