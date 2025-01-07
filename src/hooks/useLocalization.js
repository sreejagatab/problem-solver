// useLocalization.js
import { useState, useEffect } from 'react';
import { changeLanguage, getCurrencyRates } from '../utils/localization';

const useLocalization = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [currencyRates, setCurrencyRates] = useState({});

  useEffect(() => {
    const fetchCurrencyData = async () => {
      const rates = await getCurrencyRates();
      setCurrencyRates(rates);
    };
    fetchCurrencyData();
  }, []);

  const updateLanguage = async (language) => {
    await changeLanguage(language);
    setSelectedLanguage(language);
  };

  return { selectedLanguage, currencyRates, updateLanguage };
};

export default useLocalization;