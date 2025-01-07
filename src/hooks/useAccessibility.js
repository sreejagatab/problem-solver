// useAccessibility.js
import { useState, useEffect } from 'react';
import { updateAccessibilitySettings, toggleHighContrastMode } from '../utils/accessibility';

const useAccessibility = () => {
  const [accessibilitySettings, setAccessibilitySettings] = useState({
    fontSize: 16,
    lineHeight: 1.5,
    fontFamily: 'Arial, sans-serif',
    highContrastMode: false,
  });

  const updateSettings = async (settings) => {
    const updatedSettings = await updateAccessibilitySettings(settings);
    setAccessibilitySettings(updatedSettings);
  };

  const toggleContrast = async () => {
    const updatedSettings = await toggleHighContrastMode();
    setAccessibilitySettings(updatedSettings);
  };

  return { accessibilitySettings, updateSettings, toggleContrast };
};

export default useAccessibility;