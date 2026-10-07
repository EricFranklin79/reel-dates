import { Button } from "@mantine/core";
import { localDate } from "../movies/catalog";
export function DateShortcuts({
  date,
  onChoose,
}: Readonly<{
  date: string;
  onChoose: (date: string) => void;
}>) {
  return (
    <div className="try-dates flex flex-wrap items-center justify-center gap-2">
      <span>A few memorable days</span>
      {[
        ["02-02", "Feb 2"],
        ["04-25", "Apr 25"],
        ["10-21", "Oct 21"],
        ["11-05", "Nov 5"],
      ].map(([day, label]) => (
        <Button
          variant="default"
          size="compact-xs"
          key={day}
          onClick={() => onChoose(`${date.slice(0, 4)}-${day}`)}
        >
          {label}
        </Button>
      ))}
      <Button
        variant="default"
        size="compact-xs"
        onClick={() => onChoose(localDate())}
      >
        Today
      </Button>
    </div>
  );
}
