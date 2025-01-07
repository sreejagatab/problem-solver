// benchmarking.js
import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:3000/');
  const homePagePerformance = await page.evaluate(() => {
    return {
      loadTime: performance.timing.loadEventEnd - performance.timing.navigationStart,
      firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0].startTime,
      largestContentfulPaint: performance.getEntriesByName('largest-contentful-paint')[0].startTime,
    };
  });
  console.log('Home Page Performance:', homePagePerformance);

  await page.goto('http://localhost:3000/dashboard');
  const dashboardPerformance = await page.evaluate(() => {
    return {
      loadTime: performance.timing.loadEventEnd - performance.timing.navigationStart,
      firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0].startTime,
      largestContentfulPaint: performance.getEntriesByName('largest-contentful-paint')[0].startTime,
    };
  });
  console.log('Dashboard Performance:', dashboardPerformance);

  await browser.close();
})();