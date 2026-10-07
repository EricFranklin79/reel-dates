import { Button } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import type { MovieSearch } from "./useMovieSearch";
export function DateSearchForm({
  search,
}: Readonly<{
  search: MovieSearch;
}>) {
  const { submit, draft, setDraft, error } = search;
  return (
    <>
      <form className="date-form" onSubmit={submit}>
        <div className="date-field">
          <DateInput
            id="movie-date"
            label="YOUR DATE"
            aria-describedby={error ? "date-error" : "matching-note"}
            value={draft || null}
            onChange={(value) => setDraft(value || "")}
            valueFormat="MMMM D, YYYY"
            placeholder="Choose a date"
            clearable
            classNames={{
              label: "date-label",
              input: "mantine-date-input",
            }}
            popoverProps={{ position: "bottom-start" }}
          />
        </div>
        <Button
          className="find-button"
          type="submit"
          rightSection={<span aria-hidden="true">→</span>}
        >
          Find my movie
        </Button>
      </form>
      {error && (
        <p className="error" id="date-error" role="alert">
          {error}
        </p>
      )}
    </>
  );
}
