# Reel Dates

Find a movie connected to any calendar date through its plot, setting, or dialogue. Every day of the year has a sourced pick, including February 29. Release dates and awards never determine a match.

[Try Reel Dates](https://ericfranklin79.github.io/reel-dates/)

The app runs entirely in the browser. No API keys, backend, or login are required.

## Run locally

Use Node.js 22.18 or newer and npm.

```sh
git clone https://github.com/YOUR_USERNAME/reel-dates.git
cd reel-dates
npm ci
npm start
```

Replace `YOUR_USERNAME` with your GitHub username after forking. Open the URL printed by Vite, usually http://127.0.0.1:5173.

Useful commands:

| Command                 | Purpose                                         |
| ----------------------- | ----------------------------------------------- |
| `npm run format:check`  | Check formatting                                |
| `npm run format`        | Apply formatting                                |
| `npm run lint`          | Run ESLint with zero warnings allowed           |
| `npm test`              | Run unit and component tests                    |
| `npm run test:coverage` | Run tests and check coverage thresholds         |
| `npm run test:ui`       | Run browser tests using installed Google Chrome |
| `npm run build`         | Check TypeScript and create a production build  |
| `npm run preview`       | Serve the production build locally              |

Browser tests start their own development server on port 5174.

For GitHub Pages hosting on your fork, select **Settings → Pages → Source → GitHub Actions**. The deployment workflow publishes successful pushes to `main`; PRs run formatting, lint, coverage, and build checks. Both workflows use `VITE_BASE_PATH=/reel-dates/`. Change that path if you rename the repository.

## How it works

It's all in the story: a day in the plot, a date on a time machine, or a memorable line.

1. Choose a date and select **Find my movie**.
2. Read the pick's story connection and follow its source.
3. Make it a movie night. Add the pick to Google Calendar or Outlook, or download an event for Apple Calendar.

Matches repeat on the same month and day each year. Calendar events for past dates move to their next occurrence, and you can choose your viewing time when saving the event. Explanations may reveal plot details.

The header offers Light, Dark, Halloween, and Christmas themes. Your choice is saved in the browser. Animated spotlights and Christmas snow have pause controls and respect reduced-motion preferences.

## Stack

- React and TypeScript
- Vite, Mantine UI, and Tailwind CSS
- Vitest and React Testing Library for unit and component tests
- Playwright for browser tests
- Prettier, ESLint, and SonarJS for code quality
- GitHub Actions and GitHub Pages for CI and hosting

## Project structure

| Path                        | Contents                                                          |
| --------------------------- | ----------------------------------------------------------------- |
| `src/app/`                  | App composition, header, footer, and layout                       |
| `src/features/search/`      | Date input, shortcuts, and search state                           |
| `src/features/movies/`      | Catalog matching, movie cards, and source connections             |
| `src/features/movies/data/` | Movie records, metadata, and date evidence                        |
| `src/features/calendar/`    | Calendar links and event generation                               |
| `src/features/help/`        | Help drawer and character illustration                            |
| `src/features/themes/`      | Themes, saved preferences, spotlights, and snow                   |
| `src/components/`           | Shared UI components                                              |
| `src/main.tsx`              | React entry point                                                 |
| `src/styles.css`            | Shared and feature style imports                                  |
| `tests/`                    | Browser tests and test setup; unit tests live beside source files |
| `research/`                 | Catalog verification report and regeneration script               |
| `.github/workflows/`        | PR checks and Pages deployment                                    |

## Code coverage

```sh
npm run test:coverage
```

Tests enforce at least **95% statements, branches, functions, and lines for each runtime source file**. Static movie data, type-only declarations, and test files are excluded.

Open `coverage/index.html` for the HTML report. LCOV output is available at `coverage/lcov.info` for tools such as SonarQube. Browser tests run separately with `npm run test:ui`.
