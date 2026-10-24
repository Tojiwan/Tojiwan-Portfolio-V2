  // Run via Playwright MCP browser_run_code_unsafe filename against npm start -- --port 3025.
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions -- MCP evaluates this function expression with its Page instance.
async (page, url = "http://localhost:3025") => {
  const check  = (condition, message) => { if (!condition) throw new Error(message); };
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(url);
  await page.emulateMedia({ reducedMotion: "reduce" });
  const region = page.getByRole("region", { name: "Project terminals" });
  await region.waitFor();

  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 960 });
    await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    for (const dark of [false, true]) {
      await page.evaluate((value) => document.documentElement.classList.toggle("dark", value), dark);
      const dimensions = await page.locator("#projects").evaluate((section) => {
        const active  = section.querySelector(".swiper-slide:not([inert])");
        const summary = active.querySelector(".projects-summary").getBoundingClientRect();
        const preview = active.querySelector(".projects-preview").getBoundingClientRect();
        return {
          overflow   : document.documentElement.scrollWidth > innerWidth,
          activeCount: section.querySelectorAll(".swiper-slide:not([inert])").length,
          split      : preview.left > summary.left + summary.width - 1,
          buttons    : [...section.querySelectorAll("button")].filter((button) => !button.closest("[inert]") && button.getClientRects().length > 0).map((button) => {
            const rect = button.getBoundingClientRect();
            return [rect.width, rect.height];
          }),
        };
      });
      check(!dimensions.overflow, `Overflow at ${width}, dark=${dark}`);
      check(dimensions.activeCount === 1, "More than one interactive project");
      check(dimensions.split === (width >= 1024), `Wrong layout at ${width}`);
      check(dimensions.buttons.every(([w, h]) => w >= 44 && h >= 44), "Small touch target");
    }
  }

  await page.getByRole("button", { name: "Next project", exact: true }).click();
  check(await page.locator("#projects .swiper-slide:not([inert]) h3").innerText() === "Facebook RAG Chatbot", "Next project failed");
  await region.focus();
  await page.keyboard.press("End");
  check(await page.locator("#projects .swiper-slide:not([inert]) h3").innerText() === "Dental Clinic Management System", "End key failed");
  check(await page.getByRole("button", { name: "Next project", exact: true }).getAttribute("aria-disabled") === "true", "Last project must not loop");
  await page.keyboard.press("Home");
  await page.getByRole("button", { name: "Show demo password" }).click();
  await page.getByRole("button", { name: "Hide demo password" }).click();

  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const trigger = page.getByRole("button", { name: "Gallery", exact: true });
    await trigger.click();
    const dialog = page.locator("dialog[open]");
    await dialog.waitFor();
    check(await page.evaluate(() => document.body.style.overflow === "hidden"), "Missing scroll lock");
    check(await dialog.evaluate((el) => el.scrollWidth <= el.clientWidth), `Gallery overflow at ${width}`);
    await page.getByRole("button", { name: "Next screenshot", exact: true }).click();
    await page.keyboard.press("End");
    check(await page.getByRole("button", { name: "Next screenshot", exact: true }).getAttribute("aria-disabled") === "true", "Gallery must not loop");
    await page.keyboard.press("Home");
    for (let i = 0; i < 16; i++) {
      await page.keyboard.press(i < 8 ? "Tab" : "Shift+Tab");
      check(await dialog.evaluate((el) => el.contains(document.activeElement)), "Focus escaped the gallery");
    }
    await page.keyboard.press("Escape");
    await page.locator("dialog").waitFor({ state: "detached" });
    check(await trigger.evaluate((el) => el === document.activeElement), "Focus did not return to Preview");
    check(await page.evaluate(() => document.body.style.overflow !== "hidden"), "Scroll lock not restored");
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  for (const [project, count] of [["Shop.Co", 5], ["Ramen Makimura Website", 9], ["Vehiserive", 4], ["Dental Clinic Management System", 7]]) {
    await page.getByRole("navigation", { name: "Choose a project" }).getByRole("button", { name: new RegExp(project.replaceAll(".", "\\.")) }).click();
    const cover = page.getByRole("button", { name: `Open ${project} screenshot gallery`, exact: true });
    await cover.click();
    const dialog = page.locator("dialog[open]");
    await dialog.waitFor();
    const selectors = dialog.getByRole("navigation", { name: "Choose a screenshot" }).getByRole("button");
    check(await selectors.count() === count, `Wrong image count for ${project}`);
    for (let i = 0; i < count; i++) {
      await selectors.nth(i).click();
      await page.waitForFunction(() => {
        const image = document.querySelector("dialog .swiper-slide-active img");
        return image?.complete && image.naturalWidth > 0;
      });
      const image = dialog.locator(".swiper-slide-active img");
      check(!!await image.getAttribute("alt"), "Missing image alt text");
      check(await image.evaluate((el) => getComputedStyle(el).objectFit === "contain"), "Gallery crops screenshot");
      const href = await dialog.getByRole("link", { name: /Open full-size image/ }).getAttribute("href");
      const response = await page.request.get(new URL(href, url).href);
      check(response.ok() && response.headers()["content-type"].startsWith("image/"), `Broken original image: ${href}`);
    }
    await page.keyboard.press("Escape");
    await page.locator("dialog").waitFor({ state: "detached" });
    check(await cover.evaluate((el) => el === document.activeElement), "Cover focus did not return");
  }
  check(errors.length === 0, errors.join("\n"));
  return "PASS: layouts, targets, keyboard navigation, password, modal focus, scroll lock, and all 25 real screenshots";
}
