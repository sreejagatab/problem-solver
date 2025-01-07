// useVisualAnalytics.js
import { useState, useEffect } from 'react';
import { fetchVisualizationData, generateVisualizations } from '../utils/visualAnalytics';

const useVisualAnalytics = (datasetId) => {
  const [visualizationData, setVisualizationData] = useState([]);
  const [generatedVisualizations, setGeneratedVisualizations] = useState([]);

  useEffect(() => {
    const loadVisualizationData = async () => {
      const data = await fetchVisualizationData(datasetId);
      setVisualizationData(data);
    };
    loadVisualizationData();
  }, [datasetId]);

  const createVisualizations = async (type) => {
    const visualizations = await generateVisualizations(datasetId, type);
    setGeneratedVisualizations(visualizations);
  };

  return { visualizationData, generatedVisualizations, createVisualizations };
};

export default useVisualAnalytics;