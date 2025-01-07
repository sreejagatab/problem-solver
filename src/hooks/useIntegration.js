// useIntegration.js
import { useState } from 'react';
import { connectIntegration, disconnectIntegration } from '../utils/integration';

const useIntegration = () => {
  const [integrations, setIntegrations] = useState([]);

  const connectExternalIntegration = async (integrationId) => {
    const connectedIntegration = await connectIntegration(integrationId);
    setIntegrations([...integrations, connectedIntegration]);
  };

  const disconnectExternalIntegration = async (integrationId) => {
    await disconnectIntegration(integrationId);
    setIntegrations(integrations.filter((i) => i.id !== integrationId));
  };

  return { integrations, connectExternalIntegration, disconnectExternalIntegration };
};

export default useIntegration;