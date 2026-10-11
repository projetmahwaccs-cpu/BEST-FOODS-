import { useState } from "react";
import { 
  ArrowLeft, 
  Search, 
  ArrowUpRight, 
  MessageCircle, 
  Layers, 
  LayoutGrid, 
  PackageCheck, 
  CheckCircle2,
  FileSpreadsheet
} from "lucide-react";
import { PRODUCTS, ProductItem } from "../data/products";
import { buildWhatsAppLink } from "../data/contacts";
import { ParallaxBackground } from "./ParallaxBackground";
import { FloatingCutoutSpice } from "./FloatingCutoutSpice";
import heroImg from "../assets/images/hero_spices_commodities_1791684003019.jpg";

interface ProductPageProps {
  currentLang: "en" | "fr";
  onSelectProduct: (product: ProductItem) => void;
  onRequestQuote: (product?: ProductItem) => void;
  onBackToHome: () => void;
}

export function ProductPage({
  currentLang,
  onSelectProduct,
  onRequestQuote,
  onBackToHome,
}: ProductPageProps) {
  const isEn = currentLang === "en";
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<"large" | "panorama">("large");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [touchedCardId, setTouchedCardId] = useState<string | null>(null);

  const categories = [
    { id: "all", labelEn: "All Commodities (13)", labelFr: "Toutes les Denrées (13)" },
    { id: "spices", labelEn: "Spices & Aromatics", labelFr: "Épices & Aromates" },
    { id: "pulses", labelEn: "Pulses & Legumes", labelFr: "Légumineuses & Grains" },
    { id: "staples", labelEn: "Staples & Sugars", labelFr: "Denrées de Base & Sucres" },
    { id: "beverages", labelEn: "Coffee & Cash Crops", labelFr: "Café & Denrées Tropicales" },
    { id: "fruits", labelEn: "Dried Fruits & Pulp", labelFr: "Fruits Secs & Pulpes" },
  ];

  const filtered = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    if (!matchesCategory) return false;

    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      p.nameEn.toLowerCase().includes(q) ||
      p.nameFr.toLowerCase().includes(q) ||
      p.botanicalName.toLowerCase().includes(q) ||
      p.origin.toLowerCase().includes(q) ||
      p.grade.toLowerCase().includes(q)
    );
  });

  // Split for panorama mode (row 1: 6, row 2: 7)
  const row1Products = PRODUCTS.slice(0, 6);
  const row2Products = PRODUCTS.slice(6, 13);

  const getWhatsAppLink = (product: ProductItem) => {
    const prodName = isEn ? product.nameEn : product.nameFr;
    const text = isEn
      ? `Hello BEST FOODS, I would like to request an export quotation for ${prodName} (Grade: ${product.grade}).`
      : `Bonjour BEST FOODS, je souhaite obtenir une cotation export pour le produit ${prodName} (Grade : ${product.grade}).`;
    return buildWhatsAppLink("+221776220000", text);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      
      {/* ========================================================
          1. HERO SECTION (EXACT SAME STYLE AS ABOUTUS.HTML)
          ======================================================== */}
      <ParallaxBackground
        imageSrc="/bg-parallax-product-hero.png"
        fallbackSrc={heroImg}
        speed={0.28}
        overlayClassName="bg-gradient-to-r from-[#0c5832]/88 via-black/55 to-[#0c5832]/88 mix-blend-multiply"
        className="text-white min-h-[420px] sm:min-h-[480px] flex items-center justify-center border-b-4 border-[#e87817]"
      >
        <div className="relative w-full h-full flex flex-col items-center justify-center py-16 sm:py-24">
          
          {/* Watermark leaf emblem in center */}
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-15">
            <svg viewBox="0 0 200 200" className="w-80 h-80 fill-white">
              <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="4" fill="none" />
              <path d="M70 140 C65 115 75 80 105 60 C90 85 90 115 70 140 Z" />
              <path d="M130 140 C135 115 125 80 95 60 C110 85 110 115 130 140 Z" />
              <text x="100" y="115" textAnchor="middle" fontSize="36" fontWeight="bold" fill="white">
                BF
              </text>
            </svg>
          </div>

          {/* Center Title */}
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-300 mb-3">
              <button
                type="button"
                onClick={onBackToHome}
                className="hover:underline flex items-center gap-1.5 text-white cursor-pointer bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{isEn ? "Home" : "Accueil"}</span>
              </button>
              <span className="text-white/40">/</span>
              <span className="text-amber-400 font-extrabold">{isEn ? "Products" : "Nos Produits"}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight text-white drop-shadow-md">
              {isEn ? "Export Commodities & Spices" : "Nos Produits & Denrées d'Export"}
            </h1>
            
            <p className="mt-3 text-base sm:text-xl text-emerald-100 font-semibold max-w-2xl mx-auto drop-shadow">
              {isEn
                ? "Wholesale Export Catalog: 13 Flagship Commodities Sourced & Shipped from Dakar"
                : "Catalogue Export des 13 Denrées Phares Approvisionnées & Expédiées depuis Dakar"}
            </p>

            {/* Quick Metrics */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs font-bold">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-xs rounded-full border border-white/20 text-white flex items-center gap-2">
                <PackageCheck className="w-3.5 h-3.5 text-amber-400" />
                {isEn ? "13 Quality Assured Commodities" : "13 Denrées d'Excellence Phares"}
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-xs rounded-full border border-white/20 text-white flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                {isEn ? "Port of Dakar Maritime Hub" : "Hub Maritime Port de Dakar (PAD)"}
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-xs rounded-full border border-white/20 text-white flex items-center gap-2">
                <FileSpreadsheet className="w-3.5 h-3.5 text-amber-400" />
                {isEn ? "25kg / 50kg Bags & Bulk Stuffing" : "Sacs 25kg/50kg & Empotage Vrac"}
              </span>
            </div>
          </div>

          {/* Curved Bottom Wave Divider */}
          <div className="absolute -bottom-1 left-0 right-0 z-10 pointer-events-none">
            <svg
              viewBox="0 0 1440 70"
              className="w-full h-12 sm:h-16 fill-[#f9faf7]"
              preserveAspectRatio="none"
            >
              <path d="M0,35 C480,75 960,75 1440,35 L1440,70 L0,70 Z" />
            </svg>
          </div>

        </div>
      </ParallaxBackground>

      {/* Quick Search & Category Filter Bar */}
      <div className="bg-[#f9faf7] border-b border-neutral-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="w-full lg:w-96 relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={isEn ? "Search black pepper, chilli, cloves, sugar..." : "Rechercher poivre, piment, girofle, sucre..."}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700 font-medium text-neutral-800 placeholder-neutral-400 shadow-xs"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-[#0e5831] text-white shadow-xs"
                      : "bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-200/80"
                  }`}
                >
                  {isEn ? cat.labelEn : cat.labelFr}
                </button>
              ))}
            </div>

            {/* Quick Quote CTA Buttons & View Switcher */}
            <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
              <button
                type="button"
                onClick={() => onRequestQuote()}
                className="py-2 px-3.5 text-xs font-bold text-white bg-[#e87817] hover:bg-[#d6690d] rounded-xl transition-all shadow-xs flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <FileSpreadsheet className="w-3.5 h-3.5" />
                <span>{isEn ? "Request RFQ" : "Demande Devis"}</span>
              </button>

              <div className="flex items-center gap-1 bg-white border border-neutral-200 p-1 rounded-xl shrink-0 shadow-xs">
                <button
                  type="button"
                  onClick={() => setViewMode("large")}
                  title={isEn ? "Large Cards View" : "Grandes Cartes"}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    viewMode === "large"
                      ? "bg-[#0e5831] text-white shadow-xs"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>{isEn ? "Large Cards" : "Grandes Cartes"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("panorama")}
                  title={isEn ? "2-Row Panorama View" : "Vue Panoramique 2 Lignes"}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    viewMode === "panorama"
                      ? "bg-[#0e5831] text-white shadow-xs"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{isEn ? "Panorama 2 Rows" : "Vue Panoramique"}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* ========================================================
          2. RAW CARDS SANS INFO AU VUE, AU TOUCHER ÇA CHANGE
          ======================================================== */}
      <ParallaxBackground
        imageSrc="/bg-parallax-products.png"
        fallbackSrc=""
        speed={0.18}
        overlayClassName="bg-[#f9faf7]/95"
        pattern="leaf"
        className="py-16 sm:py-24 border-b border-neutral-200"
      >
        {/* Floating Cutout Spices scattered on Product Page */}
        <div className="absolute left-2 sm:left-6 top-16 z-10">
          <FloatingCutoutSpice type="piment" size="md" rotate={-15} animate={true} />
        </div>
        <div className="absolute right-2 sm:right-6 top-28 z-10">
          <FloatingCutoutSpice type="poivre" size="sm" rotate={20} animate={true} />
        </div>
        <div className="hidden lg:block absolute left-4 bottom-24 z-10">
          <FloatingCutoutSpice type="lentilles" size="md" rotate={-30} animate={false} />
        </div>
        <div className="hidden lg:block absolute right-8 bottom-32 z-10">
          <FloatingCutoutSpice type="anis" size="md" rotate={12} animate={true} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <img
                src="/spic.png"
                alt="Spices ornament"
                className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-sm"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = "none";
                }}
              />
              <div className="w-12 sm:w-20 h-[3px] bg-[#d97706] rounded-full" />
            </div>

            <div className="text-center">
              <span className="text-xs font-black uppercase tracking-widest text-[#e87817] block mb-1">
                {isEn ? "RAW COMMODITIES & NATURAL SPICES" : "PRODUITS BRUTS & ÉPICES NATURELLES"}
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0e5831] font-heading tracking-tight">
                {isEn ? "Raw Commodity Cards" : "Nos Produits Bruts"}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-neutral-500 max-w-xl mx-auto">
                {isEn
                  ? "Raw visual cards without clutter. Touch or hover any card to reveal details and open the dossier."
                  : "Cartes brutes sans texte au premier regard. Touchez ou survolez une carte pour afficher ses informations."}
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <div className="w-12 sm:w-20 h-[3px] bg-[#d97706] rounded-full" />
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

          {/* VIEW MODE 1: GRANDES RAW CARDS (SANS INFO AU VUE, AU TOUCHER ÇA CHANGE) */}
          {viewMode === "large" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {filtered.map((product) => {
                const title = isEn ? product.nameEn : product.nameFr;
                const isTouched = touchedCardId === product.id;

                return (
                  <div
                    key={product.id}
                    onClick={() => onSelectProduct(product)}
                    onTouchStart={() => setTouchedCardId(product.id)}
                    className="group relative cursor-pointer bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-300 hover:border-emerald-600 transition-all duration-500 shadow-md hover:shadow-2xl aspect-4/3 sm:aspect-16/11 transform hover:-translate-y-2 select-none"
                  >
                    {/* 1. PURE RAW IMAGE (SANS INFO AU VUE) */}
                    <img
                      src={product.image}
                      alt={title}
                      className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-115 ${product.imagePosition}`}
                      referrerPolicy="no-referrer"
                    />

                    {/* Subtle aesthetic vignette at rest */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />

                    {/* 2. AU TOUCHER / AU SURVOL : ÇA CHANGE ET AFFICHE LES INFOS */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 backdrop-blur-xs p-6 sm:p-8 flex flex-col justify-end text-white transition-all duration-300 ${
                        isTouched ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {/* Top quick badges visible on touch */}
                      <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                        <span className="bg-[#e87817] text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow">
                          {product.tag}
                        </span>
                        <span className="bg-white/20 backdrop-blur-md text-amber-300 text-[11px] font-bold px-3 py-1 rounded-full border border-white/20">
                          {product.origin}
                        </span>
                      </div>

                      {/* Content revealed on touch */}
                      <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="text-xs font-mono italic text-emerald-300 mb-1">
                          {product.botanicalName}
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-black text-white font-heading tracking-tight mb-2">
                          {title}
                        </h3>

                        <p className="text-xs text-neutral-200 line-clamp-2 mb-4 leading-relaxed font-normal">
                          {isEn ? product.shortDescEn : product.shortDescFr}
                        </p>

                        <div className="flex items-center justify-between pt-3 border-t border-white/15">
                          <span className="text-xs font-semibold text-amber-300">
                            {product.grade}
                          </span>
                          
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#0e5831] px-4 py-2 rounded-xl group-hover:bg-[#13713f] transition-colors shadow">
                            <span>{isEn ? "View details" : "Voir les détails"}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-amber-300" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* VIEW MODE 2: PANORAMA RAW CARDS (SANS INFO AU VUE, AU TOUCHER ÇA CHANGE) */
            <div className="space-y-8">
              {/* Row 1: 6 Raw Products */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                  {isEn ? "Row 1 (Flagship Spices & Pulses)" : "Rangée 1 (Épices & Légumineuses Phares)"}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
                  {row1Products.map((p) => {
                    const title = isEn ? p.nameEn : p.nameFr;
                    const isTouched = touchedCardId === p.id;
                    return (
                      <div
                        key={p.id}
                        onClick={() => onSelectProduct(p)}
                        onTouchStart={() => setTouchedCardId(p.id)}
                        className="group relative cursor-pointer rounded-2xl overflow-hidden border border-neutral-300 hover:border-emerald-600 transition-all duration-300 shadow-sm hover:shadow-xl aspect-square bg-neutral-900 transform hover:-translate-y-1.5 select-none"
                      >
                        {/* Pure Raw Image */}
                        <img
                          src={p.image}
                          alt={title}
                          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-115 ${p.imagePosition}`}
                          referrerPolicy="no-referrer"
                        />

                        {/* Au toucher / survol : ça change */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 flex flex-col justify-end text-white transition-opacity duration-300 ${
                          isTouched ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}>
                          <h3 className="text-sm font-extrabold text-white leading-tight">
                            {title}
                          </h3>
                          <span className="text-[10px] text-amber-300 font-mono mt-0.5">
                            {p.origin}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Row 2: 7 Raw Products */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                  {isEn ? "Row 2 (Tropical Crops & Aromatics)" : "Rangée 2 (Denrées Tropicales & Aromates)"}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-5">
                  {row2Products.map((p) => {
                    const title = isEn ? p.nameEn : p.nameFr;
                    const isTouched = touchedCardId === p.id;
                    return (
                      <div
                        key={p.id}
                        onClick={() => onSelectProduct(p)}
                        onTouchStart={() => setTouchedCardId(p.id)}
                        className="group relative cursor-pointer rounded-2xl overflow-hidden border border-neutral-300 hover:border-emerald-600 transition-all duration-300 shadow-sm hover:shadow-xl aspect-square bg-neutral-900 transform hover:-translate-y-1.5 select-none"
                      >
                        {/* Pure Raw Image */}
                        <img
                          src={p.image}
                          alt={title}
                          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-115 ${p.imagePosition}`}
                          referrerPolicy="no-referrer"
                        />

                        {/* Au toucher / survol : ça change */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 flex flex-col justify-end text-white transition-opacity duration-300 ${
                          isTouched ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}>
                          <h3 className="text-sm font-extrabold text-white leading-tight">
                            {title}
                          </h3>
                          <span className="text-[10px] text-amber-300 font-mono mt-0.5">
                            {p.origin}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

        </div>
      </ParallaxBackground>

    </div>
  );
}
