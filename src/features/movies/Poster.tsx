import type { Movie } from "./types";
export function Poster({ movie }: Readonly<{ movie: Movie }>) {
  return (
    <div className={`poster ${movie.art}`} aria-hidden="true">
      <span className="poster-kicker">A REEL DATES SELECTION</span>
      <div className="poster-graphic">
        <span />
        <span />
        <span />
      </div>
      <p className="poster-motif">{movie.motif}</p>
      <div className="poster-bottom">
        <span>{movie.title}</span>
        <span>{movie.year}</span>
      </div>
    </div>
  );
}
