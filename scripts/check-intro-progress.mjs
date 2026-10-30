// Run through Playwright MCP against a production server on port 3032.
// eslint-disable-next-line @typescript-eslint/no-unused-expressions -- MCP invokes this function.
async page => {
  const results = [];
  for (const scenario of ['success', 'font-error', 'missing-font', 'image-error', 'both-error', 'timeout', 'api-error']) {
    const context = await page.context().browser().newContext({ reducedMotion: 'no-preference' });
    try {
      await context.addInitScript(mode => {
        window.maxLoadedSegments = 0;
        new MutationObserver(() => {
          window.maxLoadedSegments = Math.max(window.maxLoadedSegments, document.querySelectorAll('.page-intro-bar .is-loaded').length);
        }).observe(document, { subtree: true, childList: true, attributes: true });
        if (mode === 'font-error' || mode === 'both-error') FontFaceSet.prototype.load = () => Promise.reject(new Error('Font failed'));
        if (mode === 'missing-font') FontFaceSet.prototype.load = () => Promise.resolve([]);
        if (mode === 'image-error' || mode === 'both-error') HTMLImageElement.prototype.decode = () => Promise.reject(new Error('Image failed'));
        if (mode === 'timeout') HTMLImageElement.prototype.decode = () => new Promise(() => {});
        if (mode === 'api-error') HTMLImageElement.prototype.decode = undefined;
      }, scenario);
      const p = await context.newPage();
      await p.goto('http://localhost:3032', { waitUntil: 'domcontentloaded' });
      await p.locator('.page-intro').waitFor({ state: 'detached', timeout: 6500 });
      const actual = await p.evaluate(() => window.maxLoadedSegments);
      const expected = scenario === 'success' ? 24 : scenario === 'both-error' ? 0 : scenario === 'api-error' ? null : 12;
      if (expected !== null && actual !== expected) throw Error(`${scenario}: expected ${expected} segments, got ${actual}`);
      if (await p.locator('.page-intro-page[inert]').count()) throw Error(`${scenario}: page stayed blocked`);
      results.push(`${scenario}: PASS (${actual}/24${expected === null ? ', released' : ''})`);
    } finally { await context.close(); }
  }
  return results;
}
