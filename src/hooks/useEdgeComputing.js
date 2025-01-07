// useEdgeComputing.js
import { useState } from 'react';
import { registerEdgeDevice, fetchEdgeDeviceData } from '../utils/edgeComputing';

const useEdgeComputing = () => {
  const [edgeDevices, setEdgeDevices] = useState([]);

  const registerDevice = async (device) => {
    const registeredDevice = await registerEdgeDevice(device);
    setEdgeDevices([...edgeDevices, registeredDevice]);
  };

  const fetchDataFromDevice = async (deviceId) => {
    const deviceData = await fetchEdgeDeviceData(deviceId);
    return deviceData;
  };

  return { edgeDevices, registerDevice, fetchDataFromDevice };
};

export default useEdgeComputing;