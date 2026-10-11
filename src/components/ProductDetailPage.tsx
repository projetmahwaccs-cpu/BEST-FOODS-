import { 
  ArrowLeft, 
  MessageCircle, 
  ChevronRight,
  FileSpreadsheet
} from "lucide-react";
import { ProductItem, PRODUCTS } from "../data/products";
import { buildWhatsAppLink } from "../data/contacts";
import { ParallaxBackground } from "./ParallaxBackground";
import { FloatingCutoutSpice } from "./FloatingCutoutSpice";

interface ProductDetailPageProps {
  product: ProductItem;
  currentLang: "en" | "fr";
  onBack: () => void;
  onSelectAnotherProduct: (product: ProductItem) => void;
  onRequestQuote: (product: ProductItem) => void;
}

export function ProductDetailPage({
  product,
  currentLang,
  onBack,
  onSelectAnotherProduct,
  onRequestQuote,
}: ProductDetailPageProps) {
  const isEn = currentLang === "en";

  const title = isEn ? product.nameEn : product.nameFr;
  const fullDesc = isEn ? product.fullDescEn : product.fullDescFr;
  const uses = isEn ? product.usesEn : product.usesFr;
  const features = isEn ? product.featuresEn : product.featuresFr;

  // WhatsApp quick RFQ message for this exact commodity
  const whatsappMsg = isEn
    ? `Hello BEST FOODS, I am interested in ordering/getting a quotation for ${product.nameEn} (Grade: ${product.grade}). Please send pricing and availability.`
    : `Bonjour BEST FOODS, je souhaite obtenir une cotation pour le produit ${product.nameFr} (Grade : ${product.grade}). Merci de m'envoyer vos tarifs et disponibilités.`;

  const waLink = buildWhatsAppLink("+221776220000", whatsappMsg);

  // Other related products
  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-white min-h-screen text-neutral-800">
      
      {/* ========================================================
          1. HERO SECTION (PARALLAX BACKGROUND .PNG SUPPORT)
          ======================================================== */}
      <ParallaxBackground
        imageSrc="/bg-parallax-detail-hero.png"
        fallbackSrc={product.image}
        speed={0.25}
        overlayClassName="bg-gradient-to-r from-[#0a3f23]/95 via-black/70 to-[#0a3f23]/95"
        className="text-white py-12 sm:py-16 border-b-4 border-[#e87817]"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Simple Clean Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 mb-4">
            <button
              type="button"
              onClick={onBack}
              className="hover:underline flex items-center gap-1.5 text-white/90 hover:text-white cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{isEn ? "Back to Products" : "Retour aux Produits"}</span>
            </button>
            <span className="text-white/40">/</span>
            <span className="text-white/70">{isEn ? product.categoryLabelEn : product.categoryLabelFr}</span>
            <span className="text-white/40">/</span>
            <span className="text-amber-400 font-bold">{title}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#e87817] block mb-1">
                {product.tag} · {product.origin}
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white">
                {title}
              </h1>
              <p className="mt-1.5 text-sm sm:text-base text-emerald-100 font-mono italic">
                {product.botanicalName}
              </p>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold rounded-full transition-transform hover:scale-105 shadow-md flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{isEn ? "WhatsApp Inquiry" : "Devis WhatsApp"}</span>
              </a>

              <button
                type="button"
                onClick={() => onRequestQuote(product)}
                className="px-6 py-3 bg-[#e87817] hover:bg-[#d6690d] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full transition-transform hover:scale-105 shadow-md cursor-pointer"
              >
                {isEn ? "Request Quotation" : "Demander une Cotation"}
              </button>
            </div>
          </div>

        </div>
      </ParallaxBackground>


      {/* ========================================================
          2. PAGE CONTENU SIMPLE : TEXTES ÉPURÉS SANS CARRÉS NI SURCHARGES
          ======================================================== */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12 relative">
        
        {/* Floating spices scattered around the product page */}
        <div className="absolute top-8 -left-4 sm:-left-8 z-10">
          <FloatingCutoutSpice type="piment" size="sm" rotate={24} animate={true} />
        </div>
        <div className="absolute top-1/2 -right-4 sm:-right-8 z-10">
          <FloatingCutoutSpice type="poivre" size="sm" rotate={-16} animate={true} />
        </div>
        <div className="absolute bottom-12 -left-2 sm:-left-6 z-10">
          <FloatingCutoutSpice type="lentilles" size="sm" rotate={30} animate={false} />
        </div>

        {/* Grande Photo Brute du Produit (Élégante, sans encadrements lourds) */}
        <div className="overflow-hidden rounded-2xl shadow-md border border-neutral-200 aspect-16/9 bg-neutral-900">
          <img
            src={product.image}
            alt={title}
            className={`w-full h-full object-cover ${product.imagePosition}`}
            referrerPolicy="no-referrer"
          />
        </div>


        {/* TEXTE SIMPLE 1 : Description & Présentation de la Denrée */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0e5831] font-heading mb-3">
            {isEn ? "Description & Overview" : "Présentation de la Denrée"}
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
            {fullDesc}
          </p>
        </div>


        {/* TEXTE SIMPLE 2 : TOUS LES DÉTAILS DU TABLEAU MIS DIRECTEMENT ICI (Lignes simples, pas de carrés) */}
        <div className="border-t border-neutral-200 pt-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0e5831] font-heading mb-2">
            {isEn ? "Export Specifications" : "Spécifications & Détails Techniques d'Exportation"}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 mb-6">
            {isEn
              ? "All parameters and export criteria for this commodity sourced and shipped by BEST FOODS:"
              : "Tous les critères et paramètres d'exportation pour cette denrée approvisionnée et expédiée par BEST FOODS :"}
          </p>
          
          <div className="divide-y divide-neutral-200 text-sm sm:text-base">
            
            <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-neutral-500">{isEn ? "Commodity Name" : "Nom de la Denrée"}</span>
              <span className="font-semibold text-neutral-900">{title}</span>
            </div>

            <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-neutral-500">{isEn ? "Botanical / Scientific Name" : "Nom Botanique / Scientifique"}</span>
              <span className="font-mono italic text-emerald-900">{product.botanicalName}</span>
            </div>

            <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-neutral-500">{isEn ? "Country of Origin" : "Pays d'Origine"}</span>
              <span className="font-semibold text-neutral-900">{product.origin}</span>
            </div>

            <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-neutral-500">{isEn ? "Export Grade" : "Grade Export"}</span>
              <span className="font-semibold text-neutral-900">{product.grade}</span>
            </div>

            <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-neutral-500">{isEn ? "Purity Level" : "Taux de Pureté"}</span>
              <span className="font-semibold text-emerald-700">{product.purity}</span>
            </div>

            <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-neutral-500">{isEn ? "Packaging & Bagging" : "Conditionnement & Emballage"}</span>
              <span className="font-medium text-neutral-800">{product.packaging}</span>
            </div>

            <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-neutral-500">{isEn ? "Container Loadability" : "Empotage & Chargement Conteneur"}</span>
              <span className="font-medium text-neutral-800">{product.containerLoad}</span>
            </div>

            <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-neutral-500">{isEn ? "Harvest Season" : "Période de Récolte"}</span>
              <span className="font-medium text-neutral-800">{product.harvestSeason}</span>
            </div>

            <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-neutral-500">{isEn ? "Processing Method" : "Mode de Traitement"}</span>
              <span className="font-medium text-neutral-800">
                {isEn
                  ? "Machine-cleaned, destoned, graded, and naturally sun-dried"
                  : "Nettoyage machine, épierrage, calibrage et séchage naturel au soleil"}
              </span>
            </div>

            <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-neutral-500">{isEn ? "Official Documents Provided" : "Documents d'Exportation Fournis"}</span>
              <span className="font-medium text-neutral-800">
                {isEn
                  ? "Bill of Lading (B/L), Commercial Invoice, Packing List, Certificate of Origin, Phytosanitary Certificate, SGS Inspection Report"
                  : "Connaissement maritime (B/L), Facture commerciale, Packing List, Certificat d'Origine, Certificat Phytosanitaire, Rapport d'inspection SGS"}
              </span>
            </div>

          </div>
        </div>


        {/* TEXTE SIMPLE 3 : Standards de Qualité & Sélection */}
        <div className="border-t border-neutral-200 pt-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0e5831] font-heading mb-3">
            {isEn ? "Quality Standards" : "Standards de Qualité & Sélection"}
          </h2>
          
          <ul className="space-y-2 text-base text-neutral-700 list-disc list-inside leading-relaxed">
            {features.map((feat, idx) => (
              <li key={idx} className="marker:text-[#e87817]">
                {feat}
              </li>
            ))}
          </ul>
        </div>


        {/* TEXTE SIMPLE 4 : Usages Commerciaux & Applications */}
        <div className="border-t border-neutral-200 pt-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0e5831] font-heading mb-3">
            {isEn ? "Commercial Applications & Target Industries" : "Usages Commerciaux & Industries Cibles"}
          </h2>
          
          <p className="text-base text-neutral-700 leading-relaxed mb-3">
            {isEn
              ? "This commodity is strictly processed to meet international commercial food standards for wholesale buyers, industrial processors, and retailers:"
              : "Cette denrée est soigneusement conditionnée pour répondre aux exigences des industriels agroalimentaires, grossistes et distributeurs :"}
          </p>

          <ul className="space-y-2 text-base text-neutral-700 list-disc list-inside leading-relaxed">
            {uses.map((use, idx) => (
              <li key={idx} className="marker:text-[#0e5831]">
                {use}
              </li>
            ))}
          </ul>
        </div>


        {/* TEXTE SIMPLE 5 : Logistique & Expédition depuis le Port de Dakar */}
        <div className="border-t border-neutral-200 pt-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0e5831] font-heading mb-3">
            {isEn ? "Packaging & Port of Dakar Logistics" : "Conditionnement & Logistique Port de Dakar"}
          </h2>
          
          <p className="text-base text-neutral-700 leading-relaxed mb-3">
            {isEn
              ? `Shipments are palletized and dispatched from our modern warehouses in Hann Maristes (facing Coris Bank) directly to Port Autonome de Dakar (PAD). Standard packing includes ${product.packaging}. Double-stitched food-grade bags protect each batch against humidity and long maritime transit.`
              : `Les expéditions sont palettisées et acheminées depuis nos entrepôts de Hann Maristes (en face Coris Bank) directement vers le Port Autonome de Dakar (PAD). Le conditionnement standard comprend : ${product.packaging}. Sacs doublés de qualité alimentaire assurant une protection parfaite contre l'humidité en mer.`}
          </p>

          <p className="text-base text-neutral-700 leading-relaxed">
            {isEn
              ? "All official export documentation is provided: Bill of Lading, Commercial Invoice, Packing List, Certificate of Origin, and Phytosanitary Certificate."
              : "L'ensemble des documents d'exportation requis est fourni : Connaissement maritime (B/L), Facture commerciale, Packing List, Certificat d'Origine et Certificat Phytosanitaire."}
          </p>
        </div>


        {/* ACTION SIMPLE : Contact direct WhatsApp et Cotation */}
        <div className="border-t border-neutral-200 pt-8">
          <div className="py-6 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0e5831] font-heading mb-2">
              {isEn ? "Ready to place an order or request a quote?" : "Besoin d'une cotation pour ce produit ?"}
            </h3>
            <p className="text-sm text-neutral-600 max-w-lg mx-auto mb-6">
              {isEn
                ? "Contact Modou Sourang or Djily Sourang directly for instant CIF / FOB pricing and shipment schedules."
                : "Contactez directement Modou Sourang ou Djily Sourang pour obtenir vos tarifs CIF / FOB et plannings d'embarquement."}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold rounded-full transition-transform hover:scale-105 shadow-md flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp: +221 77 622 00 00</span>
              </a>

              <button
                type="button"
                onClick={() => onRequestQuote(product)}
                className="px-6 py-3 bg-[#0e5831] hover:bg-[#13713f] text-white text-xs sm:text-sm font-bold rounded-full transition-transform hover:scale-105 shadow-md flex items-center gap-2 cursor-pointer"
              >
                <FileSpreadsheet className="w-4 h-4 text-amber-300" />
                <span>{isEn ? "Request Full Quotation" : "Demander un Devis"}</span>
              </button>
            </div>
          </div>
        </div>


        {/* AUTRES PRODUITS : Navigation épurée */}
        <div className="border-t border-neutral-200 pt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 font-heading">
              {isEn ? "Other Commodities Available" : "Autres Denrées Disponibles"}
            </h3>
            
            <button
              type="button"
              onClick={onBack}
              className="text-xs font-bold text-[#0e5831] hover:text-[#e87817] flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>{isEn ? "View all products" : "Voir tous les produits"}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {related.map((p) => {
              const relTitle = isEn ? p.nameEn : p.nameFr;
              return (
                <div
                  key={p.id}
                  onClick={() => {
                    onSelectAnotherProduct(p);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="group cursor-pointer rounded-xl overflow-hidden border border-neutral-200 hover:border-emerald-600 bg-white transition-all duration-300 hover:shadow-md"
                >
                  <div className="h-32 overflow-hidden bg-neutral-900">
                    <img
                      src={p.image}
                      alt={relTitle}
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${p.imagePosition}`}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-2.5 text-center">
                    <h4 className="text-xs font-bold text-neutral-900 group-hover:text-[#0e5831] truncate transition-colors">
                      {relTitle}
                    </h4>
                    <span className="text-[11px] text-neutral-500 block truncate mt-0.5">
                      {p.origin}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
