export function CalendarProviderIcon({
  provider,
}: Readonly<{
  provider: "google" | "apple" | "outlook";
}>) {
  const artwork = {
    google: (
      <>
        <path fill="#4285f4" d="M4 2h16v18H4z" />
        <path fill="#fff" d="M7 6h10v11H7z" />
        <path fill="#34a853" d="M4 20h13l3-3H4z" />
        <path fill="#fbbc04" d="M17 17h3v3l-3 3z" />
        <path fill="#ea4335" d="M4 20v3h13v-3z" />
        <path
          d="M9 9h2l-1 2 1 1v2H9m5-5v5"
          stroke="#4285f4"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
    apple: (
      <>
        <path
          fill="currentColor"
          d="M16.9 12.5c0-2 1.6-3 1.7-3.1-1-1.5-2.5-1.7-3.1-1.7-1.3-.2-2.5.8-3.2.8-.7 0-1.7-.8-2.8-.8-1.4 0-2.7.8-3.4 2-1.4 2.4-.4 6 1 7.9.7 1 1.4 2 2.5 2s1.5-.7 2.8-.7c1.3 0 1.7.7 2.8.7 1.2 0 1.9-1 2.5-2 .8-1.1 1.1-2.1 1.1-2.2-.1 0-1.9-.7-1.9-2.9Z"
        />
        <path
          fill="currentColor"
          d="M14.9 5.9c.6-.8 1-1.8.9-2.9-1 .1-2 .7-2.7 1.5-.6.7-1.1 1.8-1 2.8 1.1.1 2.1-.6 2.8-1.4Z"
        />
      </>
    ),
    outlook: (
      <>
        <rect x="8" y="3" width="13" height="16" rx="1.5" fill="#0078d4" />
        <path d="M10 7h9M10 10h9M10 13h9" stroke="#fff" strokeOpacity=".7" />
        <path fill="#28a8ea" d="M7 11h16v10H7z" />
        <path d="m7 11 8 6 8-6" stroke="#fff" strokeWidth="1" />
        <rect x="1" y="6" width="12" height="14" rx="1.5" fill="#106ebe" />
        <ellipse cx="7" cy="13" rx="3" ry="4" stroke="#fff" strokeWidth="1.7" />
      </>
    ),
  };
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {artwork[provider]}
    </svg>
  );
}
