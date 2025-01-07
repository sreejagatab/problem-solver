// EnvironmentalImpactTracker.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button } from '../UI';
import { Slide } from '../Animations';

const EnvironmentalImpactTracker = () => {
  const [environmentalData, setEnvironmentalData] = useState({
    carbonFootprint: 0,
    energyConsumption: 0,
    waterUsage: 0,
    wasteGeneration: 0,
  });

  useEffect(() => {
    // Fetch the environmental impact data from the backend
    const fetchEnvironmentalData = async () => {
      const response = await fetch('/api/environmental-data');
      const data = await response.json();
      setEnvironmentalData(data);
    };
    fetchEnvironmentalData();
  }, []);

  const handleViewFullReport = () => {
    // Implement logic to view the full environmental impact report
    console.log('Viewing environmental impact report:', environmentalData);
  };

  return (
    <Slide>
      <Card className="p-8">
        <Heading level={2}>Environmental Impact Tracker</Heading>
        <Text variant="lead" className="mt-2">
          Monitor and reduce the environmental footprint of your problem-solving activities.
        </Text>
        <div className="mt-4 space-y-4">
          <div>
            <Heading level={4}>Carbon Footprint</Heading>
            <Text>{environmentalData.carbonFootprint} tons of CO2</Text>
          </div>
          <div>
            <Heading level={4}>Energy Consumption</Heading>
            <Text>{environmentalData.energyConsumption} kWh</Text>
          </div>
          <div>
            <Heading level={4}>Water Usage</Heading>
            <Text>{environmentalData.waterUsage} gallons</Text>
          </div>
          <div>
            <Heading level={4}>Waste Generation</Heading>
            <Text>{environmentalData.wasteGeneration} tons</Text>
          </div>
          <Button variant="primary" onClick={handleViewFullReport}>
            View Full Report
          </Button>
        </div>
      </Card>
    </Slide>
  );
};

export default EnvironmentalImpactTracker;