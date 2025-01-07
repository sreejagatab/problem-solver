// hybridCloudManagement.test.js
import { Selector } from 'testcafe';

fixture('Hybrid Cloud Management').page('http://localhost:3000/hybrid-cloud-management');

test('Verify distributed resource management and cloud integration', async (t) => {
  await t
    .expect(Selector('h1').withText('Hybrid Cloud Management').exists).ok()
    .expect(Selector('.distributed-resource').count).gte(1)
    .expect(Selector('.cloud-integration-hub').exists).ok()
    .click(Selector('.allocate-resource-button').nth(0))
    .expect(Selector('.resource-allocated-message').exists).ok();
});
