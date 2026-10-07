export const colorThemes = [
  { id: "light", label: "Light", icon: "☀" },
  { id: "dark", label: "Dark", icon: "☾" },
  { id: "halloween", label: "Halloween", icon: "🎃" },
  { id: "christmas", label: "Christmas", icon: "🎄" },
] as const;
export type ColorTheme = (typeof colorThemes)[number]["id"];
