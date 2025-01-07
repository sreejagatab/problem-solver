// workflowAutomation.test.js
import { Selector } from 'testcafe';

fixture('Workflow Automation').page('http://localhost:3000/workflow-automation');

test('Verify workflow designer and engine', async (t) => {
  await t
    .expect(Selector('h1').withText('Workflow Automation').exists).ok()
    .expect(Selector('.workflow-designer').exists).ok()
    .expect(Selector('.workflow-step').count).gte(3)
    .expect(Selector('.workflow-engine').exists).ok()
    .expect(Selector('.run-workflow-button').exists).ok();
});
