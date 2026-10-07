import { ActionIcon, Tooltip } from "@mantine/core";
export function SnowToggle({
  paused,
  onToggle,
}: Readonly<{
  paused: boolean;
  onToggle: () => void;
}>) {
  return (
    <Tooltip
      label={paused ? "Resume snow" : "Pause snow"}
      events={{ hover: true, focus: true, touch: true }}
    >
      <ActionIcon
        className="snow-toggle"
        variant="subtle"
        size={28}
        aria-label={paused ? "Resume snow" : "Pause snow"}
        aria-pressed={paused}
        onClick={onToggle}
      >
        <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
      </ActionIcon>
    </Tooltip>
  );
}
