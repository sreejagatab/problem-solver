// WorkflowDesigner.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button, Expandable } from '../UI';
import { Fade } from '../Animations';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const WorkflowDesigner = () => {
  const [workflowSteps, setWorkflowSteps] = useState([
    { id: 'step1', name: 'Data Preparation' },
    { id: 'step2', name: 'Model Training' },
    { id: 'step3', name: 'Model Evaluation' },
    { id: 'step4', name: 'Model Deployment' },
  ]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(workflowSteps);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setWorkflowSteps(items);
  };

  const handleSaveWorkflow = () => {
    // Implement logic to save the workflow
    console.log('Saving workflow:', workflowSteps);
  };

  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>Workflow Designer</Heading>
        <Text variant="lead" className="mt-2">
          Visually design and customize your problem-solving workflows.
        </Text>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="workflow-steps">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {workflowSteps.map((step, index) => (
                  <Draggable key={step.id} draggableId={step.id} index={index}>
                    {(provided) => (
                      <div
                        className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {step.name}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <Button variant="primary" onClick={handleSaveWorkflow} className="mt-4">
          Save Workflow
        </Button>
      </Card>
    </Fade>
  );
};

export default WorkflowDesigner;