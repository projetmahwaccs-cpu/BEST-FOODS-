import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS, ProductItem } from "../data/products";
import { ParallaxBackground } from "./ParallaxBackground";

interface ProductCardGridProps {
  currentLang: "en" | "fr";
  onSelectProduct: (product: ProductItem) => void;
  onRequestQuote: (product: ProductItem) => void;
}

export function ProductCardGrid({ currentLang, onSelectProduct }: ProductCardGridProps) {
  const isEn = currentLang === "en";
  const [activeTouchedId, setActiveTouchedId] = useState<string | null>(null);

  // Split products into Row 1 (6 items) and Row 2 (7 items)
  const row1Products = PRODUCTS.slice(0, 6);
  const row2Products = PRODUCTS.slice(6, 13);

  const renderCard = (product: ProductItem) => {
    const title = isEn ? product.nameEn : product.nameFr;
    const isTouched = activeTouchedId === product.id;

    return (
      <div
        key={product.id}
        onClick={() => onSelectProduct(product)}
        onTouchStart={() => setActiveTouchedId(product.id)}
        className="group relative cursor-pointer rounded-2xl overflow-hidden border border-neutral-300 hover:border-emerald-600 transition-all duration-300 shadow-sm hover:shadow-2xl aspect-square sm:aspect-4/3 bg-neutral-900 transform hover:-translate-y-1.5 select-none"
      >
        {/* 1. Pure Raw Photo (sans info au vue) */}
        <img
          src={product.image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-115 ${product.imagePosition}`}
          referrerPolicy="no-referrer"
        />

        {/* 2. Au toucher / au survol : ça change et révèle les informations */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex flex-col justify-end text-white transition-opacity duration-300 ${
            isTouched ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <div className="text-[11px] font-mono italic text-emerald-300">
            {product.botanicalName}
          </div>
          <h3 className="text-base sm:text-lg font-black text-white leading-tight">
            {title}
          </h3>
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/20">
            <span className="text-[11px] text-amber-300 font-semibold">{product.origin}</span>
            <span className="text-[10px] font-bold text-white bg-[#0e5831] px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <span>{isEn ? "View" : "Voir"}</span>
              <ArrowUpRight className="w-3 h-3 text-amber-300" />
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <ParallaxBackground
      imageSrc="/bg-parallax-products.png"
      fallbackSrc=""
      speed={0.2}
      overlayClassName="bg-[#f9faf7]/95"
      pattern="leaf"
      className="py-16 sm:py-24 border-y border-neutral-200"
    >
      <section id="products" className="relative overflow-hidden">
        
        {/* Decorative spic.png image on LEFT side of the section */}
        <div className="hidden lg:block absolute left-2 xl:left-6 top-1/2 -translate-y-1/2 w-28 sm:w-36 md:w-44 z-0 pointer-events-none select-none opacity-85 transition-transform hover:scale-105">
          <img
            src="/spic.png"
            alt="BEST FOODS Spices Decor"
            className="w-full h-auto object-contain drop-shadow-xl"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = "none";
            }}
          />
        </div>

        {/* Decorative spic.png image on RIGHT side of the section */}
        <div className="hidden lg:block absolute right-2 xl:right-6 top-1/2 -translate-y-1/2 w-28 sm:w-36 md:w-44 z-0 pointer-events-none select-none opacity-85 transition-transform hover:scale-105 scale-x-[-1]">
          <img
            src="/spic.png"
            alt="BEST FOODS Spices Decor"
            className="w-full h-auto object-contain drop-shadow-xl"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = "none";
            }}
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Title Matching Image 1: "Nos Produits" flanked by spic.png on each side */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 mb-12 sm:mb-16">
            
            {/* Small spic.png ornament on left */}
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <img
                src="/spic.png"
                alt="Spices ornament"
                className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-sm"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = "none";
                }}
              />
              <div className="w-8 sm:w-16 md:w-24 h-[3px] bg-[#d97706] rounded-full" />
            </div>

            <div className="text-center">
              <span className="text-xs font-black uppercase tracking-widest text-[#e87817] block mb-1">
                {isEn ? "13 RAW COMMODITIES" : "13 PRODUITS BRUTS"}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0e5831] font-heading tracking-tight whitespace-nowrap">
                {isEn ? "Our Products" : "Nos Produits"}
              </h2>
            </div>

            {/* Small spic.png ornament on right */}
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <div className="w-8 sm:w-16 md:w-24 h-[3px] bg-[#d97706] rounded-full" />
              <img
                src="/spic.png"
                alt="Spices ornament"
                className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-sm scale-x-[-1]"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = "none";
                }}
              />
            </div>
          </div>

          {/* Desktop Panorama View: Raw cards without info at rest, revealed on hover/touch */}
          <div className="space-y-6 sm:space-y-8">
            
            {/* Row 1: 6 Products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
              {row1Products.map((p) => renderCard(p))}
            </div>

            {/* Row 2: 7 Products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-5">
              {row2Products.map((p) => renderCard(p))}
            </div>

          </div>

          {/* Subtitle / Interaction note */}
          <div className="mt-10 text-center text-xs sm:text-sm text-neutral-600 font-medium">
            <span>
              {isEn
                ? "Touch or hover any commodity to view specifications, origin, packaging, and request an instant quotation."
                : "Touchez ou survolez une denrée pour afficher sa fiche technique (origine, conditionnement) et demander un devis."}
            </span>
          </div>

        </div>
      </section>
    </ParallaxBackground>
  );
}
