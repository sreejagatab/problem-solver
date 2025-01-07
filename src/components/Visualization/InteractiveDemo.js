// InteractiveDemo.js
import React, { useState } from 'react';
import { Card, Heading, Text, Button } from '../UI';
import { Fade } from '../Animations';

const InteractiveDemo = () => {
  const [demoState, setDemoState] = useState(0);

  const handleNextStep = () => {
    setDemoState((state) => state + 1);
  };

  const handleResetDemo = () => {
    setDemoState(0);
  };

  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>Interactive Demo</Heading>
        <Text variant="lead" className="mt-2">
          Explore the platform's capabilities with this interactive demo.
        </Text>
        <div className="mt-4 space-y-4">
          {demoState === 0 && (
            <div>
              <Heading level={4}>Step 1: Data Exploration</Heading>
              <Text>
                In this step, you'll learn how to upload and analyze your data using the platform's advanced visualization tools.
              </Text>
              <Button variant="primary" onClick={handleNextStep} className="mt-2">
                Start Demo
              </Button>
            </div>
          )}
          {demoState === 1 && (
            <div>
              <Heading level={4}>Step 2: Problem Modeling</Heading>
              <Text>
                Next, you'll explore how to define your problem and select the appropriate machine learning models to solve it.
              </Text>
              <Button variant="primary" onClick={handleNextStep} className="mt-2">
                Next Step
              </Button>
            </div>
          )}
          {demoState === 2 && (
            <div>
              <Heading level={4}>Step 3: Solution Interpretation</Heading>
              <Text>
                Finally, you'll learn how to interpret the generated solutions and gain insights to drive your problem-solving efforts.
              </Text>
              <Button variant="primary" onClick={handleResetDemo} className="mt-2">
                Reset Demo
              </Button>
            </div>
          )}
        </div>
      </Card>
    </Fade>
  );
};

export default InteractiveDemo;