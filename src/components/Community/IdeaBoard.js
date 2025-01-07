// IdeaBoard.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button, Expandable } from '../UI';
import { Fade } from '../Animations';

const IdeaBoard = () => {
  const [ideas, setIdeas] = useState([
    {
      id: 1,
      title: 'Predictive Maintenance for Industrial Equipment',
      description:
        'Develop a machine learning model to predict equipment failures and optimize maintenance schedules.',
      upvotes: 42,
      comments: 15,
    },
    {
      id: 2,
      title: 'Generative AI for Personalized Content Creation',
      description:
        'Leverage generative AI techniques to automate the creation of personalized content for users.',
      upvotes: 28,
      comments: 9,
    },
    {
      id: 3,
      title: 'Decentralized Problem-Solving Platform',
      description:
        'Build a blockchain-based platform for collaborative problem-solving with secure data sharing and transparent workflows.',
      upvotes: 35,
      comments: 12,
    },
  ]);

  const handleViewIdea = (idea) => {
    // Implement logic to view the idea details
    console.log('Viewing idea:', idea);
  };

  const handleUpvote = (idea) => {
    // Implement logic to upvote the idea
    console.log('Upvoting idea:', idea);
  };

  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>Idea Board</Heading>
        <Text variant="lead" className="mt-2">
          Collaborate with the community and share your problem-solving ideas.
        </Text>
        {ideas.map((idea) => (
          <Expandable key={idea.id} title={idea.title} className="mt-4">
            <div className="space-y-2">
              <Text>{idea.description}</Text>
              <div className="flex justify-between items-center">
                <div>
                  <Button variant="tertiary" onClick={() => handleUpvote(idea)}>
                    Upvotes: {idea.upvotes}
                  </Button>
                  <span className="ml-2">Comments: {idea.comments}</span>
                </div>
                <Button variant="primary" onClick={() => handleViewIdea(idea)}>
                  View Idea
                </Button>
              </div>
            </div>
          </Expandable>
        ))}
      </Card>
    </Fade>
  );
};

export default IdeaBoard;