import { Badge } from "@mantine/core";
import type { MovieConnection } from "./types";
export function DateConnection({
  connection,
}: Readonly<{
  connection: MovieConnection;
}>) {
  const evidenceLabels = {
    "calendar-index": "Calendar source · exact scene not independently checked",
    "clip-caption": "Automatic captions · dialogue confirmation pending",
    "scene-source": "Verified connection · scene or written source checked",
  };
  const evidenceLabel = evidenceLabels[connection.evidence ?? "scene-source"];
  return (
    <div className="connection">
      <div className="connection-heading">
        <span className="connection-icon">↳</span>
        <h4>The date connection</h4>
        <Badge className="badge" variant="light" color="olive" size="sm">
          {connection.type}
        </Badge>
      </div>
      <strong>{connection.label}</strong>
      <p className="evidence-label">{evidenceLabel}</p>
      <p>{connection.explanation}</p>
      {connection.storyYear && (
        <p className="story-year">
          In-story year: {connection.storyYear}. This match repeats on the same
          month and day.
        </p>
      )}
      <a href={connection.source} target="_blank" rel="noreferrer">
        {connection.sourceLabel} <span aria-hidden="true">↗</span>
      </a>
      {connection.compilation && (
        <a
          className="compilation-link"
          href={connection.compilation}
          target="_blank"
          rel="noreferrer"
        >
          Watch the source compilation ↗
        </a>
      )}
    </div>
  );
}
