// Interactivity/HoverMenu.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HoverMenu from '../../../src/components/Interactivity/HoverMenu';

test('opens hover menu on mouse enter', () => {
  render(
    <HoverMenu>
      <button>Hover Me</button>
      <div>Hover Menu Content</div>
    </HoverMenu>
  );
  fireEvent.mouseEnter(screen.getByText('Hover Me'));
  expect(screen.getByText('Hover Menu Content')).toBeInTheDocument();
});

test('closes hover menu on mouse leave', () => {
  render(
    <HoverMenu>
      <button>Hover Me</button>
      <div>Hover Menu Content</div>
    </HoverMenu>
  );
  fireEvent.mouseEnter(screen.getByText('Hover Me'));
  fireEvent.mouseLeave(screen.getByText('Hover Me'));
  expect(screen.queryByText('Hover Menu Content')).not.toBeInTheDocument();
});