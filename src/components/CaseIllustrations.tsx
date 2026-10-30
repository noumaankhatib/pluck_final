/**
 * Line illustrations for the case study, drawn as inline SVG so they stay crisp at any size.
 * Palette and stroke come from CSS (.ill in globals.css): forest linework, copper for the one thing that matters,
 * sage for secondary detail. Each illustration is decorative; the surrounding copy carries the meaning.
 */

type Props = { className?: string };

const Svg = ({ viewBox, children, className = "" }: { viewBox: string; children: React.ReactNode; className?: string }) => (
  <svg viewBox={viewBox} className={`ill ${className}`} aria-hidden="true" focusable="false">
    {children}
  </svg>
);

/** A server rack with one unit found (copper), and a magnifier over a miniature of it. */
export function ServerRack({ className }: Props) {
  const units = [58, 124, 190, 256];
  return (
    <Svg viewBox="0 0 600 400" className={className}>
      <path className="s" d="M60 364H540" />
      <rect className="l f" x="250" y="40" width="200" height="320" rx="4" />
      <path className="s" d="M262 52V348M438 52V348" />
      {units.map((y, i) => {
        const hit = i === 2;
        const tone = hit ? "c" : "l";
        return (
          <g key={y}>
            <rect className={`${tone} f`} x="272" y={y} width="156" height="52" rx="3" />
            <rect className={tone} x="284" y={y + 10} width="62" height="12" rx="2" />
            <rect className={tone} x="284" y={y + 30} width="62" height="12" rx="2" />
            <path className={tone} d={`M364 ${y + 14}h28M364 ${y + 26}h28M364 ${y + 38}h28`} />
            {hit ? <circle className="fc" cx="410" cy={y + 26} r="5" /> : <circle className="l" cx="410" cy={y + 26} r="4" />}
          </g>
        );
      })}
      <path className="l" d="M450 332C492 332 492 352 526 352" />
      <path className="s" d="M450 316C478 316 482 330 500 330" />
      {/* magnifier */}
      <circle className="l f w" cx="148" cy="226" r="64" />
      <path className="l w" d="M194 272L246 324" />
      <rect className="l" x="106" y="196" width="84" height="16" rx="3" />
      <rect className="c" x="106" y="220" width="84" height="16" rx="3" />
      <circle className="fc" cx="176" cy="228" r="4" />
      <rect className="l" x="106" y="244" width="84" height="16" rx="3" />
      <path className="c d" d="M214 228C236 228 248 216 272 216" />
    </Svg>
  );
}

/** Many near-identical choices on the left; one clear route to the right supplier on the right. */
export function CrowdedField({ className }: Props) {
  const cols = [0, 1, 2, 3];
  const rows = [0, 1, 2];
  return (
    <Svg viewBox="0 0 640 360" className={className}>
      <path className="s d" d="M340 36V324" />
      {rows.flatMap((r) =>
        cols.map((c) => {
          const x = 30 + c * 74;
          const y = 84 + r * 70;
          const hit = c === 2 && r === 1;
          const tone = hit ? "c" : "l";
          return (
            <g key={`${r}-${c}`} opacity={hit ? 1 : 0.5}>
              <rect className={`${tone} f`} x={x} y={y} width="58" height="32" rx="3" />
              <path className={tone} d={`M${x + 8} ${y + 11}h24M${x + 8} ${y + 21}h24`} />
              <circle className={hit ? "fc" : "l"} cx={x + 46} cy={y + 16} r={hit ? 4 : 3} />
            </g>
          );
        }),
      )}
      <path className="c" d="M207 186V205H340C384 205 394 182 424 182" />
      <rect className="c f w" x="424" y="138" width="170" height="88" rx="4" />
      <path className="c" d="M444 164h60M444 182h60M444 200h60" />
      <circle className="fc" cx="566" cy="182" r="7" />
      <circle className="c" cx="566" cy="182" r="20" strokeOpacity="0.5" />
    </Svg>
  );
}

/** A customer questionnaire: a clipboard, two answers ticked, a pencil still working. */
export function Questionnaire({ className }: Props) {
  return (
    <Svg viewBox="0 0 300 300" className={className}>
      <rect className="l f" x="72" y="50" width="146" height="204" rx="8" />
      <rect className="l f" x="111" y="36" width="68" height="28" rx="6" />
      {[0, 1, 2].map((i) => {
        const y = 96 + i * 48;
        return (
          <g key={i}>
            <rect className="l" x="94" y={y} width="20" height="20" rx="3" />
            {i < 2 ? <path className="c w" d={`M99 ${y + 10}l5 5 8-10`} /> : null}
            <path className="l" d={`M128 ${y + 5}h74`} />
            <path className="s" d={`M128 ${y + 16}h50`} />
          </g>
        );
      })}
      <g transform="translate(246 214) rotate(45)">
        <rect className="c f" x="-7" y="-46" width="14" height="66" rx="2" />
        <path className="c" d="M-7 -34H7" />
        <path className="l f" d="M-7 20L0 36L7 20Z" />
      </g>
    </Svg>
  );
}

/** Two buyers, two routes: a signpost with a sign each way. */
export function Signpost({ className }: Props) {
  return (
    <Svg viewBox="0 0 300 300" className={className}>
      <path className="s" d="M86 272H214" />
      <rect className="l f" x="142" y="62" width="16" height="210" />
      <circle className="l f" cx="150" cy="52" r="9" />
      <path className="l f" d="M142 90H74L54 110L74 130H142Z" />
      <path className="l" d="M82 110h44" />
      <path className="c f" d="M158 146H226L246 166L226 186H158Z" />
      <path className="c" d="M172 166h44" />
      <path className="s d" d="M150 214V262" />
    </Svg>
  );
}

/** A website rethought as layered pages; the front one carries the copper call to action. */
export function WebsiteFrames({ className }: Props) {
  const bar = (x: number, y: number, tone: string) => (
    <>
      <path className={tone} d={`M${x} ${y + 22}H${x + 190}`} />
      <circle className={tone} cx={x + 14} cy={y + 11} r="3" />
      <circle className={tone} cx={x + 26} cy={y + 11} r="3" />
      <circle className={tone} cx={x + 38} cy={y + 11} r="3" />
    </>
  );
  return (
    <Svg viewBox="0 0 300 300" className={className}>
      <rect className="s f" x="34" y="44" width="190" height="136" rx="4" />
      {bar(34, 44, "s")}
      <rect className="s f" x="58" y="74" width="190" height="136" rx="4" />
      {bar(58, 74, "s")}
      <rect className="l f" x="82" y="104" width="190" height="140" rx="4" />
      {bar(82, 104, "l")}
      <rect className="c" x="96" y="140" width="162" height="44" rx="2" />
      <path className="c" d="M112 178l16-30M132 178l16-30M152 178l16-30M172 178l16-30M192 178l16-30" opacity="0.55" />
      <path className="l" d="M96 198H214" />
      <path className="s" d="M96 210H186" />
      <rect className="fc" x="96" y="222" width="52" height="12" rx="2" />
    </Svg>
  );
}

/** A search field and its results, with one result singled out for commercial intent. */
export function SearchResults({ className }: Props) {
  return (
    <Svg viewBox="0 0 300 300" className={className}>
      <rect className="l f" x="36" y="52" width="228" height="46" rx="23" />
      <circle className="l" cx="64" cy="75" r="9" />
      <path className="l" d="M71 82l9 9" />
      <path className="s" d="M96 75H190" />
      <path className="c w" d="M200 62V88" />
      {[0, 1, 2].map((i) => {
        const y = 128 + i * 52;
        const hit = i === 0;
        return (
          <g key={i} opacity={hit ? 1 : 0.6}>
            {hit ? <rect className="fc" x="36" y={y} width="16" height="16" rx="3" /> : <rect className="l" x="36" y={y} width="16" height="16" rx="3" />}
            <path className={hit ? "c w" : "l"} d={`M64 ${y + 5}H196`} />
            <path className="s" d={`M64 ${y + 20}H236`} />
          </g>
        );
      })}
      <path className="l f" d="M228 150V176L235 169L240 181L246 179L241 167H250Z" />
    </Svg>
  );
}

/** A sprout with a faint outline of the growth still to come: the next stage, not yet established. */
export function Sprout({ className }: Props) {
  return (
    <Svg viewBox="0 0 300 300" className={className}>
      <path className="s" d="M66 252H234" />
      <path className="l f" d="M98 252Q150 230 202 252Z" />
      <path className="l w" d="M150 240C150 204 148 172 150 134" />
      <path className="l f" d="M150 196C120 196 100 176 98 148C128 150 148 166 150 196Z" />
      <path className="l" d="M150 196C136 182 122 168 108 154" />
      <path className="c f" d="M150 166C150 126 176 102 212 98C214 132 190 162 150 166Z" />
      <path className="c" d="M150 166C168 142 188 120 206 104" />
      <path className="s d" d="M150 134C150 108 148 86 150 58" />
      <path className="s d" d="M150 96C130 96 116 82 114 62C134 64 148 78 150 96Z" />
      <path className="s d" d="M150 78C150 56 164 42 186 40C188 60 174 76 150 78Z" />
    </Svg>
  );
}

/** Three disciplines overlapping, with the shared outcome where they meet. */
export function Overlap({ className }: Props) {
  return (
    <Svg viewBox="0 0 300 300" className={className}>
      <circle className="l" cx="118" cy="124" r="66" />
      <circle className="l" cx="182" cy="124" r="66" />
      <circle className="l" cx="150" cy="180" r="66" />
      <circle className="c f w" cx="150" cy="144" r="22" />
      <circle className="fc" cx="150" cy="144" r="8" />
    </Svg>
  );
}
