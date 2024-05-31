const { chromium } = require('playwright');

(async () => {
  // Launch a browser
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Go to the search engine (e.g., Google)
  await page.goto('https://www.google.com');

  // Type the search query and press Enter
  const searchQuery = 'example search term';
  await page.fill('input[name="q"]', searchQuery);
  await page.press('input[name="q"]', 'Enter');

  // Wait for the search results to load
  await page.waitForSelector('h3');

  // Extract and display the search results
  const results = await page.$$eval('h3', headings => headings.map(h => h.innerText));
  console.log('Search Results:', results);

  // Close the browser
  await browser.close();
})();
