// sustainabilityTracker.test.js
import { Selector } from 'testcafe';

fixture('Sustainability Tracker').page('http://localhost:3000/sustainability-tracker');

test('Verify sustainability features', async (t) => {
  await t
    .expect(Selector('h1').withText('Sustainability Tracker').exists).ok()
    .expect(Selector('.environmental-impact-tracker').exists).ok()
    .expect(Selector('.green-computing-options').exists).ok()
    .expect(Selector('.carbon-offset-integration').exists).ok();
});
