// DataManagement/DataUploader.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DataUploader from '../../../src/components/DataManagement/DataUploader';
import { uploadFile } from '../../../src/utils/security';

jest.mock('../../../src/utils/security', () => ({
  uploadFile: jest.fn(),
}));

test('renders data uploader with file upload functionality', () => {
  render(<DataUploader />);
  const fileInput = screen.getByLabelText('file-upload');
  fireEvent.change(fileInput, { target: { files: [new File(['test'], 'test.jpg', { type: 'image/jpeg' })] } });
  fireEvent.click(screen.getByText('Upload File'));
  expect(uploadFile).toHaveBeenCalledWith(expect.any(File));
});
