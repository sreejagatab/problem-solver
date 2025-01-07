// modelManagement.test.js
import { Selector } from 'testcafe';

fixture('Model Management').page('http://localhost:3000/model-management');

test('Verify model marketplace', async (t) => {
  await t
    .expect(Selector('h1').withText('Model Management').exists).ok()
    .expect(Selector('h2').withText('Available Models').exists).ok()
    .expect(Selector('.model-card').count).gte(4);
});
