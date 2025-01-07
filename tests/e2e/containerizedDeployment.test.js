// containerizedDeployment.test.js
import { Selector } from 'testcafe';

fixture('Containerized Deployment').page('http://localhost:3000/containerized-deployment');

test('Verify distributed resource management', async (t) => {
  await t
    .expect(Selector('h1').withText('Containerized Deployment').exists).ok()
    .expect(Selector('.distributed-resource').count).gte(1)
    .click(Selector('.allocate-resource-button').nth(0))
    .expect(Selector('.resource-allocated-message').exists).ok();
});
