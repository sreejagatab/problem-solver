// ModelCard.js
import React from 'react';
import { Card, Heading, Text, Button, Tooltip } from '../UI';
import { Slide } from '../Animations';
import { fetchPublicModels, fetchPrivateModels, fetchCodingModels } from '../utils/marketplace';
const ModelCard = () => {
const [publicModels, setPublicModels] = useState([]);
const [privateModels, setPrivateModels] = useState([]);
const [codingModels, setCodingModels] = useState([]);
const loadPublicModels = async () => {
const models = await fetchPublicModels();
setPublicModels(models);
};
const loadPrivateModels = async () => {
const models = await fetchPrivateModels();
setPrivateModels(models);
};
const loadCodingModels = async () => {
const models = await fetchCodingModels();
setCodingModels(models);
};
const handleViewModel = (model) => {
// Implement logic to view the model details
console.log('Viewing model:', model);
};
return (
<div>
<div className="mt-8">
<Heading level={3}>Public Models</Heading>
<Button variant="primary" onClick={loadPublicModels} className="mt-2">
Load Public Models
</Button>
<Grid className="mt-4">
{publicModels.map((model) => (
<Slide key={model.id}>
<ModelCard model={model} onView={handleViewModel} />
</Slide>
))}
</Grid>
</div>
<div className="mt-8">
<Heading level={3}>Private Models</Heading>
<Button variant="primary" onClick={loadPrivateModels} className="mt-2">
Load Private Models
</Button>
<Grid className="mt-4">
{privateModels.map((model) => (
<Slide key={model.id}>
<ModelCard model={model} onView={handleViewModel} />
</Slide>
))}
</Grid>
</div>
<div className="mt-8">
<Heading level={3}>Coding Models</Heading>
<Button variant="primary" onClick={loadCodingModels} className="mt-2">
Load Coding Models
</Button>
<Grid className="mt-4">
{codingModels.map((model) => (
<Slide key={model.id}>
<ModelCard model={model} onView={handleViewModel} />
</Slide>
))}
</Grid>
</div>
</div>
);
};
export default ModelCard;