import { useState } from "react";
import { ThumbsUp, Star, SlidersHorizontal, Play, Pause, ShieldCheck, CheckCircle2 } from "lucide-react";
import logisticsImg from "../assets/images/best_foods_logistics_1791684014865.jpg";
import { ParallaxBackground } from "./ParallaxBackground";

interface ExpertiseSectionProps {
  currentLang: "en" | "fr";
}

export function ExpertiseSection({ currentLang }: ExpertiseSectionProps) {
  const isEn = currentLang === "en";
  const [isPlaying, setIsPlaying] = useState(false);

  const pillars = [
    {
      titleEn: "100% Quality & Lab Testing",
      titleFr: "100% Contrôle Qualité & Laboratoire",
      descEn: "Advanced laboratory testing to accurately verify purity, moisture content, grain size, and natural aroma.",
      descFr: "Analyses rigoureuses en laboratoire pour certifier la pureté, le taux d'humidité, le calibre et les qualités organoleptiques.",
      icon: ThumbsUp,
    },
    {
      titleEn: "Quality Assurance",
      titleFr: "Assurance Qualité & Traçabilité",
      descEn: "Standard operating procedures resulting in consistently higher grade commodities with full origin documentation.",
      descFr: "Protocoles stricts garantissant une conformité irréprochable et une traçabilité totale du producteur au port.",
      icon: Star,
    },
    {
      titleEn: "Sorting Excellence",
      titleFr: "Excellence du Tri & Calibrage",
      descEn: "Optical sorters and gravity tables for precise color sorting, size grading, and foreign material removal.",
      descFr: "Trieurs optiques et tables densimétriques pour un tri par couleur, élimination des impuretés et calibre parfait.",
      icon: SlidersHorizontal,
    },
  ];

  return (
    <ParallaxBackground
      imageSrc="/bg-parallax-expertise.png"
      fallbackSrc=""
      speed={0.18}
      overlayClassName="bg-white/94"
      pattern="dots"
      className="py-16 sm:py-24 border-b border-neutral-200"
    >
      <section id="quality" className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Title in Signature Warm Orange */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e87817] font-heading tracking-tight">
              {isEn ? "Expertise & Quality Standards" : "Expertise & Standards de Qualité"}
            </h2>
            <p className="mt-2 text-neutral-600 text-sm sm:text-base">
              {isEn
                ? "From plantation harvest to maritime vessel loading in Dakar, every metric is audited with precision."
                : "De la récolte aux plantations jusqu'au chargement maritime à Dakar, chaque paramètre est rigoureusement audité."}
            </p>
          </div>

          {/* 3 Circular Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-center mb-20">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full border-2 border-[#e87817] p-2 flex items-center justify-center mb-6 shadow-sm hover:scale-105 transition-transform bg-orange-50/50">
                    <div className="w-full h-full rounded-full border border-dashed border-[#e87817] flex items-center justify-center bg-white">
                      <Icon className="w-8 h-8 text-[#e87817]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 mb-2 font-heading">
                    {isEn ? pillar.titleEn : pillar.titleFr}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 max-w-xs leading-relaxed">
                    {isEn ? pillar.descEn : pillar.descFr}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0e5831]">
                {isEn ? "Direct Port Logistics" : "Logistique Portuaire Directe"}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-neutral-900 font-heading">
                {isEn ? "Watch: Sourcing, Palletizing & Port Loading" : "Vidéo : Sourcing, Palettisation & Embarquement"}
              </h3>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-16/9 bg-neutral-950 border-4 border-white">
              <img
                src={logisticsImg}
                alt="BEST FOODS Logistics and Port autome de Dakar Container Loading"
                className="w-full h-full object-cover filter brightness-[0.85]"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 flex flex-col items-center justify-center p-6 text-center">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-20 h-20 rounded-full bg-[#e87817] hover:bg-[#d6690d] text-white flex items-center justify-center shadow-xl transition-transform hover:scale-110 active:scale-95 cursor-pointer mb-4"
                  aria-label="Play demo overview"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 fill-white" />
                  ) : (
                    <Play className="w-8 h-8 fill-white ml-1" />
                  )}
                </button>

                <h4 className="text-white text-lg sm:text-xl font-bold font-heading drop-shadow">
                  {isEn ? "BEST FOODS Dakar Platform Operations" : "Opérations de la Plateforme BEST FOODS à Dakar"}
                </h4>
                <p className="text-neutral-300 text-xs sm:text-sm max-w-md mt-1 drop-shadow">
                  {isEn
                    ? "Continuous handling of black pepper, chilli, sugar, pulses, and coffee with fast customs clearance."
                    : "Traitement continu du poivre, piments, sucre, légumineuses et café avec dédouanement accéléré."}
                </p>

                <div className="mt-4 inline-block px-4 py-2 rounded-lg bg-black/75 backdrop-blur-xs text-white text-xs sm:text-sm font-medium border border-white/10">
                  {isEn
                    ? "« Stocked, inspected, permanently available for professionals · Quality is never compromised at BEST FOODS »"
                    : "« Stocké, contrôlé, disponible en permanence pour les professionnels · Chez BEST FOODS, la qualité ne se négocie pas »"}
                </div>
              </div>
            </div>

            {/* Quick logistical facts below video */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-xs">
              <div className="p-3 bg-white rounded-xl border border-neutral-200 shadow-2xs">
                <div className="font-bold text-[#0e5831]">Port of Dakar</div>
                <div className="text-neutral-500 text-[11px] mt-0.5">Maritime Terminal</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-neutral-200 shadow-2xs">
                <div className="font-bold text-[#0e5831]">Hann Maristes</div>
                <div className="text-neutral-500 text-[11px] mt-0.5">En Face Coris Bank</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-neutral-200 shadow-2xs">
                <div className="font-bold text-[#0e5831]">FCL Containers</div>
                <div className="text-neutral-500 text-[11px] mt-0.5">20ft / 40ft HC</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-neutral-200 shadow-2xs">
                <div className="font-bold text-[#0e5831]">Hub Logistique</div>
                <div className="text-neutral-500 text-[11px] mt-0.5">Sénégal & Export</div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </ParallaxBackground>
  );
}
