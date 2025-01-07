// CodeModelManager.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button, Grid } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { fetchPublicCodeModels, fetchPrivateCodeModels } from '../utils/codeManagement';

const CodeModelManager = () => {
  const [publicCodeModels, setPublicCodeModels] = useState([]);
  const [privateCodeModels, setPrivateCodeModels] = useState([]);

  useEffect(() => {
    const loadPublicCodeModels = async () => {
      const models = await fetchPublicCodeModels();
      setPublicCodeModels(models);
    };

    const loadPrivateCodeModels = async () => {
      const models = await fetchPrivateCodeModels();
      setPrivateCodeModels(models);
    };

    loadPublicCodeModels();
    loadPrivateCodeModels();
  }, []);

  const handleUsePublicModel = (model) => {
    // Implement logic to use the selected public code model
    console.log('Using public code model:', model);
  };

  const handleUsePrivateModel = (model) => {
    // Implement logic to use the selected private code model
    console.log('Using private code model:', model);
  };

  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>Code Model Manager</Heading>
        <Text variant="lead" className="mt-2">
          Explore and utilize our collection of public and private code models to enhance your problem-solving capabilities.
        </Text>

        <div className="mt-8">
          <Heading level={3}>Public Code Models</Heading>
          <Grid className="mt-4">
            {publicCodeModels.map((model) => (
              <Slide key={model.id}>
                <Card>
                  <Heading level={4}>{model.name}</Heading>
                  <Text variant="small" className="mt-1">
                    {model.domain}
                  </Text>
                  <Text variant="body" className="mt-2">
                    {model.description}
                  </Text>
                  <Button variant="primary" onClick={() => handleUsePublicModel(model)} className="mt-4">
                    Use Model
                  </Button>
                </Card>
              </Slide>
            ))}
          </Grid>
        </div>

        <div className="mt-8">
          <Heading level={3}>Private Code Models</Heading>
          <Grid className="mt-4">
            {privateCodeModels.map((model) => (
              <Slide key={model.id}>
                <Card>
                  <Heading level={4}>{model.name}</Heading>
                  <Text variant="small" className="mt-1">
                    {model.domain}
                  </Text>
                  <Text variant="body" className="mt-2">
                    {model.description}
                  </Text>
                  <Text>Price: ${model.price}</Text>
                  <Button variant="primary" onClick={() => handleUsePrivateModel(model)} className="mt-4">
                    Use Model
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

export default CodeModelManager;