// Modularity/ComponentLibrary.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ComponentLibrary from '../../../src/components/Modularity/ComponentLibrary';

test('renders component library with UI, layout, and other components', () => {
  render(<ComponentLibrary />);
  expect(screen.getByText('Component Library')).toBeInTheDocument();
  expect(screen.getByText('UI Components')).toBeInTheDocument();
  expect(screen.getByText('Layout Components')).toBeInTheDocument();
});
