import { ArrowRight } from "lucide-react";
import heroImg from "../assets/images/hero_spices_commodities_1791684003019.jpg";
import { ParallaxBackground } from "./ParallaxBackground";
import { FloatingCutoutSpice } from "./FloatingCutoutSpice";

interface HeroBannerProps {
  currentLang: "en" | "fr";
  onLearnMore: () => void;
  onRequestQuote: () => void;
}

export function HeroBanner({ currentLang, onLearnMore, onRequestQuote }: HeroBannerProps) {
  const isEn = currentLang === "en";

  return (
    <ParallaxBackground
      imageSrc="/bg-parallax-hero.png"
      fallbackSrc={heroImg}
      speed={0.28}
      overlayClassName="bg-gradient-to-r from-[#0c5832]/85 via-black/55 to-[#0c5832]/85 mix-blend-multiply"
      className="min-h-[520px] sm:min-h-[600px] flex items-center justify-center text-white relative overflow-hidden"
    >
      {/* Floating Spices across the Hero */}
      <div className="absolute top-12 left-4 sm:left-12 z-10">
        <FloatingCutoutSpice type="poivre" size="sm" rotate={-14} animate={true} />
      </div>
      <div className="absolute top-16 right-4 sm:right-14 z-10">
        <FloatingCutoutSpice type="piment" size="md" rotate={22} animate={true} />
      </div>
      <div className="hidden sm:block absolute bottom-24 right-20 z-10">
        <FloatingCutoutSpice type="lentilles" size="sm" rotate={-30} animate={false} />
      </div>

      <div id="home" className="relative w-full h-full flex flex-col justify-center items-center py-20 sm:py-28">
        
        {/* Center Watermark Leaf Monogram */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-15">
          <svg viewBox="0 0 200 200" className="w-96 h-96 fill-white">
            <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="4" fill="none" />
            <path d="M70 140 C65 115 75 80 105 60 C90 85 90 115 70 140 Z" />
            <path d="M130 140 C135 115 125 80 95 60 C110 85 110 115 130 140 Z" />
            <text x="100" y="115" textAnchor="middle" fontSize="36" fontWeight="bold" fill="white">
              BF
            </text>
          </svg>
        </div>

        {/* Center Content Matching Bhandari Agro Style */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          
          {/* Top Tagline */}
          <div className="text-amber-400 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 drop-shadow">
            {isEn ? "Direct Sourcing & Port Logistics • Dakar, Senegal" : "Sourcing Direct & Logistique Portuaire • Dakar, Sénégal"}
          </div>

          {/* Big Editorial Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-white drop-shadow-md text-balance">
            {isEn ? (
              <>...Commodities & Spices defining quality</>
            ) : (
              <>...Denrées & Épices définissant la qualité</>
            )}
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-lg sm:text-2xl font-semibold text-neutral-100 max-w-2xl drop-shadow">
            {isEn ? "Best Quality Agro Products Guaranteed" : "Produits Agroalimentaires de Qualité Supérieure Garantis"}
          </p>

          {/* Action Buttons: LEARN MORE in orange `#e87817` */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onLearnMore}
              className="px-8 py-3.5 text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-[#e87817] hover:bg-[#d6690d] active:scale-95 rounded-full transition-all shadow-lg shadow-orange-900/30 flex items-center gap-2 cursor-pointer"
            >
              <span>{isEn ? "LEARN MORE" : "EN SAVOIR PLUS"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onRequestQuote}
              className="px-8 py-3.5 text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-[#0e5831] hover:bg-[#13713f] border border-emerald-400/40 active:scale-95 rounded-full transition-all shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <span>{isEn ? "REQUEST QUOTE" : "DEVIS RAPIDE"}</span>
            </button>
          </div>

        </div>

        {/* Curved Bottom Wave Divider */}
        <div className="absolute -bottom-1 left-0 right-0 z-10 pointer-events-none">
          <svg
            viewBox="0 0 1440 90"
            className="w-full h-12 sm:h-16 lg:h-20 fill-white"
            preserveAspectRatio="none"
          >
            <path d="M0,45 C480,95 960,95 1440,45 L1440,90 L0,90 Z" />
          </svg>
        </div>
      </div>
    </ParallaxBackground>
  );
}
