import { ArrowRight, MapPin, Building2, CheckCircle2 } from "lucide-react";
import { COMPANY_DETAILS } from "../data/contacts";
import { ParallaxBackground } from "./ParallaxBackground";
import { FloatingCutoutSpice } from "./FloatingCutoutSpice";

interface WelcomeSectionProps {
  currentLang: "en" | "fr";
  onLearnMore: () => void;
}

export function WelcomeSection({ currentLang, onLearnMore }: WelcomeSectionProps) {
  const isEn = currentLang === "en";

  return (
    <ParallaxBackground
      imageSrc="/bg-parallax-welcome.png"
      fallbackSrc=""
      speed={0.16}
      overlayClassName="bg-white/94"
      pattern="leaf"
      className="py-16 sm:py-24 border-b border-neutral-200"
    >
      <section id="about" className="relative overflow-hidden">
        
        {/* Floating Spices on Welcome Section */}
        <div className="absolute left-2 xl:left-8 top-12 z-10">
          <FloatingCutoutSpice type="piment" size="md" rotate={-10} animate={true} />
        </div>
        <div className="absolute right-2 xl:right-8 top-12 z-10">
          <FloatingCutoutSpice type="poivre" size="md" rotate={15} animate={true} />
        </div>
        <div className="hidden md:block absolute left-12 bottom-8 z-10">
          <FloatingCutoutSpice type="lentilles" size="sm" rotate={20} animate={false} />
        </div>
        <div className="hidden md:block absolute right-12 bottom-8 z-10">
          <FloatingCutoutSpice type="anis" size="sm" rotate={-18} animate={true} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Center Green Leaf Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 shadow-sm">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-emerald-800">
                <path d="M17 8C12 8 8 12 8 17C13 17 17 13 17 8Z" />
                <path d="M8 17L12 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Title: Welcome to BEST FOODS, */}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0e5831] font-heading tracking-tight">
            {isEn ? "Welcome to BEST FOODS," : "Bienvenue chez BEST FOODS,"}
          </h2>

          {/* Subtitle in Warm Orange */}
          <p className="mt-1.5 text-base sm:text-xl font-bold text-[#e87817]">
            {isEn
              ? "A Home Fresh Agro Commodities & Spices."
              : "L'Excellence des Denrées Agroalimentaires & Épices à Dakar."}
          </p>

          {/* Descriptive Body Paragraph */}
          <p className="mt-5 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            {isEn ? (
              <>
                <strong>BEST FOODS</strong> is widely acknowledged as one of the trusted and reliable
                suppliers, exporters, and wholesale distributors of superior quality agricultural commodities.
                Our comprehensive portfolio comprises whole spices (black pepper, whole red chilli, garlic,
                nutmeg, cloves, mature ginger, bay leaves), refined sugar, high-grade pulses (lentils, green peas),
                raisins, dried tamarind, and selected origin coffee.
              </>
            ) : (
              <>
                <strong>BEST FOODS</strong> est reconnue comme un partenaire de confiance incontournable pour
                l'approvisionnement, l'importation et l'exportation de denrées agroalimentaires de premier choix.
                Notre portefeuille comprend les épices brutes (poivre noir, piment rouge entier, ail, noix de muscade,
                clous de girofle, gingembre mûr, feuilles de laurier), le sucre, les légumineuses (lentilles, pois verts),
                les raisins secs, le tamarin et le café d'origine supérieure.
              </>
            )}
          </p>

          {/* Key Operational Highlights */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-100 flex items-start gap-3 shadow-xs">
              <Building2 className="w-5 h-5 text-[#0e5831] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-[#0e5831] uppercase">
                  {isEn ? "Modern Warehousing" : "Entrepôt Moderne"}
                </div>
                <div className="text-[11px] text-neutral-600 mt-0.5">
                  Hann Maristes, face Coris Bank
                </div>
              </div>
            </div>

            <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-100 flex items-start gap-3 shadow-xs">
              <MapPin className="w-5 h-5 text-[#e87817] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-amber-900 uppercase">
                  {isEn ? "Port Autonome de Dakar" : "Port Autonome de Dakar"}
                </div>
                <div className="text-[11px] text-neutral-600 mt-0.5">
                  {isEn ? "Fast sea freight stuffing" : "Empotage conteneurs & fret maritime"}
                </div>
              </div>
            </div>

            <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-100 flex items-start gap-3 shadow-xs">
              <CheckCircle2 className="w-5 h-5 text-[#0e5831] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-[#0e5831] uppercase">
                  {isEn ? "Direct Leadership" : "Direction Dédiée"}
                </div>
                <div className="text-[11px] text-neutral-600 mt-0.5">
                  Modou Sourang & Djily Sourang
                </div>
              </div>
            </div>
          </div>

          {/* Orange "LEARN MORE" Button */}
          <div className="mt-8">
            <button
              type="button"
              onClick={onLearnMore}
              className="inline-flex items-center gap-2 px-8 py-3 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-[#e87817] hover:bg-[#d46a0f] rounded-full transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <span>{isEn ? "LEARN MORE" : "EN SAVOIR PLUS"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>
    </ParallaxBackground>
  );
}
