// edgeComputing.test.js
import { Selector } from 'testcafe';

fixture('Edge Computing').page('http://localhost:3000/edge-computing');

test('Verify edge device integration', async (t) => {
  await t
    .expect(Selector('h1').withText('Edge Computing').exists).ok()
    .expect(Selector('.edge-device').count).gte(1)
    .click(Selector('.view-device-data-button').nth(0))
    .expect(Selector('.edge-device-data').exists).ok();
});