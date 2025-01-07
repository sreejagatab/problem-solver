// nlp.test.js
import { extractKeywords, classifyText } from '../../src/utils/nlp';
import axios from 'axios';

jest.mock('axios');

test('extractKeywords makes a POST request to the keywords endpoint', async () => {
  const mockText = 'This is a sample text.';
  const mockKeywords = ['sample', 'text'];
  axios.post.mockResolvedValueOnce({ data: { keywords: mockKeywords } });

  const keywords = await extractKeywords(mockText);
  expect(keywords).toEqual(mockKeywords);
  expect(axios.post).toHaveBeenCalledWith('/api/nlp/keywords', { text: mockText });
});

test('classifyText makes a POST request to the classify endpoint', async () => {
  const mockText = 'This is a sample text.';
  const mockClassification = 'sample_class';
  axios.post.mockResolvedValueOnce({ data: { classification: mockClassification } });

  const classification = await classifyText(mockText);
  expect(classification).toEqual(mockClassification);
  expect(axios.post).toHaveBeenCalledWith('/api/nlp/classify', { text: mockText });
});