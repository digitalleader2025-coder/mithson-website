/**
 * The hero's backdrop: pale blue ribbons and a drawn process plant, in Mithson's own blues.
 * It is decoration, not a photograph of anything real, so it is hidden from screen readers.
 * Drawn as one SVG, so it costs no request and stays sharp at any size. Narrow screens keep
 * the calm left-hand side of the drawing, so the plant never sits under the heading.
 */
export default function HeroBackdrop() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 1440 760" preserveAspectRatio="xMinYMid slice" focusable="false">
        <defs>
          <linearGradient id="hero-wash" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EAF3FF" />
            <stop offset="55%" stopColor="#F6FAFF" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
          <linearGradient id="hero-ribbon" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#42A4FF" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#42A4FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hero-plant" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3E8FE0" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#3E8FE0" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="hero-fade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fff" stopOpacity="0" />
            <stop offset="22%" stopColor="#fff" stopOpacity="1" />
            <stop offset="78%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <mask id="hero-plant-mask">
            <rect width="1440" height="760" fill="url(#hero-fade)" />
          </mask>
        </defs>

        <rect width="1440" height="760" fill="url(#hero-wash)" />

        {/* ribbons: the long curves that run across the sheet */}
        <g fill="none" stroke="url(#hero-ribbon)">
          <path d="M-60 120C220 40 420 250 700 180S1180 10 1520 110" strokeWidth="56" />
          <path d="M-60 250C260 170 460 400 760 320S1220 150 1520 240" strokeWidth="34" />
          <path d="M-60 640C240 560 500 760 820 672S1260 520 1520 596" strokeWidth="80" />
          <path d="M-60 430C300 380 520 560 880 470S1240 360 1520 420" strokeWidth="22" />
        </g>

        {/* the plant: towers, columns and pipework, drawn in line */}
        <g mask="url(#hero-plant-mask)" fill="url(#hero-plant)" stroke="#2F7FD0" strokeOpacity="0.22" strokeWidth="1.5">
          {/* distillation columns */}
          <rect x="628" y="214" width="36" height="366" rx="4" />
          <rect x="676" y="268" width="26" height="312" rx="4" />
          <rect x="714" y="178" width="44" height="402" rx="5" />
          <rect x="770" y="300" width="22" height="280" rx="3" />
          <rect x="804" y="242" width="34" height="338" rx="4" />
          <rect x="850" y="324" width="24" height="256" rx="3" />
          <rect x="886" y="196" width="40" height="384" rx="5" />
          <rect x="938" y="286" width="26" height="294" rx="3" />
          <rect x="976" y="336" width="32" height="244" rx="4" />
          <rect x="1020" y="258" width="22" height="322" rx="3" />
          <rect x="1054" y="310" width="38" height="270" rx="4" />
          <rect x="1104" y="228" width="26" height="352" rx="3" />
          <rect x="1142" y="348" width="30" height="232" rx="4" />
          <rect x="1184" y="290" width="22" height="290" rx="3" />

          {/* platform rings on the tall columns */}
          <g stroke="#2F7FD0" strokeOpacity="0.3" fill="none">
            <path d="M620 300h52M620 372h52M620 444h52" />
            <path d="M706 250h60M706 330h60M706 410h60M706 490h60" />
            <path d="M878 270h56M878 352h56M878 434h56" />
            <path d="M1096 300h42M1096 390h42M1096 480h42" />
          </g>

          {/* spheres and drums */}
          <circle cx="600" cy="520" r="34" />
          <circle cx="1252" cy="500" r="40" />
          <rect x="1216" y="548" width="74" height="32" rx="16" />
          <rect x="566" y="552" width="68" height="28" rx="14" />

          {/* stacks with their flare tips */}
          <path d="M1300 580V236l12-26 12 26v344z" />
          <path d="M556 580V300l10-20 10 20v280z" />

          {/* the pipe rack along the ground */}
          <g stroke="#2F7FD0" strokeOpacity="0.26" fill="none">
            <path d="M520 596h800M520 612h800" />
            <path d="M600 596v16M760 596v16M920 596v16M1080 596v16M1240 596v16" />
          </g>
        </g>

        {/* the ground line the plant stands on */}
        <path d="M0 580h1440" stroke="#2F7FD0" strokeOpacity="0.14" strokeWidth="1.5" mask="url(#hero-plant-mask)" />
      </svg>
    </div>
  );
}
