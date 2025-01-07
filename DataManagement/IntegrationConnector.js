// IntegrationConnector.js
import React from 'react';
import { Card, Heading, Text, Button } from '../UI';
import { Fade } from '../Animations';
import { connectPublicIntegration, connectPrivateIntegration } from '../utils/integration';
const IntegrationConnector = () => {
const handleConnectPublicIntegration = async () => {
const integration = await connectPublicIntegration();
// Implement logic to connect the public integration
console.log('Connecting public integration:', integration);
};
const handleConnectPrivateIntegration = async () => {
const integration = await connectPrivateIntegration();
// Implement logic to connect the private integration
console.log('Connecting private integration:', integration);
};
return (
<Fade>
<Card className="p-8">
<Heading level={2}>Integration Connector</Heading>
<Text variant="lead" className="mt-2">
Seamlessly integrate your favorite tools and services with the platform.
</Text>
<div className="mt-4 space-y-4">
<div>
<Heading level={4}>Connect to Public Data Sources</Heading>
<Text>
Integrate with various public cloud storage, database, and API providers to access data
directly within the platform.
</Text>
<Button variant="primary" onClick={handleConnectPublicIntegration} className="mt-2">
Connect Public Integration
</Button>
</div>
<div>
<Heading level={4}>Connect to Private Data Sources</Heading>
<Text>
Integrate with private data sources, including enterprise systems and custom APIs, to enhance
your problem-solving capabilities.
</Text>
<Button variant="primary" onClick={handleConnectPrivateIntegration} className="mt-2">
Connect Private Integration
</Button>
</div>
</div>
</Card>
</Fade>
);
};