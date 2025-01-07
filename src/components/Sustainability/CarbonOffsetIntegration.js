// CarbonOffsetIntegration.js
import React, { useState } from 'react';
import { Card, Heading, Text, Button, Expandable } from '../UI';
import { Slide } from '../Animations';

const CarbonOffsetIntegration = () => {
  const [carbonOffsetAmount, setCarbonOffsetAmount] = useState(0);

  const handleCarbonOffsetPurchase = () => {
    // Implement logic to purchase carbon offsets
    console.log('Purchasing carbon offsets:', carbonOffsetAmount);
  };

  return (
    <Slide>
      <Card className="p-8">
        <Heading level={2}>Carbon Offset Integration</Heading>
        <Text variant="lead" className="mt-2">
          Offset your platform's carbon footprint with verified carbon credits.
        </Text>
        <Expandable title="Carbon Offset Purchase" className="mt-4">
          <div className="space-y-4">
            <div>
              <Heading level={4}>Carbon Footprint</Heading>
              <Text>Your platform's estimated carbon footprint is 10 tons of CO2.</Text>
            </div>
            <div>
              <Heading level={4}>Offset Amount</Heading>
              <input
                type="number"
                value={carbonOffsetAmount}
                onChange={(e) => setCarbonOffsetAmount(parseFloat(e.target.value))}
                className="border rounded-md px-3 py-2 w-full"
              />
            </div>
            <Button variant="primary" onClick={handleCarbonOffsetPurchase}>
              Purchase Carbon Offsets
            </Button>
          </div>
        </Expandable>
      </Card>
    </Slide>
  );
};

export default CarbonOffsetIntegration;