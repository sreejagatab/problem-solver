// OfflineSupport/ServiceWorkerManager.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ServiceWorkerManager from '../../../src/components/OfflineSupport/ServiceWorkerManager';

test('registers service worker and updates UI', async () => {
  render(<ServiceWorkerManager />);
  expect(await screen.findByText('Service worker is registered and ready to provide offline support.')).toBeInTheDocument();
});

test('displays error message when service worker is not registered', () => {
  jest.spyOn(navigator, 'serviceWorker', 'get').mockReturnValue({ register: () => Promise.reject(new Error('Registration failed')) });
  render(<ServiceWorkerManager />);
  expect(screen.getByText('Service worker is not registered.')).toBeInTheDocument();
});