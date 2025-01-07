// AdminDashboard/FeatureManagement.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button, Switch } from '../../components/UI';
import { Fade } from '../../components/Animations';
import { getFeatures, updateFeatureStatus } from '../../utils/adminDashboard';

const FeatureManagement = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchFeatures = async () => {
      const featureData = await getFeatures();
      setFeatures(featureData);
    };
    fetchFeatures();
  }, []);

  const handleFeatureStatusChange = async (featureId, status) => {
    await updateFeatureStatus(featureId, status);
    setFeatures(features.map((f) => (f.id === featureId ? { ...f, status } : f)));
  };

  return (
    <Fade>
      <Card className="p-6">
        <Heading level={3}>Feature Management</Heading>
        <div className="mt-4 space-y-3">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-center justify-between">
              <div>
                <Heading level={4}>{feature.name}</Heading>
                <Text>{feature.description}</Text>
              </div>
              <Switch
                checked={feature.status}
                onChange={(e) => handleFeatureStatusChange(feature.id, e.target.checked)}
                color="primary"
              />
            </div>
          ))}
        </div>
      </Card>
    </Fade>
  );
};

export default FeatureManagement; 