// Run through Playwright MCP against a production server on port 3031.
// eslint-disable-next-line @typescript-eslint/no-unused-expressions -- MCP invokes this function.
async page => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('http://localhost:3031');
  const bio = page.locator('#about-panel-bio .text-type');
  const text = el => [...el.querySelectorAll('.text-type__char')].map(c => c.textContent).join('');
  if (await bio.evaluate(text) !== '') throw Error('Offscreen heading started early');
  await bio.scrollIntoViewIfNeeded();
  await page.waitForFunction(() => document.querySelectorAll('#about-panel-bio .text-type__char').length === 18);
  await page.getByRole('tab', { name: 'education.md', exact: true }).click();
  await page.waitForFunction(() => document.querySelectorAll('#about-panel-education .text-type__char').length === 10);
  await page.getByRole('tab', { name: 'bio.md', exact: true }).click();
  if (await bio.evaluate(text) !== 'A little about me.') throw Error('Bio replayed');
  await page.waitForTimeout(2200);
  if (await bio.evaluate(text) !== 'A little about me.') throw Error('Bio looped');
  return 'PASS: first visibility, education tab trigger, tab persistence, no loop';
}
