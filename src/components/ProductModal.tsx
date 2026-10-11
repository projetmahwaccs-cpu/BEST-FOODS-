import { X, Check, Truck, ShieldAlert, FileText, MessageCircle, Send } from "lucide-react";
import { ProductItem } from "../data/products";
import { buildWhatsAppLink } from "../data/contacts";

interface ProductModalProps {
  product: ProductItem | null;
  currentLang: "en" | "fr";
  onClose: () => void;
  onRequestQuote: (product: ProductItem) => void;
}

export function ProductModal({ product, currentLang, onClose, onRequestQuote }: ProductModalProps) {
  if (!product) return null;
  const isEn = currentLang === "en";

  const name = isEn ? product.nameEn : product.nameFr;
  const fullDesc = isEn ? product.fullDescEn : product.fullDescFr;
  const uses = isEn ? product.usesEn : product.usesFr;
  const features = isEn ? product.featuresEn : product.featuresFr;

  const whatsappMessage = isEn
    ? `Hello BEST FOODS, I would like to request technical specifications, FOB/CIF prices, and availability for: ${product.nameEn} (Grade: ${product.grade}).`
    : `Bonjour BEST FOODS, je souhaite obtenir la fiche technique, le prix FOB/CIF et les disponibilités pour : ${product.nameFr} (Grade : ${product.grade}).`;

  const directWhatsAppUrl = buildWhatsAppLink("+221776220000", whatsappMessage);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="px-6 py-5 bg-neutral-900 text-white flex items-center justify-between border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
              <span>{isEn ? product.categoryLabelEn : product.categoryLabelFr}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono text-neutral-300">{product.botanicalName}</span>
            </div>
            <h3 className="text-2xl font-bold font-heading mt-0.5">{name}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="p-6 overflow-y-auto space-y-6 text-neutral-800">
          
          {/* Overview text */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              {isEn ? "Product Overview" : "Présentation du Produit"}
            </h4>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {fullDesc}
            </p>
          </div>

          {/* Key Specifications Grid */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
              {isEn ? "Technical Specifications" : "Spécifications Techniques"}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-neutral-50 p-4 rounded-xl border border-neutral-200">
              <div className="flex justify-between py-1 border-b border-neutral-200/60">
                <span className="text-neutral-500">{isEn ? "Country of Origin" : "Pays d'Origine"}</span>
                <span className="font-semibold text-neutral-900">{product.origin}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-200/60">
                <span className="text-neutral-500">{isEn ? "Commercial Grade" : "Grade Commercial"}</span>
                <span className="font-semibold text-neutral-900">{product.grade}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-200/60">
                <span className="text-neutral-500">{isEn ? "Purity Level" : "Niveau de Pureté"}</span>
                <span className="font-mono font-semibold text-neutral-900">{product.purity}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-200/60">
                <span className="text-neutral-500">{isEn ? "Packaging" : "Emballage"}</span>
                <span className="font-semibold text-neutral-900">{product.packaging}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-200/60 sm:col-span-2">
                <span className="text-neutral-500">{isEn ? "Container Loadability" : "Capacité par Conteneur"}</span>
                <span className="font-semibold text-neutral-900">{product.containerLoad}</span>
              </div>
              <div className="flex justify-between py-1 sm:col-span-2">
                <span className="text-neutral-500">{isEn ? "Harvest / Supply Window" : "Saison de Récolte"}</span>
                <span className="font-semibold text-neutral-900">{product.harvestSeason}</span>
              </div>
            </div>
          </div>

          {/* Features & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                {isEn ? "Quality Attributes" : "Attributs Qualité"}
              </h4>
              <ul className="space-y-1.5 text-xs text-neutral-700">
                {features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                {isEn ? "Common Applications" : "Applications Courantes"}
              </h4>
              <ul className="space-y-1.5 text-xs text-neutral-700">
                {uses.map((use, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Export Certifications Guarantee */}
          <div className="p-3.5 bg-amber-50/70 border border-amber-200/60 rounded-xl flex items-center justify-between text-xs text-amber-950">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-700 shrink-0" />
              <span>
                {isEn
                  ? "Standard Export Documentation provided: Phytosanitary, Certificate of Origin, SGS Inspection, Bill of Lading (PAD Dakar)."
                  : "Documents d'exportation fournis : Phytosanitaire, Certificat d'Origine, Rapport SGS, Connaissement maritime PAD Dakar."}
              </span>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-neutral-100 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3">
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 text-xs font-bold text-emerald-800 bg-emerald-100/80 hover:bg-emerald-200/80 rounded-lg transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-700" />
            <span>{isEn ? "Chat on WhatsApp for this Product" : "Échanger sur WhatsApp pour ce produit"}</span>
          </a>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {isEn ? "Close" : "Fermer"}
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onRequestQuote(product);
              }}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-amber-800 rounded-lg transition-colors flex items-center gap-2 shadow-xs"
            >
              <Send className="w-3.5 h-3.5 text-amber-400" />
              <span>{isEn ? "Request Full Quotation" : "Demander un Devis Complet"}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
