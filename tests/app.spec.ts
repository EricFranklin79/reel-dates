import { test, expect } from "@playwright/test";
import { readFile } from "node:fs/promises";

test("Winter snow pauses, respects reduced motion, and disappears in other themes", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  await expect(page.locator(".snowfall")).toHaveCount(0);
  await page.getByRole("button", { name: "Winter", exact: true }).click();
  await expect(page.locator(".snowfall")).toBeVisible();
  expect(
    await page
      .locator(".snowfall")
      .evaluate((el) => getComputedStyle(el).pointerEvents),
  ).toBe("none");
  const flakes = page.locator(".snowfall span");
  const states = () =>
    flakes.evaluateAll((elements) =>
      elements.map((el) => getComputedStyle(el).animationPlayState),
    );
  expect((await states()).every((value) => value === "running")).toBe(true);
  await page.getByRole("button", { name: "Pause snow", exact: true }).click();
  expect((await states()).every((value) => value === "paused")).toBe(true);
  await page.getByRole("button", { name: "Resume snow", exact: true }).click();
  expect((await states()).every((value) => value === "running")).toBe(true);
  await page.screenshot({
    path: test.info().outputPath("winter-snow.png"),
    fullPage: true,
  });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator(".snowfall")).toBeHidden();
  await expect(
    page.getByRole("button", { name: "Pause snow", exact: true }),
  ).toBeHidden();
  expect(
    await flakes.evaluateAll((elements) =>
      elements.every((el) => getComputedStyle(el).animationName === "none"),
    ),
  ).toBe(true);
  await page.getByRole("button", { name: "Light", exact: true }).click();
  await expect(page.locator(".snowfall")).toHaveCount(0);
});

test("color themes update page and drawer, persist, and fit mobile", async ({
  page,
}) => {
  await page.goto("/");
  const picker = page.getByRole("group", { name: "Color theme" });
  const backgrounds: string[] = [];
  for (const [label, id, scheme] of [
    ["Light", "light", "light"],
    ["Dark", "dark", "dark"],
    ["Halloween", "halloween", "dark"],
    ["Winter", "winter", "light"],
  ]) {
    await picker.getByRole("button", { name: label, exact: true }).click();
    await expect(
      picker.getByRole("button", { name: label, exact: true }),
    ).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("html")).toHaveAttribute("data-theme", id);
    await expect(page.locator("html")).toHaveAttribute(
      "data-mantine-color-scheme",
      scheme,
    );
    const background = await page
      .locator("body")
      .evaluate((el) => getComputedStyle(el).backgroundColor);
    backgrounds.push(background);
    await page.getByRole("button", { name: "How it works" }).click();
    const drawer = page.getByRole("dialog", { name: "How Reel Dates works" });
    await expect(drawer).toBeVisible();
    expect(
      await drawer.evaluate((el) => getComputedStyle(el).backgroundColor),
    ).toBe(background);
    await page.screenshot({
      path: test.info().outputPath(`theme-${id}.png`),
      fullPage: true,
      animations: "disabled",
    });
    await page.getByRole("button", { name: "Close instructions" }).click();
  }
  expect(new Set(backgrounds).size).toBe(4);
  await page.reload();
  await expect(
    picker.getByRole("button", { name: "Winter", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.setViewportSize({ width: 390, height: 844 });
  for (const button of await picker.getByRole("button").all()) {
    await expect(button).toBeVisible();
    const box = (await button.boundingBox())!;
    expect(box.x).toBeGreaterThanOrEqual(0);
    expect(box.x + box.width).toBeLessThanOrEqual(390);
  }
  await picker.getByRole("button", { name: "Dark", exact: true }).click();
  await page.getByRole("textbox", { name: "YOUR DATE" }).click();
  await expect(page.getByRole("table")).toBeVisible();
});

test("movie-night calendar links follow the selected movie and download an event", async ({
  page,
}) => {
  await page.clock.setFixedTime(new Date("2026-10-07T12:00:00Z"));
  await page.goto("/");
  const date = page.getByRole("textbox", { name: "YOUR DATE" });
  await date.fill("October 21, 2026");
  await date.press("Tab");
  await page.getByRole("button", { name: "Find my movie" }).click();
  const section = page.getByRole("region", { name: "Make it a movie night." });
  const google = new URL(
    (await section
      .getByRole("link", { name: "Google Calendar" })
      .getAttribute("href"))!,
  );
  expect(google.hostname).toBe("calendar.google.com");
  expect(google.searchParams.get("dates")).toBe("20261021/20261022");
  expect(google.searchParams.get("text")).toBe(
    "Movie night: Back to the Future Part II",
  );
  const outlook = new URL(
    (await section
      .getByRole("link", { name: "Outlook" })
      .getAttribute("href"))!,
  );
  expect(outlook.hostname).toBe("outlook.live.com");
  expect(outlook.searchParams.get("startdt")).toBe("2026-10-21");
  expect(outlook.searchParams.get("body")).toBe(
    google.searchParams.get("details"),
  );
  const downloading = page.waitForEvent("download");
  await section.getByRole("link", { name: "Apple Calendar" }).click();
  const download = await downloading;
  expect(download.suggestedFilename()).toMatch(/2026-10-21\.ics$/);
  const contents = await readFile((await download.path())!, "utf8");
  expect(contents).toContain("DTSTART;VALUE=DATE:20261021\r\n");
  expect(contents).toContain(
    "SUMMARY:Movie night: Back to the Future Part II\r\n",
  );
  await page.getByRole("button", { name: "Feb 2", exact: true }).click();
  const updated = new URL(
    (await section
      .getByRole("link", { name: "Google Calendar" })
      .getAttribute("href"))!,
  );
  expect(updated.searchParams.get("text")).toBe("Movie night: Groundhog Day");
  expect(updated.searchParams.get("dates")).toBe("20270202/20270203");
  await expect(
    section.getByText(/An all-day event for February 2, 2027/),
  ).toBeVisible();
  const updatedOutlook = new URL(
    (await section
      .getByRole("link", { name: "Outlook" })
      .getAttribute("href"))!,
  );
  expect(updatedOutlook.searchParams.get("startdt")).toBe("2027-02-02");
  await expect(
    section.getByRole("link", { name: "Apple Calendar" }),
  ).toHaveAttribute("download", /2027-02-02\.ics$/);
  await page.setViewportSize({ width: 390, height: 844 });
  for (const link of await section.getByRole("link").all()) {
    await expect(link).toBeVisible();
    const box = (await link.boundingBox())!;
    expect(box.x).toBeGreaterThanOrEqual(0);
    expect(box.x + box.width).toBeLessThanOrEqual(390);
  }
});

test("date shortcuts show only the selected date’s movie", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await page.getByRole("button", { name: "Feb 2", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "Groundhog Day", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText("Phil Connors is trapped", { exact: false }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Apr 25", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "Miss Congeniality", exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Nov 5", exact: true }).click();
  await expect(page.locator(".movie-card")).toHaveCount(1);
  await expect(
    page.locator(".movie-card .connection a").first(),
  ).toHaveAttribute("href", /imdb/);
  await page.screenshot({
    path: test.info().outputPath("desktop.png"),
    fullPage: true,
    animations: "disabled",
  });
  expect(errors).toEqual([]);
});

test("manual entry updates the single pick and its sources", async ({
  page,
}) => {
  await page.goto("/");
  const date = page.getByRole("textbox", { name: "YOUR DATE" });
  await date.fill("October 21, 2026");
  await date.press("Tab");
  await page.getByRole("button", { name: "Find my movie" }).click();
  await expect(
    page.getByRole("heading", {
      name: "Back to the Future Part II",
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    page.getByText("In-story year: 2015.", { exact: false }),
  ).toBeVisible();
  await date.fill("January 2, 2026");
  await date.press("Tab");
  await page.getByRole("button", { name: "Find my movie" }).click();
  await expect(
    page.getByRole("heading", { name: "Trading Places", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText("Verified connection · scene or written source checked", {
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.getByText(/1983 · Comedy · 1h 56m/)).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Film details and plot" }),
  ).toHaveAttribute("href", /Trading_Places/);
  await expect(
    page.getByRole("heading", { name: "Trading Places", exact: true }),
  ).toBeVisible();
  await date.fill("January 25, 2026");
  await date.press("Tab");
  await page.getByRole("button", { name: "Find my movie" }).click();
  await expect(
    page.getByRole("heading", {
      name: "La La Land",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.locator(".movie-card")).toHaveCount(1);
  await expect(page.locator(".collection-card, .nearby-card")).toHaveCount(0);
  await expect(page.getByText(/All films ·/)).toHaveCount(0);
  await expect(
    page.getByRole("textbox", { name: "Search the collection" }),
  ).toHaveCount(0);
});

test("search scrolls to the pick on desktop and mobile, including repeated searches", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/");
    const date = page.getByRole("textbox", { name: "YOUR DATE" });
    await date.fill("February 29, 2028");
    await date.press("Tab");
    for (let attempt = 0; attempt < 2; attempt++) {
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.getByRole("button", { name: "Find my movie" }).click();
      await expect(
        page.getByRole("heading", { name: "Leap Year", exact: true }),
      ).toBeVisible();
      await expect(page.locator(".movie-card")).toHaveCount(1);
      await expect(page.locator("#results-heading")).toBeFocused();
      await expect(page.locator("#results-heading")).toBeInViewport();
      await expect
        .poll(() => page.evaluate(() => window.scrollY))
        .toBeGreaterThan(0);
    }
  }
});

test("newly verified dialogue and the corrected February 9 film are available", async ({
  page,
}) => {
  await page.goto("/");
  const date = page.getByRole("textbox", { name: "YOUR DATE" });
  await date.fill("January 14, 2026");
  await date.press("Tab");
  await page.getByRole("button", { name: "Find my movie" }).click();
  await expect(
    page.getByRole("heading", { name: "Chicago", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText("Verified connection · scene or written source checked", {
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.locator(".movie-card")).toHaveCount(1);
  await date.fill("February 9, 2026");
  await date.press("Tab");
  await page.getByRole("button", { name: "Find my movie" }).click();
  await expect(page.locator(".movie-card")).toHaveCount(1);
  await expect(
    page.getByRole("heading", { name: "Mr. Nobody", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "While You Were Sleeping", exact: true }),
  ).toHaveCount(0);
  await date.fill("December 23, 2026");
  await date.press("Tab");
  await page.getByRole("button", { name: "Find my movie" }).click();
  await expect(
    page.getByRole("heading", {
      name: "Home Alone 2: Lost in New York",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.getByText(/12\/23\/92/)).toBeVisible();
});

test("mobile layout stays within the viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Nov 5", exact: true }).click();
  await expect(page.locator(".movie-card")).toHaveCount(1);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: test.info().outputPath("mobile.png"),
    fullPage: true,
    animations: "disabled",
  });
});

test("matching instructions open in a drawer from either help button", async ({
  page,
}) => {
  await page.goto("/");
  const help = page.getByRole("button", {
    name: "How does a date match a movie?",
  });
  const drawer = page.getByRole("dialog", { name: "How Reel Dates works" });
  await expect(drawer).not.toBeVisible();
  await help.click();
  await expect(drawer).toBeVisible();
  await expect(
    drawer.getByText("It’s all in the story.", { exact: true }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(drawer).not.toBeVisible();
  await expect(help).toBeFocused();
  await page.getByRole("button", { name: "How it works", exact: true }).click();
  await expect(drawer).toBeVisible();
  await drawer.getByRole("button", { name: "Close instructions" }).click();
  await expect(drawer).not.toBeVisible();
});

test("content below the pick follows the selected movie on mobile", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Feb 2", exact: true }).click();
  const section = page.getByRole("region", { name: "Make it a movie night." });
  await expect(
    section.getByText("Groundhog Day", { exact: true }),
  ).toBeVisible();
  await expect(
    section.getByRole("heading", { name: "Add it to your calendar" }),
  ).toBeVisible();
  const card = await page.locator(".movie-card").boundingBox();
  const content = await section.boundingBox();
  expect(content!.y).toBeGreaterThanOrEqual(card!.y + card!.height);
  await page.getByRole("button", { name: "Apr 25", exact: true }).click();
  await expect(
    section.getByText("Miss Congeniality", { exact: true }),
  ).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await page
    .getByRole("button", { name: "How does a date match a movie?" })
    .click();
  await expect(
    page.getByRole("dialog", { name: "How Reel Dates works" }),
  ).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
});

test("spotlights can pause and respect reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  const lights = page.locator(".spotlight");
  await expect(lights).toHaveCount(4);
  const states = () =>
    lights.evaluateAll((elements) =>
      elements.flatMap((element) =>
        element.getAnimations().map((animation) => animation.playState),
      ),
    );
  await expect
    .poll(states)
    .toEqual(["running", "running", "running", "running"]);
  await page.getByRole("button", { name: "Pause spotlights" }).click();
  await expect.poll(states).toEqual(["paused", "paused", "paused", "paused"]);
  await page.getByRole("button", { name: "Resume spotlights" }).click();
  await expect
    .poll(states)
    .toEqual(["running", "running", "running", "running"]);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect.poll(states).toEqual([]);
  await expect(
    page.getByRole("button", { name: "Pause spotlights" }),
  ).not.toBeVisible();
});
