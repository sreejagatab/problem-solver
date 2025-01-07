// HighContrastMode.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button } from '../UI';
import { Fade } from '../Animations';

const HighContrastMode = () => {
  const [isHighContrastMode, setIsHighContrastMode] = useState(false);

  useEffect(() => {
    const handlePrefersColorScheme = (e) => {
      setIsHighContrastMode(e.matches);
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: high-contrast)');
    mediaQuery.addEventListener('change', handlePrefersColorScheme);

    return () => {
      mediaQuery.removeEventListener('change', handlePrefersColorScheme);
    };
  }, []);

  const toggleHighContrastMode = () => {
    setIsHighContrastMode(!isHighContrastMode);
  };

  return (
    <Fade>
      <Card
        className={`p-8 ${
          isHighContrastMode
            ? 'bg-black text-white border-2 border-white'
            : 'bg-white text-gray-800'
        }`}
      >
        <Heading level={2}>High Contrast Mode</Heading>
        <Text variant="lead" className="mt-2">
          Enhance visibility and readability for users with visual impairments.
        </Text>
        <div className="mt-4 space-y-4">
          <div>
            <Heading level={4}>Current Mode:</Heading>
            <Text>{isHighContrastMode ? 'High Contrast' : 'Normal'}</Text>
          </div>
          <Button variant="primary" onClick={toggleHighContrastMode}>
            {isHighContrastMode ? 'Disable High Contrast' : 'Enable High Contrast'}
          </Button>
        </div>
      </Card>
    </Fade>
  );
};

export default HighContrastMode;