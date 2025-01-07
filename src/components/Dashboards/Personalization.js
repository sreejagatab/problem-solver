// Personalization.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button, Expandable } from '../UI';
import { Fade } from '../Animations';

const Personalization = () => {
  const [theme, setTheme] = useState('light');
  const [widgets, setWidgets] = useState([
    { id: 1, title: 'Problem Recommendations', visible: true },
    { id: 2, title: 'Project Status', visible: true },
    { id: 3, title: 'Data Visualizations', visible: true },
    { id: 4, title: 'Collaboration Feed', visible: false },
  ]);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkMode ? 'dark' : 'light');
  }, []);

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleWidgetVisibility = (widgetId) => {
    const updatedWidgets = widgets.map((widget) =>
      widget.id === widgetId ? { ...widget, visible: !widget.visible } : widget
    );
    setWidgets(updatedWidgets);
  };

  return (
    <Fade>
      <Card
        className={`p-8 ${
          theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
        }`}
      >
        <Heading level={2}>Personalization</Heading>
        <Text variant="lead" className="mt-2">
          Customize your dashboard to suit your preferences.
        </Text>
        <Expandable title="Theme" className="mt-4">
          <div className="flex items-center justify-between">
            <Text>Current Theme:</Text>
            <Button variant="primary" onClick={handleThemeChange}>
              {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </Button>
          </div>
        </Expandable>
        <Expandable title="Widgets" className="mt-4">
          <div className="space-y-2">
            {widgets.map((widget) => (
              <div key={widget.id} className="flex items-center justify-between">
                <Text>{widget.title}</Text>
                <Button
                  variant={widget.visible ? 'primary' : 'tertiary'}
                  onClick={() => handleWidgetVisibility(widget.id)}
                >
                  {widget.visible ? 'Hide' : 'Show'}
                </Button>
              </div>
            ))}
          </div>
        </Expandable>
      </Card>
    </Fade>
  );
};

export default Personalization;