import { useState } from "react";
import { ArrowUpRight, MessageSquare, Sparkles, Filter } from "lucide-react";
import { PRODUCTS, ProductItem } from "../data/products";
import { FloatingCutoutSpice } from "./FloatingCutoutSpice";

interface HotProductsProps {
  currentLang: "en" | "fr";
  onSelectProduct: (product: ProductItem) => void;
  onRequestQuote: (product: ProductItem) => void;
}

export function HotProductsSection({ currentLang, onSelectProduct, onRequestQuote }: HotProductsProps) {
  const isEn = currentLang === "en";
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filterCategories = [
    { id: "all", labelEn: "All Products (13)", labelFr: "Tous les Produits (13)" },
    { id: "spices", labelEn: "Spices & Roots", labelFr: "Épices & Racines" },
    { id: "pulses", labelEn: "Pulses & Grains", labelFr: "Légumineuses" },
    { id: "staples", labelEn: "Sugar & Commodities", labelFr: "Sucre & Denrées" },
    { id: "beverages", labelEn: "Coffee & Drinks", labelFr: "Café & Boissons" },
    { id: "fruits", labelEn: "Dry Fruits & Tamarind", labelFr: "Fruits Secs & Tamarin" },
  ];

  const displayedProducts = selectedFilter === "all"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedFilter);

  return (
    <section id="products" className="py-16 sm:py-20 bg-neutral-50/70 border-y border-neutral-200 relative overflow-hidden">
      {/* Floating spices scattered around hot products */}
      <div className="absolute top-10 left-6 z-10">
        <FloatingCutoutSpice type="piment" size="sm" rotate={-18} animate={true} />
      </div>
      <div className="absolute top-14 right-8 z-10">
        <FloatingCutoutSpice type="poivre" size="sm" rotate={12} animate={true} />
      </div>
      <div className="hidden lg:block absolute bottom-10 left-12 z-10">
        <FloatingCutoutSpice type="lentilles" size="sm" rotate={40} animate={false} />
      </div>
      <div className="hidden lg:block absolute bottom-12 right-12 z-10">
        <FloatingCutoutSpice type="anis" size="sm" rotate={-10} animate={true} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Green & Orange Accent Bar */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          {/* Dual Color Top Bar */}
          <div className="flex justify-center items-center gap-1.5 mb-3">
            <div className="w-10 h-1 bg-[#0e5831] rounded-full" />
            <div className="w-6 h-1 bg-[#e87817] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e5831] font-heading tracking-tight">
            {isEn ? "Our Hot Products" : "Nos Produits Phares"}
          </h2>

          <p className="mt-3 text-neutral-600 text-sm sm:text-base">
            {isEn
              ? "Wholesale export catalog of our 13 flagship agricultural commodities, packed to international food safety specifications."
              : "Catalogue d'exportation en gros de nos 13 denrées agroalimentaires phares, conditionnées selon les normes internationales."}
          </p>

          {/* Category Filter Pills (Functional Buttons) */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {filterCategories.map((cat) => {
              const active = selectedFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedFilter(cat.id)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
                    active
                      ? "bg-[#0e5831] text-white shadow-xs"
                      : "bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200/80 hover:bg-neutral-100"
                  }`}
                >
                  {isEn ? cat.labelEn : cat.labelFr}
                </button>
              );
            })}
          </div>
        </div>

        {/* 13 Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedProducts.map((product) => {
            const name = isEn ? product.nameEn : product.nameFr;
            const shortDesc = isEn ? product.shortDescEn : product.shortDescFr;

            return (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-neutral-200 hover:border-emerald-700/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Visual Header / Color Header */}
                <div className="relative h-44 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-950 overflow-hidden flex items-center justify-center p-4">
                  {/* Subtle background glow */}
                  <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent opacity-50" />
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 text-amber-300 backdrop-blur-xs border border-white/10">
                    {isEn ? product.categoryLabelEn : product.categoryLabelFr}
                  </span>

                  {/* Botanical Monogram Icon Center */}
                  <div className="relative z-10 text-center transform group-hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 flex items-center justify-center mx-auto mb-2 text-white shadow-md">
                      <span className="text-xl font-black font-heading tracking-wider">
                        {product.nameEn.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div className="text-xs text-white/90 font-medium italic">
                      {product.botanicalName}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 font-heading group-hover:text-[#0e5831] transition-colors">
                      {name}
                    </h3>
                    <p className="mt-1.5 text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {shortDesc}
                    </p>
                  </div>

                  {/* Specifications Snippet */}
                  <div className="mt-4 pt-3 border-t border-neutral-100 space-y-1.5 text-[11px] text-neutral-600">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">{isEn ? "Origin:" : "Origine :"}</span>
                      <span className="font-semibold text-neutral-800 truncate max-w-[140px]">{product.origin}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">{isEn ? "Moisture:" : "Humidité :"}</span>
                      <span className="font-mono font-medium text-neutral-800">{product.moisture}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">{isEn ? "Packaging:" : "Conditionnement :"}</span>
                      <span className="font-medium text-neutral-800 truncate max-w-[130px]">{product.packaging}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-5 py-3 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectProduct(product)}
                    className="text-xs font-bold text-neutral-700 hover:text-[#0e5831] transition-colors flex items-center gap-1"
                  >
                    <span>{isEn ? "Specs" : "Détails"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onRequestQuote(product)}
                    className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0e5831] hover:bg-[#13713f] rounded-lg transition-colors shadow-2xs"
                  >
                    {isEn ? "Quote" : "Devis"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
