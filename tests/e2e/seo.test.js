// seo.test.js
import { Selector } from 'testcafe';

fixture('SEO').page('http://localhost:3000/seo');

test('Verify SEO optimization features', async (t) => {
  await t
    .expect(Selector('h1').withText('SEO Optimizer').exists).ok()
    .expect(Selector('.run-seo-analysis-button').exists).ok()
    .expect(Selector('.sitemap-generator').exists).ok()
    .expect(Selector('.meta-tags-manager').exists).ok();
});