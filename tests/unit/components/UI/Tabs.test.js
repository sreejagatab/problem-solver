// Tabs.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Tabs from '../../../src/components/UI/Tabs';

test('renders tabs with content', () => {
  const tabs = [
    { label: 'Tab 1', content: <div>Tab 1 content</div> },
    { label: 'Tab 2', content: <div>Tab 2 content</div> },
  ];
  render(<Tabs tabs={tabs} initialActiveTab={0} />);
  expect(screen.getByText('Tab 1 content')).toBeInTheDocument();
});

test('switches between tabs on click', () => {
  const tabs = [
    { label: 'Tab 1', content: <div>Tab 1 content</div> },
    { label: 'Tab 2', content: <div>Tab 2 content</div> },
  ];
  render(<Tabs tabs={tabs} initialActiveTab={0} />);
  fireEvent.click(screen.getByText('Tab 2'));
  expect(screen.getByText('Tab 2 content')).toBeInTheDocument();
  expect(screen.queryByText('Tab 1 content')).not.toBeInTheDocument();
});
