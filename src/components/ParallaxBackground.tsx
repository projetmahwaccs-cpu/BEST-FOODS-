import React, { useState, useEffect, useRef } from "react";

interface ParallaxBackgroundProps {
  /** Path to the PNG image that the user will upload (e.g. /bg-parallax-hero.png) */
  imageSrc?: string;
  /** Fallback background image if the primary PNG is not yet uploaded */
  fallbackSrc?: string;
  /** Speed of parallax effect: 0.1 to 0.5 (default 0.25) */
  speed?: number;
  /** Tailwind class for overlay tint and opacity (e.g. "bg-black/60", "bg-emerald-950/80", "bg-white/90") */
  overlayClassName?: string;
  /** Children to render over the parallax background */
  children?: React.ReactNode;
  /** Additional wrapper classes */
  className?: string;
  /** Pattern style if image is missing */
  pattern?: "dots" | "leaf" | "grid" | "none";
}

/**
 * Reusable Parallax Background Component.
 * Supports user-provided .png images with smooth vertical parallax scroll displacement.
 * Features graceful fallback with brand texture until the custom PNG is uploaded.
 */
export function ParallaxBackground({
  imageSrc,
  fallbackSrc,
  speed = 0.25,
  overlayClassName = "bg-black/50",
  children,
  className = "",
  pattern = "leaf",
}: ParallaxBackgroundProps) {
  const [offsetY, setOffsetY] = useState(0);
  const [imgError, setImgError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            // Calculate distance from viewport top
            const scrollDistance = -rect.top;
            setOffsetY(scrollDistance * speed);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  const activeSrc = !imgError && imageSrc ? imageSrc : fallbackSrc;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      data-parallax-src={imageSrc}
    >
      {/* Parallax Background Layer */}
      <div
        className="absolute inset-x-0 -top-24 -bottom-24 pointer-events-none z-0 will-change-transform"
        style={{
          transform: `translate3d(0, ${offsetY}px, 0)`,
          transition: "transform 0.05s linear",
        }}
      >
        {activeSrc ? (
          <img
            src={activeSrc}
            alt="Parallax background"
            onError={() => {
              if (!imgError && fallbackSrc && activeSrc !== fallbackSrc) {
                // Try fallback if primary png failed
                setImgError(true);
              } else {
                setImgError(true);
              }
            }}
            className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-[#0a3f23] to-neutral-900" />
        )}

        {/* Decorative Watermark Pattern if no image or as subtle texture */}
        {pattern === "leaf" && (
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none flex items-center justify-center">
            <svg viewBox="0 0 400 400" className="w-[800px] h-[800px] fill-current text-white">
              <path d="M200 40 C120 40 40 120 40 200 C40 280 120 360 200 360 C280 360 360 280 360 200 C360 120 280 40 200 40 Z M200 80 C260 80 320 130 320 200 C320 270 260 320 200 320 C140 320 80 270 80 200 C80 130 140 80 200 80 Z" />
              <path d="M160 260 C150 210 170 140 230 100 C200 150 200 210 160 260 Z" />
              <path d="M240 260 C250 210 230 140 170 100 C200 150 200 210 240 260 Z" />
            </svg>
          </div>
        )}

        {pattern === "dots" && (
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        )}

        {pattern === "grid" && (
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        )}
      </div>

      {/* Customizable Tint Overlay */}
      <div className={`absolute inset-0 z-0 pointer-events-none ${overlayClassName}`} />

      {/* Foreground Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
