// useWorkflowAutomation.js
import { useState, useEffect } from 'react';
import { fetchWorkflows, saveWorkflow, runWorkflow } from '../utils/workflowAutomation';

const useWorkflowAutomation = () => {
  const [workflows, setWorkflows] = useState([]);
  const [currentWorkflow, setCurrentWorkflow] = useState(null);

  useEffect(() => {
    const loadWorkflows = async () => {
      const workflowData = await fetchWorkflows();
      setWorkflows(workflowData);
    };
    loadWorkflows();
  }, []);

  const createOrUpdateWorkflow = async (workflow) => {
    const savedWorkflow = await saveWorkflow(workflow);
    setWorkflows([...workflows.filter((w) => w.id !== workflow.id), savedWorkflow]);
  };

  const executeWorkflow = async (workflowId) => {
    const result = await runWorkflow(workflowId);
    setCurrentWorkflow(result);
  };

  return { workflows, currentWorkflow, createOrUpdateWorkflow, executeWorkflow };
};

export default useWorkflowAutomation;