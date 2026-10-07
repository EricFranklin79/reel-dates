import { ActionIcon, Tooltip } from "@mantine/core";
import { displayDate } from "../movies/catalog";
import type { MovieMatch } from "../movies/types";
import { createCalendarEvent } from "./calendar-event";
import { CalendarProviderIcon } from "./CalendarProviderIcon";
export function CalendarLinks({
  movie,
  date,
}: Readonly<{
  movie: MovieMatch;
  date: string;
}>) {
  const calendarEvent = createCalendarEvent(movie, date);
  return (
    <div>
      <h3>Add it to your calendar</h3>
      <p>
        An all-day event for {displayDate(calendarEvent.date, true)}. Set your
        viewing time in your calendar. Apple Calendar downloads an event file.
      </p>
      <div className="calendar-links">
        <Tooltip
          label="Google Calendar"
          events={{ hover: true, focus: true, touch: true }}
        >
          <ActionIcon
            component="a"
            aria-label="Google Calendar"
            href={calendarEvent.google}
            target="_blank"
            rel="noopener noreferrer"
            variant="default"
            size={44}
          >
            <CalendarProviderIcon provider="google" />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          label="Apple Calendar · download event"
          events={{ hover: true, focus: true, touch: true }}
        >
          <ActionIcon
            component="a"
            aria-label="Apple Calendar"
            href={calendarEvent.apple}
            download={calendarEvent.filename}
            variant="default"
            size={44}
          >
            <CalendarProviderIcon provider="apple" />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          label="Outlook · open on the web"
          events={{ hover: true, focus: true, touch: true }}
        >
          <ActionIcon
            component="a"
            aria-label="Outlook"
            href={calendarEvent.outlook}
            target="_blank"
            rel="noopener noreferrer"
            variant="default"
            size={44}
          >
            <CalendarProviderIcon provider="outlook" />
          </ActionIcon>
        </Tooltip>
      </div>
    </div>
  );
}
