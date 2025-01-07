// Localization/TranslationProvider.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { TranslationProvider, TranslationContext } from '../../../src/components/Localization/TranslationProvider';

test('provides translations in the current language', () => {
  render(
    <TranslationProvider>
      <TranslationContext.Consumer>
        {({ t }) => (
          <div>
            <h1>{t('welcome.title')}</h1>
            <p>{t('welcome.description')}</p>
          </div>
        )}
      </TranslationContext.Consumer>
    </TranslationProvider>
  );

  expect(screen.getByText('Welcome to Problem Solver')).toBeInTheDocument();
  expect(screen.getByText('Unlock your problem-solving potential.')).toBeInTheDocument();
});