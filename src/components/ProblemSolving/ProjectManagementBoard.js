// ProjectManagementBoard.js
import React, { useState } from 'react';
import { Card, Heading, Text, Button, Expandable } from '../UI';
import { Slide } from '../Animations';

const ProjectManagementBoard = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Optimization Algorithm',
      status: 'In Progress',
      tasks: [
        { id: 1, name: 'Research Algorithm', status: 'Completed' },
        { id: 2, name: 'Implement Algorithm', status: 'In Progress' },
        { id: 3, name: 'Test Algorithm', status: 'To Do' },
      ],
    },
    {
      id: 2,
      name: 'Data Visualization Dashboard',
      status: 'Pending',
      tasks: [
        { id: 1, name: 'Design Layout', status: 'Completed' },
        { id: 2, name: 'Integrate Data Sources', status: 'In Progress' },
        { id: 3, name: 'Implement Charts', status: 'To Do' },
        { id: 4, name: 'Test Dashboard', status: 'To Do' },
      ],
    },
    {
      id: 3,
      name: 'Natural Language Processing Model',
      status: 'Completed',
      tasks: [
        { id: 1, name: 'Data Collection', status: 'Completed' },
        { id: 2, name: 'Model Training', status: 'Completed' },
        { id: 3, name: 'Model Evaluation', status: 'Completed' },
        { id: 4, name: 'Model Deployment', status: 'Completed' },
      ],
    },
  ]);

  const handleViewProject = (project) => {
    // Implement logic to view the project details
    console.log('Viewing project:', project);
  };

  return (
    <Slide>
      <Card className="p-8">
        <Heading level={2}>Project Management Board</Heading>
        <Text variant="lead" className="mt-2">
          Monitor the progress of your problem-solving projects.
        </Text>
        {projects.map((project) => (
          <Expandable key={project.id} title={project.name} className="mt-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Text>Status:</Text>
                <Text>{project.status}</Text>
              </div>
              <div>
                <Heading level={4}>Tasks</Heading>
                {project.tasks.map((task) => (
                  <div key={task.id} className="flex justify-between">
                    <Text>{task.name}</Text>
                    <Text>{task.status}</Text>
                  </div>
                ))}
              </div>
              <Button variant="primary" onClick={() => handleViewProject(project)}>
                View Project
              </Button>
            </div>
          </Expandable>
        ))}
      </Card>
    </Slide>
  );
};

export default ProjectManagementBoard;