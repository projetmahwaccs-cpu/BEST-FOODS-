import { useState } from "react";

export type SpiceType = "poivre" | "piment" | "lentilles" | "anis" | "custom";

interface FloatingCutoutSpiceProps {
  type?: SpiceType;
  src?: string;
  alt?: string;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  rotate?: number;
  animate?: boolean;
  opacity?: number; // 0 to 1
  label?: string;
}

const defaultSources: Record<SpiceType, string> = {
  piment: "/spice_piment.png",
  poivre: "/spice_poivre.png",
  lentilles: "/spice_lentilles.png",
  anis: "/spice_anis.png",
  custom: "/spice_piment.png",
};

const defaultAlts: Record<SpiceType, string> = {
  piment: "Piment rouge découpé (cutout sans fond)",
  poivre: "Grains de poivre noir découpés",
  lentilles: "Lentilles et graines découpées",
  anis: "Étoile de badiane / cannelle découpée",
  custom: "Épice découpée",
};

const sizeClasses = {
  xs: "w-10 h-10 sm:w-12 sm:h-12",
  sm: "w-14 h-14 sm:w-16 sm:h-16",
  md: "w-20 h-20 sm:w-24 sm:h-24",
  lg: "w-28 h-28 sm:w-32 sm:h-32",
  xl: "w-36 h-36 sm:w-44 sm:h-44",
};

export function FloatingCutoutSpice({
  type = "poivre",
  src,
  alt,
  className = "",
  size = "md",
  rotate = 0,
  animate = true,
  opacity = 0.92,
  label,
}: FloatingCutoutSpiceProps) {
  const [loadError, setLoadError] = useState(false);
  const imageSource = src || defaultSources[type];
  const imageAlt = alt || defaultAlts[type];

  if (loadError) {
    return null;
  }

  return (
    <div
      className={`pointer-events-none select-none inline-block z-10 transition-transform ${
        animate ? "animate-pulse" : ""
      } ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        opacity,
      }}
      title={label || `Élément décoratif (${type}) - Remplaçable par image PNG sans fond`}
    >
      <img
        src={imageSource}
        alt={imageAlt}
        onError={() => setLoadError(true)}
        className={`${sizeClasses[size]} object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.22)] filter`}
        loading="lazy"
      />
    </div>
  );
}
