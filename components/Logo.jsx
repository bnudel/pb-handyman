import { site } from "@/content/site";

/**
 * The circular emblem: a hammer surfing a wave.
 * `uid` keeps the internal clipPath id unique when several marks render on one
 * page (duplicate ids are invalid HTML). Pass a different one at each call site.
 */
export function LogoMark({ className = "h-11 w-11", uid = "pb" }) {
  const id = `pbclip-${uid}`;
  return (
    <svg viewBox="0 0 128 128" className={className} role="img" aria-label={`${site.name} logo`}>
      <defs>
        <clipPath id={id}>
          <circle cx="64" cy="64" r="64" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id})`}>
        <rect width="128" height="128" fill="#F7EFE4" />
        <circle cx="92" cy="38" r="18" fill="#F4A259" />
        <circle cx="92" cy="38" r="18" fill="#F26D3D" opacity=".38" />
        <path
          d="M0 86 C 12 80 28 70 46 74 C 64 78 72 92 90 90 C 106 88 116 72 128 64 L128 128 L0 128 Z"
          fill="#1E8FA8"
        />
        <path d="M102 72 C 113 60 123 61 128 66 C 119 66 110 70 105 79 Z" fill="#fff" opacity=".92" />
        <g transform="translate(46,76) rotate(-14)">
          <path
            d="M31 0 C 18 -8 -15 -8 -28 -2.4 C -30.8 -1.1 -30.8 1.1 -28 2.4 C -15 8 18 8 31 0 Z"
            fill="#F7EFE4"
            stroke="#0A2E45"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path d="M-22 0 H 25" stroke="#F26D3D" strokeWidth="3" strokeLinecap="round" />
          <g transform="translate(1,-5) rotate(11)">
            <rect x="-3.8" y="-31" width="7.6" height="32" rx="3.8" fill="#0A2E45" />
            <rect x="-3.8" y="-11" width="7.6" height="11" rx="3.8" fill="#F26D3D" />
            <path
              d="M-15.5 -45 h 20 a 4.5 4.5 0 0 1 4.5 4.5 v 8 a 4.5 4.5 0 0 1 -4.5 4.5 h -20 c 8.5 -5.5 8.5 -11.5 0 -17 Z"
              fill="#0A2E45"
            />
          </g>
        </g>
        <path d="M14 82 C 20 78 26 79 30 82" stroke="#fff" strokeOpacity=".85" strokeWidth="3.2" strokeLinecap="round" fill="none" />
        <path d="M8 88 C 14 85 20 86 24 88" stroke="#fff" strokeOpacity=".6" strokeWidth="2.6" strokeLinecap="round" fill="none" />
        <path d="M0 98 C 22 91 42 101 64 105 C 90 109 108 98 128 90 L128 128 L0 128 Z" fill="#14708E" />
        <path d="M0 112 C 26 106 48 115 74 117 C 100 119 112 112 128 106 L128 128 L0 128 Z" fill="#0E5C77" />
        <path d="M12 107 C 24 104 34 107 44 110" stroke="#fff" strokeOpacity=".45" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M88 104 C 100 103 108 100 118 96" stroke="#fff" strokeOpacity=".4" strokeWidth="3" strokeLinecap="round" fill="none" />
      </g>
      <circle cx="64" cy="64" r="60.5" fill="none" stroke="#0A2E45" strokeWidth="7" />
    </svg>
  );
}

/** Emblem + wordmark lockup. `light` inverts the text for dark backgrounds. */
export function Logo({ light = false, className = "", uid = "lockup" }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="h-11 w-11 shrink-0" uid={uid} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.6rem] font-bold uppercase tracking-wide ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          PB Handyman
        </span>
        <span
          className={`mt-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] ${
            light ? "text-ocean-400" : "text-ocean-600"
          }`}
        >
          Pacific Beach · San Diego
        </span>
      </span>
    </span>
  );
}
