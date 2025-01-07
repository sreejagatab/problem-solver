// KeyboardNavigation.js
import React from 'react';
import { Card, Heading, Text, Button } from '../UI';
import { Fade } from '../Animations';

const KeyboardNavigation = () => {
  const handleSkipToContent = () => {
    // Implement logic to skip to the main content of the page
    console.log('Skipping to main content');
  };

  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>Keyboard Navigation</Heading>
        <Text variant="lead" className="mt-2">
          Access all website features using only your keyboard.
        </Text>
        <div className="mt-4 space-y-4">
          <div>
            <Heading level={4}>Skip to Main Content</Heading>
            <Text>Press the "Tab" key and then "Enter" to skip to the main content.</Text>
            <Button variant="primary" onClick={handleSkipToContent} className="mt-2">
              Skip to Main Content
            </Button>
          </div>
          <div>
            <Heading level={4}>Navigate with Keyboard</Heading>
            <Text>
              Use the "Tab" key to navigate between interactive elements, and the "Enter" or "Space" key to interact with them.
            </Text>
          </div>
        </div>
      </Card>
    </Fade>
  );
};

export default KeyboardNavigation;