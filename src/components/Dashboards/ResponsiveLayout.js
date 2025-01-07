// ResponsiveLayout.js
import React from 'react';
import { Card, Heading, Text } from '../UI';
import { Slide } from '../Animations';

const ResponsiveLayout = () => {
  return (
    <Slide>
      <Card className="p-8">
        <Heading level={2}>Responsive Layout</Heading>
        <Text variant="lead" className="mt-2">
          The website adapts seamlessly to different screen sizes and devices.
        </Text>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <Heading level={4}>Desktop</Heading>
            <Text>The website provides an optimal experience on large screens.</Text>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <Heading level={4}>Tablet</Heading>
            <Text>The layout and content adapt to medium-sized devices.</Text>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <Heading level={4}>Mobile</Heading>
            <Text>The website is fully responsive and easy to use on small screens.</Text>
          </div>
        </div>
      </Card>
    </Slide>
  );
};

export default ResponsiveLayout;