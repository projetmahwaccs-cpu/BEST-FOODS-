import { 
  Building2, 
  Cpu, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  CheckCircle2, 
  ArrowLeft,
  ShieldCheck,
  Award,
  Sparkles
} from "lucide-react";
import aboutFacility from "../assets/images/about_facility_processing_1791685887510.jpg";
import aboutWarehouse from "../assets/images/about_warehouse_pallets_1791685897144.jpg";
import aboutOffice from "../assets/images/about_corporate_office_1791685907063.jpg";
import aboutTeam from "../assets/images/about_team_facility_1791685917288.jpg";
import heroImg from "../assets/images/hero_spices_commodities_1791684003019.jpg";
import { COMPANY_DETAILS } from "../data/contacts";
import { ParallaxBackground } from "./ParallaxBackground";
import { FloatingCutoutSpice } from "./FloatingCutoutSpice";

interface AboutUsPageProps {
  currentLang: "en" | "fr";
  onBackToHome: () => void;
  onRequestQuote: () => void;
}

export function AboutUsPage({ currentLang, onBackToHome, onRequestQuote }: AboutUsPageProps) {
  const isEn = currentLang === "en";

  return (
    <div className="bg-neutral-100/60 min-h-screen flex flex-col">
      
      {/* ========================================================
          1. HERO SECTION (WITH PARALLAX BACKGROUND .PNG SUPPORT)
          ======================================================== */}
      <ParallaxBackground
        imageSrc="/bg-parallax-about-hero.png"
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
              <span className="text-amber-400 font-extrabold">{isEn ? "About Us" : "À propos de nous"}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight text-white drop-shadow-md">
              {isEn ? "About BEST FOODS" : "À Propos de BEST FOODS"}
            </h1>
            
            <p className="mt-3 text-base sm:text-xl text-emerald-100 font-semibold max-w-2xl mx-auto drop-shadow">
              {isEn
                ? "Premier Agro Commodities & Spices Exporter in Dakar, Senegal"
                : "Leader du Négoce Agroalimentaire & Épices à Dakar, Sénégal"}
            </p>

            {/* Quick Metrics */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs font-bold">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-xs rounded-full border border-white/20 text-white flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                {isEn ? "Direction: Modou Sourang & Djily Sourang" : "Direction : Modou Sourang & Djily Sourang"}
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-xs rounded-full border border-white/20 text-white flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Hann Maristes en Face Coris Bank, Dakar
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
        imageSrc="/bg-parallax-about.png"
        fallbackSrc=""
        speed={0.15}
        overlayClassName="bg-neutral-100/80"
        pattern="leaf"
        className="py-12 sm:py-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pb-12">
          
          {/* Floating Spices on About Us page */}
          <div className="absolute top-2 -left-4 sm:left-2 z-10">
            <FloatingCutoutSpice type="piment" size="md" rotate={20} animate={true} />
          </div>
          <div className="absolute top-1/3 -right-4 sm:right-2 z-10">
            <FloatingCutoutSpice type="poivre" size="sm" rotate={-15} animate={true} />
          </div>
          <div className="absolute bottom-20 -left-2 sm:left-4 z-10">
            <FloatingCutoutSpice type="lentilles" size="sm" rotate={35} animate={false} />
          </div>
          <div className="absolute bottom-8 right-6 z-10">
            <FloatingCutoutSpice type="anis" size="sm" rotate={-8} animate={true} />
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-neutral-200/90 p-6 sm:p-10 lg:p-12 space-y-12 relative overflow-hidden">
            
            {/* Cutout spice peeking across company profile text */}
            <div className="hidden md:block absolute top-8 right-8 z-10">
              <FloatingCutoutSpice type="anis" size="sm" rotate={12} animate={false} />
            </div>

            {/* SECTION 1: Company */}
            <div className="space-y-6">
              <div className="bg-[#e87817] text-white py-3.5 px-5 rounded-xl flex items-center gap-3 shadow-sm">
                <div className="p-1.5 rounded-lg bg-white/20">
                  <Building2 className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-black font-heading tracking-wide uppercase">
                  {isEn ? "Company Profile & Vision" : "Notre Entreprise & Vision"}
                </h2>
              </div>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                {isEn ? (
                  <>
                    The company has been flourishing since its inception. The honourable leadership,{" "}
                    <strong className="text-neutral-900 font-bold">Mr. Modou SOURANG</strong> &{" "}
                    <strong className="text-neutral-900 font-bold">Mr. Djily SOURANG</strong>, has always
                    guided the company and led to the path of success. Under their guidance, we have carved
                    a niche as one of the most reliable importers and exporters of high quality agricultural
                    commodities, spices, refined sugar, pulses, and coffee in Senegal, West Africa, and
                    worldwide.
                  </>
                ) : (
                  <>
                    L'entreprise connaît un développement remarquable depuis sa création. La direction
                    visionnaire, incarnée par{" "}
                    <strong className="text-neutral-900 font-bold">M. Modou SOURANG</strong> &{" "}
                    <strong className="text-neutral-900 font-bold">M. Djily SOURANG</strong>, guide
                    l'entreprise vers l'excellence continue. Sous leur impulsion,{" "}
                    <strong className="text-[#0e5831]">BEST FOODS</strong> s'est imposée comme un acteur
                    incontournable de l'import-export de denrées agroalimentaires, d'épices, de sucre raffiné,
                    de légumineuses et de café au Sénégal, en Afrique de l'Ouest et à l'international.
                  </>
                )}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm aspect-4/3 group">
                  <img
                    src={aboutFacility}
                    alt="BEST FOODS Modern Processing Line"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm aspect-4/3 group">
                  <img
                    src={aboutWarehouse}
                    alt="BEST FOODS Export Palletized Warehousing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* SECTION 2: Infrastructure */}
            <div className="space-y-6 pt-6 border-t border-neutral-200">
              <div className="bg-[#e87817] text-white py-3.5 px-5 rounded-xl flex items-center gap-3 shadow-sm">
                <div className="p-1.5 rounded-lg bg-white/20">
                  <Cpu className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-black font-heading tracking-wide uppercase">
                  {isEn ? "Infrastructure & Storage Logistics" : "Infrastructures & Stockage"}
                </h2>
              </div>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                {isEn ? (
                  <>
                    Our state-of-the-art infrastructure is equipped with the most technologically advanced tools
                    and machineries that have enabled us to deliver commodities and spices that are of high freshness.
                    We have a very well organized fully automated cleaning, drying, and packing line along with advanced
                    optical sorting technology. We have modern warehousing facilities situated in{" "}
                    <strong className="text-neutral-900">Hann Maristes en Face Coris Bank</strong>, having high capacity
                    that assures the prompt delivery of agricultural commodities, spices, refined cane sugar, and grains
                    with direct dispatch to <strong className="text-neutral-900">Port Autonome de Dakar (PAD)</strong>.
                  </>
                ) : (
                  <>
                    Nos infrastructures de pointe sont dotées des technologies et équipements les plus modernes,
                    garantissant une fraîcheur et une pureté optimales pour chaque lot de marchandise. Nous disposons
                    d'une chaîne automatisée de tri optique, dépoussiérage et ensachage répondant aux normes sanitaires
                    internationales. Nos entrepôts stratégiquement situés à{" "}
                    <strong className="text-neutral-900">Hann Maristes en Face Coris Bank</strong> offrent une vaste
                    capacité de stockage sous température et hygrométrie contrôlées, garantissant une réactivité
                    immédiate pour les expéditions maritimes via le{" "}
                    <strong className="text-neutral-900">Port Autonome de Dakar (PAD)</strong>.
                  </>
                )}
              </p>

              <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm aspect-16/9 group">
                <img
                  src={aboutOffice}
                  alt="BEST FOODS Corporate Trading Office in Dakar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* SECTION 3: Our Team */}
            <div className="space-y-6 pt-6 border-t border-neutral-200">
              <div className="bg-[#e87817] text-white py-3.5 px-5 rounded-xl flex items-center gap-3 shadow-sm">
                <div className="p-1.5 rounded-lg bg-white/20">
                  <Users className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-black font-heading tracking-wide uppercase">
                  {isEn ? "Our Team & Technical Staff" : "Notre Équipe"}
                </h2>
              </div>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                {isEn ? (
                  <>
                    We have a well coordinated and qualified team that works for the success of the company.
                    The diligent work of the team is highly appreciated not only in Senegal and across West Africa
                    but also in foreign countries. The team includes quality control executives, R&D specialists,
                    shipping coordinators, and dedicated workers that strive to provide maximum satisfaction to
                    our clients worldwide.
                  </>
                ) : (
                  <>
                    Nous nous appuyons sur une équipe hautement qualifiée et soudée, animée par la passion de
                    l'excellence. Le dévouement de nos collaborateurs est reconnu et apprécié tant au Sénégal et dans
                    l'espace CEDEAO qu'auprès de nos partenaires en Europe, en Asie et au Moyen-Orient. Notre équipe
                    comprend des ingénieurs qualité, des contrôleurs agréés, des négociants en matières premières et
                    des techniciens logistiques veillant à chaque étape à la satisfaction totale de nos acheteurs.
                  </>
                )}
              </p>

              <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm aspect-16/9 group">
                <img
                  src={aboutTeam}
                  alt="BEST FOODS Technical and Quality Team in Facility"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Corporate Profile Table */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-300 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr className="bg-neutral-50/80">
                      <td className="py-4 px-5 font-bold text-neutral-700 w-1/3">
                        {isEn ? "Name of Leadership" : "Direction Générale"}
                      </td>
                      <td className="py-4 px-5 font-black text-neutral-900 text-sm">
                        Mr. Modou SOURANG & Mr. Djily SOURANG
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-5 font-bold text-neutral-700">
                        {isEn ? "Headquarters & Warehouse" : "Siège & Entrepôt"}
                      </td>
                      <td className="py-4 px-5 font-semibold text-neutral-800">
                        Hann Maristes en Face Coris Bank, DAKAR - SÉNÉGAL
                      </td>
                    </tr>
                    <tr className="bg-neutral-50/80">
                      <td className="py-4 px-5 font-bold text-neutral-700">
                        {isEn ? "Nature of Business" : "Nature des Activités"}
                      </td>
                      <td className="py-4 px-5 font-semibold text-neutral-800">
                        {isEn
                          ? "Importer, Processor and Exporter of Agro Commodities & Spices"
                          : "Importateur, Transformateur et Exportateur de Produits Agroalimentaires & Épices"}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-5 font-bold text-neutral-700">
                        {isEn ? "Core Commodities (13)" : "Produits Phares (13)"}
                      </td>
                      <td className="py-4 px-5 font-medium text-neutral-800">
                        Poivre Noir, Piment Rouge, Ail, Muscade, Sucre, Lentilles, Pois Verts, Raisins, Tamarin, Café, Clous de Girofle, Gingembre Mûr, Feuilles de Laurier
                      </td>
                    </tr>
                    <tr className="bg-neutral-50/80">
                      <td className="py-4 px-5 font-bold text-neutral-700">
                        {isEn ? "Port Gateway" : "Passerelle Portuaire"}
                      </td>
                      <td className="py-4 px-5 font-semibold text-neutral-800">
                        Port Autonome de Dakar (PAD) — Fret Maritime FCL / LCL
                      </td>
                    </tr>
                    <tr className="bg-neutral-50/80">
                      <td className="py-4 px-5 font-bold text-neutral-700">
                        {isEn ? "WhatsApp Direct" : "Lignes WhatsApp"}
                      </td>
                      <td className="py-4 px-5 font-mono font-bold text-[#e87817]">
                        +221 77 622 00 00 | +221 77 699 00 00 ou +221 77 336 00 00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>

          </div>
        </div>
      </ParallaxBackground>

    </div>
  );
}
