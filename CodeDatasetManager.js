// CodeDatasetManager.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button, Grid } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { fetchPublicCodeDatasets, fetchPrivateCodeDatasets } from '../utils/codeManagement';

const CodeDatasetManager = () => {
  const [publicCodeDatasets, setPublicCodeDatasets] = useState([]);
  const [privateCodeDatasets, setPrivateCodeDatasets] = useState([]);

  useEffect(() => {
    const loadPublicCodeDatasets = async () => {
      const datasets = await fetchPublicCodeDatasets();
      setPublicCodeDatasets(datasets);
    };

    const loadPrivateCodeDatasets = async () => {
      const datasets = await fetchPrivateCodeDatasets();
      setPrivateCodeDatasets(datasets);
    };

    loadPublicCodeDatasets();
    loadPrivateCodeDatasets();
  }, []);

  const handleUsePublicDataset = (dataset) => {
    // Implement logic to use the selected public code dataset
    console.log('Using public code dataset:', dataset);
  };

  const handleUsePrivateDataset = (dataset) => {
    // Implement logic to use the selected private code dataset
    console.log('Using private code dataset:', dataset);
  };

  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>Code Dataset Manager</Heading>
        <Text variant="lead" className="mt-2">
          Leverage our curated collection of public and private code datasets to enhance your problem-solving capabilities.
        </Text>

        <div className="mt-8">
          <Heading level={3}>Public Code Datasets</Heading>
          <Grid className="mt-4">
            {publicCodeDatasets.map((dataset) => (
              <Slide key={dataset.id}>
                <Card>
                  <Heading level={4}>{dataset.name}</Heading>
                  <Text variant="small" className="mt-1">
                    {dataset.domain}
                  </Text>
                  <Text variant="body" className="mt-2">
                    {dataset.description}
                  </Text>
                  <Button variant="primary" onClick={() => handleUsePublicDataset(dataset)} className="mt-4">
                    Use Dataset
                  </Button>
                </Card>
              </Slide>
            ))}
          </Grid>
        </div>

        <div className="mt-8">
          <Heading level={3}>Private Code Datasets</Heading>
          <Grid className="mt-4">
            {privateCodeDatasets.map((dataset) => (
              <Slide key={dataset.id}>
                <Card>
                  <Heading level={4}>{dataset.name}</Heading>
                  <Text variant="small" className="mt-1">
                    {dataset.domain}
                  </Text>
                  <Text variant="body" className="mt-2">
                    {dataset.description}
                  </Text>
                  <Text>Price: ${dataset.price}</Text>
                  <Button variant="primary" onClick={() => handleUsePrivateDataset(dataset)} className="mt-4">
                    Use Dataset
                  </Button>
                </Card>
              </Slide>
            ))}
          </Grid>
        </div>
      </Card>
    </Fade>
  );
};

export default CodeDatasetManager;