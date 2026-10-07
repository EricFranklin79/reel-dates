import { ActionIcon, Tooltip } from "@mantine/core";
import { colorThemes } from "./themes";
import { useColorTheme } from "./ThemeProvider";
export function ThemeSwitcher() {
  const { colorTheme, setColorTheme } = useColorTheme();
  return (
    <div className="theme-picker" role="group" aria-label="Color theme">
      <ActionIcon.Group className="theme-button-group">
        {colorThemes.map((option) => (
          <Tooltip
            key={option.id}
            label={`${option.label} theme`}
            events={{ hover: true, focus: true, touch: true }}
          >
            <ActionIcon
              type="button"
              aria-label={option.label}
              aria-pressed={colorTheme === option.id}
              onClick={() => setColorTheme(option.id)}
              variant="default"
              size={30}
            >
              <span aria-hidden="true">{option.icon}</span>
            </ActionIcon>
          </Tooltip>
        ))}
      </ActionIcon.Group>
    </div>
  );
}
