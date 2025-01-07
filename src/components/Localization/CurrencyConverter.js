// CurrencyConverter.js
import React, { useState } from 'react';
import { Card, Heading, Text, Button, Expandable } from '../UI';
import { Fade } from '../Animations';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [conversionRate, setConversionRate] = useState(0.85); // Example rate

  const handleConvert = () => {
    // Implement logic to fetch the actual conversion rate and perform the conversion
    console.log('Converting', amount, fromCurrency, 'to', toCurrency);
  };

  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>Currency Converter</Heading>
        <Text variant="lead" className="mt-2">
          Convert between different currencies with ease.
        </Text>
        <Expandable title="Currency Conversion" className="mt-4">
          <div className="space-y-4">
            <div>
              <Heading level={4}>Amount</Heading>
              <Text>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(parseFloat(e.target.value))}
                  className="border rounded-md px-3 py-2 w-full"
                />
              </Text>
            </div>
            <div>
              <Heading level={4}>From</Heading>
              <Text>
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="border rounded-md px-3 py-2 w-full"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </Text>
            </div>
            <div>
              <Heading level={4}>To</Heading>
              <Text>
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="border rounded-md px-3 py-2 w-full"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </Text>
            </div>
            <div>
              <Heading level={4}>Converted Amount</Heading>
              <Text>{(amount * conversionRate).toFixed(2)}</Text>
            </div>
            <Button variant="primary" onClick={handleConvert} className="mt-2">
              Convert
            </Button>
          </div>
        </Expandable>
      </Card>
    </Fade>
  );
};

export default CurrencyConverter;