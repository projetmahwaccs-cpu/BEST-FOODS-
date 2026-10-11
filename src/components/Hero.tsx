import { ArrowRight, MessageCircle, ShieldCheck, Anchor, MapPin } from "lucide-react";
import heroImg from "../assets/images/hero_spices_commodities_1791684003019.jpg";

interface HeroProps {
  currentLang: "en" | "fr";
  onRequestQuote: () => void;
  onExploreProducts: () => void;
}

export function Hero({ currentLang, onRequestQuote, onExploreProducts }: HeroProps) {
  const isEn = currentLang === "en";

  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-12 lg:pt-14 lg:pb-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 2-Column Split: Text & Media */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Column 1: Editorial Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Quiet text kicker with typographic separator */}
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 tracking-wider uppercase mb-3">
              <span>{isEn ? "Global Commodities Exporter" : "Négoce & Exportation Agroalimentaire"}</span>
              <span aria-hidden="true">·</span>
              <span>Dakar, Sénégal</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.12] font-heading max-w-2xl text-balance">
              {isEn ? (
                <>
                  Premium Agricultural Commodities & Spices Sourced for International Trade
                </>
              ) : (
                <>
                  Négoce International de Produits Agroalimentaires & Épices de Premier Choix
                </>
              )}
            </h1>

            {/* Body Description */}
            <p className="mt-5 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl">
              {isEn ? (
                <>
                  <strong className="text-neutral-900 font-semibold">BEST FOODS</strong> supplies bulk black pepper, whole dried red chillies, garlic, nutmeg, refined cane sugar, pulses, raisins, tamarind, coffee beans, cloves, mature ginger, and bay leaves with prompt maritime delivery from Dakar.
                </>
              ) : (
                <>
                  <strong className="text-neutral-900 font-semibold">BEST FOODS</strong> fournit en gros poivre noir, piment rouge entier, ail, muscade, sucre raffiné, lentilles, petits pois, raisins secs, tamarin, café en grains, clous de girofle, gingembre mûr et feuilles de laurier depuis Dakar.
                </>
              )}
            </p>

            {/* Trust and location markers */}
            <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-neutral-500 font-medium">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Hann Maristes en Face Coris Bank, Dakar</span>
              </span>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5">
                <Anchor className="w-3.5 h-3.5 text-neutral-700 shrink-0" />
                <span>{isEn ? "FOB Port of Dakar / CIF Worldwide" : "FOB Port Autonome de Dakar / CIF Mondial"}</span>
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onRequestQuote}
                className="px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-amber-700 hover:bg-amber-800 active:scale-[0.99] rounded-lg transition-all shadow-sm flex items-center gap-2.5 whitespace-nowrap"
              >
                <span>{isEn ? "Request Instant Quote" : "Demander un Devis Immédiat"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/221776220000?text=Hello%20BEST%20FOODS,%20I%20would%20like%20to%20inquire%20about%20your%20agricultural%20commodities"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 text-sm font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp: +221 77 622 00 00</span>
              </a>
            </div>

            {/* Sub-note */}
            <div className="mt-4 text-xs text-neutral-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{isEn ? "Direct contact with Modou Sourang & Djily Sourang" : "Interlocuteurs directs : Modou Sourang & Djily Sourang"}</span>
            </div>

          </div>

          {/* Column 2: Marquee Photographic Visual */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="relative w-full h-[360px] sm:h-[440px] lg:h-full rounded-2xl overflow-hidden border border-neutral-200/80 shadow-md group">
              <img
                src={heroImg}
                alt="BEST FOODS Agricultural Commodities and Spices"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white">
                <div className="flex items-center justify-between text-xs font-semibold text-amber-300 mb-1">
                  <span>BEST FOODS WAREHOUSE & TRADING</span>
                  <span className="font-mono tabular-nums">DAKAR - SÉNÉGAL</span>
                </div>
                <p className="text-xs text-neutral-200 line-clamp-2">
                  {isEn
                    ? "Full container loads (FCL) of black pepper, chillies, cane sugar, lentils, and spices ready for shipment."
                    : "Conteneurs complets de poivre noir, piments, sucre de canne, lentilles et épices prêts à l'embarquement."}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width 4-Column KPI Strip below the hero split */}
        <div className="mt-14 pt-8 border-t border-neutral-200 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          <div className="flex flex-col">
            <span className="text-3xl font-extrabold text-neutral-900 font-heading tabular-nums">
              13+
            </span>
            <span className="text-sm font-semibold text-neutral-800 mt-1">
              {isEn ? "Core Commodities" : "Denrées & Épices"}
            </span>
            <span className="text-xs text-neutral-500 mt-0.5">
              {isEn ? "Spices, pulses, sugar, coffee" : "Épices, légumineuses, sucre, café"}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-3xl font-extrabold text-neutral-900 font-heading tabular-nums">
              FCL & LCL
            </span>
            <span className="text-sm font-semibold text-neutral-800 mt-1">
              {isEn ? "Flexible Volume" : "Volumes Sur-Mesure"}
            </span>
            <span className="text-xs text-neutral-500 mt-0.5">
              {isEn ? "20ft & 40ft containers, bulk" : "Conteneurs 20ft & 40ft ou sacs"}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-3xl font-extrabold text-neutral-900 font-heading tabular-nums">
              100%
            </span>
            <span className="text-sm font-semibold text-neutral-800 mt-1">
              {isEn ? "Phytosanitary Certified" : "Contrôlé & Certifié"}
            </span>
            <span className="text-xs text-neutral-500 mt-0.5">
              {isEn ? "SGS, lab tested & origin docs" : "Certificats d'origine et phytosanitaire"}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-3xl font-extrabold text-neutral-900 font-heading tabular-nums">
              PAD Dakar
            </span>
            <span className="text-sm font-semibold text-neutral-800 mt-1">
              {isEn ? "Port Autonome de Dakar" : "Port Autonome de Dakar"}
            </span>
            <span className="text-xs text-neutral-500 mt-0.5">
              {isEn ? "Strategic Atlantic hub" : "Plateforme maritime atlantique"}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
