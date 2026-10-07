import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test, vi } from "vitest";
import { App } from "./App";
import { ThemeProvider, useColorTheme } from "../features/themes/ThemeProvider";
import { ThemeSwitcher } from "../features/themes/ThemeSwitcher";
import { MovieCard } from "../features/movies/MovieCard";
import { DateConnection } from "../features/movies/DateConnection";
import { MovieResults } from "../features/movies/MovieResults";
import { useMovieSearch } from "../features/search/useMovieSearch";
import * as catalog from "../features/movies/catalog";

function renderApp() {
  return render(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
  );
}
function sampleMovie() {
  return catalog.findMovies("2026-10-21", true)[0];
}

test("search shortcuts, form submission, scrolling, and help work together", async () => {
  const user = userEvent.setup();
  renderApp();
  await user.click(screen.getByRole("button", { name: "Feb 2" }));
  expect(screen.getByRole("heading", { name: "Groundhog Day" })).toBeTruthy();
  expect(
    screen.getByRole("link", { name: "Google Calendar" }).getAttribute("href"),
  ).toContain("Groundhog+Day");
  const input = screen.getByRole("textbox", { name: "YOUR DATE" });
  await user.clear(input);
  await user.click(screen.getByRole("button", { name: "Find my movie" }));
  expect(screen.getByRole("alert").textContent).toBe(
    "Choose a valid calendar date.",
  );
  await user.click(screen.getByRole("button", { name: "Oct 21" }));
  await user.click(screen.getByRole("button", { name: "Find my movie" }));
  expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({
    behavior: "smooth",
    block: "start",
  });
  expect(document.activeElement?.id).toBe("results-heading");
  await user.click(
    screen.getByRole("button", { name: "How does a date match a movie?" }),
  );
  expect(
    await screen.findByRole("dialog", { name: "How Reel Dates works" }),
  ).toBeTruthy();
  await user.click(screen.getByRole("button", { name: "Close instructions" }));
  await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
  await user.click(screen.getByRole("button", { name: "How it works" }));
  expect(await screen.findByRole("dialog")).toBeTruthy();
});

test("theme changes persist, snow and spotlights can pause and resume, and Today selects the local day", async () => {
  const user = userEvent.setup();
  renderApp();
  for (const name of ["Dark", "Halloween", "Winter", "Light", "Winter"]) {
    await user.click(screen.getByRole("button", { name }));
    expect(localStorage.getItem("reel-dates-theme")).toBe(name.toLowerCase());
  }
  await user.click(screen.getByRole("button", { name: "Pause snow" }));
  expect(document.querySelector(".snowfall")?.getAttribute("data-paused")).toBe(
    "true",
  );
  await user.click(screen.getByRole("button", { name: "Resume snow" }));
  expect(document.querySelector(".snowfall")?.getAttribute("data-paused")).toBe(
    "false",
  );
  await user.click(screen.getByRole("button", { name: "Pause spotlights" }));
  expect(
    document.querySelector(".spotlights")?.getAttribute("data-paused"),
  ).toBe("true");
  await user.click(screen.getByRole("button", { name: "Resume spotlights" }));
  expect(
    document.querySelector(".spotlights")?.getAttribute("data-paused"),
  ).toBe("false");
  await user.click(screen.getByRole("button", { name: "Today" }));
  expect(
    screen.getByRole("heading", {
      name: `Your pick for ${catalog.displayDate(catalog.localDate())}.`,
    }),
  ).toBeTruthy();
});

test("movie cards handle missing metadata, director-only summaries, and optional runtime references", () => {
  const movie = sampleMovie();
  const { rerender } = render(
    <ThemeProvider>
      <MovieCard
        movie={{ ...movie, runtimeSource: "https://example.com/runtime" }}
      />
    </ThemeProvider>,
  );
  expect(
    screen
      .getByRole("link", { name: /Runtime reference/ })
      .getAttribute("href"),
  ).toBe("https://example.com/runtime");
  rerender(
    <ThemeProvider>
      <MovieCard
        movie={{
          ...movie,
          year: undefined,
          genre: undefined,
          duration: undefined,
          description: undefined,
          director: undefined,
          detailsSource: undefined,
        }}
      />
    </ThemeProvider>,
  );
  expect(document.querySelector(".movie-meta")).toBeNull();
  expect(document.querySelector(".synopsis")).toBeNull();
  expect(
    screen.queryByRole("link", { name: /Film details and plot/ }),
  ).toBeNull();
  rerender(
    <ThemeProvider>
      <MovieCard
        movie={{ ...movie, description: `Directed by ${movie.director}.` }}
      />
    </ThemeProvider>,
  );
  expect(screen.getAllByText(`Directed by ${movie.director}.`)).toHaveLength(1);
});

test("story connection labels distinguish unverified and verified evidence", () => {
  const movie = sampleMovie();
  const { rerender } = render(
    <ThemeProvider>
      <DateConnection
        connection={{
          ...movie.connection,
          evidence: "calendar-index",
          storyYear: undefined,
          compilation: undefined,
        }}
      />
    </ThemeProvider>,
  );
  expect(
    screen.getByText("Calendar source · exact scene not independently checked"),
  ).toBeTruthy();
  expect(screen.queryByText(/In-story year/)).toBeNull();
  expect(
    screen.queryByRole("link", { name: /Watch the source compilation/ }),
  ).toBeNull();
  rerender(
    <ThemeProvider>
      <DateConnection
        connection={{ ...movie.connection, evidence: "clip-caption" }}
      />
    </ThemeProvider>,
  );
  expect(
    screen.getByText("Automatic captions · dialogue confirmation pending"),
  ).toBeTruthy();
  rerender(
    <ThemeProvider>
      <MovieCard
        movie={{
          ...movie,
          connection: {
            ...movie.connection,
            evidence: undefined,
            compilation: "https://example.com/clip",
          },
        }}
      />
    </ThemeProvider>,
  );
  expect(screen.getByText("YOUR CALENDAR PICK")).toBeTruthy();
  expect(
    screen.getByRole("link", { name: /Watch the source compilation/ }),
  ).toBeTruthy();
  expect(
    screen.getByText("Verified connection · scene or written source checked"),
  ).toBeTruthy();
});

test("empty results remain informative when no verified pick is available", () => {
  render(
    <ThemeProvider>
      <MovieResults date="2026-02-02" resultsRef={null} headingRef={null} />
    </ThemeProvider>,
  );
  expect(
    screen.getByText("This day is still an unwritten scene."),
  ).toBeTruthy();
  expect(screen.getByText(/No movie found for this date/)).toBeTruthy();
});

test("the app omits calendar links when no pick is available", () => {
  vi.spyOn(catalog, "findMovies").mockReturnValue([]);
  renderApp();
  expect(
    screen.getByText("This day is still an unwritten scene."),
  ).toBeTruthy();
  expect(screen.queryByRole("link", { name: "Google Calendar" })).toBeNull();
});

test("saved themes load, unknown themes fall back, and storage failures do not break switching", () => {
  localStorage.setItem("reel-dates-theme", "halloween");
  const { unmount } = render(
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>,
  );
  expect(
    screen
      .getByRole("button", { name: "Halloween" })
      .getAttribute("aria-pressed"),
  ).toBe("true");
  unmount();
  localStorage.setItem("reel-dates-theme", "unknown");
  const next = render(
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>,
  );
  expect(
    screen.getByRole("button", { name: "Light" }).getAttribute("aria-pressed"),
  ).toBe("true");
  next.unmount();
  vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
    throw new Error("Storage unavailable");
  });
  vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
    throw new Error("Storage unavailable");
  });
  render(
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>,
  );
  fireEvent.click(screen.getByRole("button", { name: "Dark" }));
  expect(document.documentElement.dataset.theme).toBe("dark");
});

test("a saved Christmas preference migrates to Winter", () => {
  localStorage.setItem("reel-dates-theme", "christmas");
  renderApp();
  expect(
    screen.getByRole("button", { name: "Winter" }).getAttribute("aria-pressed"),
  ).toBe("true");
  expect(localStorage.getItem("reel-dates-theme")).toBe("winter");
  expect(document.documentElement.dataset.theme).toBe("winter");
  expect(document.querySelector(".snowfall")).toBeTruthy();
});

test("the theme hook reports a missing provider", () => {
  expect(() => renderHook(() => useColorTheme())).toThrow(
    "useColorTheme requires ThemeProvider",
  );
});

test("date selection rejects invalid shortcuts and submits without scrolling for rejected dates", () => {
  const { result } = renderHook(() => useMovieSearch());
  const original = result.current.date;
  for (const date of [null, "2026-02-29"]) {
    act(() => result.current.choose(date));
    expect(result.current.date).toBe(original);
    expect(result.current.error).toContain("no valid occurrence");
  }
  act(() => result.current.setDraft("invalid"));
  const preventDefault = vi.fn();
  act(() =>
    result.current.submit({
      preventDefault,
    } as unknown as React.FormEvent<HTMLFormElement>),
  );
  expect(preventDefault).toHaveBeenCalledOnce();
  expect(result.current.error).toBe("Choose a valid calendar date.");
  act(() => result.current.choose("2028-02-29"));
  expect(result.current.movie?.title).toBe("Leap Year");
  expect(result.current.error).toBe("");
  act(() =>
    result.current.submit({
      preventDefault,
    } as unknown as React.FormEvent<HTMLFormElement>),
  );
  expect(result.current.error).toBe("");
});

test("search respects reduced motion when scrolling", async () => {
  vi.spyOn(window, "matchMedia").mockReturnValue({
    matches: true,
  } as MediaQueryList);
  renderApp();
  fireEvent.submit(document.querySelector(".date-form")!);
  expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({
    behavior: "instant",
    block: "start",
  });
});
