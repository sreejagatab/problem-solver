// LanguageSwitcher.js
import React, { useState } from 'react';
import { Card, Heading, Text, Button, Expandable } from '../UI';
import { Slide } from '../Animations';

const LanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // Implement logic to update the website's content to the selected language
    console.log('Changing language to:', language);
  };

  return (
    <Slide>
      <Card className="p-8">
        <Heading level={2}>Language Switcher</Heading>
        <Text variant="lead" className="mt-2">
          Change the website's language to suit your preferences.
        </Text>
        <Expandable title="Available Languages" className="mt-4">
          <div className="space-y-2">
            <Button
              variant={selectedLanguage === 'en' ? 'primary' : 'tertiary'}
              onClick={() => handleLanguageChange('en')}
            >
              English
            </Button>
            <Button
              variant={selectedLanguage === 'es' ? 'primary' : 'tertiary'}
              onClick={() => handleLanguageChange('es')}
            >
              Español
            </Button>
            <Button
              variant={selectedLanguage === 'fr' ? 'primary' : 'tertiary'}
              onClick={() => handleLanguageChange('fr')}
            >
              Français
            </Button>
          </div>
        </Expandable>
      </Card>
    </Slide>
  );
};

export default LanguageSwitcher;
