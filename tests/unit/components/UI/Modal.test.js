// Modal.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../../../src/components/UI/Modal';

test('renders modal with children', () => {
  render(
    <Modal isOpen={true}>
      <div>Modal content</div>
    </Modal>
  );
  expect(screen.getByText('Modal content')).toBeInTheDocument();
});

test('calls onClose handler when backdrop is clicked', () => {
  const handleClose = jest.fn();
  render(<Modal isOpen={true} onClose={handleClose}>Modal content</Modal>);
  fireEvent.click(screen.getByRole('presentation'));
  expect(handleClose).toHaveBeenCalledTimes(1);
});
