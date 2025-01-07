// multiTenantManagement.test.js
import { Selector } from 'testcafe';

fixture('Multi-Tenant Management').page('http://localhost:3000/multi-tenant-management');

test('Verify security controls', async (t) => {
  await t
    .expect(Selector('h1').withText('Multi-Tenant Management').exists).ok()
    .expect(Selector('.view-security-settings-button').exists).ok()
    .expect(Selector('.enable-multi-factor-button').exists).ok()
    .expect(Selector('.view-audit-logs-button').exists).ok();
});
