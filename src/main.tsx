import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mantine/core/styles.layer.css";
import "@mantine/dates/styles.layer.css";
import { App } from "./app/App";
import { ThemeProvider } from "./features/themes/ThemeProvider";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
