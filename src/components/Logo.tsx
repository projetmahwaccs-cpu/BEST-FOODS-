import { useState } from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
}

export function Logo({ className = "", size = "md", showText = true }: LogoProps) {
  const [imgError, setImgError] = useState(false);

  // Dimensions based on size
  const sizeMap = {
    sm: "w-12 h-12",
    md: "w-20 h-20",
    lg: "w-28 h-28",
    xl: "w-36 h-36",
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* 
        Container for bf.png image logo.
        Points directly to '/bf.png' (and fallback to SVG emblem if image is loading or uploading).
      */}
      <div className={`relative shrink-0 flex items-center justify-center ${sizeMap[size]}`}>
        {!imgError ? (
          <img
            src="/logo_bestfood_bf.png"
            alt="BEST FOODS Logo"
            className="w-full h-full object-contain drop-shadow-md"
            onError={() => {
              // Try bf.png if logo_bestfood_bf.png fails, or toggle to SVG fallback
              setImgError(true);
            }}
          />
        ) : (
          /* High-fidelity fallback emblem while bf.png is being placed */
          <svg
            viewBox="0 0 300 300"
            className="w-full h-full drop-shadow-md"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path id="topCurvePath" d="M 45,150 A 105,105 0 0,1 255,150" fill="none" />
              <linearGradient id="greenRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1B7A3E" />
                <stop offset="50%" stopColor="#145A2C" />
                <stop offset="100%" stopColor="#0B3E1D" />
              </linearGradient>
              <linearGradient id="sunGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#EA580C" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
              <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E8245" />
                <stop offset="60%" stopColor="#136032" />
                <stop offset="100%" stopColor="#0E4824" />
              </linearGradient>
            </defs>

            <circle cx="150" cy="150" r="140" fill="#FFFFFF" stroke="url(#greenRimGrad)" strokeWidth="12" />
            <circle cx="150" cy="150" r="130" stroke="#145A2C" strokeWidth="2.5" />
            <circle cx="150" cy="150" r="102" stroke="#1B7A3E" strokeWidth="1.5" strokeDasharray="3 2" />

            <text fill="#0F4F27" fontSize="17" fontWeight="900" letterSpacing="3.5" fontFamily="sans-serif">
              <textPath href="#topCurvePath" startOffset="50%" textAnchor="middle">
                LA QUALITÉ AU BON PRIX
              </textPath>
            </text>

            <polygon points="150,56 153,65 163,65 155,71 158,80 150,75 142,80 145,71 137,65 147,65" fill="#145A2C" />

            <g transform="translate(150, 118)">
              <circle cx="0" cy="0" r="28" fill="url(#sunGrad)" />
              <line x1="0" y1="-32" x2="0" y2="-44" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" />
              <line x1="23" y1="-23" x2="31" y2="-31" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" />
              <line x1="32" y1="0" x2="44" y2="0" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" />
              <line x1="-23" y1="-23" x2="-31" y2="-31" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" />
              <line x1="-32" y1="0" x2="-44" y2="0" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" />
            </g>

            <g fill="#15803D" opacity="0.9">
              <path d="M 68,145 C 60,135 60,118 76,115 C 72,128 75,138 68,145 Z" />
              <path d="M 62,165 C 52,158 50,140 68,136 C 63,149 67,159 62,165 Z" />
              <path d="M 232,145 C 240,135 240,118 224,115 C 228,128 225,138 232,145 Z" />
              <path d="M 238,165 C 248,158 250,140 232,136 C 237,149 233,159 238,165 Z" />
            </g>

            <g textAnchor="middle">
              <text x="150" y="166" fill="#1A7C3F" fontSize="48" fontWeight="900" fontFamily="Impact, Arial Black, sans-serif" letterSpacing="3">
                BEST
              </text>
              <text x="150" y="163" fill="#D32F2F" fontSize="48" fontWeight="900" fontFamily="Impact, Arial Black, sans-serif" letterSpacing="3">
                BEST
              </text>
            </g>

            <g transform="translate(0, 10)">
              <path d="M 60,175 Q 150,195 240,175 L 235,210 Q 150,230 65,210 Z" fill="url(#ribbonGrad)" stroke="#0B3E1D" strokeWidth="2" />
              <text x="150" y="202" fill="#FFFFFF" fontSize="24" fontWeight="900" fontFamily="Arial Black, sans-serif" letterSpacing="5" textAnchor="middle">
                FOODS
              </text>
            </g>

            <polygon points="150,250 152.5,257 160,257 154,262 156,269 150,265 144,269 146,262 140,257 147.5,257" fill="#145A2C" />
          </svg>
        )}
      </div>

      {/* Brand title block (optional next to logo) */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0e5831] font-heading whitespace-nowrap">
              BEST FOODS
            </span>
          </div>
          <span className="text-[10px] tracking-widest uppercase font-bold text-amber-700 whitespace-nowrap">
            Agro Commodities • Dakar
          </span>
        </div>
      )}
    </div>
  );
}
