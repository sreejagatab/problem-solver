// EdgeDeviceConnector.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button, Expandable } from '../UI';
import { Fade } from '../Animations';

const EdgeDeviceConnector = () => {
  const [edgeDevices, setEdgeDevices] = useState([]);
  const [selectedDevices, setSelectedDevices] = useState([]);

  useEffect(() => {
    // Fetch available edge devices from the backend
    const fetchEdgeDevices = async () => {
      const response = await fetch('/api/edge-devices');
      const data = await response.json();
      setEdgeDevices(data);
    };
    fetchEdgeDevices();
  }, []);

  const handleDeviceSelection = (device) => {
    setSelectedDevices((prevSelectedDevices) => {
      if (prevSelectedDevices.includes(device)) {
        return prevSelectedDevices.filter((d) => d !== device);
      } else {
        return [...prevSelectedDevices, device];
      }
    });
  };

  const handleConnectDevices = () => {
    // Implement logic to connect the selected edge devices
    console.log('Connecting edge devices:', selectedDevices);
  };

  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>Edge Device Connector</Heading>
        <Text variant="lead" className="mt-2">
          Integrate your edge computing devices and sensors with the platform.
        </Text>
        <Expandable title="Available Edge Devices" className="mt-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {edgeDevices.map((device) => (
              <div
                key={device.id}
                className={`bg-gray-100 dark:bg-gray-800 p-4 rounded-lg cursor-pointer ${
                  selectedDevices.includes(device)
                    ? 'border-2 border-primary-500'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => handleDeviceSelection(device)}
              >
                <Text>{device.name}</Text>
                <Text variant="small">{device.type}</Text>
              </div>
            ))}
          </div>
        </Expandable>
        <Button variant="primary" onClick={handleConnectDevices} className="mt-4">
          Connect Edge Devices
        </Button>
      </Card>
    </Fade>
  );
};

export default EdgeDeviceConnector;