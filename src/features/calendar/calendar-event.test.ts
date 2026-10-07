import { test } from "vitest";
import assert from "node:assert/strict";
import { findMovies } from "../movies/catalog.ts";
import { createCalendarEvent } from "./calendar-event.ts";

test("films without a release year still create usable calendar events", () => {
  const movie = { ...findMovies("2026-02-02", true)[0], year: undefined };
  const event = createCalendarEvent(movie, "2026-02-02", new Date(2026, 0, 1));
  const notes = new URL(event.google).searchParams.get("details");
  assert.ok(notes?.startsWith("Groundhog Day\n\n"));
  assert.ok(event.ics.includes("SUMMARY:Movie night: Groundhog Day"));
});

test("events report when a past leap day has no supported future occurrence", () => {
  assert.throws(
    () =>
      createCalendarEvent(
        findMovies("9996-02-29", true)[0],
        "9996-02-29",
        new Date(9999, 0, 1),
      ),
    /No upcoming occurrence/,
  );
});

test("calendar events use the selected year and include the film’s story connection", () => {
  const movie = findMovies("2026-10-21", true)[0];
  const event = createCalendarEvent(
    movie,
    "2026-10-21",
    new Date("2026-10-07T12:34:56Z"),
  );
  const google = new URL(event.google).searchParams;
  const outlook = new URL(event.outlook).searchParams;
  assert.equal(google.get("text"), "Movie night: Back to the Future Part II");
  assert.equal(google.get("dates"), "20261021/20261022");
  assert.equal(outlook.get("startdt"), "2026-10-21");
  assert.equal(outlook.get("enddt"), "2026-10-22");
  assert.equal(outlook.get("allday"), "true");
  assert.equal(outlook.get("body"), google.get("details"));
  assert.ok(google.get("details")?.includes(movie.connection.explanation));
  assert.ok(google.get("details")?.includes(movie.connection.source));
  assert.ok(event.ics.includes("DTSTAMP:20261007T123456Z\r\n"));
  assert.equal(decodeURIComponent(event.apple.split(",")[1]), event.ics);
});

test("all-day events have an exclusive next-day end across calendar boundaries", () => {
  for (const [date, end] of [
    ["2028-02-28", "20280229"],
    ["2028-02-29", "20280301"],
    ["2026-02-28", "20260301"],
    ["2026-12-31", "20270101"],
  ]) {
    const event = createCalendarEvent(
      findMovies(date, true)[0],
      date,
      new Date(2026, 0, 1),
    );
    assert.ok(
      event.ics.includes(`DTSTART;VALUE=DATE:${date.replaceAll("-", "")}\r\n`),
    );
    assert.ok(event.ics.includes(`DTEND;VALUE=DATE:${end}\r\n`));
    assert.equal(
      new URL(event.google).searchParams.get("dates"),
      `${date.replaceAll("-", "")}/${end}`,
    );
  }
  assert.throws(() =>
    createCalendarEvent(findMovies("2026-02-02")[0], "2026-02-29"),
  );
});

test("past dates move to the next occurrence while today and future dates stay selected", () => {
  const now = new Date(2026, 9, 7, 23, 30);
  for (const [selected, expected] of [
    ["2026-02-02", "2027-02-02"],
    ["2020-10-21", "2026-10-21"],
    ["2026-10-07", "2026-10-07"],
    ["2026-10-21", "2026-10-21"],
    ["2029-02-02", "2029-02-02"],
    ["2024-02-29", "2028-02-29"],
  ]) {
    const event = createCalendarEvent(
      findMovies(selected, true)[0],
      selected,
      now,
    );
    assert.equal(event.date, expected);
    assert.equal(new URL(event.outlook).searchParams.get("startdt"), expected);
    assert.ok(
      new URL(event.google).searchParams
        .get("dates")
        ?.startsWith(expected.replaceAll("-", "") + "/"),
    );
    assert.ok(
      event.ics.includes(
        `DTSTART;VALUE=DATE:${expected.replaceAll("-", "")}\r\n`,
      ),
    );
    assert.ok(event.filename.endsWith(`${expected}.ics`));
  }
});

test("event rollover follows the local calendar day rather than UTC", () => {
  const now = new Date(2026, 11, 31, 23, 59);
  const movie = findMovies("2026-12-31", true)[0];
  assert.equal(
    createCalendarEvent(movie, "2026-12-31", now).date,
    "2026-12-31",
  );
  now.setMinutes(now.getMinutes() + 1);
  assert.equal(
    createCalendarEvent(movie, "2026-12-31", now).date,
    "2027-12-31",
  );
});

test("downloaded calendar text escapes punctuation and folds UTF-8 without corrupting characters", () => {
  const movie = {
    ...findMovies("2026-02-02", true)[0],
    title: "A, B; C\\D\nA new line " + "🎬é".repeat(40),
  };
  const event = createCalendarEvent(movie, "2026-02-02");
  for (const line of event.ics.split("\r\n"))
    assert.ok(Buffer.byteLength(line, "utf8") <= 75);
  const unfolded = event.ics.replace(/\r\n /g, "");
  assert.ok(
    unfolded.includes(
      "SUMMARY:Movie night: A\\, B\\; C\\\\D\\nA new line " + "🎬é".repeat(40),
    ),
  );
  assert.ok(unfolded.startsWith("BEGIN:VCALENDAR\r\n"));
  assert.ok(unfolded.endsWith("END:VCALENDAR\r\n"));
});
