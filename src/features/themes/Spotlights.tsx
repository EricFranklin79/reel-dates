export function Spotlights({ paused }: Readonly<{ paused: boolean }>) {
  return (
    <div className="spotlights" aria-hidden="true" data-paused={paused}>
      <span className="spotlight spotlight-left" />
      <span className="spotlight spotlight-left-secondary" />
      <span className="spotlight spotlight-right" />
      <span className="spotlight spotlight-right-secondary" />
      {["left", "right"].map((side) => (
        <svg
          key={side}
          className={`spotlight-fixture fixture-${side}`}
          width="44"
          height="40"
          viewBox="0 0 44 40"
          fill="none"
        >
          <path d="M8 9L12 24H32L36 9Z" fill="currentColor" />
          <ellipse
            cx="22"
            cy="9"
            rx="14"
            ry="5"
            fill="#fff1be"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M22 24V35M12 36H32"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      ))}
    </div>
  );
}
