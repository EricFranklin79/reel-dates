import { FilmIcon } from "../components/FilmIcon";
import { ThemeSwitcher } from "../features/themes/ThemeSwitcher";
import { SnowToggle } from "../features/themes/SnowToggle";
import { useColorTheme } from "../features/themes/ThemeProvider";
export function AppHeader({
  onOpenHelp,
  snowPaused,
  onToggleSnow,
}: Readonly<{
  onOpenHelp: () => void;
  snowPaused: boolean;
  onToggleSnow: () => void;
}>) {
  const { colorTheme } = useColorTheme();
  return (
    <header className="header flex items-center justify-between">
      <a className="brand" href="./">
        <span className="brand-icon">
          <FilmIcon />
        </span>
        reel dates<span className="brand-period">.</span>
      </a>
      <span className="header-note">A little cinema for your calendar.</span>
      <div className="header-actions">
        <ThemeSwitcher />
        <button
          type="button"
          className="about-link"
          onClick={onOpenHelp}
          aria-haspopup="dialog"
          aria-label="How it works"
        >
          <span className="help-label">How it works</span>
          <span className="help-mobile" aria-hidden="true">
            ?
          </span>
        </button>
        {colorTheme === "winter" && (
          <SnowToggle paused={snowPaused} onToggle={onToggleSnow} />
        )}
      </div>
    </header>
  );
}
