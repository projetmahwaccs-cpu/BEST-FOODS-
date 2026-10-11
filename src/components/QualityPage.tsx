import { 
  ShieldCheck, 
  Award, 
  SlidersHorizontal, 
  ThumbsUp, 
  Star, 
  CheckCircle2, 
  ArrowLeft,
  Sparkles,
  FileSpreadsheet,
  MessageCircle,
  FileCheck2,
  Microscope,
  Boxes,
  Ship,
  Check,
  BadgeCheck
} from "lucide-react";
import heroImg from "../assets/images/hero_spices_commodities_1791684003019.jpg";
import logisticsImg from "../assets/images/best_foods_logistics_1791684014865.jpg";
import { buildWhatsAppLink } from "../data/contacts";
import { ParallaxBackground } from "./ParallaxBackground";
import { FloatingCutoutSpice } from "./FloatingCutoutSpice";

interface QualityPageProps {
  currentLang: "en" | "fr";
  onBackToHome: () => void;
  onRequestQuote: () => void;
}

export function QualityPage({ currentLang, onBackToHome, onRequestQuote }: QualityPageProps) {
  const isEn = currentLang === "en";

  const pillars = [
    {
      titleEn: "100% Quality & Lab Testing",
      titleFr: "100% Contrôle Qualité & Laboratoire",
      descEn: "Advanced laboratory testing to verify purity, moisture content, grain size, and natural aroma.",
      descFr: "Analyses rigoureuses en laboratoire pour certifier la pureté, le taux d'humidité, le calibre et les qualités organoleptiques.",
      icon: ThumbsUp,
    },
    {
      titleEn: "Quality Assurance & Traceability",
      titleFr: "Assurance Qualité & Traçabilité",
      descEn: "Standard operating procedures resulting in consistently higher grade commodities with full origin documentation.",
      descFr: "Protocoles stricts garantissant une conformité irréprochable et une traçabilité totale du producteur au port.",
      icon: Star,
    },
    {
      titleEn: "Sorting Excellence & Grading",
      titleFr: "Excellence du Tri & Calibrage",
      descEn: "Optical sorters and gravity tables for precise color sorting, size grading, and foreign material removal.",
      descFr: "Trieurs optiques et tables densimétriques pour un tri par couleur, élimination des impuretés et calibre parfait.",
      icon: SlidersHorizontal,
    },
  ];

  const workflowSteps = [
    {
      num: "01",
      titleEn: "Plantation Harvest & Reception",
      titleFr: "Récolte & Réception en Entrepôt",
      descEn: "Rigorous intake controls at Hann Maristes. Every incoming lot undergoes humidity and visual grain check before unloading.",
      descFr: "Contrôle d'entrée rigoureux aux entrepôts de Hann Maristes. Chaque lot fait l'objet d'un test d'humidité et d'inspection visuelle immédiate.",
      icon: Microscope,
    },
    {
      num: "02",
      titleEn: "Optical Sorting & Sifting",
      titleFr: "Triage Optique & Calibrage",
      descEn: "State-of-the-art gravity separation, destoners, and optical color sorting to remove defective seeds and guarantee 99%+ purity.",
      descFr: "Séparateurs densimétriques, épierreurs et trieurs optiques éliminant les grains défectueux pour garantir une pureté supérieure à 99%.",
      icon: SlidersHorizontal,
    },
    {
      num: "03",
      titleEn: "Export Packaging & Fumigation",
      titleFr: "Conditionnement & Fumigation",
      descEn: "Multi-ply food-grade PP or jute bags (25kg/50kg) with inner liners. Certified fumigation under agricultural authority supervision.",
      descFr: "Ensachage alimentaire haute résistance (25kg/50kg) avec doublure étanche. Fumigation certifiée sous contrôle phytosanitaire.",
      icon: Boxes,
    },
    {
      num: "04",
      titleEn: "Port of Dakar Stuffing & Inspection",
      titleFr: "Empotage & Contrôle PAD",
      descEn: "Careful container stuffing at Port Autonome de Dakar with desiccant dry-bags. SGS or Bureau Veritas independent survey on buyer demand.",
      descFr: "Empotage minutieux des conteneurs au Port de Dakar avec sachets déshydratants. Inspection SGS ou Bureau Veritas sur demande.",
      icon: Ship,
    },
  ];

  const certifications = [
    {
      nameEn: "Phytosanitary Certificate",
      nameFr: "Certificat Phytosanitaire Officiel",
      detailEn: "Issued by the Directorate of Plant Protection (DPV) / Ministry of Agriculture.",
      detailFr: "Délivré par la Direction de la Protection des Végétaux (DPV) / Ministère de l'Agriculture.",
    },
    {
      nameEn: "Certificate of Origin",
      nameFr: "Certificat d'Origine",
      detailEn: "Chamber of Commerce and Industry of Dakar (CCIAD).",
      detailFr: "Chambre de Commerce, d'Industrie et d'Agriculture de Dakar (CCIAD).",
    },
    {
      nameEn: "Fumigation & Pest Free Certificate",
      nameFr: "Certificat de Fumigation & Traitement",
      detailEn: "Certified gas fumigation guaranteeing pest-free ocean transit.",
      detailFr: "Fumigation certifiée garantissant l'absence de parasites durant la traversée maritime.",
    },
    {
      nameEn: "Independent Inspection (SGS / Veritas)",
      nameFr: "Inspection Indépendante (SGS / Bureau Veritas)",
      detailEn: "Third-party quality, weight and stuffing verification available upon request.",
      detailFr: "Vérification tierce partie de qualité, poids et empotage disponible sur demande de l'acheteur.",
    },
  ];

  return (
    <div className="bg-neutral-100/60 min-h-screen flex flex-col">
      
      {/* ========================================================
          1. HERO SECTION (EXACT SAME STYLE AS ABOUTUS.HTML)
          ======================================================== */}
      <ParallaxBackground
        imageSrc="/bg-parallax-quality-hero.png"
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
              <span className="text-amber-400 font-extrabold">{isEn ? "Quality Standards" : "Qualité & Normes"}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight text-white drop-shadow-md">
              {isEn ? "Quality Assurance & Standards" : "Qualité & Standards d'Excellence"}
            </h1>
            
            <p className="mt-3 text-base sm:text-xl text-emerald-100 font-semibold max-w-2xl mx-auto drop-shadow">
              {isEn
                ? "Zero-Defect Quality Control, Lab Testing & Certified Agro-Export Standards"
                : "Contrôle Qualité Strict, Analyses en Laboratoire & Certifications Internationales"}
            </p>

            {/* Quick Metrics */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs font-bold">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-xs rounded-full border border-white/20 text-white flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                {isEn ? "100% Laboratory Quality Control" : "100% Contrôle Laboratoire & Pureté"}
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-xs rounded-full border border-white/20 text-white flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                {isEn ? "HACCP & Phytosanitary Certified" : "Certifications Phytosanitaires & HACCP"}
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-xs rounded-full border border-white/20 text-white flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                {isEn ? "Port of Dakar Maritime Survey" : "Inspection Maritime Port de Dakar (PAD)"}
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

      {/* ========================================================
          2. MAIN CONTENT (WITH PARALLAX BACKGROUND .PNG SUPPORT)
          ======================================================== */}
      <ParallaxBackground
        imageSrc="/bg-parallax-quality.png"
        fallbackSrc=""
        speed={0.15}
        overlayClassName="bg-neutral-100/80"
        pattern="leaf"
        className="py-12 sm:py-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pb-12 space-y-12">
          
          {/* ========================================================
              EXACT BEST FOODS OFFICIAL QUALITY LOGO SECTION
              Image file: /logo_bestfood_bf.png
              ======================================================== */}
          <div className="relative bg-gradient-to-br from-amber-50/70 via-white to-emerald-50/40 rounded-3xl shadow-2xl border-2 border-emerald-700/30 p-6 sm:p-10 lg:p-12 overflow-hidden">
            
            {/* Background decorative subtle circles */}
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

            {/* Floating Cutout Spices scattered around the logo section */}
            <div className="absolute top-4 right-6 sm:right-12 z-10">
              <FloatingCutoutSpice type="piment" size="sm" rotate={18} animate={true} />
            </div>
            <div className="absolute -bottom-4 left-4 sm:left-10 z-10">
              <FloatingCutoutSpice type="poivre" size="sm" rotate={-12} animate={true} />
            </div>
            <div className="hidden sm:block absolute top-1/2 right-2 -translate-y-1/2 z-10">
              <FloatingCutoutSpice type="lentilles" size="xs" rotate={45} animate={false} />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* LEFT / CENTER: Official Logo Container */}
              <div className="lg:col-span-5 flex flex-col items-center text-center">
                <div className="relative group p-4 sm:p-6 rounded-3xl bg-white shadow-xl border border-emerald-100 flex items-center justify-center">
                  
                  {/* Golden Laurel Aura */}
                  <div className="absolute inset-2 rounded-2xl border-2 border-dashed border-amber-400/40 pointer-events-none" />

                  {/* The Official Best Foods Logo Image requested by user */}
                  <img
                    src="/logo_bestfood_bf.png"
                    alt="BEST FOODS - Logo Officiel Qualité"
                    className="w-48 h-48 sm:w-60 sm:h-60 object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback if user is currently uploading or file not yet placed
                      (e.currentTarget as HTMLElement).style.display = "none";
                    }}
                  />

                  {/* Trust Stamp Overlay */}
                  <div className="absolute -bottom-3 -right-3 bg-[#e87817] text-white px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase shadow-md flex items-center gap-1 border border-white">
                    <BadgeCheck className="w-3.5 h-3.5 text-amber-300" />
                    <span>CERTIFIÉ BF</span>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                    {isEn ? "Registered Trademark • Dakar" : "Marque Déposée • Dakar, Sénégal"}
                  </span>
                  <p className="text-[11px] text-neutral-500 mt-1.5 font-mono">
                    {isEn ? "Target file: /logo_bestfood_bf.png" : "Fichier logo : /logo_bestfood_bf.png"}
                  </p>
                </div>
              </div>

              {/* RIGHT: Quality Details & Official Guarantees */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-[#0e5831] text-xs font-black uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#e87817]" />
                  <span>{isEn ? "Official Best Foods Guarantee" : "Label Officiel BEST FOODS"}</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-[#0e5831] font-heading tracking-tight leading-tight">
                  {isEn
                    ? "LA QUALITÉ AU BON PRIX — Certified Agro-Commodity Standard"
                    : "LA QUALITÉ AU BON PRIX — Notre Engagement Qualité Supérieure"}
                </h2>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {isEn ? (
                    <>
                      Under our trademark seal <strong className="text-neutral-900 font-bold">BEST FOODS</strong>, 
                      every batch of whole spices, pulses, refined sugar, and grains undergoes a multi-layer laboratory inspection. 
                      We guarantee strict adherence to West African and international export benchmarks.
                    </>
                  ) : (
                    <>
                      Sous notre label officiel <strong className="text-neutral-900 font-bold">BEST FOODS</strong>, 
                      chaque arrivage d'épices brutes, de légumes secs, de sucre et de céréales bénéficie d'une 
                      sélection rigoureuse et d'un contrôle de pureté sans compromis conforme aux exigences internationales.
                    </>
                  )}
                </p>

                {/* Checklist of guarantees */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-neutral-200/90 shadow-2xs">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs font-bold text-neutral-800">
                      {isEn ? "100% Pure & Defect-Free" : "100% Naturel & Pureté Maximale"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-neutral-200/90 shadow-2xs">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs font-bold text-neutral-800">
                      {isEn ? "Zero Foreign Material (>99.2% purity)" : "Zéro Impureté (Pureté >99,2%)"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-neutral-200/90 shadow-2xs">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs font-bold text-neutral-800">
                      {isEn ? "Standard Moisture & Calibration" : "Humidité Maîtrisée & Calibrage"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-neutral-200/90 shadow-2xs">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs font-bold text-neutral-800">
                      {isEn ? "Certified Phytosanitary Inspection" : "Agrément Phytosanitaire DPV"}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={onRequestQuote}
                    className="px-5 py-2.5 rounded-xl bg-[#e87817] hover:bg-[#d6690d] text-white text-xs font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <FileSpreadsheet className="w-4 h-4" />
                    <span>{isEn ? "Request Specifications Sheet" : "Fiche Technique & Devis"}</span>
                  </button>

                  <a
                    href={buildWhatsAppLink("+221776220000", isEn ? "Hello BEST FOODS, I would like to inquire about your certified quality standards." : "Bonjour BEST FOODS, je souhaite échanger sur votre label et normes de qualité.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp Direct</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

          {/* SECTION 1: The 3 Core Pillars */}
          <div className="relative bg-white rounded-2xl shadow-xl border border-neutral-200/90 p-6 sm:p-10 lg:p-12">
            
            {/* Floating spice on pillars card */}
            <div className="absolute -top-5 right-10 z-10">
              <FloatingCutoutSpice type="poivre" size="sm" rotate={-10} animate={true} />
            </div>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold text-[#e87817] uppercase tracking-widest block mb-2">
                {isEn ? "Excellence in Every Shipment" : "L'Excellence à Chaque Expédition"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e5831] font-heading">
                {isEn ? "Our 3 Pillars of Quality Control" : "Nos 3 Piliers de Maîtrise Qualité"}
              </h2>
              <p className="mt-2 text-neutral-600 text-xs sm:text-sm">
                {isEn 
                  ? "From plantation harvest to maritime vessel loading in Dakar, every metric is audited with precision." 
                  : "De la récolte aux plantations jusqu'au chargement maritime à Dakar, chaque paramètre est rigoureusement audité."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div 
                    key={idx}
                    className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 hover:border-emerald-500/50 hover:shadow-md transition-all flex flex-col items-center text-center group"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#0e5831] text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                      <Icon className="w-7 h-7 text-amber-400" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2 font-heading">
                      {isEn ? pillar.titleEn : pillar.titleFr}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {isEn ? pillar.descEn : pillar.descFr}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 2: 4-Step Quality Protocol */}
          <div className="relative bg-white rounded-2xl shadow-xl border border-neutral-200/90 p-6 sm:p-10 lg:p-12">
            
            {/* Floating cutout lentils across the workflow */}
            <div className="absolute -top-4 left-1/3 z-10">
              <FloatingCutoutSpice type="lentilles" size="sm" rotate={25} animate={true} />
            </div>

            <div className="flex items-center gap-3 bg-[#e87817] text-white py-3.5 px-5 rounded-xl shadow-sm mb-8">
              <div className="p-1.5 rounded-lg bg-white/20">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wide">
                {isEn ? "Full Quality Workflow: From Plantation to Vessel" : "Protocole Qualité Intégral : De la Plantation au Navire"}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="relative p-5 rounded-xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-black text-amber-500 font-mono">
                          {step.num}
                        </span>
                        <div className="w-10 h-10 rounded-lg bg-emerald-100 text-[#0e5831] flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-neutral-900 mb-2">
                        {isEn ? step.titleEn : step.titleFr}
                      </h4>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {isEn ? step.descEn : step.descFr}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 3: Certifications & Export Documentation */}
          <div className="relative bg-white rounded-2xl shadow-xl border border-neutral-200/90 p-6 sm:p-10 lg:p-12">
            
            {/* Floating spice on certifications */}
            <div className="absolute -bottom-5 right-12 z-10">
              <FloatingCutoutSpice type="anis" size="sm" rotate={-15} animate={true} />
            </div>

            <div className="flex items-center gap-3 bg-[#0e5831] text-white py-3.5 px-5 rounded-xl shadow-sm mb-8">
              <div className="p-1.5 rounded-lg bg-white/20">
                <FileCheck2 className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wide">
                {isEn ? "Certifications & Standard Export Documents" : "Certifications & Documents Export Fournis"}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-neutral-200/90 bg-emerald-50/40 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">
                      {isEn ? cert.nameEn : cert.nameFr}
                    </h4>
                    <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                      {isEn ? cert.detailEn : cert.detailFr}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Band inside Card */}
            <div className="mt-10 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#0e5831]">
                  {isEn ? "Need a specific inspection or COA?" : "Besoin d'une inspection ou d'un certificat d'analyse spécifique ?"}
                </h4>
                <p className="text-xs text-neutral-500">
                  {isEn
                    ? "Our export team coordinates with SGS, Bureau Veritas or your nominated surveyor in Dakar."
                    : "Notre équipe export coordonne toute inspection indépendante au Port Autonome de Dakar."}
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onRequestQuote}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#e87817] hover:bg-[#d6690d] text-white text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>{isEn ? "Request RFQ with Specs" : "Demander Devis avec Spécifications"}</span>
                </button>
                <a
                  href={buildWhatsAppLink("+221776220000", isEn ? "Hello BEST FOODS, I have a quality and specifications inquiry." : "Bonjour BEST FOODS, je souhaite échanger sur vos normes de qualité et spécifications.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </ParallaxBackground>

    </div>
  );
}
