// CodeUploader.js
import React, { useState } from 'react';
import { Card, Heading, Text, Button, Alert, Dropzone } from '../components/UI';
import { Fade } from '../components/Animations';
import { uploadCode, downloadCode } from '../utils/codeManagement';

const CodeUploader = () => {
  const [codeFiles, setCodeFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileUpload = (files) => {
    setCodeFiles(files);
  };

  const handleUpload = async () => {
    setIsUploading(true);

    try {
      await uploadCode(codeFiles);
      setUploadProgress(100);
      setIsUploading(false);
    } catch (error) {
      console.error('Error uploading code:', error);
      setUploadProgress(0);
      setIsUploading(false);
    }
  };

  const handleDownload = async () => {
    try {
      const downloadedCode = await downloadCode();
      // Implement logic to allow users to download the code in various formats (e.g., single file, folder, zip)
      console.log('Downloaded code:', downloadedCode);
    } catch (error) {
      console.error('Error downloading code:', error);
    }
  };

  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>Code Management</Heading>
        <Text variant="lead" className="mt-2">
          Upload, generate, and download code files with ease.
        </Text>
        <Dropzone onDrop={handleFileUpload} className="mt-4">
          <div className="flex flex-col items-center justify-center p-8 bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg">
            <svg
              className="h-12 w-12 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <Text className="mt-3">Drag and drop your code files here, or click to select files</Text>
          </div>
        </Dropzone>
        {codeFiles.length > 0 && (
          <div className="mt-4">
            <Heading level={4}>Uploaded Files</Heading>
            <ul className="list-disc pl-6">
              {codeFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
            {isUploading ? (
              <div className="mt-2">
                <Text>Uploading files...</Text>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full mt-2">
                  <div
                    className="bg-primary-500 text-white text-xs font-medium p-1 leading-none rounded-full"
                    style={{ width: `${uploadProgress}%` }}
                  >
                    {uploadProgress}%
                  </div>
                </div>
              </div>
            ) : (
              <Button variant="primary" onClick={handleUpload} className="mt-2">
                Upload Files
              </Button>
            )}
          </div>
        )}
        <Button variant="primary" onClick={handleDownload} className="mt-4">
          Download Code
        </Button>
      </Card>
    </Fade>
  );
};

export default CodeUploader;