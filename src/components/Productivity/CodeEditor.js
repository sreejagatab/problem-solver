// CodeEditor.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button } from '../UI';
import { Fade } from '../Animations';
import { useState as useStateHook, useEffect as useEffectHook } from 'react';

const CodeEditor = () => {
  const [code, setCode] = useState('console.log("Hello, Problem Solver!");');

  const handleSaveCode = () => {
    // Implement logic to save the code
    console.log('Saving code:', code);
  };

  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>Code Editor</Heading>
        <Text variant="lead" className="mt-2">
          Write and test your code directly within the platform.
        </Text>
        <div className="mt-4">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="border rounded-md p-4 w-full h-48 font-mono"
          />
        </div>
        <Button variant="primary" onClick={handleSaveCode} className="mt-4">
          Save Code
        </Button>
      </Card>
    </Fade>
  );
};

export default CodeEditor;