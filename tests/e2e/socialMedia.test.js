// socialMedia.test.js
import { Selector } from 'testcafe';

fixture('Social Media').page('http://localhost:3000/social-media');

test('Verify social media integration features', async (t) => {
  await t
    .expect(Selector('h1').withText('Social Media Integration').exists).ok()
    .expect(Selector('.connect-social-media-button').exists).ok()
    .expect(Selector('.content-scheduler').exists).ok()
    .expect(Selector('.social-share-buttons').exists).ok();
});
