import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, ArrowUpRight, CheckCircle2, PackageCheck } from "lucide-react";
import { PRODUCTS, ProductItem } from "../data/products";
import spicesImg from "../assets/images/product_spices_assortment_1791684025397.jpg";
import pulsesImg from "../assets/images/product_pulses_staples_1791684035504.jpg";

interface ProductsSectionProps {
  currentLang: "en" | "fr";
  onSelectProduct: (product: ProductItem) => void;
  onRequestQuoteForProduct: (product: ProductItem) => void;
}

export function ProductsSection({
  currentLang,
  onSelectProduct,
  onRequestQuoteForProduct,
}: ProductsSectionProps) {
  const isEn = currentLang === "en";
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", labelEn: "All Commodities (13)", labelFr: "Toutes les Denrées (13)" },
    { id: "spices", labelEn: "Spices & Seasonings", labelFr: "Épices & Condiments" },
    { id: "pulses", labelEn: "Pulses & Legumes", labelFr: "Légumineuses & Grains" },
    { id: "staples", labelEn: "Agro Staples & Sugar", labelFr: "Sucre & Denrées de Base" },
    { id: "fruits", labelEn: "Dry Fruits & Tamarind", labelFr: "Fruits Secs & Tamarin" },
    { id: "beverages", labelEn: "Coffee & Beverages", labelFr: "Café & Boissons" },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        item.nameEn.toLowerCase().includes(query) ||
        item.nameFr.toLowerCase().includes(query) ||
        item.botanicalName.toLowerCase().includes(query) ||
        item.shortDescEn.toLowerCase().includes(query) ||
        item.shortDescFr.toLowerCase().includes(query) ||
        item.origin.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="products" className="py-16 sm:py-24 bg-neutral-50/60 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-wider mb-2">
              <span>{isEn ? "Product Catalog" : "Catalogue des Produits"}</span>
              <span aria-hidden="true">·</span>
              <span>BEST FOODS Wholesale</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 font-heading tracking-tight">
              {isEn ? "13 Core Agricultural Commodities" : "13 Produits Agroalimentaires Phares"}
            </h2>
            <p className="mt-2 text-neutral-600 text-sm sm:text-base max-w-2xl">
              {isEn
                ? "Sourced from premier plantations and international producers, packaged under strict ISO/Codex guidelines and dispatched through Port Autonome de Dakar."
                : "Sélectionnés auprès des meilleures origines mondiales, conditionnés selon les normes internationales et expédiés via le Port Autonome de Dakar."}
            </p>
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72 relative">
            <div className="relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder={isEn ? "Search spices, sugar, coffee..." : "Rechercher poivre, sucre, café..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700 transition-all placeholder:text-neutral-400 text-neutral-900"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-700 font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Visual Category Showcase Banners */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-xl overflow-hidden border border-neutral-200 shadow-xs h-48 group">
            <img
              src={spicesImg}
              alt="Assortment of Spices: Black Pepper, Chillies, Cloves, Ginger, Nutmeg"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 flex flex-col justify-end text-white">
              <div className="text-xs uppercase font-bold tracking-wider text-amber-300">
                {isEn ? "Aromatic Spices Division" : "Division Épices & Aromates"}
              </div>
              <h3 className="text-lg font-bold font-heading">
                {isEn ? "Black Pepper, Chilli, Cloves, Nutmeg, Ginger & Bay Leaves" : "Poivre Noir, Piment, Girofle, Muscade, Gingembre & Laurier"}
              </h3>
              <p className="text-xs text-neutral-300 mt-0.5">
                {isEn ? "High essential oil content · Direct farm-to-port supply" : "Forte teneur en huiles essentielles · Sourcing direct"}
              </p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-neutral-200 shadow-xs h-48 group">
            <img
              src={pulsesImg}
              alt="Assortment of Pulses & Staples: Lentils, Green Peas, Cane Sugar, Raisins, Tamarind"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 flex flex-col justify-end text-white">
              <div className="text-xs uppercase font-bold tracking-wider text-amber-300">
                {isEn ? "Pulses, Sugar & Dry Fruits" : "Légumineuses, Sucre & Fruits Secs"}
              </div>
              <h3 className="text-lg font-bold font-heading">
                {isEn ? "Cane Sugar ICUMSA 45, Lentils, Green Peas, Raisins & Tamarind" : "Sucre de Canne ICUMSA 45, Lentilles, Petits Pois, Raisins & Tamarin"}
              </h3>
              <p className="text-xs text-neutral-300 mt-0.5">
                {isEn ? "Machine sorted · Codex Alimentarius grade · Food service packaging" : "Tri optique · Normes alimentaires Codex · Vrac et sacs"}
              </p>
            </div>
          </div>
        </div>

        {/* Category Tabs (Functional Segmented Control) */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-neutral-900 text-white shadow-xs"
                    : "bg-white text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 border border-neutral-200/80"
                }`}
              >
                {isEn ? cat.labelEn : cat.labelFr}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="mt-12 p-12 text-center bg-white rounded-xl border border-neutral-200">
            <PackageCheck className="w-10 h-10 text-neutral-400 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-neutral-800">
              {isEn ? "No commodities found matching your search" : "Aucun produit ne correspond à votre recherche"}
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              {isEn ? "Try adjusting your search terms or filter." : "Essayez de modifier votre mot-clé ou catégorie."}
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-amber-800 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors"
            >
              {isEn ? "Reset Filters" : "Réinitialiser les filtres"}
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const name = isEn ? product.nameEn : product.nameFr;
              const shortDesc = isEn ? product.shortDescEn : product.shortDescFr;
              const catLabel = isEn ? product.categoryLabelEn : product.categoryLabelFr;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-xl border border-neutral-200 hover:border-amber-700/40 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-6">
                    {/* Quiet metadata line without pills */}
                    <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                      <span className="font-medium text-amber-800">{catLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono">{product.botanicalName}</span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-xl font-bold text-neutral-900 font-heading tracking-tight group-hover:text-amber-800 transition-colors">
                      {name}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-2.5 text-xs text-neutral-600 leading-relaxed line-clamp-3">
                      {shortDesc}
                    </p>

                    {/* Technical Specifications Table */}
                    <div className="mt-5 pt-4 border-t border-neutral-100 space-y-2 text-xs">
                      <div className="flex items-center justify-between text-neutral-600">
                        <span className="text-neutral-500">{isEn ? "Origin:" : "Origine :"}</span>
                        <span className="font-medium text-neutral-900 text-right">{product.origin}</span>
                      </div>
                      <div className="flex items-center justify-between text-neutral-600">
                        <span className="text-neutral-500">{isEn ? "Grade / Spec:" : "Grade / Spéc. :"}</span>
                        <span className="font-medium text-neutral-900 text-right truncate max-w-[180px]">{product.grade}</span>
                      </div>
                      <div className="flex items-center justify-between text-neutral-600">
                        <span className="text-neutral-500">{isEn ? "Moisture:" : "Humidité :"}</span>
                        <span className="font-mono text-neutral-900">{product.moisture}</span>
                      </div>
                      <div className="flex items-center justify-between text-neutral-600">
                        <span className="text-neutral-500">{isEn ? "Packaging:" : "Emballage :"}</span>
                        <span className="font-medium text-neutral-900 text-right truncate max-w-[170px]">{product.packaging}</span>
                      </div>
                      <div className="flex items-center justify-between text-neutral-600">
                        <span className="text-neutral-500">{isEn ? "Min. Order (MOQ):" : "Commande Min :"}</span>
                        <span className="font-semibold text-amber-800 font-mono">{product.moq}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="px-6 py-4 bg-neutral-50/80 border-t border-neutral-100 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectProduct(product)}
                      className="text-xs font-semibold text-neutral-700 hover:text-neutral-900 transition-colors flex items-center gap-1 hover:underline"
                    >
                      <span>{isEn ? "Technical Specs" : "Fiche Technique"}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onRequestQuoteForProduct(product)}
                      className="px-3.5 py-1.5 text-xs font-bold text-white bg-neutral-900 hover:bg-amber-800 rounded-md transition-colors shadow-2xs whitespace-nowrap"
                    >
                      {isEn ? "Get Quote" : "Demander Prix"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
