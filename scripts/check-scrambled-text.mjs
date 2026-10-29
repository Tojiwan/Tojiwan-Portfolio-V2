// Run with Playwright MCP against the production server on port 3031.
// eslint-disable-next-line @typescript-eslint/no-unused-expressions -- MCP invokes this function.
async page => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('http://localhost:3031');
  const hero = page.locator('.hero-description.scrambled-text');
  const settled = el => [...el.querySelectorAll('[aria-hidden] span[style*="visibility"]')].every(s => s.textContent === s.nextElementSibling.textContent);
  await page.waitForFunction(() => document.querySelector('.hero-description [aria-hidden] span[style*="visibility"]'));
  await page.waitForFunction(() => [...document.querySelectorAll('.hero-description span[style*="visibility"]')].every(s => s.textContent === s.nextElementSibling.textContent));
  const box = await hero.boundingBox();
  await page.mouse.move(box.x + 30, box.y + 10);
  await page.waitForFunction(() => [...document.querySelectorAll('.hero-description span[style*="visibility"]')].some(s => s.textContent !== s.nextElementSibling.textContent));
  await page.mouse.move(0, 0);
  await page.waitForTimeout(1400);
  if (!await hero.evaluate(settled)) throw Error('Hover did not restore text');
  await hero.dispatchEvent('click', { clientX: box.x + 30, clientY: box.y + 10, button: 0 });
  await page.waitForFunction(() => [...document.querySelectorAll('.hero-description span[style*="visibility"]')].some(s => s.textContent !== s.nextElementSibling.textContent));
  await page.waitForTimeout(2000);
  if (!await hero.evaluate(settled)) throw Error('Click did not restore text');
  await page.getByRole('tab', { name: 'education.md', exact: true }).click();
  await page.locator('#about-panel-education .scrambled-text').first().scrollIntoViewIfNeeded();
  await page.waitForTimeout(1500);
  if (!await page.locator('#about-panel-education .scrambled-text').first().evaluate(settled)) throw Error('Education did not settle');
  await page.setViewportSize({ width: 390, height: 850 });
  if (await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)) throw Error('Mobile overflow');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.waitForFunction(() => !document.querySelector('.scrambled-text [aria-hidden] span'));
  return 'PASS: hover, click, text restoration, Education, mobile overflow, live reduced motion';
}
