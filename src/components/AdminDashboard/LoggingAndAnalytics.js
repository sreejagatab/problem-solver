
// AdminDashboard/LoggingAndAnalytics.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button, Table, TableHead, TableBody, TableRow, TableCell } from '../../components/UI';
import { Fade } from '../../components/Animations';
import { getActivityLogs, getAnalyticsData } from '../../utils/adminDashboard';

const LoggingAndAnalytics = () => {
  const [activityLogs, setActivityLogs] = useState([]);
  const [analyticsData, setAnalyticsData] = useState({});

  useEffect(() => {
    const fetchLogs = async () => {
      const logs = await getActivityLogs();
      setActivityLogs(logs);
    };

    const fetchAnalytics = async () => {
      const data = await getAnalyticsData();
      setAnalyticsData(data);
    };

    fetchLogs();
    fetchAnalytics();
  }, []);

  return (
    <Fade>
      <Card className="p-6">
        <Heading level={3}>Logging and Analytics</Heading>
        <div className="mt-4 space-y-4">
          <div>
            <Heading level={4}>Activity Logs</Heading>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Timestamp</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {activityLogs.map((log, index) => (
                  <TableRow key={index}>
                    <TableCell>{log.timestamp}</TableCell>
                    <TableCell>{log.user}</TableCell>
                    <TableCell>{log.action}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button variant="primary" className="mt-2">
              View Full Logs
            </Button>
          </div>
          <div>
            <Heading level={4}>Analytics</Heading>
            <div className="space-y-2">
              <div>
                <Heading level={5}>Total Users:</Heading>
                <Text>{analyticsData.totalUsers}</Text>
              </div>
              <div>
                <Heading level={5}>Daily Active Users:</Heading>
                <Text>{analyticsData.dailyActiveUsers}</Text>
              </div>
              <div>
                <Heading level={5}>Conversion Rate:</Heading>
                <Text>{analyticsData.conversionRate}%</Text>
              </div>
            </div>
            <Button variant="primary" className="mt-2">
              View Full Analytics
            </Button>
          </div>
        </div>
      </Card>
    </Fade>
  );
};

export default LoggingAndAnalytics;