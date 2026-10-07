import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { localDate, findMovies, isValidDate } from "../movies/catalog";
export function useMovieSearch() {
  const [date, setDate] = useState(localDate());
  const [draft, setDraft] = useState(date);
  const [error, setError] = useState("");
  const [searchCount, setSearchCount] = useState(0);
  const resultsRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const movie = findMovies(date, true)[0];

  useEffect(() => {
    if (searchCount === 0) return;
    headingRef.current?.focus({ preventScroll: true });
    resultsRef.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
      block: "start",
    });
  }, [searchCount]);

  function choose(value: string | null) {
    if (!value || !isValidDate(value)) {
      setError(
        "This date has no valid occurrence in the supported calendar range.",
      );
      return;
    }
    setDate(value);
    setDraft(value);
    setError("");
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isValidDate(draft)) {
      setError("Choose a valid calendar date.");
      return;
    }
    choose(draft);
    setSearchCount((count) => count + 1);
  }

  return {
    date,
    draft,
    setDraft,
    error,
    movie,
    choose,
    submit,
    resultsRef,
    headingRef,
  };
}

export type MovieSearch = ReturnType<typeof useMovieSearch>;
