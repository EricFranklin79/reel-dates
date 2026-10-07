import { test, vi } from "vitest";
import assert from "node:assert/strict";
import {
  movies,
  findMovies,
  nearbyDates,
  isValidDate,
  localDate,
  calendarDays,
  catalogCoverage,
  nextOccurrence,
  displayDate,
} from "./catalog.ts";
import { calendarPicks } from "./data/calendar-picks.ts";

test("invalid dates and upper calendar boundaries have useful fallbacks", () => {
  assert.equal(displayDate("invalid"), "your date");
  assert.deepEqual(nearbyDates("invalid"), []);
  assert.deepEqual(nearbyDates("9999-12-31"), []);
  assert.equal(nextOccurrence("02-02", "invalid"), null);
});

test("caption-only evidence is counted separately and excluded from verified picks", () => {
  const connection = findMovies("2026-01-02")[0].connection;
  const previous = connection.evidence;
  try {
    connection.evidence = "clip-caption";
    assert.equal(catalogCoverage().captionSupported, 1);
    assert.equal(catalogCoverage().supported, 365);
    assert.equal(findMovies("2026-01-02", true).length, 0);
    assert.equal(nearbyDates("2026-01-01", 1, true)[0].date, "2026-01-03");
  } finally {
    connection.evidence = previous;
  }
});

test("missing display metadata does not prevent story-based catalog matching", async () => {
  vi.resetModules();
  vi.doMock("./data/film-details.ts", () => ({ filmDetails: {} }));
  try {
    const fallback = await import("./catalog.ts");
    const movie = fallback.findMovies("2026-01-02", true)[0];
    assert.equal(movie.title, "Trading Places");
    assert.equal(movie.year, undefined);
    assert.equal(movie.connection.evidence, "scene-source");
  } finally {
    vi.doUnmock("./data/film-details.ts");
    vi.resetModules();
  }
});

test("matches plot, setting, and dialogue using month and day across years", () => {
  assert.equal(findMovies("2026-02-02")[0].id, "groundhog-day");
  assert.equal(findMovies("2030-04-25")[0].connection.type, "Dialogue");
  assert.equal(findMovies("2026-10-21")[0].connection.storyYear, 2015);
  assert.equal(findMovies("2015-10-21")[0].id, "back-to-the-future-2");
});
test("returns all films connected to the same date", () => {
  assert.deepEqual(
    findMovies("2026-11-05").map((movie) => movie.id),
    ["v-for-vendetta", "back-to-the-future"],
  );
  assert.equal(findMovies("2026-12-24").length, 3);
  assert.equal(findMovies("2026-12-24", true).length, 3);
});
test("release year does not make an unrelated film a match", () => {
  assert.ok(
    findMovies("1993-01-01").every((movie) => movie.id !== "groundhog-day"),
  );
  assert.equal(findMovies("2026-10-06")[0].id, "jacobs-ladder");
});
test("rejects invalid dates and handles leap days", () => {
  for (const value of [
    "",
    "02-02",
    "2026-02-29",
    "2026-04-31",
    "2026-13-01",
    "0000-01-01",
  ]) {
    assert.equal(isValidDate(value), false, value);
    assert.deepEqual(findMovies(value), []);
  }
  assert.equal(isValidDate("2028-02-29"), true);
  assert.equal(findMovies("2028-02-29")[0].id, "leap-year");
});
test("nearby dates roll into the next year and omit the selected date", () => {
  assert.deepEqual(
    nearbyDates("2026-12-24").map((item) => item.date),
    ["2026-12-25", "2026-12-26", "2026-12-27"],
  );
  assert.deepEqual(
    nearbyDates("2026-10-06").map((item) => item.date),
    ["2026-10-07", "2026-10-08", "2026-10-09"],
  );
});
test("catalog connections all provide a valid date, explanation, and source", () => {
  for (const movie of movies)
    for (const connection of movie.connections) {
      assert.ok(isValidDate(`2000-${connection.date}`));
      assert.ok(
        ["Plot", "Setting", "Dialogue", "In-film date"].includes(
          connection.type,
        ),
      );
      assert.ok(connection.explanation.length > 30);
      assert.equal(new URL(connection.source).protocol, "https:");
    }
});
test("every day of common and leap years has a source-backed pick", () => {
  assert.equal(calendarPicks.length, 366);
  assert.equal(new Set(calendarPicks.map((pick) => pick.date)).size, 366);
  for (const year of [2026, 2028, 2100, 2400]) {
    const days = calendarDays(year);
    for (const day of days) {
      const matches = findMovies(`${year}-${day}`, true);
      assert.ok(matches.length > 0, `${year}-${day}`);
      assert.ok(
        matches.every((movie) =>
          movie.connection.source.startsWith("https://"),
        ),
      );
    }
    assert.deepEqual(catalogCoverage(year).missing, []);
  }
  assert.equal(catalogCoverage(2026).covered, 365);
  assert.equal(catalogCoverage(2028).covered, 366);
});
test("every calendar date now has checked in-film evidence", () => {
  const pick = findMovies("2026-01-25", true)[0];
  assert.equal(pick.title, "La La Land");
  assert.equal(pick.connection.evidence, "scene-source");
  assert.match(pick.connection.explanation, /phone|audition/i);
  assert.equal(findMovies("2026-01-02", true)[0].title, "Trading Places");
  assert.equal(findMovies("2026-10-03", true)[0].id, "mean-girls");
  const coverage = catalogCoverage();
  assert.equal(
    coverage.supported + coverage.captionSupported + coverage.calendarOnly,
    coverage.covered,
  );
  assert.equal(coverage.supported, 366);
  assert.equal(coverage.captionSupported, 0);
  assert.equal(coverage.calendarOnly, 0);
  assert.ok(
    movies.every((movie) =>
      movie.connections.every(
        (connection) => connection.evidence === "scene-source",
      ),
    ),
  );
});
test("every film has sourced display details and a synopsis", () => {
  for (const movie of movies) {
    assert.ok(
      movie.year && movie.year >= 1895 && movie.year <= 2026,
      movie.title,
    );
    assert.ok(movie.genre && movie.genre !== "Film", movie.title);
    assert.ok(movie.duration, movie.title);
    assert.ok(movie.director, movie.title);
    assert.ok(
      movie.description && !movie.description.startsWith("Directed by"),
      movie.title,
    );
    assert.ok(movie.detailsChecked);
    assert.equal(new URL(movie.detailsSource!).protocol, "https:");
  }
  assert.equal(movies.find((movie) => movie.title === "1917")?.year, 2019);
  assert.equal(
    movies.find((movie) => movie.title === "2001: A Space Odyssey")?.year,
    1968,
  );
  assert.equal(movies.find((movie) => movie.title === "2012")?.year, 2009);
  assert.equal(
    movies.find((movie) => movie.title === "The Hunchback of Notre Dame")?.year,
    1996,
  );
  assert.equal(movies.find((movie) => movie.title === "Suspiria")?.year, 2018);
  assert.equal(
    movies.find((movie) => movie.title === "Hidden Figures")?.duration,
    "2h 07m",
  );
  assert.equal(
    movies.find((movie) => movie.title === "Che: Part One")?.duration,
    "2h 12m",
  );
});
test("corrected source titles preserve separately verified alternative matches", () => {
  const matches = findMovies("2026-02-09", true);
  assert.deepEqual(
    matches.map((movie) => movie.title),
    ["Mr. Nobody", "While You Were Sleeping"],
  );
  assert.match(matches[1].connection.explanation, /Saul/);
  const click = findMovies("2026-02-05", true)[0];
  assert.equal(click.title, "Click");
  assert.match(click.connection.source, /click/);
  assert.notEqual(click.connection.clipTimestamp, 145);
});
test("replacements use their own evidence and retain separately checked matches", () => {
  const heist = findMovies("2026-06-04", true)[0];
  assert.equal(heist.title, "Logan Lucky");
  assert.match(
    heist.connection.explanation,
    /initial target date|plan later changes/,
  );
  assert.match(heist.connection.source, /movie=logan-lucky$/);
  assert.equal(heist.connection.compilation, undefined);
  const sequel = findMovies("2026-12-23", true)[0];
  assert.equal(sequel.title, "Home Alone 2: Lost in New York");
  assert.equal(sequel.year, 1992);
  assert.match(sequel.connection.explanation, /12\/23\/92/);
  assert.ok(
    findMovies("2026-12-24", true).some(
      (movie) => movie.title === "Home Alone",
    ),
  );
  assert.equal(findMovies("2026-01-14", true)[0].title, "Chicago");
});
test("leap-day navigation finds a real occurrence and skips century exceptions", () => {
  assert.equal(nextOccurrence("02-29", "2026-01-01"), "2028-02-29");
  assert.equal(nextOccurrence("02-29", "2100-01-01"), "2104-02-29");
  assert.equal(nextOccurrence("02-29", "2028-03-01"), "2032-02-29");
  assert.equal(nextOccurrence("02-29", "2028-02-29"), "2028-02-29");
  assert.equal(nextOccurrence("02-29", "9999-01-01"), null);
  assert.equal(nextOccurrence("02-30", "2026-01-01"), null);
  assert.deepEqual(
    nearbyDates("2026-02-28").map((item) => item.date),
    ["2026-03-01", "2026-03-02", "2026-03-03"],
  );
  assert.deepEqual(
    nearbyDates("2028-02-28").map((item) => item.date),
    ["2028-02-29", "2028-03-01", "2028-03-02"],
  );
});
test("imported dates merge into existing films without duplicating original matches", () => {
  assert.equal(new Set(movies.map((movie) => movie.id)).size, movies.length);
  assert.equal(new Set(movies.map((movie) => movie.title)).size, movies.length);
  assert.equal(
    findMovies("2026-02-02").filter((movie) => movie.id === "groundhog-day")
      .length,
    1,
  );
  assert.equal(findMovies("2026-07-02")[0].id, "independence-day");
  assert.equal(findMovies("2026-07-04")[0].id, "independence-day");
  for (const movie of movies)
    assert.equal(
      new Set(movie.connections.map((connection) => connection.date)).size,
      movie.connections.length,
    );
});
test("formats a local calendar day without converting it to UTC", () => {
  assert.equal(localDate(new Date(2026, 9, 6, 23, 59)), "2026-10-06");
});
