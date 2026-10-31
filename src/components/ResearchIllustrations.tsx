export function EcosystemIllustration() {
  return (
    <figure className="research-figure ecosystem-figure">
      <svg
        className="ecosystem-svg"
        viewBox="0 0 520 380"
        role="img"
        aria-labelledby="ecosystem-title ecosystem-description"
      >
        <title id="ecosystem-title">Open-source software ecosystem research map</title>
        <desc id="ecosystem-description">
          A conceptual network connecting SCA and SBOM, reliability, licensing,
          maintenance, and model supply chains around an open-source ecosystem.
        </desc>
        <rect className="figure-canvas" x="1" y="1" width="518" height="378" rx="3" />
        <path className="figure-grid" d="M40 72H480M40 138H480M40 204H480M40 270H480M40 336H480M112 48V348M208 48V348M304 48V348M400 48V348" />
        <text className="figure-overline" x="28" y="31">OPEN-SOURCE ECOSYSTEM</text>
        <text className="figure-index" x="492" y="31" textAnchor="end">RESEARCH MAP</text>

        <g className="ecosystem-links">
          <path d="M248 174L135 111M278 172L391 108M287 207L396 250M257 229L267 294M231 207L123 254" />
          <circle cx="187" cy="140" r="4" />
          <circle cx="338" cy="138" r="4" />
          <circle cx="345" cy="230" r="4" />
          <circle cx="262" cy="263" r="4" />
          <circle cx="174" cy="231" r="4" />
        </g>

        <g className="ecosystem-center" transform="translate(260 190)">
          <circle className="ecosystem-center-halo" r="67" />
          <circle className="ecosystem-center-core" r="49" />
          <text className="ecosystem-center-title" textAnchor="middle" y="3">OSS</text>
          <text className="ecosystem-center-subtitle" textAnchor="middle" y="22">ecosystem</text>
        </g>

        <g className="eco-node eco-components" transform="translate(105 92)">
          <circle className="eco-node-circle" r="37" />
          <g className="eco-node-icon" transform="translate(-13 -13)">
            <path d="M13 2L24 8V20L13 26L2 20V8L13 2ZM2 8L13 14L24 8M13 14V26M7.5 5L18.5 11" />
          </g>
          <text className="eco-node-label" textAnchor="middle" y="55">SCA &amp; SBOM</text>
        </g>

        <g className="eco-node eco-reliability" transform="translate(414 90)">
          <circle className="eco-node-circle" r="37" />
          <g className="eco-node-icon" transform="translate(-13 -14)">
            <path d="M13 2L23 6V13C23 20 19 24 13 27C7 24 3 20 3 13V6L13 2Z" />
            <path d="M8 14L11.5 17.5L18.5 10" />
          </g>
          <text className="eco-node-label" textAnchor="middle" y="55">RELIABILITY</text>
        </g>

        <g className="eco-node eco-licensing" transform="translate(421 260)">
          <circle className="eco-node-circle" r="37" />
          <g className="eco-node-icon" transform="translate(-14 -14)">
            <path d="M14 3V25M6 7H22M4 25H24M7 8L2 17H12L7 8ZM21 8L16 17H26L21 8Z" />
            <path d="M2 17C3 21 11 21 12 17M16 17C17 21 25 21 26 17" />
          </g>
          <text className="eco-node-label" textAnchor="middle" y="55">LICENSING</text>
        </g>

        <g className="eco-node eco-maintenance" transform="translate(270 319)">
          <circle className="eco-node-circle" r="37" />
          <g className="eco-node-icon" transform="translate(-13 -14)">
            <circle cx="6" cy="5" r="3" />
            <circle cx="20" cy="21" r="3" />
            <circle cx="6" cy="21" r="3" />
            <path d="M6 8V18M9 6H15C18 6 20 9 20 12V18" />
          </g>
          <text className="eco-node-label" textAnchor="middle" y="55">SUSTAINABILITY</text>
        </g>

        <g className="eco-node eco-models" transform="translate(96 264)">
          <circle className="eco-node-circle" r="37" />
          <g className="eco-node-icon" transform="translate(-15 -14)">
            <circle cx="5" cy="14" r="3" />
            <circle cx="15" cy="5" r="3" />
            <circle cx="25" cy="14" r="3" />
            <circle cx="15" cy="24" r="3" />
            <path d="M7 12L13 7M17 7L23 12M23 16L17 22M13 22L7 16M8 14H22" />
          </g>
          <text className="eco-node-label" textAnchor="middle" y="55">MODEL SUPPLY CHAIN</text>
        </g>
      </svg>
      <figcaption>Artifacts, processes, and collaborations in open-source software</figcaption>
    </figure>
  )
}

export function EmpiricalIllustration() {
  return (
    <figure className="research-figure empirical-figure">
      <svg
        className="empirical-svg"
        viewBox="0 0 520 250"
        role="img"
        aria-labelledby="empirical-title empirical-description"
      >
        <title id="empirical-title">Empirical software engineering analysis</title>
        <desc id="empirical-description">
          A conceptual analysis panel showing repository observations transformed into metrics and evidence.
        </desc>
        <rect className="figure-canvas" x="1" y="1" width="518" height="248" rx="3" />
        <text className="figure-overline" x="24" y="29">EMPIRICAL SOFTWARE ENGINEERING</text>
        <text className="figure-index" x="496" y="29" textAnchor="end">DATA → EVIDENCE</text>
        <path className="empirical-grid" d="M55 78H470M55 112H470M55 146H470M55 180H470" />
        <path className="empirical-axis" d="M55 58V194H474" />

        <g className="empirical-bars">
          <rect x="88" y="128" width="40" height="66" />
          <rect x="151" y="96" width="40" height="98" />
          <rect x="214" y="116" width="40" height="78" />
          <rect x="277" y="72" width="40" height="122" />
        </g>
        <path className="empirical-trend" d="M105 147L169 117L232 130L295 86L360 99L425 64" />
        <g className="empirical-points">
          <circle cx="105" cy="147" r="5" />
          <circle cx="169" cy="117" r="5" />
          <circle cx="232" cy="130" r="5" />
          <circle cx="295" cy="86" r="5" />
          <circle cx="360" cy="99" r="5" />
          <circle cx="425" cy="64" r="5" />
        </g>
        <g className="empirical-observations">
          <circle cx="385" cy="153" r="4" />
          <circle cx="409" cy="137" r="4" />
          <circle cx="439" cy="162" r="4" />
          <circle cx="459" cy="121" r="4" />
          <circle cx="389" cy="111" r="4" />
        </g>
        <text className="empirical-label" x="55" y="220">REPOSITORY DATA</text>
        <text className="empirical-label" x="235" y="220">METRICS</text>
        <text className="empirical-label" x="474" y="220" textAnchor="end">EVIDENCE</text>
      </svg>
      <figcaption>From repository observations to empirical evidence</figcaption>
    </figure>
  )
}
