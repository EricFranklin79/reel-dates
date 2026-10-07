import { useState } from "react";
import { AppHeader } from "./AppHeader";
import { AppFooter } from "./AppFooter";
import { SearchHero } from "../features/search/SearchHero";
import { useMovieSearch } from "../features/search/useMovieSearch";
import { MovieResults } from "../features/movies/MovieResults";
import { MovieNight } from "../features/calendar/MovieNight";
import { HelpDrawer } from "../features/help/HelpDrawer";
import { Snowfall } from "../features/themes/Snowfall";
import { useColorTheme } from "../features/themes/ThemeProvider";

export function App() {
  const search = useMovieSearch();
  const { colorTheme } = useColorTheme();
  const [instructionsOpen, setInstructionsOpen] = useState(false);
  const [snowPaused, setSnowPaused] = useState(false);
  return (
    <>
      {colorTheme === "christmas" && <Snowfall paused={snowPaused} />}
      <AppHeader
        onOpenHelp={() => setInstructionsOpen(true)}
        snowPaused={snowPaused}
        onToggleSnow={() => setSnowPaused((paused) => !paused)}
      />
      <main>
        <SearchHero
          search={search}
          onOpenHelp={() => setInstructionsOpen(true)}
        />
        <MovieResults
          date={search.date}
          movie={search.movie}
          resultsRef={search.resultsRef}
          headingRef={search.headingRef}
        />
        {search.movie && <MovieNight movie={search.movie} date={search.date} />}
      </main>
      <HelpDrawer
        opened={instructionsOpen}
        onClose={() => setInstructionsOpen(false)}
      />
      <AppFooter />
    </>
  );
}
