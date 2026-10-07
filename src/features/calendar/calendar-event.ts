import { isValidDate, localDate, nextOccurrence } from "../movies/catalog.ts";
import type { MovieMatch } from "../movies/types.ts";

function escapeText(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\r\n|\r|\n/g, "\\n")
    .replace(/[,;]/g, "\\$&");
}

// Calendar content lines are limited to 75 UTF-8 bytes, including continuation spaces.
function foldLine(value: string) {
  const encoder = new TextEncoder();
  let result = "";
  let bytes = 0;
  for (const character of value) {
    const size = encoder.encode(character).length;
    if (bytes + size > 75) {
      result += "\r\n ";
      bytes = 1;
    }
    result += character;
    bytes += size;
  }
  return result;
}

export function createCalendarEvent(
  movie: MovieMatch,
  date: string,
  now = new Date(),
) {
  if (!isValidDate(date)) throw new Error("Choose a valid calendar date.");
  const today = localDate(now);
  if (date < today) {
    const upcoming = nextOccurrence(date.slice(5), today);
    if (!upcoming) throw new Error("No upcoming occurrence of this date.");
    date = upcoming;
  }
  const end = new Date(`${date}T00:00:00Z`);
  end.setUTCDate(end.getUTCDate() + 1);
  const endDate = end.toISOString().split("T")[0];
  const compactDate = date.replaceAll("-", "");
  const compactEnd = endDate.replaceAll("-", "");
  const title = `Movie night: ${movie.title}`;
  const releaseYear = movie.year ? ` (${movie.year})` : "";
  const details = [
    `${movie.title}${releaseYear}`,
    "",
    `The date connection: ${movie.connection.label}`,
    movie.connection.explanation,
    "",
    `Source: ${movie.connection.source}`,
    "Picked with Reel Dates.",
  ].join("\n");
  const google = new URL("https://calendar.google.com/calendar/render");
  google.search = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${compactDate}/${compactEnd}`,
    details,
  }).toString();
  const outlook = new URL(
    "https://outlook.live.com/calendar/0/deeplink/compose",
  );
  outlook.search = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: title,
    startdt: date,
    enddt: endDate,
    allday: "true",
    body: details,
  }).toString();
  const ics =
    [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Reel Dates//Movie night//EN",
      "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      `UID:${movie.id}-${compactDate}@movie-day.local`,
      `DTSTAMP:${now
        .toISOString()
        .replace(/[-:]/g, "")
        .replace(/\.\d{3}/, "")}`,
      `DTSTART;VALUE=DATE:${compactDate}`,
      `DTEND;VALUE=DATE:${compactEnd}`,
      `SUMMARY:${escapeText(title)}`,
      `DESCRIPTION:${escapeText(details)}`,
      `URL:${movie.connection.source}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ]
      .map(foldLine)
      .join("\r\n") + "\r\n";
  return {
    date,
    google: google.href,
    outlook: outlook.href,
    apple: `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`,
    filename: `movie-night-${movie.id}-${date}.ics`,
    ics,
  };
}
