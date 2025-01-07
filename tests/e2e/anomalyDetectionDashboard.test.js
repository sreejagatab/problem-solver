// anomalyDetectionDashboard.test.js
import { Selector } from 'testcafe';

fixture('Anomaly Detection Dashboard').page('http://localhost:3000/anomaly-detection-dashboard');

test('Verify operational metrics and alert notifications', async (t) => {
  await t
    .expect(Selector('h1').withText('Anomaly Detection Dashboard').exists).ok()
    .expect(Selector('.operational-dashboard').exists).ok()
    .expect(Selector('.alert-notification').count).gte(1)
    .click(Selector('.view-alert-button').nth(0))
    .expect(Selector('.alert-details').exists).ok();
});