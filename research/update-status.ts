import { readFileSync, writeFileSync } from "node:fs";
import { movies, catalogCoverage } from "../src/features/movies/catalog.ts";

const path = new URL("./verification-status.json", import.meta.url);
const previous = JSON.parse(readFileSync(path, "utf8"));
const pending = movies
  .flatMap((movie) =>
    movie.connections
      .filter((connection) => connection.evidence !== "scene-source")
      .map((connection) => ({
        date: connection.date,
        title: movie.title,
        releaseYear: movie.year,
        evidence: connection.evidence,
        source: connection.source,
        compilation: connection.compilation,
      })),
  )
  .sort((a, b) => a.date.localeCompare(b.date));

writeFileSync(
  path,
  JSON.stringify(
    {
      ...previous,
      filmCount: movies.length,
      coverage: catalogCoverage(),
      note: "Verification uses material inside the film: visible dates, dialogue, screenplays, or story references. Display metadata never establishes a date match. Replacements can reuse a film for multiple dates; each connection has its own evidence.",
      pending,
    },
    null,
    2,
  ) + "\n",
);
console.log(
  `${catalogCoverage().supported}/366 dates verified; ${pending.length} pending connections.`,
);
