// DataConnectivity.js
import React from 'react';
import { Card, Heading, Text } from '../UI';
import { Slide } from '../Animations';

const DataConnectivity = () => {
  return (
    <Slide>
      <Card className="p-8">
        <Heading level={2}>Data Connectivity</Heading>
        <Text variant="lead" className="mt-2">
          Seamlessly integrate your data sources and external applications.
        </Text>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <Heading level={4}>Cloud Storage Integrations</Heading>
            <Text>Connect to popular cloud storage services like Dropbox, Google Drive, and AWS S3.</Text>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <Heading level={4}>Database Connectors</Heading>
            <Text>Access data stored in various databases, including SQL and NoSQL.</Text>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <Heading level={4}>API Integrations</Heading>
            <Text>Integrate with third-party APIs to enrich your data and leverage external services.</Text>
          </div>
        </div>
      </Card>
    </Slide>
  );
};

export default DataConnectivity;