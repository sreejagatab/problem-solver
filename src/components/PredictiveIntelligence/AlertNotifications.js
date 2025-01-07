// AlertNotifications.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button, Alert } from '../UI';
import { Slide } from '../Animations';

const AlertNotifications = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Fetch alert notifications from the backend
    const fetchAlerts = async () => {
      const response = await fetch('/api/alerts');
      const data = await response.json();
      setAlerts(data);
    };
    fetchAlerts();
  }, []);

  const handleViewAlert = (alert) => {
    // Implement logic to view the alert details
    console.log('Viewing alert:', alert);
  };

  const handleDismissAlert = (alert) => {
    // Implement logic to dismiss the alert
    setAlerts(alerts.filter((a) => a.id !== alert.id));
    console.log('Dismissed alert:', alert);
  };

  return (
    <Slide>
      <Card className="p-8">
        <Heading level={2}>Alert Notifications</Heading>
        <Text variant="lead" className="mt-2">
          Stay informed about critical events and incidents.
        </Text>
        <div className="mt-4 space-y-4">
          {alerts.map((alert) => (
            <Alert key={alert.id} variant={alert.severity}>
              <Heading level={4}>{alert.title}</Heading>
              <Text>{alert.message}</Text>
              <div className="mt-2 flex justify-end">
                <Button variant="primary" onClick={() => handleViewAlert(alert)}>
                  View Alert
                </Button>
                <Button variant="tertiary" onClick={() => handleDismissAlert(alert)} className="ml-2">
                  Dismiss
                </Button>
              </div>
            </Alert>
          ))}
        </div>
      </Card>
    </Slide>
  );
};

export default AlertNotifications;