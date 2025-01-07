// MinimalistDesign.js
import React from 'react';
import { Card, Heading, Text } from '../UI';
import { Fade } from '../Animations';

const MinimalistDesign = () => {
  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>Minimalist Design</Heading>
        <Text variant="lead" className="mt-2">
          A clean and uncluttered interface to enhance focus and productivity.
        </Text>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <Heading level={4}>Uncluttered Layouts</Heading>
            <Text>Thoughtfully designed layouts with ample white space.</Text>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <Heading level={4}>Focused Attention</Heading>
            <Text>Minimal distractions to help you stay on task.</Text>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <Heading level={4}>Intuitive Interactions</Heading>
            <Text>Simple and intuitive user interactions throughout the platform.</Text>
          </div>
        </div>
      </Card>
    </Fade>
  );
};

export default MinimalistDesign;