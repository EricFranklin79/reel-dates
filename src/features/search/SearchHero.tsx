import { useState } from "react";
import { Button } from "@mantine/core";
import { catalogCoverage } from "../movies/catalog";
import { Spotlights } from "../themes/Spotlights";
import { DateSearchForm } from "./DateSearchForm";
import { DateShortcuts } from "./DateShortcuts";
import type { MovieSearch } from "./useMovieSearch";
export function SearchHero({
  search,
  onOpenHelp,
}: Readonly<{
  search: MovieSearch;
  onOpenHelp: () => void;
}>) {
  const [spotlightsPaused, setSpotlightsPaused] = useState(false);
  const coverage = catalogCoverage();
  return (
    <section className="hero relative text-center">
      <Spotlights paused={spotlightsPaused} />
      <div className="eyebrow">THE CALENDAR MEETS THE SILVER SCREEN</div>
      <h1>
        Every date has a story.
        <br />
        <span>Find yours in a film.</span>
      </h1>
      <p>
        Pick a day. Discover a movie that lives it — through its plot,
        <br className="desktop-break" /> its setting, or a line you’ll never
        forget.
      </p>
      <DateSearchForm search={search} />
      <Button
        variant="transparent"
        className="help-trigger"
        onClick={onOpenHelp}
        aria-haspopup="dialog"
      >
        How does a date match a movie?
      </Button>
      <DateShortcuts date={search.date} onChoose={search.choose} />
      <p className="matching-note" id="matching-note">
        Matches use the month and day. All {coverage.total} calendar days have a
        sourced pick, including leap day.
      </p>
      <button
        type="button"
        className="spotlight-toggle"
        onClick={() => setSpotlightsPaused((paused) => !paused)}
        aria-pressed={spotlightsPaused}
      >
        <span aria-hidden="true">{spotlightsPaused ? "▷" : "Ⅱ"}</span>{" "}
        {spotlightsPaused ? "Resume spotlights" : "Pause spotlights"}
      </button>
    </section>
  );
}
