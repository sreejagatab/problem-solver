// EthicalAIGovernance.js
import React from 'react';
import { Heading, Text, Card, Grid } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { EthicalAIPanel, HealthMonitor, SecurityControls } from '../components/Governance';
import { ModelAuditTracker, ExplainableAITools, EthicsComplianceDashboard } from '../components/EthicalAIGovernance';

const EthicalAIGovernance = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Ethical AI Governance</Heading>
            <Text variant="lead" className="mt-4">
              Ensure responsible and transparent use of AI in problem-solving.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Grid>
            <ModelAuditTracker />
            <ExplainableAITools />
            <EthicsComplianceDashboard />
            <EthicalAIPanel />
            <HealthMonitor />
            <SecurityControls />
          </Grid>
        </div>
      </section>
    </div>
  );
};

export default EthicalAIGovernance;
