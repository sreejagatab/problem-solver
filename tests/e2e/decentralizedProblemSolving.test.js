// decentralizedProblemSolving.test.js
import { Selector } from 'testcafe';

fixture('Decentralized Problem Solving').page('http://localhost:3000/decentralized-problem-solving');

test('Verify idea board functionality', async (t) => {
  await t
    .expect(Selector('h1').withText('Decentralized Problem Solving').exists).ok()
    .expect(Selector('.idea-card').count).gte(3)
    .click(Selector('.view-idea-button').nth(0))
    .expect(Selector('.idea-details').exists).ok();
});
