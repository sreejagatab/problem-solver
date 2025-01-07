// AdminDashboard/Dashboard.js
import React from 'react';
import { Card, Heading, Text, Grid } from '../../components/UI';
import { Fade } from '../../components/Animations';
import { SystemMetrics } from './SystemMetrics';
import { FeatureManagement } from './FeatureManagement';
import { LoggingAndAnalytics } from './LoggingAndAnalytics';
import { CompetitiveAnalysis } from './CompetitiveAnalysis';

const AdminDashboard = () => {
  return (
    <Fade>
      <div className="p-8">
        <Heading level={1}>Admin Dashboard</Heading>
        <Text variant="lead" className="mt-4">
          Manage and monitor the entire Problem Solver system.
        </Text>
        <Grid className="mt-8">
          <SystemMetrics />
          <FeatureManagement />
          <LoggingAndAnalytics />
          <CompetitiveAnalysis />
        </Grid>
      </div>
    </Fade>
  );
};

export default AdminDashboard;