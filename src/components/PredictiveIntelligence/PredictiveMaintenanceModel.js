// PredictiveMaintenanceModel.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button } from '../UI';
import { Slide } from '../Animations';

const PredictiveMaintenanceModel = () => {
  const [equipmentData, setEquipmentData] = useState([]);
  const [predictedFailures, setPredictedFailures] = useState([]);

  useEffect(() => {
    // Fetch equipment data and predicted failures from the backend
    const fetchData = async () => {
      const response = await fetch('/api/equipment');
      const data = await response.json();
      setEquipmentData(data.equipment);
      setPredictedFailures(data.predictedFailures);
    };
    fetchData();
  }, []);

  const handleViewPredictions = () => {
    // Implement logic to view the predicted equipment failures
    console.log('Viewing predicted equipment failures:', predictedFailures);
  };

  return (
    <Slide>
      <Card className="p-8">
        <Heading level={2}>Predictive Maintenance Model</Heading>
        <Text variant="lead" className="mt-2">
          Leverage AI-powered predictive maintenance to optimize your operations.
        </Text>
        <div className="mt-4 space-y-4">
          <div>
            <Heading level={4}>Monitored Equipment</Heading>
            <ul className="list-disc pl-6">
              {equipmentData.map((equipment) => (
                <li key={equipment.id}>{equipment.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <Heading level={4}>Predicted Failures</Heading>
            <ul className="list-disc pl-6">
              {predictedFailures.map((failure) => (
                <li key={failure.id}>
                  {failure.equipment} - {failure.description}
                </li>
              ))}
            </ul>
            <Button variant="primary" onClick={handleViewPredictions} className="mt-2">
              View Predictions
            </Button>
          </div>
        </div>
      </Card>
    </Slide>
  );
};

export default PredictiveMaintenanceModel;