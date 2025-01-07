// DataUploader.js
import React, { useState } from 'react';
import { Card, Heading, Text, Button, Alert } from '../UI';
import { Fade } from '../Animations';
import { fetchPublicDatasets, fetchPrivateDatasets, fetchCodingDatasets } from '../utils/data';
const DataUploader = () => {
const [file, setFile] = useState(null);
const [isUploading, setIsUploading] = useState(false);
const [uploadProgress, setUploadProgress] = useState(0);
const [publicDatasets, setPublicDatasets] = useState([]);
const [privateDatasets, setPrivateDatasets] = useState([]);
const [codingDatasets, setCodingDatasets] = useState([]);
const handleFileChange = (e) => {
setFile(e.target.files[0]);
};
const handleUpload = () => {
setIsUploading(true);
// Simulating the upload progress
const interval = setInterval(() => {
    setUploadProgress((progress) => {
      if (progress === 100) {
        clearInterval(interval);
        setIsUploading(false);
        return 100;
      }
      return progress + 10;
    });
  }, 500);
  
  // Implement the actual file upload logic here
  console.log('Uploading file:', file);
};
const loadPublicDatasets = async () => {
const datasets = await fetchPublicDatasets();
setPublicDatasets(datasets);
};
const loadPrivateDatasets = async () => {
const datasets = await fetchPrivateDatasets();
setPrivateDatasets(datasets);
};
const loadCodingDatasets = async () => {
const datasets = await fetchCodingDatasets();
setCodingDatasets(datasets);
};
return (
<Fade>
<Card className="p-8">
<Heading level={2}>Data Uploader</Heading>
<Text variant="lead" className="mt-2">
Easily upload your data files to the platform.
</Text>
{file ? (
<div className="mt-4">
<Text>Uploading "{file.name}"...</Text>
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full mt-2">
<div
className="bg-primary-500 text-white text-xs font-medium p-1 leading-none rounded-full"
style={{ width: ${uploadProgress}% }}
>
{uploadProgress}%
</div>
</div>
</div>
) : (
<div className="mt-4 flex justify-center">
<label htmlFor="file-upload" className="cursor-pointer">
<div className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-8 flex flex-col items-center justify-center">
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
<Text className="mt-3">Drag and drop your file here, or click to select a file</Text>
</div>
</label>
<input
           id="file-upload"
           type="file"
           className="hidden"
           onChange={handleFileChange}
         />
</div>
)}
{file && (
<Button variant="primary" onClick={handleUpload} className="mt-4">
{isUploading ? 'Uploading...' : 'Upload File'}
</Button>
)}
<div className="mt-8">
<Heading level={3}>Public Datasets</Heading>
<Button variant="primary" onClick={loadPublicDatasets} className="mt-2">
Load Public Datasets
</Button>
{publicDatasets.map((dataset) => (
<div key={dataset.id} className="mt-4">
<Heading level={4}>{dataset.name}</Heading>
<Text>{dataset.description}</Text>
</div>
))}
</div>
<div className="mt-8">
<Heading level={3}>Private Datasets</Heading>
<Button variant="primary" onClick={loadPrivateDatasets} className="mt-2">
Load Private Datasets
</Button>
{privateDatasets.map((dataset) => (
<div key={dataset.id} className="mt-4">
<Heading level={4}>{dataset.name}</Heading>
<Text>{dataset.description}</Text>
<Text>Price: ${dataset.price}</Text>
</div>
))}
</div>
<div className="mt-8">
<Heading level={3}>Coding Datasets</Heading>
<Button variant="primary" onClick={loadCodingDatasets} className="mt-2">
Load Coding Datasets
</Button>
{codingDatasets.map((dataset) => (
<div key={dataset.id} className="mt-4">
<Heading level={4}>{dataset.name}</Heading>
<Text>{dataset.description}</Text>
<Text>Price: ${dataset.price}</Text>
</div>
))}
</div>
</Card>
</Fade>
);
};
export default DataUploader;