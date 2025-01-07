// Interactivity/AnchorLinks.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AnchorLinks from '../../../src/components/Interactivity/AnchorLinks';

test('scrolls to correct anchor on click', () => {
  const scrollIntoView = jest.fn();
  window.HTMLElement.prototype.scrollIntoView = scrollIntoView;

  render(
    <AnchorLinks links={[
      { label: 'Section 1', id: 'section1' },
      { label: 'Section 2', id: 'section2' },
    ]} />
  );

  fireEvent.click(screen.getByText('Section 2'));
  expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
});
