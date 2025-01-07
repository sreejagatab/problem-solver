// OperationalDashboard.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button } from '../UI';
import { Fade } from '../Animations';
import { LineChart, BarChart, PieChart } from 'recharts';

const OperationalDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    revenueData: [],
    costData: [],
    utilization: 0,
    incidents: 0,
  });

  useEffect(() => {
    // Fetch data for the operational dashboard from the backend
    const fetchDashboardData = async () => {
      const response = await fetch('/api/operational-data');
      const data = await response.json();
      setDashboardData(data);
    };
    fetchDashboardData();
  }, []);

  const handleViewDetails = () => {
    // Implement logic to view more detailed operational insights
    console.log('Viewing operational details:', dashboardData);
  };

  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>Operational Dashboard</Heading>
        <Text variant="lead" className="mt-2">
          Monitor key operational metrics and gain actionable insights.
        </Text>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Heading level={4}>Revenue Trends</Heading>
            <LineChart width={300} height={200} data={dashboardData.revenueData}>
              <text x="50%" y="10%" textAnchor="middle" dominantBaseline="hanging">
                Revenue Over Time
              </text>
            </LineChart>
          </div>
          <div>
            <Heading level={4}>Cost Analysis</Heading>
            <BarChart width={300} height={200} data={dashboardData.costData}>
              <text x="50%" y="10%" textAnchor="middle" dominantBaseline="hanging">
                Costs by Category
              </text>
            </BarChart>
          </div>
          <div>
            <Heading level={4}>Utilization</Heading>
            <PieChart width={300} height={200}>
              <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
                {dashboardData.utilization}%
              </text>
            </PieChart>
          </div>
          <div>
            <Heading level={4}>Incidents</Heading>
            <Text>{dashboardData.incidents} reported incidents</Text>
          </div>
        </div>
        <Button variant="primary" onClick={handleViewDetails} className="mt-4">
          View Details
        </Button>
      </Card>
    </Fade>
  );
};

export default OperationalDashboard;