// ModelAuditTracker.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button, Expandable } from '../UI';
import { Fade } from '../Animations';

const ModelAuditTracker = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    // Fetch the list of deployed models and their audit details from the backend
    const fetchModels = async () => {
      const response = await fetch('/api/models');
      const data = await response.json();
      setModels(data);
    };
    fetchModels();
  }, []);

  const handleViewAuditReport = (model) => {
    // Implement logic to view the audit report for the selected model
    console.log('Viewing audit report for model:', model);
  };

  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>Model Audit Tracker</Heading>
        <Text variant="lead" className="mt-2">
          Monitor the integrity and performance of your deployed AI models.
        </Text>
        <div className="mt-4 space-y-4">
          {models.map((model) => (
            <Expandable key={model.id} title={model.name}>
              <div className="space-y-2">
                <div>
                  <Heading level={4}>Model Domain:</Heading>
                  <Text>{model.domain}</Text>
                </div>
                <div>
                  <Heading level={4}>Last Audit:</Heading>
                  <Text>{model.lastAudit}</Text>
                </div>
                <div>
                  <Heading level={4}>Audit Score:</Heading>
                  <Text>{model.auditScore}</Text>
                </div>
                <Button variant="primary" onClick={() => handleViewAuditReport(model)}>
                  View Audit Report
                </Button>
              </div>
            </Expandable>
          ))}
        </div>
      </Card>
    </Fade>
  );
};

export default ModelAuditTracker;