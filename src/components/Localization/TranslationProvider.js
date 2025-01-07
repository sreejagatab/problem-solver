// TranslationProvider.js
import React, { createContext, useState, useEffect } from 'react';

export const TranslationContext = createContext();

const TranslationProvider = ({ children }) => {
  const [translations, setTranslations] = useState({
    en: {
      'welcome.title': 'Welcome to Problem Solver',
      'welcome.description': 'Unlock your problem-solving potential.',
      // Add more translations here
    },
    es: {
      'welcome.title': 'Bienvenido a Problem Solver',
      'welcome.description': 'Desbloquea tu potencial para resolver problemas.',
      // Add more translations here
    },
    fr: {
      'welcome.title': 'Bienvenue sur Problem Solver',
      'welcome.description': 'Débloquez votre potentiel de résolution de problèmes.',
      // Add more translations here
    },
  });

  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    // Retrieve the user's preferred language from the user profile or system settings
    const preferredLanguage = 'en'; // Replace with actual logic
    setCurrentLanguage(preferredLanguage);
  }, []);

  const t = (key) => {
    return translations[currentLanguage][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ t, currentLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationProvider;