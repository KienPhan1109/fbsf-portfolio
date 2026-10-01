export default function SkylineIllustration() {
  return (
    <div className="hero__skyline" aria-hidden="true">
      <svg
        className="hero__skyline-svg"
        viewBox="0 0 1600 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="skylineFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="85%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="buildingFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        <g stroke="#94A3B8" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
          {/* Ambient Sun */}
          <circle cx="560" cy="55" r="22" strokeDasharray="3 3" fill="none" opacity="0.45" />
          <circle cx="560" cy="55" r="14" fill="#FEF3C7" fillOpacity="0.3" stroke="#F59E0B" opacity="0.5" />
          {/* Sun rays */}
          <path d="M560 22 V28 M560 82 V88 M527 55 H533 M587 55 H593 M536 31 L541 36 M579 74 L584 79 M536 79 L541 74 M579 36 L584 31" opacity="0.4" />

          {/* Hot Air Balloons */}
          <g opacity="0.45" transform="translate(260, 45)">
            <ellipse cx="20" cy="24" rx="16" ry="20" fill="white" />
            <path d="M7 22 C7 32, 14 38, 17 40 H23 C26 38, 33 32, 33 22" />
            <path d="M12 20 Q20 30 20 40 Q20 30 28 20" strokeDasharray="2 2" />
            <line x1="17" y1="40" x2="17" y2="46" />
            <line x1="23" y1="40" x2="23" y2="46" />
            <rect x="16" y="46" width="8" height="6" rx="1" fill="#F1F5F9" />
          </g>

          <g opacity="0.4" transform="translate(1320, 50)">
            <ellipse cx="16" cy="19" rx="13" ry="16" fill="white" />
            <path d="M5 18 C5 26, 11 31, 14 32 H18 C21 31, 27 26, 27 18" />
            <line x1="14" y1="32" x2="14" y2="37" />
            <line x1="18" y1="32" x2="18" y2="37" />
            <rect x="13" y="37" width="6" height="5" rx="1" fill="#F1F5F9" />
          </g>

          {/* Minimalist Clouds */}
          <path
            d="M100 85 C100 75, 115 70, 125 75 C132 68, 150 68, 158 76 C165 72, 180 75, 182 85 H100 Z"
            fill="white"
            fillOpacity="0.8"
            opacity="0.45"
          />
          <path
            d="M1120 70 C1120 62, 1132 58, 1140 62 C1146 56, 1160 56, 1166 63 C1172 60, 1184 62, 1186 70 H1120 Z"
            fill="white"
            fillOpacity="0.8"
            opacity="0.45"
          />

          {/* Left: Suspension Bridge & Riverfront */}
          <g>
            <rect x="30" y="240" width="160" height="100" fill="url(#buildingFill)" />
            <line x1="10" y1="290" x2="220" y2="290" strokeWidth="2" />
            <line x1="10" y1="300" x2="220" y2="300" strokeWidth="1" />
            {/* Bridge Pylons */}
            <path d="M60 340 L75 180 H85 L100 340" fill="white" />
            <path d="M150 340 L165 180 H175 L190 340" fill="white" />
            {/* Cable stays */}
            <path d="M80 180 L20 290 M80 200 L40 290 M80 220 L60 290" />
            <path d="M80 180 L140 290 M80 200 L120 290 M80 220 L100 290" />
            <path d="M170 180 L110 290 M170 200 L130 290 M170 220 L150 290" />
            <path d="M170 180 L230 290 M170 200 L210 290 M170 220 L190 290" />
          </g>

          {/* Classical Banking Palace (HUB / State Bank heritage) */}
          <g>
            <rect x="210" y="220" width="160" height="120" fill="url(#buildingFill)" />
            {/* Roof & Pediment */}
            <polygon points="210,220 290,175 370,220" fill="white" strokeWidth="1.5" />
            <circle cx="290" cy="202" r="9" />
            {/* Colonnade / Columns */}
            <line x1="225" y1="220" x2="225" y2="340" strokeWidth="1.5" />
            <line x1="245" y1="220" x2="245" y2="340" strokeWidth="1.5" />
            <line x1="265" y1="220" x2="265" y2="340" strokeWidth="1.5" />
            <line x1="285" y1="220" x2="285" y2="340" strokeWidth="1.5" />
            <line x1="305" y1="220" x2="305" y2="340" strokeWidth="1.5" />
            <line x1="325" y1="220" x2="325" y2="340" strokeWidth="1.5" />
            <line x1="345" y1="220" x2="345" y2="340" strokeWidth="1.5" />
            {/* Foundation stairs */}
            <line x1="200" y1="330" x2="380" y2="330" strokeWidth="1.5" />
            <line x1="195" y1="335" x2="385" y2="335" strokeWidth="1.5" />
            <line x1="190" y1="340" x2="390" y2="340" strokeWidth="2" />
          </g>

          {/* Classical Dome & Rotunda */}
          <g>
            <rect x="375" y="200" width="110" height="140" fill="url(#buildingFill)" />
            <path d="M390 200 C390 145, 470 145, 470 200 Z" fill="white" strokeWidth="1.5" />
            <rect x="422" y="125" width="16" height="20" fill="white" />
            <line x1="430" y1="125" x2="430" y2="105" strokeWidth="1.5" />
            {/* Dome ribs */}
            <path d="M410 200 C410 160, 430 145, 430 145" />
            <path d="M450 200 C450 160, 430 145, 430 145" />
            {/* Windows */}
            <path d="M400 230 H420 V255 H400 Z M440 230 H460 V255 H440 Z" />
            <path d="M400 270 H420 V295 H400 Z M440 270 H460 V295 H440 Z" />
          </g>

          {/* Grand Stock Exchange / Central Banking Tower */}
          <g>
            <rect x="490" y="160" width="150" height="180" fill="url(#buildingFill)" />
            <polygon points="490,160 565,115 640,160" fill="white" strokeWidth="1.5" />
            <circle cx="565" cy="142" r="12" />
            <line x1="565" y1="135" x2="565" y2="142" />
            <line x1="565" y1="142" x2="571" y2="142" />
            {/* Windows grid */}
            <path d="M510 180 H540 V205 H510 Z M550 180 H580 V205 H550 Z M590 180 H620 V205 H590 Z" />
            <path d="M510 220 H540 V245 H510 Z M550 220 H580 V245 H550 Z M590 220 H620 V245 H590 Z" />
            <path d="M510 260 H540 V285 H510 Z M550 260 H580 V285 H550 Z M590 260 H620 V285 H590 Z" />
            {/* Grand Arch */}
            <path d="M545 340 V300 C545 285, 585 285, 585 300 V340" fill="white" strokeWidth="1.5" />
          </g>

          {/* Modern FinTech Spire & Observation Tower */}
          <g>
            <path d="M695 340 L720 110 H730 L755 340" fill="url(#buildingFill)" />
            <rect x="705" y="110" width="40" height="35" rx="4" fill="white" strokeWidth="1.5" />
            <line x1="725" y1="110" x2="725" y2="35" strokeWidth="2" />
            <circle cx="725" cy="32" r="3" fill="#10B981" stroke="none" />
            {/* Lattice cross bracing */}
            <line x1="710" y1="150" x2="740" y2="185" />
            <line x1="740" y1="150" x2="710" y2="185" />
            <line x1="707" y1="185" x2="743" y2="220" />
            <line x1="743" y1="185" x2="707" y2="220" />
            <line x1="704" y1="220" x2="746" y2="260" />
            <line x1="746" y1="220" x2="704" y2="260" />
            <line x1="701" y1="260" x2="749" y2="300" />
            <line x1="749" y1="260" x2="701" y2="300" />
          </g>

          {/* Modern Helical Tower with Helipad (Bitexco Inspired) */}
          <g>
            <path
              d="M780 340 C780 260, 810 180, 835 75 C855 75, 875 140, 885 340"
              fill="url(#buildingFill)"
              strokeWidth="1.5"
            />
            {/* Helipad jutting out */}
            <polygon points="812,175 770,178 775,188 817,185" fill="white" strokeWidth="1.5" />
            <line x1="770" y1="178" x2="817" y2="185" strokeWidth="1.5" />
            {/* Spire */}
            <line x1="840" y1="75" x2="840" y2="40" strokeWidth="1.5" />
            {/* Floor glass facade lines */}
            <line x1="795" y1="130" x2="855" y2="128" />
            <line x1="790" y1="160" x2="865" y2="157" />
            <line x1="786" y1="200" x2="872" y2="197" />
            <line x1="783" y1="240" x2="878" y2="236" />
            <line x1="781" y1="280" x2="882" y2="276" />
            <line x1="780" y1="315" x2="884" y2="312" />
          </g>

          {/* Stepped Supertall Financial Skyscraper (Landmark 81 Inspired) */}
          <g>
            <rect x="910" y="240" width="130" height="100" fill="url(#buildingFill)" />
            <rect x="925" y="160" width="100" height="80" fill="url(#buildingFill)" />
            <rect x="940" y="90" width="70" height="70" fill="url(#buildingFill)" />
            <rect x="955" y="45" width="40" height="45" fill="url(#buildingFill)" />
            {/* Crown Needle Spire */}
            <line x1="975" y1="45" x2="975" y2="15" strokeWidth="2.5" />
            <circle cx="975" cy="12" r="3" fill="#10B981" stroke="none" />
            {/* Vertical bundle lines */}
            <line x1="945" y1="45" x2="945" y2="340" strokeDasharray="3 2" />
            <line x1="965" y1="45" x2="965" y2="340" strokeDasharray="3 2" />
            <line x1="985" y1="45" x2="985" y2="340" strokeDasharray="3 2" />
            <line x1="1005" y1="90" x2="1005" y2="340" strokeDasharray="3 2" />
          </g>

          {/* Contemporary Financial Towers & Tech Hub */}
          <g>
            <rect x="1060" y="140" width="110" height="200" rx="2" fill="url(#buildingFill)" />
            <polygon points="1060,140 1170,95 1170,140" fill="white" strokeWidth="1.5" />
            {/* Diagonal facet grid */}
            <line x1="1060" y1="180" x2="1170" y2="230" />
            <line x1="1060" y1="230" x2="1170" y2="180" />
            <line x1="1060" y1="240" x2="1170" y2="290" />
            <line x1="1060" y1="290" x2="1170" y2="240" />
          </g>

          {/* Institutional Twin Towers with Skybridge */}
          <g>
            <rect x="1195" y="110" width="65" height="230" fill="url(#buildingFill)" />
            <rect x="1285" y="110" width="65" height="230" fill="url(#buildingFill)" />
            {/* Spires */}
            <line x1="1227" y1="110" x2="1227" y2="70" strokeWidth="1.5" />
            <line x1="1317" y1="110" x2="1317" y2="70" strokeWidth="1.5" />
            {/* Skybridge */}
            <rect x="1260" y="190" width="25" height="18" fill="white" strokeWidth="1.5" />
            {/* Windows */}
            <line x1="1205" y1="140" x2="1250" y2="140" />
            <line x1="1205" y1="170" x2="1250" y2="170" />
            <line x1="1205" y1="230" x2="1250" y2="230" />
            <line x1="1205" y1="270" x2="1250" y2="270" />
            <line x1="1295" y1="140" x2="1340" y2="140" />
            <line x1="1295" y1="170" x2="1340" y2="170" />
            <line x1="1295" y1="230" x2="1340" y2="230" />
            <line x1="1295" y1="270" x2="1340" y2="270" />
          </g>

          {/* Right: Modern Bank Headquarters & Classical Spires */}
          <g>
            <rect x="1375" y="160" width="105" height="180" fill="url(#buildingFill)" />
            <polygon points="1375,160 1427,105 1480,160" fill="white" strokeWidth="1.5" />
            <line x1="1427" y1="105" x2="1427" y2="75" strokeWidth="1.5" />
            <circle cx="1427" cy="135" r="10" />

            <rect x="1495" y="210" width="95" height="130" fill="url(#buildingFill)" />
            {/* Modern curved roof */}
            <path d="M1495 210 Q1542 165 1590 210" fill="white" strokeWidth="1.5" />
            <line x1="1510" y1="235" x2="1575" y2="235" />
            <line x1="1510" y1="265" x2="1575" y2="265" />
            <line x1="1510" y1="295" x2="1575" y2="295" />
          </g>

          {/* Continuous Ground / Baseline */}
          <line x1="0" y1="339" x2="1600" y2="339" strokeWidth="2" stroke="#94A3B8" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}
