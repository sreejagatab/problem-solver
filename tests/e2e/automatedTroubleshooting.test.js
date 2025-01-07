// automatedTroubleshooting.test.js
import { Selector } from 'testcafe';

fixture('Automated Troubleshooting').page('http://localhost:3000/automated-troubleshooting');

test('Verify operational dashboard and alert notifications', async (t) => {
  await t
    .expect(Selector('h1').withText('Automated Troubleshooting').exists).ok()
    .expect(Selector('.operational-dashboard').exists).ok()
    .expect(Selector('.alert-notification').count).gte(1)
    .click(Selector('.view-alert-button').nth(0))
    .expect(Selector('.alert-details').exists).ok();
});