import { useState } from "react";
import { Image as ImageIcon, ZoomIn, Eye } from "lucide-react";
import heroImg from "../assets/images/hero_spices_commodities_1791684003019.jpg";
import portImg from "../assets/images/best_foods_logistics_1791684014865.jpg";
import spicesAssortmentImg from "../assets/images/product_spices_assortment_1791684025397.jpg";
import pulsesStaplesImg from "../assets/images/product_pulses_staples_1791684035504.jpg";
import { ParallaxBackground } from "./ParallaxBackground";

interface GallerySectionProps {
  currentLang: "en" | "fr";
}

export function GallerySection({ currentLang }: GallerySectionProps) {
  const isEn = currentLang === "en";
  const [activeTab, setActiveTab] = useState<string>("all");

  const galleryItems = [
    {
      titleEn: "Spices Selection: Black Pepper, Chillies, Cloves & Ginger",
      titleFr: "Sélection d'Épices : Poivre Noir, Piments, Girofle & Gingembre",
      category: "spices",
      img: spicesAssortmentImg,
      badgeEn: "Sun-Dried & Cleaned",
      badgeFr: "Séchage Solaire & Trié",
    },
    {
      titleEn: "Agro Staples: Red Lentils, Green Peas, Sugar & Raisins",
      titleFr: "Denrées de Base : Lentilles, Petits Pois, Sucre & Raisins",
      category: "pulses",
      img: pulsesStaplesImg,
      badgeEn: "Sortex Optical Clean",
      badgeFr: "Tri Optique Sortex",
    },
    {
      titleEn: "Maritime Logistics & Container Terminal at Dakar Port",
      titleFr: "Logistique Maritime & Terminal Conteneurs au Port de Dakar",
      category: "logistics",
      img: portImg,
      badgeEn: "Port Autonome de Dakar",
      badgeFr: "Port Autonome de Dakar",
    },
    {
      titleEn: "BEST FOODS Warehouse Stocking & Burlap Sacks",
      titleFr: "Entrepôt BEST FOODS & Conditionnement en Sacs de Jute",
      category: "warehouse",
      img: heroImg,
      badgeEn: "Hann Maristes Facility",
      badgeFr: "Site de Hann Maristes",
    },
  ];

  const filteredItems = activeTab === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeTab);

  return (
    <ParallaxBackground
      imageSrc="/bg-parallax-gallery.png"
      fallbackSrc=""
      speed={0.16}
      overlayClassName="bg-neutral-100/94"
      pattern="grid"
      className="py-16 sm:py-24 border-t border-neutral-200"
    >
      <section id="gallery" className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex justify-center items-center gap-1.5 mb-2">
              <div className="w-8 h-1 bg-[#0e5831] rounded-full" />
              <div className="w-4 h-1 bg-[#e87817] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e5831] font-heading tracking-tight">
              {isEn ? "Facility & Product Gallery" : "Galerie Produits & Installations"}
            </h2>
            <p className="mt-2 text-neutral-600 text-sm">
              {isEn
                ? "A glimpse into our processing quality, warehouse stocking at Hann Maristes, and port shipping operations in Dakar."
                : "Aperçu de nos produits, de nos installations de stockage à Hann Maristes et des opérations portuaires à Dakar."}
            </p>

            {/* Filter buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {[
                { id: "all", labelEn: "All Views", labelFr: "Tout voir" },
                { id: "spices", labelEn: "Spices", labelFr: "Épices" },
                { id: "pulses", labelEn: "Pulses & Staples", labelFr: "Légumineuses & Sucre" },
                { id: "logistics", labelEn: "Port Logistics", labelFr: "Logistique Portuaire" },
                { id: "warehouse", labelEn: "Warehousing", labelFr: "Entrepôt" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-[#0e5831] text-white shadow-xs"
                      : "bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200"
                  }`}
                >
                  {isEn ? tab.labelEn : tab.labelFr}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden border border-neutral-300 shadow-sm bg-neutral-900 aspect-16/10"
              >
                <img
                  src={item.img}
                  alt={isEn ? item.titleEn : item.titleFr}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 flex flex-col justify-end text-white">
                  <span className="inline-block self-start px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/90 text-neutral-950 mb-2">
                    {isEn ? item.badgeEn : item.badgeFr}
                  </span>
                  <h3 className="text-base sm:text-xl font-bold font-heading">
                    {isEn ? item.titleEn : item.titleFr}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </ParallaxBackground>
  );
}
