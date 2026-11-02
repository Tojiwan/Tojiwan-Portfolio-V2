// Run with Playwright MCP after navigating to the production server.
// eslint-disable-next-line @typescript-eslint/no-unused-expressions -- MCP invokes this function.
async page => {
  const origin = new URL(page.url()).origin;
  const context = await page.context().browser().newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  context.setDefaultTimeout(10000);
  try {
    const mobile = await context.newPage();
    await mobile.goto(origin);
    await mobile.locator('.page-intro').waitFor({ state: 'detached' });
    await mobile.waitForTimeout(1800);
    if (await mobile.locator('.cursor-grid').count()) throw Error('Touch device mounted animated cursor grid');
    if (!await mobile.locator('.site-background').evaluate(e => getComputedStyle(e).backgroundImage !== 'none')) throw Error('Static grid missing');
    if (await mobile.locator('*').count() > 3000) throw Error('Idle touch DOM exceeds 3,000-node regression budget');
    const hero = mobile.locator('.hero-description.scrambled-text');
    await hero.scrollIntoViewIfNeeded();
    await mobile.waitForTimeout(1500);
    const text = await hero.locator('[aria-hidden]').textContent();
    await hero.tap();
    if (!await hero.locator('[aria-hidden] span').count()) throw Error('Tap did not prepare scramble');
    await mobile.waitForTimeout(2000);
    if (await hero.locator('[aria-hidden] span').count()) throw Error('Idle glyph nodes not released');
    if (await hero.locator('[aria-hidden]').textContent() !== text) throw Error('Tap changed original text');
    for (const width of [390, 768, 820, 1024]) {
      await mobile.setViewportSize({ width, height: 844 });
      const button = mobile.locator('button[aria-label*="mode"]');
      const before = await button.getAttribute('aria-pressed');
      await button.tap();
      if (await button.getAttribute('aria-pressed') === before) throw Error('Theme did not change');
      if (await mobile.evaluate(() => document.getAnimations().some(a => String(a.effect.pseudoElement || '').includes('view-transition')))) throw Error('Touch theme still snapshots page');
      if (await mobile.evaluate(() => document.documentElement.scrollWidth > innerWidth)) throw Error('Touch layout overflow');
    }
    await mobile.emulateMedia({ reducedMotion: 'reduce' });
    await hero.scrollIntoViewIfNeeded();
    await hero.tap();
    if (await hero.locator('[aria-hidden] span').count()) throw Error('Reduced motion still scrambles');
    return 'PASS: touch tap/restoration, glyph cleanup, theme toggles, phone/tablet layouts, reduced motion';
  } finally {
    await context.close();
  }
}
