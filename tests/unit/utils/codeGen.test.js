// codeGen.test.js
import { generateCode } from '../../src/utils/codeGen';
import axios from 'axios';

jest.mock('axios');

test('generateCode makes a POST request to the code generation endpoint', async () => {
  const mockPrompt = 'Generate a simple React component';
  const mockCode = 'import React from "react";\n\nconst MyComponent = () => {\n  return <div>Hello, World!</div>;\n};\n\nexport default MyComponent;';
  axios.post.mockResolvedValueOnce({ data: { code: mockCode } });

  const code = await generateCode(mockPrompt);
  expect(code).toEqual(mockCode);
  expect(axios.post).toHaveBeenCalledWith('/api/code/generate', { prompt: mockPrompt });
});
