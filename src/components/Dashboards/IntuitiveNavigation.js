// IntuitiveNavigation.js
import React from 'react';
import { Card, Heading, Text } from '../UI';
import { Slide } from '../Animations';

const IntuitiveNavigation = () => {
  return (
    <Slide>
      <Card className="p-8">
        <Heading level={2}>Intuitive Navigation</Heading>
        <Text variant="lead" className="mt-2">
          A well-structured and easy-to-use navigation system.
        </Text>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <Heading level={4}>Logical Information Architecture</Heading>
            <Text>Content and features are organized in a clear, hierarchical structure.</Text>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <Heading level={4}>Consistent Navigation Patterns</Heading>
            <Text>Users can easily find and access the information they need.</Text>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <Heading level={4}>Contextual Guidance</Heading>
            <Text>Helpful tooltips and breadcrumbs provide context and direction.</Text>
          </div>
        </div>
      </Card>
    </Slide>
  );
};

export default IntuitiveNavigation;