// homepage.test.js
import { Selector } from 'testcafe';

fixture('Home Page').page('http://localhost:3000/');

test('Verify homepage content', async (t) => {
  await t
    .expect(Selector('h1').innerText).eql('Welcome to Problem Solver')
    .expect(Selector('p.text-lead').innerText).contains('Unlock your problem-solving potential')
    .expect(Selector('button').withText('Get Started').exists).ok()
    .expect(Selector('button').withText('Learn More').exists).ok();
});