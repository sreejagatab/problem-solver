// useAutomation.js
import { useState } from 'react';
import { triggerAutomatedProcess, monitorAutomatedProcess } from '../utils/automation';

const useAutomation = () => {
  const [automatedProcesses, setAutomatedProcesses] = useState([]);

  const initiateAutomatedProcess = async (processId) => {
    const process = await triggerAutomatedProcess(processId);
    setAutomatedProcesses([...automatedProcesses, process]);
  };

  const monitorProcess = async (processId) => {
    const processStatus = await monitorAutomatedProcess(processId);
    setAutomatedProcesses(automatedProcesses.map((p) => (p.id === processId ? processStatus : p)));
  };

  return { automatedProcesses, initiateAutomatedProcess, monitorProcess };
};

export default useAutomation;