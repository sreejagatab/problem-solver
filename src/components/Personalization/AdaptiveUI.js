// AdaptiveUI.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button } from '../UI';
import { Fade } from '../Animations';

const AdaptiveUI = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkMode ? 'dark' : 'light');
  }, []);

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Fade>
      <Card className={`p-8 ${theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'}`}>
        <Heading level={2}>Adaptive User Interface</Heading>
        <Text variant="lead" className="mt-2">
          The website adjusts its appearance based on your system preferences.
        </Text>
        <div className="mt-4 space-y-4">
          <div>
            <Heading level={4}>Current Theme:</Heading>
            <Text>{theme === 'light' ? 'Light' : 'Dark'}</Text>
          </div>
          <Button variant="primary" onClick={handleToggleTheme}>
            Toggle Theme
          </Button>
        </div>
      </Card>
    </Fade>
  );
};

export default AdaptiveUI;