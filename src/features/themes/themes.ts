export const colorThemes = [
  { id: "light", label: "Light", icon: "☀" },
  { id: "dark", label: "Dark", icon: "☾" },
  { id: "halloween", label: "Halloween", icon: "🎃" },
  { id: "winter", label: "Winter", icon: "❄" },
] as const;
export type ColorTheme = (typeof colorThemes)[number]["id"];
