// ContentScheduler.js
import React, { useState } from 'react';
import { Card, Heading, Text, Button, Expandable } from '../UI';
import { Fade } from '../Animations';
import { format } from 'date-fns';

const ContentScheduler = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Optimizing Your Problem-Solving Process',
      scheduledAt: '2023-06-01T10:00:00Z',
    },
    {
      id: 2,
      title: 'Leveraging AI for Better Decision Making',
      scheduledAt: '2023-06-15T14:30:00Z',
    },
    {
      id: 3,
      title: 'Collaboration Strategies for Complex Problems',
      scheduledAt: '2023-07-01T09:00:00Z',
    },
  ]);

  const handleSchedulePost = () => {
    // Implement logic to schedule a new social media post
    console.log('Scheduling new social media post');
  };

  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>Content Scheduler</Heading>
        <Text variant="lead" className="mt-2">
          Plan and schedule your social media content in advance.
        </Text>
        <Expandable title="Scheduled Posts" className="mt-4">
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id}>
                <Heading level={4}>{post.title}</Heading>
                <Text>Scheduled on: {format(new Date(post.scheduledAt), 'MMM do, yyyy h:mm a')}</Text>
              </div>
            ))}
          </div>
        </Expandable>
        <Button variant="primary" onClick={handleSchedulePost} className="mt-4">
          Schedule New Post
        </Button>
      </Card>
    </Fade>
  );
};

export default ContentScheduler;