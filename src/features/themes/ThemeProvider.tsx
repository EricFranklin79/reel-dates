import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { MantineProvider, createTheme } from "@mantine/core";
import { colorThemes } from "./themes";
import type { ColorTheme } from "./themes";
const ColorThemeContext = createContext<{
  colorTheme: ColorTheme;
  setColorTheme: (value: ColorTheme) => void;
} | null>(null);
export function useColorTheme() {
  const context = useContext(ColorThemeContext);
  if (!context) throw new Error("useColorTheme requires ThemeProvider");
  return context;
}
const primaryColors = {
  light: "olive",
  dark: "olive",
  halloween: "orange",
  christmas: "red",
} as const;
const theme = createTheme({
  fontFamily: "DM Sans, sans-serif",
  primaryColor: "olive",
  colors: {
    olive: [
      "#f3f5ed",
      "#e8ecdf",
      "#d2dbc0",
      "#b9c79e",
      "#a2b681",
      "#8fa868",
      "#7c9457",
      "#667c46",
      "#526438",
      "#3f4e2b",
    ],
  },
  defaultRadius: "md",
});

export function ThemeProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [colorTheme, setColorTheme] = useState<ColorTheme>(() => {
    try {
      const saved = localStorage.getItem("reel-dates-theme");
      return colorThemes.find((option) => option.id === saved)?.id ?? "light";
    } catch {
      return "light";
    }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = colorTheme;
    try {
      localStorage.setItem("reel-dates-theme", colorTheme);
    } catch {
      // Theme switching still works when browser storage is unavailable.
    }
  }, [colorTheme]);
  return (
    <MantineProvider
      theme={{
        ...theme,
        primaryColor: primaryColors[colorTheme],
      }}
      forceColorScheme={
        colorTheme === "dark" || colorTheme === "halloween" ? "dark" : "light"
      }
    >
      <ColorThemeContext.Provider value={{ colorTheme, setColorTheme }}>
        {children}
      </ColorThemeContext.Provider>
    </MantineProvider>
  );
}
