// Interactivity/ExpandableContent.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ExpandableContent from '../../../src/components/Interactivity/ExpandableContent';

test('expands and collapses content on button click', () => {
  render(
    <ExpandableContent title="Expandable Title">
      <div>Expandable content</div>
    </ExpandableContent>
  );

  expect(screen.getByText('Expandable content')).not.toBeVisible();
  fireEvent.click(screen.getByText('Expandable Title'));
  expect(screen.getByText('Expandable content')).toBeVisible();
  fireEvent.click(screen.getByText('Expandable Title'));
  expect(screen.getByText('Expandable content')).not.toBeVisible();
});