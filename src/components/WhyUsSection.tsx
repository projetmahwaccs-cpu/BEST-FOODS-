import { ParallaxBackground } from "./ParallaxBackground";
import { FloatingCutoutSpice } from "./FloatingCutoutSpice";

interface WhyUsSectionProps {
  currentLang: "en" | "fr";
}

export function WhyUsSection({ currentLang }: WhyUsSectionProps) {
  const isEn = currentLang === "en";

  const reasons = [
    {
      titleEn: "Team of experienced and diligent professionals",
      titleFr: "Équipe de professionnels expérimentés et diligents",
      descEn: "Led by Modou Sourang & Djily Sourang with deep market knowledge in West Africa & international commodities.",
      descFr: "Dirigée par Modou Sourang & Djily Sourang, avec une expertise reconnue au Sénégal et à l'international.",
    },
    {
      titleEn: "Superior and customized Packaging",
      titleFr: "Conditionnement supérieur et sur-mesure",
      descEn: "25kg & 50kg multiwall PP bags, jute sacks, cartons, and bulk maritime container stuffing.",
      descFr: "Sacs polypropylène 25kg/50kg, sacs de jute, cartons et empotage direct en conteneurs maritimes.",
    },
    {
      titleEn: "Competitive Pricing & Direct Sourcing",
      titleFr: "Tarification compétitive & Sourcing direct",
      descEn: "Direct agreements with primary growers and refineries eliminate middlemen for maximum margin.",
      descFr: "Accords directs avec les coopératives et raffineries sans intermédiaires inutiles.",
    },
    {
      titleEn: "Product and Quality understanding",
      titleFr: "Maîtrise pointue des produits et de la qualité",
      descEn: "In-depth understanding of crop seasons, ASTA color values, moisture levels, and grade standards.",
      descFr: "Connaissance approfondie des cycles de récolte, des taux d'humidité, indices ASTA et calibres.",
    },
    {
      titleEn: "Timely Delivery via Port Autonome de Dakar",
      titleFr: "Livraisons ponctuelles via le Port de Dakar",
      descEn: "Fast maritime customs clearance and dedicated fleet for seamless regional and international shipping.",
      descFr: "Dédouanement rapide et flotte dédiée pour un acheminement fluide par voie maritime et terrestre.",
    },
    {
      titleEn: "One stop for all 13 core commodities",
      titleFr: "Guichet unique pour les 13 denrées phares",
      descEn: "Black pepper, chilli, garlic, nutmeg, sugar, lentils, peas, raisins, tamarind, coffee, cloves, ginger, bay leaves.",
      descFr: "Poivre noir, piment, ail, muscade, sucre, lentilles, petits pois, raisins, tamarin, café, girofle, gingembre, laurier.",
    },
    {
      titleEn: "Technically upgraded facility & warehouse",
      titleFr: "Installations & entrepôts aux normes techniques",
      descEn: "Hygienic warehousing in Hann Maristes with pest control, ventilation, and pallet racking.",
      descFr: "Entrepôts modernes à Hann Maristes avec contrôle sanitaire, ventilation et stockage sur palettes.",
    },
    {
      titleEn: "Best Customer Service & Instant WhatsApp",
      titleFr: "Service client d'excellence & WhatsApp instantané",
      descEn: "Direct access to management via +221 77 622 00 00 / +221 77 699 00 00 / +221 77 336 00 00.",
      descFr: "Ligne directe avec la direction au +221 77 622 00 00 / +221 77 699 00 00 / +221 77 336 00 00.",
    },
  ];

  return (
    <ParallaxBackground
      imageSrc="/bg-parallax-whyus.png"
      fallbackSrc=""
      speed={0.16}
      overlayClassName="bg-[#fcfdfa]/95"
      pattern="leaf"
      className="py-16 sm:py-24 border-t border-neutral-200"
    >
      <section className="relative overflow-hidden">
        {/* Floating cutout spices across Why Us section */}
        <div className="absolute top-4 left-6 z-10">
          <FloatingCutoutSpice type="piment" size="sm" rotate={16} animate={true} />
        </div>
        <div className="absolute top-1/2 right-4 z-10">
          <FloatingCutoutSpice type="poivre" size="sm" rotate={-22} animate={true} />
        </div>
        <div className="hidden sm:block absolute bottom-8 left-10 z-10">
          <FloatingCutoutSpice type="lentilles" size="sm" rotate={30} animate={false} />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Title Matching Screenshot 9 */}
          <div className="text-center mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-[#e87817] block mb-1">
              {isEn ? "THE BEST FOODS ADVANTAGE" : "NOS POINTS FORTS"}
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0e5831] font-heading tracking-tight">
              WHY US?
            </h2>
            <div className="mt-2 text-sm text-neutral-600 font-medium">
              {isEn ? "Why international partners rely on BEST FOODS" : "Pourquoi les négociants et industriels choisissent BEST FOODS"}
            </div>
          </div>

          {/* 2-Column or 3-Column Grid of Reasons with Green Leaf Icon */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-10">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-3.5 group bg-white/70 backdrop-blur-2xs p-4 rounded-xl border border-neutral-200/60 shadow-2xs hover:shadow-md transition-all">
                {/* Green leaf bullet icon */}
                <div className="shrink-0 mt-1 text-[#0e5831]">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#0e5831] group-hover:scale-110 transition-transform">
                    <path d="M17 8C12 8 8 12 8 17C13 17 17 13 17 8Z" />
                    <path d="M8 17L12 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-neutral-900 group-hover:text-[#0e5831] transition-colors">
                    {isEn ? reason.titleEn : reason.titleFr}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                    {isEn ? reason.descEn : reason.descFr}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </ParallaxBackground>
  );
}
