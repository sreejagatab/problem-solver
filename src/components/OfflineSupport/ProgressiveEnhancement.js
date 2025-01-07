// ProgressiveEnhancement.js
import React from 'react';
import { Card, Heading, Text, Button } from '../UI';
import { Slide } from '../Animations';

const ProgressiveEnhancement = () => {
  return (
    <Slide>
      <Card className="p-8">
        <Heading level={2}>Progressive Enhancement</Heading>
        <Text variant="lead" className="mt-2">
          Ensure your website works seamlessly across a wide range of devices and browsers.
        </Text>
        <div className="mt-4 space-y-4">
          <div>
            <Heading level={4}>Responsive Design</Heading>
            <Text>
              The website adapts to different screen sizes and devices, providing an optimal user experience.
            </Text>
          </div>
          <div>
            <Heading level={4}>Browser Support</Heading>
            <Text>
              The website is compatible with the latest and older versions of popular web browsers.
            </Text>
          </div>
          <div>
            <Heading level={4}>Accessibility</Heading>
            <Text>
              The website adheres to accessibility standards, ensuring it's usable by everyone.
            </Text>
          </div>
          <Button variant="primary">Learn More</Button>
        </div>
      </Card>
    </Slide>
  );
};

export default ProgressiveEnhancement;