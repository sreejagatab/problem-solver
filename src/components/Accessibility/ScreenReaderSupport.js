// ScreenReaderSupport.js
import React from 'react';
import { Card, Heading, Text } from '../UI';
import { Slide } from '../Animations';

const ScreenReaderSupport = () => {
  return (
    <Slide>
      <Card className="p-8">
        <Heading level={2}>Screen Reader Support</Heading>
        <Text variant="lead" className="mt-2">
          Ensure users with visual impairments can access the website with ease.
        </Text>
        <div className="mt-4 space-y-4">
          <div>
            <Heading level={4}>Semantic HTML</Heading>
            <Text>
              The website uses semantic HTML elements to provide clear structure and context for screen readers.
            </Text>
          </div>
          <div>
            <Heading level={4}>ARIA Attributes</Heading>
            <Text>
              ARIA (Accessible Rich Internet Applications) attributes are used to enhance the accessibility of interactive elements.
            </Text>
          </div>
          <div>
            <Heading level={4}>Alternative Text</Heading>
            <Text>
              All images and icons have appropriate alt text to describe their purpose for screen reader users.
            </Text>
          </div>
        </div>
      </Card>
    </Slide>
  );
};

export default ScreenReaderSupport;