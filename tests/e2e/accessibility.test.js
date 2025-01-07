// accessibility.test.js
import { Selector } from 'testcafe';

fixture('Accessibility').page('http://localhost:3000/accessibility');

test('Verify accessibility features', async (t) => {
  await t
    .expect(Selector('h1').withText('Accessibility').exists).ok()
    .expect(Selector('.keyboard-navigation').exists).ok()
    .expect(Selector('.screen-reader-support').exists).ok()
    .expect(Selector('.high-contrast-mode').exists).ok()
    .expect(Selector('.customization-settings').exists).ok();
});
