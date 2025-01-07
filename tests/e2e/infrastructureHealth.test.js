// infrastructureHealth.test.js
import { Selector } from 'testcafe';

fixture('Infrastructure Health').page('http://localhost:3000/infrastructure-health');

test('Verify system health monitoring', async (t) => {
  await t
    .expect(Selector('h1').withText('Infrastructure Health').exists).ok()
    .expect(Selector('.uptime').textContent).contains('%')
    .expect(Selector('.latency').textContent).contains('ms')
    .expect(Selector('.errors').textContent).contains('errors')
    .expect(Selector('.incidents').textContent).contains('incidents');
});