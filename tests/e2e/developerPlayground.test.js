// developerPlayground.test.js
import { Selector } from 'testcafe';

fixture('Developer Playground').page('http://localhost:3000/developer-playground');

test('Verify code editor functionality', async (t) => {
  await t
    .expect(Selector('h1').withText('Developer Playground').exists).ok()
    .expect(Selector('.code-editor').exists).ok()
    .typeText('.code-editor textarea', 'console.log("Hello, Problem Solver!");')
    .click('.save-code-button')
    .expect(Selector('.code-editor textarea').value).contains('console.log("Hello, Problem Solver!");');
});