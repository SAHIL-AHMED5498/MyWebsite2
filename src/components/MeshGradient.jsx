import { useEffect, useId, useMemo, useState } from "react";

const usePrefersReducedMotion = (override) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    typeof override === "boolean" ? override : false
  );

  useEffect(() => {
    if (typeof override === "boolean") {
      setPrefersReducedMotion(override);
      return;
    }

    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = (event) => setPrefersReducedMotion(event.matches);

    setPrefersReducedMotion(mediaQuery.matches);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", update);
      return () => mediaQuery.removeEventListener("change", update);
    }

    mediaQuery.addListener(update);
    return () => mediaQuery.removeListener(update);
  }, [override]);

  return prefersReducedMotion;
};

const MeshGradient = ({
  className = "",
  style,
  animated = true,
  reducedMotion,
  opacity = 0.9,
}) => {
  const prefersReducedMotion = usePrefersReducedMotion(reducedMotion);
  const enableMotion = animated && !prefersReducedMotion;
  const rawId = useId();
  const id = useMemo(() => rawId.replace(/[:]/g, ""), [rawId]);

  const gradientA = `mesh-gradient-a-${id}`;
  const gradientB = `mesh-gradient-b-${id}`;
  const gradientC = `mesh-gradient-c-${id}`;
  const gradientD = `mesh-gradient-d-${id}`;
  const vignette = `mesh-vignette-${id}`;
  const turbulenceFilter = `mesh-filter-${id}`;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`.trim()}
      style={style}
    >
      <svg
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1600 900"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id={gradientA} cx="18%" cy="22%" r="58%">
            <stop offset="0%" stopColor="#00dfd8" stopOpacity="0.95" />
            <stop offset="38%" stopColor="#007cf0" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#007cf0" stopOpacity="0" />
          </radialGradient>

          <radialGradient id={gradientB} cx="82%" cy="20%" r="56%">
            <stop offset="0%" stopColor="#7928ca" stopOpacity="0.88" />
            <stop offset="42%" stopColor="#ff0080" stopOpacity="0.56" />
            <stop offset="100%" stopColor="#ff0080" stopOpacity="0" />
          </radialGradient>

          <radialGradient id={gradientC} cx="30%" cy="82%" r="52%">
            <stop offset="0%" stopColor="#ff4d4d" stopOpacity="0.86" />
            <stop offset="45%" stopColor="#f9cb28" stopOpacity="0.48" />
            <stop offset="100%" stopColor="#f9cb28" stopOpacity="0" />
          </radialGradient>

          <radialGradient id={gradientD} cx="72%" cy="74%" r="48%">
            <stop offset="0%" stopColor="#50e3c2" stopOpacity="0.78" />
            <stop offset="48%" stopColor="#7928ca" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#7928ca" stopOpacity="0" />
          </radialGradient>

          <linearGradient id={vignette} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.12" />
          </linearGradient>

          <filter
            id={turbulenceFilter}
            x="-25%"
            y="-25%"
            width="150%"
            height="150%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency={enableMotion ? "0.006 0.012" : "0.008 0.014"}
              numOctaves="3"
              seed="11"
              result="noise"
              stitchTiles="stitch"
            >
              {enableMotion ? (
                <animate
                  attributeName="baseFrequency"
                  dur="18s"
                  repeatCount="indefinite"
                  values="0.006 0.012;0.01 0.018;0.008 0.014;0.006 0.012"
                />
              ) : null}
            </feTurbulence>

            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={enableMotion ? 48 : 18}
              xChannelSelector="R"
              yChannelSelector="B"
            >
              {enableMotion ? (
                <animate
                  attributeName="scale"
                  dur="16s"
                  repeatCount="indefinite"
                  values="28;56;36;28"
                />
              ) : null}
            </feDisplacementMap>
          </filter>
        </defs>

        <g filter={`url(#${turbulenceFilter})`} opacity={opacity}>
          <ellipse cx="280" cy="220" fill={`url(#${gradientA})`} rx="520" ry="420">
            {enableMotion ? (
              <animateTransform
                additive="sum"
                attributeName="transform"
                dur="34s"
                repeatCount="indefinite"
                type="translate"
                values="0 0;32 -16;0 0"
              />
            ) : null}
          </ellipse>

          <ellipse cx="1270" cy="190" fill={`url(#${gradientB})`} rx="500" ry="390">
            {enableMotion ? (
              <animateTransform
                additive="sum"
                attributeName="transform"
                dur="29s"
                repeatCount="indefinite"
                type="translate"
                values="0 0;-28 18;0 0"
              />
            ) : null}
          </ellipse>

          <ellipse cx="430" cy="760" fill={`url(#${gradientC})`} rx="560" ry="360">
            {enableMotion ? (
              <animateTransform
                additive="sum"
                attributeName="transform"
                dur="31s"
                repeatCount="indefinite"
                type="translate"
                values="0 0;24 -20;0 0"
              />
            ) : null}
          </ellipse>

          <ellipse cx="1150" cy="710" fill={`url(#${gradientD})`} rx="500" ry="340">
            {enableMotion ? (
              <animateTransform
                additive="sum"
                attributeName="transform"
                dur="27s"
                repeatCount="indefinite"
                type="translate"
                values="0 0;-22 -18;0 0"
              />
            ) : null}
          </ellipse>
        </g>

        <rect fill={`url(#${vignette})`} height="900" width="1600" x="0" y="0" />
      </svg>
    </div>
  );
};

export default MeshGradient;
