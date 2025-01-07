// CustomizationSettings.js
import React, { useState } from 'react';
import { Card, Heading, Text, Button, Expandable } from '../UI';
import { Slide } from '../Animations';

const CustomizationSettings = () => {
  const [fontSize, setFontSize] = useState(16);
  const [lineHeight, setLineHeight] = useState(1.5);
  const [fontFamily, setFontFamily] = useState('Arial, sans-serif');

  const handleSaveSettings = () => {
    // Save the customization settings to the user's profile
    console.log('Saving customization settings:', {
      fontSize,
      lineHeight,
      fontFamily,
    });
  };

  return (
    <Slide>
      <Card className="p-8">
        <Heading level={2}>Customization Settings</Heading>
        <Text variant="lead" className="mt-2">
          Adjust the website's appearance to suit your preferences.
        </Text>
        <Expandable title="Font Settings" className="mt-4">
          <div className="space-y-4">
            <div>
              <Heading level={4}>Font Size</Heading>
              <Text>
                <input
                  type="range"
                  min="12"
                  max="24"
                  value={fontSize}
                  onChange={(e) => setFontSize(parseInt(e.target.value))}
                  className="w-full"
                />
                <span>{fontSize}px</span>
              </Text>
            </div>
            <div>
              <Heading level={4}>Line Height</Heading>
              <Text>
                <input
                  type="range"
                  min="1"
                  max="2.5"
                  step="0.1"
                  value={lineHeight}
                  onChange={(e) => setLineHeight(parseFloat(e.target.value))}
                  className="w-full"
                />
                <span>{lineHeight}</span>
              </Text>
            </div>
            <div>
              <Heading level={4}>Font Family</Heading>
              <Text>
                <select
                  value={fontFamily}
                  onChange={(e) => setFontFamily(e.target.value)}
                  className="border rounded-md px-3 py-2 w-full"
                >
                  <option value="Arial, sans-serif">Arial</option>
                  <option value="Times New Roman, serif">Times New Roman</option>
                  <option value="Verdana, sans-serif">Verdana</option>
                </select>
              </Text>
            </div>
          </div>
        </Expandable>
        <Button variant="primary" onClick={handleSaveSettings} className="mt-4">
          Save Settings
        </Button>
      </Card>
    </Slide>
  );
};

export default CustomizationSettings;