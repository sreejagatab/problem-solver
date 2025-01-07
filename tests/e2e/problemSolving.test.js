// problemSolving.test.js
import { Selector } from 'testcafe';

fixture('Problem Solving').page('http://localhost:3000/dashboard');

test('Verify problem and solution cards', async (t) => {
  await t
    .expect(Selector('h2').withText('Recent Problems').exists).ok()
    .expect(Selector('.problem-card').count).gte(3)
    .expect(Selector('.solution-card').count).gte(3);
});
