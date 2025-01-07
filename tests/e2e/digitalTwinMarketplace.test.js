// digitalTwinMarketplace.test.js
import { Selector } from 'testcafe';

fixture('Digital Twin Marketplace').page('http://localhost:3000/digital-twin-marketplace');

test('Verify digital twin models', async (t) => {
  await t
    .expect(Selector('h1').withText('Digital Twin Marketplace').exists).ok()
    .expect(Selector('.digital-twin-card').count).gte(4)
    .click(Selector('.view-model-button').nth(0))
    .expect(Selector('.model-details').exists).ok();
});