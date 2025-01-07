// useEthicalAIGovernance.js
import { useState, useEffect } from 'react';
import { fetchDeployedModels, getModelAuditReport, checkEthicsCompliance } from '../utils/ethicalAIGovernance';

const useEthicalAIGovernance = () => {
  const [deployedModels, setDeployedModels] = useState([]);
  const [complianceStatus, setComplianceStatus] = useState({});

  useEffect(() => {
    const loadModels = async () => {
      const models = await fetchDeployedModels();
      setDeployedModels(models);
    };
    const checkCompliance = async () => {
      const status = await checkEthicsCompliance();
      setComplianceStatus(status);
    };
    loadModels();
    checkCompliance();
  }, []);

  const getAuditReport = async (modelId) => {
    const report = await getModelAuditReport(modelId);
    return report;
  };

  return { deployedModels, complianceStatus, getAuditReport };
};

export default useEthicalAIGovernance;
