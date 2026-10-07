import type { MovieMatch } from "../movies/types";
import { displayDate } from "../movies/catalog";
import { CalendarLinks } from "./CalendarLinks";
export function MovieNight({
  movie,
  date,
}: Readonly<{
  movie: MovieMatch;
  date: string;
}>) {
  return (
    <section className="movie-night" aria-labelledby="movie-night-heading">
      <div className="eyebrow">TAKE THE STORY WITH YOU</div>
      <h2 id="movie-night-heading">Make it a movie night.</h2>
      <div className="movie-night-grid">
        <CalendarLinks movie={movie} date={date} />
        <div>
          <h3>Notice the moment</h3>
          <p>
            As you watch <strong>{movie.title}</strong>, look for the scene,
            line, or story event that connects it to {displayDate(date)}.
            Sometimes a small detail tells a bigger story.
          </p>
        </div>
      </div>
    </section>
  );
}
