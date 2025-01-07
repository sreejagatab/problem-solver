// localization.test.js
import { Selector } from 'testcafe';

fixture('Localization').page('http://localhost:3000/');

test('Verify language switching', async (t) => {
  await t
    .click(Selector('.language-switcher'))
    .click(Selector('.language-option').withText('Español'))
    .expect(Selector('h1').withText('Bienvenido a Problem Solver').exists).ok();
});