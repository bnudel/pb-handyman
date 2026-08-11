// Lightweight inline icon set — no dependency, no runtime cost.
const paths = {
  wrench: (
    <path d="M14.7 6.3a4.5 4.5 0 0 1 5.9 5.4l-1.6-1.6-2.6.7-.7 2.6 1.6 1.6a4.5 4.5 0 0 1-5.4-5.9L4.6 16.3a2 2 0 1 0 2.8 2.8l4.5-4.5" />
  ),
  roller: (
    <>
      <rect x="3" y="4" width="14" height="6" rx="1.5" />
      <path d="M17 7h2.5A1.5 1.5 0 0 1 21 8.5V11a1.5 1.5 0 0 1-1.5 1.5H12v2" />
      <rect x="10" y="14.5" width="4" height="6" rx="1.2" />
    </>
  ),
  drop: <path d="M12 3s6 6.2 6 10.2a6 6 0 0 1-12 0C6 9.2 12 3 12 3Z" />,
  bolt: <path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5Z" />,
  thermo: (
    <>
      <path d="M10 13.6V5a2 2 0 1 1 4 0v8.6a4.5 4.5 0 1 1-4 0Z" />
      <path d="M12 9v6.5" />
    </>
  ),
  chair: (
    <>
      <path d="M6 4v7h12V4" />
      <path d="M4 11h16v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3Z" />
      <path d="M7 16v4M17 16v4" />
    </>
  ),
  tv: (
    <>
      <rect x="2.5" y="4" width="19" height="12.5" rx="2" />
      <path d="M8.5 20.5h7M12 16.5v4" />
    </>
  ),
  door: (
    <>
      <path d="M5 21V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v17" />
      <path d="M3 21h18" />
      <circle cx="13" cy="12.5" r="1" />
    </>
  ),
  wave: (
    <>
      <path d="M2 8c2.5 0 2.5 2.5 5 2.5S9.5 8 12 8s2.5 2.5 5 2.5S19.5 8 22 8" />
      <path d="M2 14c2.5 0 2.5 2.5 5 2.5S9.5 14 12 14s2.5 2.5 5 2.5S19.5 14 22 14" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="M8.5 15.5l2 2 4.5-4.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.8 4.5 6v6c0 4.6 3.1 8.2 7.5 9.3 4.4-1.1 7.5-4.7 7.5-9.3V6L12 2.8Z" />
      <path d="M8.8 12.2l2.3 2.3 4.2-4.6" />
    </>
  ),
  phone: (
    <path d="M6.2 3.5h3l1.5 4-2 1.4a12 12 0 0 0 6.4 6.4l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z" />
  ),
  message: (
    <path d="M21 12a8 8 0 0 1-8 8H4l1.8-3A8 8 0 1 1 21 12Z" />
  ),
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.3l3.3 2" />
    </>
  ),
  check: <path d="M4.5 12.8l5 5 10-11" />,
  pin: (
    <>
      <path d="M12 21.5s7-6.2 7-11.3A7 7 0 1 0 5 10.2C5 15.3 12 21.5 12 21.5Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  star: (
    <path d="m12 3.2 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.7l6.1-.9L12 3.2Z" />
  ),
  arrow: <path d="M4 12h15m0 0-6-6m6 6-6 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
};

export default function Icon({ name, className = "h-6 w-6", filled = false }) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {d}
    </svg>
  );
}
