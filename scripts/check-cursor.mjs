import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log('Loading page...');
  await page.goto('http://localhost:3000');
  await page.waitForSelector('.hero-heading', { timeout: 15000 });

  // Check for text-type cursor
  const cursor = await page.locator('.text-type__cursor').first();
  const exists = await cursor.count();
  console.log('Cursor element exists:', exists > 0);

  if (exists > 0) {
    const isVisible = await cursor.isVisible();
    console.log('Cursor visible:', isVisible);

    const styles = await cursor.evaluate(el => {
      const computed = getComputedStyle(el);
      return {
        opacity: computed.opacity,
        display: computed.display,
        position: computed.position,
        top: computed.top,
        left: computed.left,
        backgroundColor: computed.backgroundColor,
        color: computed.color,
        width: computed.width,
        height: computed.height,
        animation: computed.animation,
      };
    });
    console.log('Cursor styles:', JSON.stringify(styles, null, 2));

    // Also check the blink element
    const blink = await cursor.locator('.text-type__blink').first();
    const blinkStyles = await blink.evaluate(el => {
      const computed = getComputedStyle(el);
      return {
        display: computed.display,
        opacity: computed.opacity,
        backgroundColor: computed.backgroundColor,
        width: computed.width,
        height: computed.height,
      };
    });
    console.log('Blink styles:', JSON.stringify(blinkStyles, null, 2));

    // Check shape element
    const shape = await cursor.locator('.text-type__shape').first();
    const shapeExists = await shape.count();
    if (shapeExists > 0) {
      const shapeStyles = await shape.evaluate(el => {
        const computed = getComputedStyle(el);
        return {
          display: computed.display,
          opacity: computed.opacity,
          backgroundColor: computed.backgroundColor,
          width: computed.width,
          height: computed.height,
        };
      });
      console.log('Shape styles:', JSON.stringify(shapeStyles, null, 2));
    } else {
      console.log('Shape element does not exist');
    }
  }

  // Check the text-type container
  const container = await page.locator('.text-type').first();
  const containerExists = await container.count();
  console.log('TextType container exists:', containerExists > 0);

  if (containerExists > 0) {
    const containerHtml = await container.innerHTML();
    console.log('TextType innerHTML (first 500 chars):', containerHtml.substring(0, 500));
  }

  await browser.close();
})();