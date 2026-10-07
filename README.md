# Reel Dates

A React app that connects a calendar date to a movie through its plot, setting, or dialogue. Release dates and awards are never matching criteria.

## Hosting

The project is configured for the public GitHub repository `EricFranklin79/reel-dates` and free GitHub Pages hosting at `https://ericfranklin79.github.io/reel-dates/` after the first successful deployment.

The workflow in `.github/workflows/pr-checks.yml` checks formatting, lint, tests with at least 95% coverage per runtime file, and the production build when a pull request is opened, updated, or reopened. Run `npm run format:check` locally to check formatting without changing files.

The workflow in `.github/workflows/pages.yml` runs the same checks on pushes to `main` before publishing the `dist` artifact through GitHub Pages. Select **Settings → Pages → Source → GitHub Actions** in the GitHub repository to enable this deployment method.

Local development uses `/`; the deployment workflow sets `VITE_BASE_PATH=/reel-dates/` so production assets load correctly under the repository URL. To preview that build locally:

```sh
VITE_BASE_PATH=/reel-dates/ npm run build
VITE_BASE_PATH=/reel-dates/ npm run preview
```

## Run locally

```sh
npm install
npm start
```

Open the localhost URL printed by Vite (normally http://127.0.0.1:5173).

```sh
npm test
npm run test:coverage
npm run lint
npm run build
npm run preview
```

## How it works

Use the compact theme icon buttons in the header to choose Light, Dark, Halloween, or Christmas colors. Tooltips identify each option, and the selected icon is highlighted. The theme applies to the page, date picker, and help drawer, and is remembered in browser storage. Christmas adds gentle snowfall with a pause control; snow is disabled when reduced motion is preferred.

Choose a date and click **Find my movie**. Matching uses month and day, regardless of the selected year. If the film specifies a story year, the result displays it separately. Each result explains the in-film connection and links to a supporting source. The app shows one verified pick for the selected date. Submitting the date scrolls to the result and focuses its heading; reduced-motion preferences are respected. Date shortcuts offer a few memorable days.

Every calendar day now has a sourced pick: 365 dates in a common year and 366 in a leap year. It runs entirely in the browser with no API key, backend, or login. Explanations can contain plot details.

The **Make it a movie night** section offers Google Calendar and Outlook links, plus an Apple Calendar event-file download. Events include the selected film and its story connection. Past dates roll forward to their next occurrence using your local calendar day; leap day uses the next valid leap year. Today and future dates keep their selected year. The section displays the actual event date. Events start as all-day events; choose your viewing time when saving the event in your calendar.

All **339 films** have a release year, genre, runtime, director, short synopsis, and a linked film reference. These display details never determine a date match. Runtimes follow the cited edition; where a page lists multiple cuts or parts, the display preserves that distinction. The 1960 and 2002 versions of _The Time Machine_ remain separate, _The Hunchback of Notre Dame_ is the 1996 animated film, and the compilation’s _Suspiria_ is the 2018 remake.

All **366 calendar dates are now verified**, including February 29. Every active connection points to checked material inside the film: dialogue, a screenplay, a visible date, or a documented story event. There are **zero automatic-caption or calendar-index connections pending**.

The final pass reviewed 111 pending connections: **66 picks retained** with supporting evidence and **45 picks replaced** with explicitly dated alternatives. Some films cover multiple dates, so calendar coverage does not require 366 distinct films. The December 23 hotel-bill excerpt was corrected from _Home Alone_ to _Home Alone 2: Lost in New York_; the first film remains a separately verified Christmas Eve match.

Film-reference links provide display metadata and plot information; date-evidence links support the connection. The counts, pending list, and 45 replacement explanations and sources are saved in [`research/verification-status.json`](research/verification-status.json). Run `npm run research:status` to refresh the counts and pending list from the catalog.

Enter February 29 with a valid leap year to see its pick. Changing the date field updates the draft; submit it to change the selected movie.

## Calendar provenance

The original date/title discovery index is preserved in `src/features/movies/data/calendar-picks.ts`, with a separate map applying independently checked replacements. Its source is [Christian Høkaas’s own 366-date table](https://www.reddit.com/r/movies/comments/18v8p2o/comment/kfqfxc6/) accompanying [The Movie Calendar compilation](https://www.youtube.com/watch?v=AXNlLiNHKLc). The [creator’s discussion](https://www.reddit.com/r/movies/comments/18v8p2o/the_movie_calendar_a_supercut_of_366_movies/) describes dates appearing on screen, in dialogue, or in story events. Accessed October 6, 2026.

For the verification passes, the public compilation was inspected through extracted frames, including a second pass at 1080p, visible text, and captions. Dates were checked against the actual prop or on-screen text, film-specific story references, or dialogue transcripts. When the original association could not be confirmed, a replacement with an explicit in-film reference was selected. Caption detection alone does not upgrade an entry to verified. Clip timestamps refer to the compilation, and may begin just before the line or date appears; they are not timestamps for a full-film cut. No automatic-caption inference is presented as a checked scene.

`src/features/movies/data/film-details.ts` holds display metadata, original brief plot summaries, and per-film reference links. `src/features/movies/data/connection-reviews.ts` holds the reviewed date explanations and their evidence. Numerical titles such as _1917_, _2001_, and _2012_ are handled separately from their release years. Running times expressed in hours are converted correctly, and _Che: Part One_ uses the first part’s runtime rather than the combined two-part film.

The index’s February 9 title “While We're Sleeping” has been resolved to **While You Were Sleeping (1995)** using the compilation clip and [the screenplay’s conversation between Saul and Lucy](https://assets.scriptslug.com/live/pdf/scripts/while-you-were-sleeping-1995.pdf): Saul recalls his wife’s death on February 9. **Mr. Nobody** remains a second, independently supported match for that date.

## Extend the catalog

Add independently supported records to `src/features/movies/data/reviewed-movies.ts` (the original nine live in `src/features/movies/data/original-movies.ts`). Each movie has one or more connections with `date` (`MM-DD`), `type` (`Plot`, `Setting`, or `Dialogue`), `label`, `explanation`, `source`, and `sourceLabel`. Use `storyYear` if the movie specifies one. Movie release years are display-only. Check the connection within the movie or a reliable synopsis before adding it. Verified records supersede pending entries for the same film/date; a movie may keep other dates at a different evidence level. Import-only connections use `In-film date` until their scene type is checked. Add metadata to `src/features/movies/data/film-details.ts`, and new evidence to `src/features/movies/data/connection-reviews.ts`; use `clip-caption` for unconfirmed automatic-caption leads and `scene-source` only for checked evidence. After changing evidence, regenerate the verification-status report from `catalogCoverage()` and update the counts above.

The poster illustrations are original CSS graphics. Google Fonts are optional: system sans-serif fonts provide a fallback if unavailable. Catalog matching does not make network requests; evidence links open external sites.

## Stack

React with TypeScript, Vite, Mantine UI (including its date picker), Tailwind CSS v4, custom poster CSS, and Vitest with React Testing Library. Tailwind is connected through its Vite plugin; its theme and utility layers are enabled without Preflight to preserve Mantine component styles. Tests cover date validation, verified coverage for every day in common and leap years, year-independent matching, multiple matches, replacement evidence, sequel identification, and nearby-date rollover.

The production build includes strict TypeScript checking. Run `npm run typecheck` independently, or `npm run test:ui` for browser interaction, result scrolling, and mobile layout tests (uses installed Google Chrome). Node 22.18+ or 24+ is required.

`npm run lint` runs ESLint with SonarSource’s recommended SonarJS rules and fails on any warning. The Babel parser handles TypeScript/TSX syntax while `tsc` checks types. Rules requiring TypeScript parser services and server-specific quality profiles need a separate SonarQube analysis; the local lint command does not replace that analysis. Dependencies use nested installation so the Sonar analyzer’s supported TypeScript API stays separate from the app’s TypeScript 7 compiler. Browser screenshots are written to each test’s own output directory.

## Project structure

- `src/app/`: screen composition, header, footer, and shared layout styles.
- `src/features/search/`: date form, shortcuts, hero, and search/focus/scroll state.
- `src/features/movies/`: matching logic, movie types, results, cards, story connections, and poster styles. `data/` contains catalog records and research-backed details.
- `src/features/calendar/`: movie-night content, provider icons and links, event generation, and its unit tests.
- `src/features/help/`: help drawer, character illustration, and drawer styles.
- `src/features/themes/`: theme provider, persisted preferences, switcher, spotlights, snow, and related styles.
- `src/components/`: small shared UI elements.
- `src/main.tsx`: React entry point. `src/styles.css` imports shared and feature styles.
- `tests/`: browser behavior tests. Unit tests live beside the logic they cover.
- `research/`: verification report and its regeneration script.

## Code coverage

Run `npm run test:coverage` to measure and enforce at least 95% statements, branches, functions, and lines for **each runtime source file**. Coverage includes React components, hooks, providers, calendar logic, catalog logic, and the entry point. Static movie-data records, type-only declarations, and test code are excluded. The current 35 tests achieve 100% in all four metrics across 26 source files.

The HTML report is saved to `coverage/index.html`, the SonarQube-compatible LCOV report to `coverage/lcov.info`, and machine-readable totals to `coverage/coverage-summary.json`. Playwright separately checks real browser behavior, layout, downloads, and motion preferences.

Browser tests start their own Vite server on port 5174 with a separate dependency cache, leaving the normal development server on port 5173 available for manual use.
