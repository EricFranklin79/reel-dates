import type React from "react";
export function Snowfall({ paused }: Readonly<{ paused: boolean }>) {
  return (
    <div className="snowfall" aria-hidden="true" data-paused={paused}>
      {Array.from({ length: 48 }, (_, index) => (
        <span
          key={index}
          style={
            {
              "--snow-x": `${(index * 37 + 5) % 100}%`,
              "--snow-size": `${5 + (index % 7)}px`,
              "--snow-duration": `${14 + (index % 11)}s`,
              "--snow-delay": `${-index * 2.7}s`,
              "--snow-drift": `${index % 2 ? 36 : -36}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
