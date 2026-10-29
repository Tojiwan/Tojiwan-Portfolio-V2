// Run with Playwright MCP browser_run_code_unsafe against a local server.
// eslint-disable-next-line @typescript-eslint/no-unused-expressions -- MCP invokes this function with its Page instance.
async (page, url = "http://localhost:3028") => {
  const check = (condition, message) => { if (!condition) throw new Error(message); };
  await page.addInitScript(() => {
    window.gridDraws = 0;
    const draw = WebGL2RenderingContext.prototype.drawArrays;
    WebGL2RenderingContext.prototype.drawArrays = function (...args) {
      window.gridDraws++;
      return draw.apply(this, args);
    };
  });
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto(url);
  const grid = page.locator('.cursor-grid[data-ready="true"]');
  await grid.waitFor();
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    check(await page.locator('.site-background').evaluate(el => {
      const r = el.getBoundingClientRect();
      return r.width === document.documentElement.clientWidth && r.height === innerHeight && getComputedStyle(el).pointerEvents === 'none';
    }), 'Background must be viewport-sized and non-interactive');
    check(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Page overflow');
  }
  await page.waitForTimeout(1500);
  const idle = await page.evaluate(() => window.gridDraws);
  await page.waitForTimeout(250);
  check(await page.evaluate(() => window.gridDraws) === idle, 'Background keeps drawing while idle');
  await page.mouse.move(10, 250);
  await page.mouse.click(10, 250);
  await page.waitForTimeout(150);
  check(await page.evaluate(() => window.gridDraws) > idle, 'Pointer did not wake background');
  const toggle = page.getByRole('button', { name: /Switch to .* mode/ });
  const old = await toggle.getAttribute('aria-pressed');
  await toggle.click();
  check(await toggle.getAttribute('aria-pressed') !== old, 'Canvas blocks theme toggle');
  await page.getByRole('tab', { name: 'education.md', exact: true }).click();
  check(await page.getByRole('tab', { name: 'education.md', exact: true }).getAttribute('aria-selected') === 'true', 'Canvas blocks tabs');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.locator('.cursor-grid').waitFor({ state: 'detached' });
  check(await page.locator('.site-background').evaluate(el => getComputedStyle(el).backgroundImage !== 'none'), 'Reduced-motion fallback missing');
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await grid.waitFor();
  await page.locator('.cursor-grid canvas').evaluate(canvas => canvas.getContext('webgl2').getExtension('WEBGL_lose_context').loseContext());
  await page.waitForFunction(() => !document.querySelector('.cursor-grid[data-ready]'));
  check(await page.locator('.site-background').evaluate(el => getComputedStyle(el).backgroundImage !== 'none'), 'Context-loss fallback missing');
  return 'PASS: responsive viewport canvas, idle pause, cursor/click wake, controls, live reduced motion, context-loss fallback';
}
