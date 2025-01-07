// edgeComputingIntegration.test.js
import { Selector } from 'testcafe';

fixture('Edge Computing Integration').page('http://localhost:3000/edge-computing-integration');

test('Verify edge device integration', async (t) => {
  await t
    .expect(Selector('h1').withText('Edge Computing Integration').exists).ok()
    .expect(Selector('.distributed-resource').count).gte(1)
    .expect(Selector('.edge-device-connector').exists).ok()
    .click(Selector('.allocate-resource-button').nth(0))
    .expect(Selector('.resource-allocated-message').exists).ok();
});