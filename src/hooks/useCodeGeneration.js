
// useCodeGeneration.js
import { useState } from 'react';
import { generateCode } from '../utils/codeGen';

const useCodeGeneration = () => {
  const [generatedCode, setGeneratedCode] = useState('');

  const generateCustomCode = async (prompt) => {
    const code = await generateCode(prompt);
    setGeneratedCode(code);
  };

  return { generatedCode, generateCustomCode };
};

export default useCodeGeneration;
