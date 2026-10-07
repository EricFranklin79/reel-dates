import { Card } from "@mantine/core";
import type { MovieMatch } from "./types";
import { Poster } from "./Poster";
import { DateConnection } from "./DateConnection";
export function MovieCard({ movie }: Readonly<{ movie: MovieMatch }>) {
  const { connection } = movie;
  return (
    <Card component="article" padding={0} className="movie-card">
      <Poster movie={movie} />
      <div className="movie-content">
        <div className="eyebrow">
          <span className="dot" />{" "}
          {connection.evidence === "scene-source"
            ? "YOUR DATE, ON SCREEN"
            : "YOUR CALENDAR PICK"}
        </div>
        <h3>{movie.title}</h3>
        {[movie.year, movie.genre, movie.duration].some(Boolean) && (
          <p className="movie-meta">
            {[movie.year, movie.genre, movie.duration]
              .filter(Boolean)
              .join(" · ")}
          </p>
        )}
        {movie.description && <p className="synopsis">{movie.description}</p>}
        {movie.director &&
          movie.description !== `Directed by ${movie.director}.` && (
            <p className="movie-meta">Directed by {movie.director}</p>
          )}
        {movie.detailsSource && (
          <p className="film-reference">
            <a href={movie.detailsSource} target="_blank" rel="noreferrer">
              Film details and plot ↗
            </a>
            {movie.runtimeSource && (
              <>
                {" "}
                ·{" "}
                <a href={movie.runtimeSource} target="_blank" rel="noreferrer">
                  Runtime reference ↗
                </a>
              </>
            )}
          </p>
        )}
        <DateConnection connection={connection} />
      </div>
    </Card>
  );
}
