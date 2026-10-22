import React from 'react';

interface TraditionalSportIllustrationProps {
  kind: 'bar-throw' | 'caliche';
  label: string;
}

export const TraditionalSportIllustration: React.FC<TraditionalSportIllustrationProps> = ({ kind, label }) => (
  <svg
    viewBox="0 0 640 360"
    role="img"
    aria-label={label}
    className="h-full w-full"
    preserveAspectRatio={kind === 'caliche' ? 'xMidYMax slice' : 'xMidYMid slice'}
  >
    <defs>
      <linearGradient id={`sport-sky-${kind}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={kind === 'bar-throw' ? '#F3C875' : '#DDE9D1'} />
        <stop offset="100%" stopColor={kind === 'bar-throw' ? '#F9E6BD' : '#F6E7C8'} />
      </linearGradient>
      <linearGradient id={`sport-ground-${kind}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={kind === 'bar-throw' ? '#857B54' : '#B78752'} />
        <stop offset="100%" stopColor={kind === 'bar-throw' ? '#52634D' : '#D0A76A'} />
      </linearGradient>
      <linearGradient id={`sport-metal-${kind}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F8F2E7" />
        <stop offset="45%" stopColor="#8A9292" />
        <stop offset="100%" stopColor="#42494A" />
      </linearGradient>
    </defs>

    {kind === 'bar-throw' ? (
      <>
        <rect width="640" height="360" fill={`url(#sport-sky-${kind})`} />
        <circle cx="110" cy="78" r="35" fill="#FFF9EA" opacity=".75" />
        <path d="M0 210 120 128l100 67 112-95 130 106 80-71 98 78v147H0Z" fill="#788468" opacity=".6" />
        <path d="M0 237 112 184l118 63 109-72 123 62 105-46 73 40v129H0Z" fill="#A8A27B" opacity=".78" />
        <path d="M0 258H640V360H0Z" fill={`url(#sport-ground-${kind})`} />
        <path d="M0 285c130-23 248 12 358-4s196-17 282 4" fill="none" stroke="#E8D8B2" strokeWidth="3" opacity=".7" />
        <path d="M392 158 503 102" stroke={`url(#sport-metal-${kind})`} strokeWidth="14" strokeLinecap="round" />
        <path d="m500 103 51-29-28 52Z" fill="#42494A" />
        <circle cx="401" cy="109" r="22" fill="#392F2B" />
        <path d="M385 136c-17 9-27 32-28 64l-3 46 55 12 22-73 32-32-14-17-47 35Z" fill="#A51E2D" />
        <path d="m383 151-39 8-55-32-10 13 53 52 58-13" fill="#A51E2D" />
        <path d="m437 155 54-26 15 12-50 44-43 12" fill="#A51E2D" />
        <path d="m367 235-26 48-39 33 13 12 58-24 37-62" fill="#26302D" />
        <path d="m411 239 26 36 50 20-6 15-67-7-42-36" fill="#26302D" />
        <path d="M299 328h43m136-10 24 5" stroke="#332D29" strokeWidth="13" strokeLinecap="round" />
        <path d="m41 315 131 0" stroke="#F6E7C8" strokeWidth="3" strokeDasharray="12 12" opacity=".8" />
      </>
    ) : (
      <>
        <rect width="640" height="360" fill={`url(#sport-sky-${kind})`} />
        <circle cx="522" cy="72" r="34" fill="#F8C870" opacity=".9" />
        <path d="M0 214c78-34 125-20 199-2s138-28 217-18 144 40 224 6v160H0Z" fill="#9EA982" opacity=".55" />
        <path d="M0 247H640V360H0Z" fill={`url(#sport-ground-${kind})`} />
        <path d="M72 304H567M114 282v53m410-53v53" fill="none" stroke="#F5E5C8" strokeWidth="3" opacity=".8" />
        <path d="M204 263h240" fill="none" stroke="#E7D1AB" strokeWidth="5" strokeDasharray="14 9" />
        <ellipse cx="327" cy="294" rx="18" ry="6" fill="#46372D" opacity=".24" />
        <path d="M313 205q14-11 28 0v81q-14 13-28 0Z" fill="#7B492B" stroke="#573521" strokeWidth="4" />
        <path d="M317 211h20m-19 66h18" stroke="#AA7448" strokeWidth="4" opacity=".8" />
        <ellipse cx="327" cy="202" rx="14" ry="5" fill="#B9824C" stroke="#573521" strokeWidth="3" />
        <ellipse cx="240" cy="286" rx="28" ry="9" transform="rotate(-18 240 286)" fill={`url(#sport-metal-${kind})`} stroke="#454949" strokeWidth="3" />
        <ellipse cx="411" cy="314" rx="27" ry="8" transform="rotate(13 411 314)" fill={`url(#sport-metal-${kind})`} stroke="#454949" strokeWidth="3" />
        <ellipse cx="432" cy="184" rx="23" ry="7" transform="rotate(-29 432 184)" fill={`url(#sport-metal-${kind})`} stroke="#454949" strokeWidth="3" />
        <path d="M408 196c-16 18-31 34-54 43" fill="none" stroke="#A51E2D" strokeWidth="3" strokeDasharray="7 8" opacity=".8" />
        <path d="m346 231 12 4-10 8" fill="none" stroke="#A51E2D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M99 247v-24m0 24h70" stroke="#F9F3E7" strokeWidth="2" opacity=".7" />
      </>
    )}
  </svg>
);
