// CodeGenerator.js
import React, { useState } from 'react';
import { Card, Heading, Text, Button, TextArea } from '../components/UI';
import { Fade } from '../components/Animations';
import { generateCode, repairCode, debugCode } from '../utils/codeManagement';

const CodeGenerator = () => {
  const [codePrompt, setCodePrompt] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isRepairing, setIsRepairing] = useState(false);
  const [isDebugging, setIsDebugging] = useState(false);

  const handleCodePromptChange = (e) => {
    setCodePrompt(e.target.value);
  };

  const handleGenerateCode = async () => {
    setIsGenerating(true);
    try {
      const code = await generateCode(codePrompt);
      setGeneratedCode(code);
      setIsGenerating(false);
    } catch (error) {
      console.error('Error generating code:', error);
      setIsGenerating(false);
    }
  };

  const handleRepairCode = async () => {
    setIsRepairing(true);
    try {
      const repairedCode = await repairCode(generatedCode);
      setGeneratedCode(repairedCode);
      setIsRepairing(false);
    } catch (error) {
      console.error('Error repairing code:', error);
      setIsRepairing(false);
    }
  };

  const handleDebugCode = async () => {
    setIsDebugging(true);
    try {
      const debuggedCode = await debugCode(generatedCode);
      setGeneratedCode(debuggedCode);
      setIsDebugging(false);
    } catch (error) {
      console.error('Error debugging code:', error);
      setIsDebugging(false);
    }
  };

  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>Code Generation and Optimization</Heading>
        <Text variant="lead" className="mt-2">
          Generate, repair, and debug code using our advanced AI-powered capabilities.
        </Text>
        <div className="mt-4">
          <Heading level={4}>Code Prompt</Heading>
          <TextArea
            value={codePrompt}
            onChange={handleCodePromptChange}
            rows={4}
            placeholder="Enter your code prompt here..."
          />
        </div>
        <Button variant="primary" onClick={handleGenerateCode} className="mt-4">
          {isGenerating ? 'Generating Code...' : 'Generate Code'}
        </Button>
        {generatedCode && (
          <div className="mt-4">
            <Heading level={4}>Generated Code</Heading>
            <TextArea value={generatedCode} rows={10} readOnly />
            <div className="mt-2 flex justify-end">
              <Button variant="primary" onClick={handleRepairCode} className="mr-2">
                {isRepairing ? 'Repairing Code...' : 'Repair Code'}
              </Button>
              <Button variant="primary" onClick={handleDebugCode}>
                {isDebugging ? 'Debugging Code...' : 'Debug Code'}
              </Button>
            </div>
          </div>
        )}
      </Card>
    </Fade>
  );
};

export default CodeGenerator;