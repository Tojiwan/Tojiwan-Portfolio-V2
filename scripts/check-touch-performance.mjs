// Run with Playwright MCP after navigating to the production server to measure.
// eslint-disable-next-line @typescript-eslint/no-unused-expressions -- MCP invokes this function.
async page => {
  const origin = new URL(page.url()).origin;
  const results = [];
  for (const width of [page.viewportSize().width]) {
    const context = await page.context().browser().newContext({
      viewport: { width, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true,
    });
    const mobile = await context.newPage();
    const cdp = await context.newCDPSession(mobile);
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
    await mobile.goto(origin, { waitUntil: 'domcontentloaded' });
    await mobile.locator('.page-intro').waitFor({ state: 'detached' });
    await mobile.waitForTimeout(2000);
    const sample = await mobile.evaluate(async () => {
      const nextFrame = () => new Promise(resolve => requestAnimationFrame(resolve));
      const longTasks = [];
      const observer = new PerformanceObserver(list => longTasks.push(...list.getEntries().map(e => e.duration)));
      observer.observe({ type: 'longtask' });
      const nodesBefore = document.querySelectorAll('*').length;
      const gaps = [];
      let previous = await nextFrame();
      const start = previous;
      const distance = document.documentElement.scrollHeight - innerHeight;
      while (previous - start < 4000) {
        window.scrollTo({ top: distance * Math.min(1, (previous - start) / 3800), behavior: 'instant' });
        const now = await nextFrame();
        gaps.push(now - previous);
        previous = now;
      }
      await new Promise(resolve => setTimeout(resolve, 1500));
      const toggles = [];
      for (let i = 0; i < 3; i++) {
        const before = performance.now();
        document.querySelector('button[aria-label*="mode"]').click();
        await nextFrame();
        await nextFrame();
        toggles.push(performance.now() - before);
        await new Promise(resolve => setTimeout(resolve, 600));
      }
      observer.disconnect();
      gaps.sort((a, b) => a - b);
      return { coarse: matchMedia('(pointer: coarse)').matches, nodesBefore,
        nodesAfter: document.querySelectorAll('*').length, scrollP95Ms: gaps[Math.floor(gaps.length * .95)],
        scrollMaxMs: Math.max(...gaps), framesOver50ms: gaps.filter(n => n > 50).length,
        toggleTwoFramesMs: toggles, longTaskTotalMs: longTasks.reduce((a, b) => a + b, 0),
        canvas: !!document.querySelector('.cursor-grid canvas'), overflow: document.documentElement.scrollWidth > innerWidth };
    });
    results.push({ width, ...sample });
    await context.close();
  }
  return results;
}
