// Productivity/CodeEditor.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CodeEditor from '../../../src/components/Productivity/CodeEditor';

test('renders code editor with initial code', () => {
  render(<CodeEditor />);
  expect(screen.getByDisplayValue('console.log("Hello, Problem Solver!");')).toBeInTheDocument();
});

test('updates code on input change', () => {
  render(<CodeEditor />);
  fireEvent.change(screen.getByDisplayValue('console.log("Hello, Problem Solver!");'), {
    target: { value: 'console.log("New code");' },
  });
  expect(screen.getByDisplayValue('console.log("New code");')).toBeInTheDocument();
});

test('calls saveCode function on button click', () => {
  const handleSaveCode = jest.fn();
  render(<CodeEditor onSaveCode={handleSaveCode} />);
  fireEvent.click(screen.getByText('Save Code'));
  expect(handleSaveCode).toHaveBeenCalled();
});
