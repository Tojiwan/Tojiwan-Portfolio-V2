// Run with Playwright MCP against the production server on port 3031.
// eslint-disable-next-line @typescript-eslint/no-unused-expressions -- MCP invokes this function.
async page => {
  const context = await page.context().browser().newContext();
  const p = await context.newPage();
  try {
    await p.goto('http://localhost:3031', { waitUntil: 'domcontentloaded' });
    await p.locator('.page-intro-page[inert]').waitFor({ state: 'attached' });
    if (await p.locator('#hero-heading .text-type__char').count()) throw Error('Hero typed behind intro');
    if (await p.locator('.scrambled-text [aria-hidden] span').count()) throw Error('Scramble ran behind intro');
    await p.screenshot({ path: 'C:/Users/Jake/AppData/Local/Temp/opencode/page-intro.png' });
    await p.locator('.page-intro.is-dissolving').waitFor();
    if (await p.locator('#hero-heading .text-type__char').count()) throw Error('Hero typed during dissolve');
    if (!await p.locator('.page-intro-page').evaluate(el => el.inert)) throw Error('Page interactive during dissolve');
    await p.locator('.page-intro').waitFor({ state: 'detached' });
    await p.waitForFunction(() => document.querySelector('#hero-heading .text-type__char'));
    if (await p.locator('.page-intro-page[inert]').count()) throw Error('Page stayed inert');
    await p.addInitScript(() => {
      window.__introSeen = false;
      new MutationObserver(() => {
        if (document.documentElement?.classList.contains('intro-seen')) window.__introSeen = true;
      }).observe(document, { subtree: true, childList: true, attributes: true, attributeFilter: ['class'] });
      document.addEventListener('DOMContentLoaded', () => {
        const overlay = document.querySelector('.page-intro');
        window.__repeatIntro = { seen: window.__introSeen, display: overlay ? getComputedStyle(overlay).display : 'absent' };
      });
    });
    await p.reload();
    await p.locator('.page-intro').waitFor({ state: 'detached' });
    if (await p.evaluate(() => sessionStorage.getItem('tojiwan-intro-seen')) !== '1') throw Error('Session not saved');
    const repeat = await p.evaluate(() => window.__repeatIntro);
    if (!repeat?.seen) throw Error('Intro pre-paint class missing on repeat load');
    if (repeat.display !== 'none' && repeat.display !== 'absent') throw Error(`Intro painted on repeat load (${repeat.display})`);
    await p.evaluate(() => sessionStorage.clear());
    await p.emulateMedia({ reducedMotion: 'reduce' });
    await p.reload();
    await p.locator('.page-intro').waitFor({ state: 'detached' });
    await p.setViewportSize({ width: 390, height: 850 });
    await p.waitForFunction(() => document.documentElement.scrollWidth <= innerWidth);
    return 'PASS: gated typing/scramble, intro exit, repeat pre-paint skip, session persistence, reduced motion, mobile overflow';
  } finally { await context.close(); }
}
