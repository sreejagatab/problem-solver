// WorkflowAutomation.js
import React from 'react';
import { Heading, Text, Card, Grid } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { WorkflowDesigner, WorkflowEngine, WorkflowTemplates } from '../components/WorkflowAutomation';

const WorkflowAutomation = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Workflow Automation</Heading>
            <Text variant="lead" className="mt-4">
              Streamline your problem-solving processes with custom workflow solutions.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Grid>
            <WorkflowDesigner />
            <WorkflowEngine />
            <WorkflowTemplates />
          </Grid>
        </div>
      </section>
    </div>
  );
};

export default WorkflowAutomation;
