// ServiceWorkerManager.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button, Alert } from '../UI';
import { Slide } from '../Animations';

const ServiceWorkerManager = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(() => {
        setIsRegistered(true);
      });
    }
  }, []);

  const handleUpdate = () => {
    setIsUpdating(true);
    navigator.serviceWorker.register('/sw.js', { updateViaCache: 'none' }).then(() => {
      setIsUpdating(false);
    });
  };

  return (
    <Slide>
      <Card className="p-8">
        <Heading level={2}>Offline Support</Heading>
        <Text variant="lead" className="mt-2">
          Ensure your users can access the website even when they're offline.
        </Text>
        {isRegistered ? (
          isUpdating ? (
            <Alert variant="info" className="mt-4">
              Updating service worker, please wait...
            </Alert>
          ) : (
            <Alert variant="success" className="mt-4">
              Service worker is registered and ready to provide offline support.
            </Alert>
          )
        ) : (
          <Alert variant="warning" className="mt-4">
            Service worker is not registered. Click the button below to register it.
          </Alert>
        )}
        {!isRegistered && (
          <Button variant="primary" onClick={handleUpdate} className="mt-4">
            Register Service Worker
          </Button>
        )}
      </Card>
    </Slide>
  );
};

export default ServiceWorkerManager;