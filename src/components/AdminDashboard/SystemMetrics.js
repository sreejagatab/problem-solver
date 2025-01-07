// AdminDashboard/SystemMetrics.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button } from '../../components/UI';
import { Fade } from '../../components/Animations';
import { getSystemMetrics } from '../../utils/adminDashboard';

const SystemMetrics = () => {
  const [systemMetrics, setSystemMetrics] = useState({});

  useEffect(() => {
    const fetchSystemMetrics = async () => {
      const metrics = await getSystemMetrics();
      setSystemMetrics(metrics);
    };
    fetchSystemMetrics();
  }, []);

  return (
    <Fade>
      <Card className="p-6">
        <Heading level={3}>System Metrics</Heading>
        <div className="mt-4 space-y-2">
          <div>
            <Heading level={4}>Uptime:</Heading>
            <Text>{systemMetrics.uptime}%</Text>
          </div>
          <div>
            <Heading level={4}>CPU Utilization:</Heading>
            <Text>{systemMetrics.cpuUtilization}%</Text>
          </div>
          <div>
            <Heading level={4}>Memory Usage:</Heading>
            <Text>{systemMetrics.memoryUsage}%</Text>
          </div>
          <div>
            <Heading level={4}>Network Throughput:</Heading>
            <Text>{systemMetrics.networkThroughput} Mbps</Text>
          </div>
        </div>
        <Button variant="primary" className="mt-4">
          View Full Metrics
        </Button>
      </Card>
    </Fade>
  );
};

export default SystemMetrics;