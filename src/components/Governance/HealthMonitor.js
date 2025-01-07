// HealthMonitor.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button } from '../UI';
import { Slide } from '../Animations';

const HealthMonitor = () => {
  const [systemHealth, setSystemHealth] = useState({
    uptime: '99.9%',
    latency: '15ms',
    errors: 0,
    incidents: 0,
  });

  useEffect(() => {
    // Fetch real-time system health data from the backend
    const fetchSystemHealth = async () => {
      const response = await fetch('/api/system-health');
      const data = await response.json();
      setSystemHealth(data);
    };
    fetchSystemHealth();
    const interval = setInterval(fetchSystemHealth, 60000); // Refresh every minute
    return () => clearInterval(interval);
  }, []);

  const handleViewIncidentReport = () => {
    // Implement logic to view the incident report
    console.log('Viewing incident report');
  };

  return (
    <Slide>
      <Card className="p-8">
        <Heading level={2}>System Health Monitor</Heading>
        <Text variant="lead" className="mt-2">
          Stay informed about the platform's operational status and performance.
        </Text>
        <div className="mt-4 space-y-4">
          <div>
            <Heading level={4}>Uptime</Heading>
            <Text>{systemHealth.uptime}</Text>
          </div>
          <div>
            <Heading level={4}>Latency</Heading>
            <Text>{systemHealth.latency}</Text>
          </div>
          <div>
            <Heading level={4}>Errors</Heading>
            <Text>{systemHealth.errors}</Text>
          </div>
          <div>
            <Heading level={4}>Incidents</Heading>
            <Text>{systemHealth.incidents}</Text>
            <Button variant="primary" onClick={handleViewIncidentReport} className="mt-2">
              View Incident Report
            </Button>
          </div>
        </div>
      </Card>
    </Slide>
  );
};

export default HealthMonitor;
