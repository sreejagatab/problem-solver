// predictiveMaintenance.test.js
import { Selector } from 'testcafe';

fixture('Predictive Maintenance').page('http://localhost:3000/predictive-maintenance');

test('Verify predictive maintenance model and operational dashboard', async (t) => {
  await t
    .expect(Selector('h1').withText('Predictive Maintenance').exists).ok()
    .expect(Selector('.predictive-maintenance-model').exists).ok()
    .expect(Selector('.operational-dashboard').exists).ok()
    .click(Selector('.view-predictions-button'))
    .expect(Selector('.predicted-failures').exists).ok();
});