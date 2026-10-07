import type { Ref } from "react";
import { Card } from "@mantine/core";
import type { MovieMatch } from "./types";
import { displayDate } from "./catalog";
import { MovieCard } from "./MovieCard";
export function MovieResults({
  date,
  movie,
  resultsRef,
  headingRef,
}: Readonly<{
  date: string;
  movie?: MovieMatch;
  resultsRef: Ref<HTMLElement>;
  headingRef: Ref<HTMLHeadingElement>;
}>) {
  return (
    <section
      className="results"
      aria-labelledby="results-heading"
      ref={resultsRef}
    >
      <div className="section-top">
        <div>
          <div className="eyebrow">YOUR MOVIE</div>
          <h2 id="results-heading" ref={headingRef} tabIndex={-1}>
            Your pick for {displayDate(date)}.
          </h2>
        </div>
      </div>
      <div aria-live="polite" aria-atomic="true" className="result-status">
        {movie ? "A film for your date" : "No movie found for this date"} ·{" "}
        {displayDate(date, true)}
      </div>
      {movie ? (
        <MovieCard movie={movie} />
      ) : (
        <Card className="empty-state" padding={0}>
          <span className="empty-icon" aria-hidden="true">
            ✳
          </span>
          <div>
            <h3>This day is still an unwritten scene.</h3>
            <p>
              Choose another date to find a movie with a checked story
              connection.
            </p>
          </div>
        </Card>
      )}
    </section>
  );
}
