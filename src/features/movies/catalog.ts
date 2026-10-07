import {
  calendarPicks,
  calendarSource,
  calendarReplacements,
} from "./data/calendar-picks.ts";
import { reviewedMovies } from "./data/reviewed-movies.ts";
import { filmDetails } from "./data/film-details.ts";
import { connectionReviews } from "./data/connection-reviews.ts";

import type { Movie, MovieMatch, MovieConnection } from "./types";
import { originalMovies } from "./data/original-movies.ts";
function buildCatalog(): Movie[] {
  const catalog = [...originalMovies, ...reviewedMovies].map((movie) => ({
    ...movie,
    connections: movie.connections.map((connection) => ({
      ...connection,
      evidence: "scene-source" as const,
    })) as MovieConnection[],
  }));
  for (const pick of calendarPicks) {
    let movie = catalog.find((entry) => entry.title === pick.title);
    if (!movie) {
      movie = {
        id: `calendar-${pick.date}`,
        title: pick.title,
        art: "future",
        motif: "A DATE\nON SCREEN.",
        connections: [],
      };
      catalog.push(movie);
    }
    if (movie.connections.some((connection) => connection.date === pick.date))
      continue;
    const pickDate = displayDate("2000-" + pick.date);
    movie.connections.push({
      date: pick.date,
      type: "In-film date",
      label: `A calendar pick for ${pickDate}`,
      explanation: `${calendarSource.author} associates ${pickDate} with this film in his calendar of dates appearing in movies. This entry is sourced to his index; the exact scene and date connection have not been independently checked here.`,
      evidence: "calendar-index",
      source: calendarSource.index,
      sourceLabel: "Filmmaker’s date-to-film index",
      // Replacement evidence comes from a different film than the indexed excerpt.
      compilation: calendarReplacements[pick.date]
        ? undefined
        : calendarSource.compilation,
    });
  }
  for (const movie of catalog) {
    const details = filmDetails[movie.title];
    if (details) {
      Object.assign(movie, {
        ...details,
        // Keep the existing editorial synopsis and display genres.
        description: movie.description ?? details.description,
        genre: movie.genre ?? details.genre,
      });
    }
    movie.connections = movie.connections.map((connection) => {
      const review = connectionReviews.find(
        (entry) =>
          entry.title === movie.title && entry.date === connection.date,
      );
      if (!review || connection.evidence === "scene-source") return connection;
      const evidence: MovieConnection & { title?: string } = { ...review };
      delete evidence.title;
      return {
        ...connection,
        ...evidence,
        compilation:
          evidence.clipTimestamp === undefined
            ? connection.compilation
            : `${calendarSource.compilation}&t=${evidence.clipTimestamp}s`,
      };
    });
  }
  return catalog;
}

export const movies: Movie[] = buildCatalog();

export function calendarDays(year = 2000): string[] {
  const days: string[] = [];
  for (let month = 1; month <= 12; month++) {
    for (let day = 1; day <= 31; day++) {
      const monthDay = `${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      if (isValidDate(`${year}-${monthDay}`)) days.push(monthDay);
    }
  }
  return days;
}

export function catalogCoverage(year = 2000) {
  const days = calendarDays(year);
  const supported = days.filter((day) =>
    findMovies(`${year}-${day}`).some(
      (movie) => movie.connection.evidence === "scene-source",
    ),
  );
  const covered = days.filter((day) => findMovies(`${year}-${day}`).length > 0);
  const captionSupported = days.filter(
    (day) =>
      !supported.includes(day) &&
      findMovies(`${year}-${day}`).some(
        (movie) => movie.connection.evidence === "clip-caption",
      ),
  );
  return {
    total: days.length,
    covered: covered.length,
    supported: supported.length,
    captionSupported: captionSupported.length,
    calendarOnly: covered.length - supported.length - captionSupported.length,
    missing: days.filter((day) => !covered.includes(day)),
  };
}

// Find the next real occurrence, skipping Feb 29 in non-leap years.
export function nextOccurrence(monthDay: string, from: string): string | null {
  if (!isValidDate(from) || !isValidDate(`2000-${monthDay}`)) return null;
  for (let year = Number(from.slice(0, 4)); year <= 9999; year++) {
    const candidate = `${String(year).padStart(4, "0")}-${monthDay}`;
    if (isValidDate(candidate) && candidate >= from) return candidate;
  }
  return null;
}

export function isValidDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const parsed = new Date(0);
  parsed.setFullYear(year, month - 1, day);
  parsed.setHours(12, 0, 0, 0);
  return (
    year > 0 &&
    parsed.getFullYear() === year &&
    parsed.getMonth() === month - 1 &&
    parsed.getDate() === day
  );
}

export function findMovies(
  value: string,
  sceneSourcesOnly = false,
): MovieMatch[] {
  if (!isValidDate(value)) return [];
  const monthDay = value.slice(5);
  return movies.flatMap((movie) =>
    movie.connections
      .filter(
        (connection) =>
          connection.date === monthDay &&
          (!sceneSourcesOnly || connection.evidence === "scene-source"),
      )
      .map((connection) => ({ ...movie, connection })),
  );
}

export function localDate(date = new Date()): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export function displayDate(value: string, includeYear = false): string {
  if (!isValidDate(value)) return "your date";
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(0);
  date.setFullYear(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    ...(includeYear ? { year: "numeric" } : {}),
  });
}

export function nearbyDates(
  value: string,
  count = 3,
  sceneSourcesOnly = false,
): { date: string; movie: MovieMatch }[] {
  if (!isValidDate(value)) return [];
  const days = [
    ...new Set(
      movies.flatMap((movie) =>
        movie.connections.map((connection) => connection.date),
      ),
    ),
  ];
  return days
    .filter((day) => day !== value.slice(5))
    .flatMap((day) => {
      const date = nextOccurrence(day, value);
      const movie = date ? findMovies(date, sceneSourcesOnly)[0] : undefined;
      return date && movie ? [{ date, movie }] : [];
    })
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, count);
}
