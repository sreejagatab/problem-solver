// OfflineFallback.js
import React from 'react';
import { Card, Heading, Text, Button } from '../UI';
import { Fade } from '../Animations';

const OfflineFallback = () => {
  return (
    <Fade>
      <div className="flex justify-center items-center h-screen">
        <Card className="p-8">
          <Heading level={2}>Oops! You're offline.</Heading>
          <Text variant="lead" className="mt-2">
            It looks like you don't have an active internet connection. Please check your network settings and try again.
          </Text>
          <Button variant="primary" className="mt-4">
            Retry
          </Button>
        </Card>
      </div>
    </Fade>
  );
};

export default OfflineFallback;