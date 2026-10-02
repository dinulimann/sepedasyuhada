// Ilustrasi sepeda SVG dengan roda dan pedal yang berputar.
export default function BikeIllustration({ className = "" }: { className?: string }) {
  const spokes = Array.from({ length: 8 }, (_, i) => i * 22.5);

  const wheel = (cx: number) => (
    <g>
      <circle cx={cx} cy="150" r="58" fill="none" stroke="currentColor" strokeWidth="7" />
      <circle cx={cx} cy="150" r="50" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" />
      <g className="animate-spin-slow" style={{ transformOrigin: `${cx}px 150px`, transformBox: "view-box" }}>
        {spokes.map((deg) => (
          <line
            key={deg}
            x1={cx}
            y1="98"
            x2={cx}
            y2="202"
            stroke="currentColor"
            strokeOpacity="0.55"
            strokeWidth="1.5"
            transform={`rotate(${deg} ${cx} 150)`}
          />
        ))}
      </g>
      <circle cx={cx} cy="150" r="6" fill="currentColor" />
    </g>
  );

  return (
    <svg viewBox="0 0 400 230" className={className} aria-hidden="true">
      {wheel(90)}
      {wheel(310)}

      {/* Rangka */}
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M90 150 L170 150 L250 70 L140 70 Z" stroke="#fb923c" strokeWidth="9" />
        <path d="M170 150 L130 52" stroke="#fb923c" strokeWidth="9" />
        <path d="M250 70 L310 150" stroke="currentColor" strokeWidth="8" />
        <path d="M244 52 L258 82" stroke="currentColor" strokeWidth="8" />
        {/* Stang */}
        <path d="M236 50 Q246 34 268 40" stroke="currentColor" strokeWidth="7" />
        {/* Sadel */}
        <path d="M110 48 L150 48" stroke="currentColor" strokeWidth="10" />
      </g>

      {/* Crank & pedal */}
      <g className="animate-spin-slow" style={{ transformOrigin: "170px 150px", transformBox: "view-box" }}>
        <circle cx="170" cy="150" r="14" fill="none" stroke="currentColor" strokeWidth="5" />
        <line x1="170" y1="150" x2="170" y2="178" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <line x1="170" y1="150" x2="170" y2="122" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      </g>
    </svg>
  );
}
