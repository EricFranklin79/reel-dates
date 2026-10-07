export type ConnectionType = "Plot" | "Setting" | "Dialogue" | "In-film date";

export interface MovieConnection {
  date: string;
  type: ConnectionType;
  label: string;
  explanation: string;
  source: string;
  sourceLabel: string;
  storyYear?: number;
  evidence?: "scene-source" | "clip-caption" | "calendar-index";
  compilation?: string;
  clipTimestamp?: number;
}

export interface Movie {
  id: string;
  title: string;
  year?: number;
  genre?: string;
  duration?: string;
  art: string;
  motif: string;
  description?: string;
  director?: string;
  detailsSource?: string;
  detailsSourceLabel?: string;
  detailsChecked?: string;
  runtimeSource?: string;
  connections: MovieConnection[];
}

export interface MovieMatch extends Movie {
  connection: MovieConnection;
}
