// Run with Playwright MCP against a production server on port 3032.
// eslint-disable-next-line @typescript-eslint/no-unused-expressions -- MCP invokes this function.
async page => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('http://localhost:3032');
  await page.locator('.page-intro').waitFor({ state: 'detached' });
  await page.waitForTimeout(1800);
  const pseudoCount = () => page.evaluate(() => document.getAnimations().filter(animation => String(animation.effect.pseudoElement || '').includes('view-transition')).length);
  const samples = [];
  for (let i = 0; i < 3; i++) {
    await page.waitForTimeout(400);
    if (await pseudoCount()) throw Error('Previous crossfade still running');
    const before = await page.evaluate(() => document.documentElement.classList.contains('dark'));
    const start = Date.now();
    await page.locator('button[aria-label*="mode"]').click();
    await page.waitForFunction(() => document.getAnimations().some(animation => String(animation.effect.pseudoElement || '').includes('view-transition')), null, { timeout: 2000 });
    if (before === await page.evaluate(() => document.documentElement.classList.contains('dark'))) throw Error('Theme did not change');
    samples.push({ crossfadeStartMs: Date.now() - start });
    await page.waitForFunction(() => !document.getAnimations().some(animation => String(animation.effect.pseudoElement || '').includes('view-transition')), null, { timeout: 2000 });
  }
  const rapid = await page.evaluate(async () => {
    const errors = [];
    const onRejection = event => errors.push(String(event.reason?.name || event.reason));
    window.addEventListener('unhandledrejection', onRejection);
    const button = document.querySelector('button[aria-label*="mode"]');
    for (let i = 0; i < 3; i++) {
      button.click();
      await new Promise(resolve => setTimeout(resolve, 20));
    }
    await new Promise(resolve => setTimeout(resolve, 800));
    window.removeEventListener('unhandledrejection', onRejection);
    return errors;
  });
  if (rapid.length) throw Error(`Rapid toggles rejected: ${rapid.join(', ')}`);
  const dark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  await page.reload();
  if (await page.evaluate(() => document.documentElement.classList.contains('dark')) !== dark) throw Error('Theme not persisted');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.locator('button[aria-label*="mode"]').click();
  await page.waitForTimeout(300);
  if (await pseudoCount()) throw Error('Reduced motion still crossfades');
  return samples;
}
