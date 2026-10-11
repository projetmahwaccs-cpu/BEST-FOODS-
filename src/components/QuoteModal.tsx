import { useState, useEffect } from "react";
import { X, Send, MessageCircle, Mail, CheckCircle2, Package, Phone } from "lucide-react";
import { PRODUCTS, ProductItem } from "../data/products";
import { COMPANY_DETAILS, buildWhatsAppLink } from "../data/contacts";

interface QuoteModalProps {
  isOpen: boolean;
  initialProduct?: ProductItem | null;
  currentLang: "en" | "fr";
  onClose: () => void;
}

export function QuoteModal({ isOpen, initialProduct, currentLang, onClose }: QuoteModalProps) {
  if (!isOpen) return null;
  const isEn = currentLang === "en";

  const [selectedProductIds, setSelectedProductIds] = useState<string[]>(
    initialProduct ? [initialProduct.id] : ["black-pepper"]
  );
  const [quantity, setQuantity] = useState<string>("1 FCL (20ft Container)");
  const [incoterm, setIncoterm] = useState<string>("FOB Dakar Port");
  const [packaging, setPackaging] = useState<string>("50kg PP Bags");
  const [targetContact, setTargetContact] = useState<string>("+221776220000"); // Modou Sourang
  const [buyerName, setBuyerName] = useState<string>("");
  const [buyerCompany, setBuyerCompany] = useState<string>("");
  const [buyerCountry, setBuyerCountry] = useState<string>("");
  const [buyerEmail, setBuyerEmail] = useState<string>("");
  const [buyerPhone, setBuyerPhone] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialProduct) {
      setSelectedProductIds([initialProduct.id]);
    }
  }, [initialProduct]);

  const toggleProduct = (id: string) => {
    if (selectedProductIds.includes(id)) {
      if (selectedProductIds.length > 1) {
        setSelectedProductIds(selectedProductIds.filter((p) => p !== id));
      }
    } else {
      setSelectedProductIds([...selectedProductIds, id]);
    }
  };

  const selectedProductNames = PRODUCTS.filter((p) =>
    selectedProductIds.includes(p.id)
  ).map((p) => (isEn ? p.nameEn : p.nameFr));

  const generateMessageText = () => {
    const productsList = selectedProductNames.join(", ");
    return isEn
      ? `*BEST FOODS - Commercial Inquiry / RFQ*
• *Buyer:* ${buyerName || "Prospective Buyer"}
• *Company:* ${buyerCompany || "N/A"} (${buyerCountry || "Global"})
• *Products:* ${productsList}
• *Quantity:* ${quantity}
• *Packaging:* ${packaging}
• *Incoterm:* ${incoterm}
• *Contact:* ${buyerPhone || "N/A"} / ${buyerEmail || "N/A"}
• *Notes:* ${notes || "Looking forward to your best FOB/CIF quote and product availability."}

_Destination: Port Autonome de Dakar / Hann Maristes en Face Coris Bank_`
      : `*BEST FOODS - Demande de Devis Commercial*
• *Acheteur :* ${buyerName || "Client"}
• *Société :* ${buyerCompany || "N/A"} (${buyerCountry || "Sénégal / International"})
• *Produits :* ${productsList}
• *Quantité :* ${quantity}
• *Conditionnement :* ${packaging}
• *Incoterm :* ${incoterm}
• *Contact :* ${buyerPhone || "N/A"} / ${buyerEmail || "N/A"}
• *Notes :* ${notes || "Merci de nous transmettre votre meilleure offre de prix et disponibilités."}

_Destination : Port Autonome de Dakar / Hann Maristes en Face Coris Bank_`;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = generateMessageText();
    const link = buildWhatsAppLink(targetContact, msg);
    window.open(link, "_blank");
    setSubmitted(true);
  };

  const handleSendEmail = () => {
    const msg = generateMessageText();
    const subject = encodeURIComponent(
      `RFQ: ${selectedProductNames.slice(0, 2).join(", ")} - BEST FOODS`
    );
    const body = encodeURIComponent(msg);
    window.open(`mailto:${COMPANY_DETAILS.email}?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[92vh] bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#0e5831] text-white flex items-center justify-between border-b border-emerald-900">
          <div>
            <div className="text-xs uppercase font-bold text-amber-300 tracking-wider">
              BEST FOODS • DAKAR - SÉNÉGAL
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              {isEn ? "Request for Quotation (RFQ)" : "Demande de Devis Commercial"}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-emerald-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSendWhatsApp} className="p-6 overflow-y-auto space-y-5 text-neutral-800 text-xs">
          
          {submitted && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-2 text-emerald-800 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {isEn
                  ? "Quotation request generated! Redirecting to WhatsApp Web / Email."
                  : "Demande générée avec succès ! Redirection vers WhatsApp Web / Email."}
              </span>
            </div>
          )}

          {/* Select Commodities from the 13 products */}
          <div>
            <label className="block font-bold text-neutral-900 mb-2 uppercase tracking-wider text-[11px]">
              {isEn ? "1. Select Commodities (Click to add/remove)" : "1. Choisissez les Produits (Cliquez pour ajouter/retirer)"}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {PRODUCTS.map((prod) => {
                const isSelected = selectedProductIds.includes(prod.id);
                const title = isEn ? prod.nameEn : prod.nameFr;
                return (
                  <button
                    key={prod.id}
                    type="button"
                    onClick={() => toggleProduct(prod.id)}
                    className={`p-2 rounded-lg text-left transition-all border flex items-center justify-between ${
                      isSelected
                        ? "bg-emerald-50 border-[#0e5831] text-[#0e5831] font-bold shadow-2xs"
                        : "bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                    }`}
                  >
                    <span className="truncate">{title}</span>
                    {isSelected && <span className="text-[10px] ml-1">✓</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quantity & Incoterms */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block font-semibold text-neutral-700 mb-1">
                {isEn ? "Quantity (Tonnage / FCL)" : "Quantité (Tonnes / FCL)"}
              </label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full p-2 bg-neutral-50 border border-neutral-300 rounded-md focus:ring-1 focus:ring-emerald-700 font-medium"
              >
                <option value="1 FCL (20ft Container)">1 FCL (20ft Container - 16-25 MT)</option>
                <option value="1 FCL (40ft HC Container)">1 FCL (40ft HC - 27-28 MT)</option>
                <option value="Multi-Container Bulk (5+ FCL)">Multi-Container Bulk (5+ FCL)</option>
                <option value="5 to 10 Metric Tons">5 to 10 Metric Tons (LCL)</option>
                <option value="Sample Evaluation Request">Demande d'échantillon (Sample)</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-neutral-700 mb-1">
                {isEn ? "Packaging Format" : "Conditionnement"}
              </label>
              <select
                value={packaging}
                onChange={(e) => setPackaging(e.target.value)}
                className="w-full p-2 bg-neutral-50 border border-neutral-300 rounded-md focus:ring-1 focus:ring-emerald-700 font-medium"
              >
                <option value="50kg PP Bags with Liner">Sacs PP 50kg doublés</option>
                <option value="25kg Multiwall PP Bags">Sacs PP 25kg</option>
                <option value="Traditional Jute Bags">Sacs de Jute traditionnels</option>
                <option value="10kg / 20kg Master Cartons">Cartons 10kg / 20kg</option>
                <option value="Bulk Container Liner">Vrac sous conteneur</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-neutral-700 mb-1">
                {isEn ? "Incoterms / Delivery" : "Incoterms & Livraison"}
              </label>
              <select
                value={incoterm}
                onChange={(e) => setIncoterm(e.target.value)}
                className="w-full p-2 bg-neutral-50 border border-neutral-300 rounded-md focus:ring-1 focus:ring-emerald-700 font-medium"
              >
                <option value="FOB Port of Dakar">FOB Port Autonome de Dakar</option>
                <option value="CIF Destination Port">CIF Port de Destination</option>
                <option value="CFR Port">CFR Port</option>
                <option value="Ex-Warehouse Hann Maristes">Ex-Warehouse Hann Maristes</option>
              </select>
            </div>
          </div>

          {/* Select Contact Representative */}
          <div>
            <label className="block font-bold text-neutral-900 mb-1 uppercase tracking-wider text-[11px]">
              {isEn ? "2. Direct Contact Representative" : "2. Interlocuteur Dédié"}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label
                className={`p-3 rounded-lg border cursor-pointer flex items-center justify-between ${
                  targetContact === "+221776220000"
                    ? "bg-emerald-50 border-[#0e5831] text-[#0e5831]"
                    : "bg-neutral-50 border-neutral-200 text-neutral-700"
                }`}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="contact"
                    value="+221776220000"
                    checked={targetContact === "+221776220000"}
                    onChange={() => setTargetContact("+221776220000")}
                    className="accent-[#0e5831]"
                  />
                  <div>
                    <div className="font-bold">MODOU SOURANG</div>
                    <div className="text-[10px] text-neutral-500">Commercial & Exports (+221 77 622 00 00)</div>
                  </div>
                </div>
              </label>

              <label
                className={`p-3 rounded-lg border cursor-pointer flex items-center justify-between ${
                  targetContact === "+221773360000"
                    ? "bg-emerald-50 border-[#0e5831] text-[#0e5831]"
                    : "bg-neutral-50 border-neutral-200 text-neutral-700"
                }`}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="contact"
                    value="+221773360000"
                    checked={targetContact === "+221773360000"}
                    onChange={() => setTargetContact("+221773360000")}
                    className="accent-[#0e5831]"
                  />
                  <div>
                    <div className="font-bold">DJILY SOURANG</div>
                    <div className="text-[10px] text-neutral-500">Opérations & Logistique (+221 77 336 00 00)</div>
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Buyer Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-neutral-700 mb-1">
                {isEn ? "Your Full Name" : "Nom Complet"}
              </label>
              <input
                type="text"
                placeholder="e.g. John Doe / Amadou Diallo"
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
                className="w-full p-2 bg-neutral-50 border border-neutral-300 rounded-md focus:ring-1 focus:ring-emerald-700"
              />
            </div>

            <div>
              <label className="block font-semibold text-neutral-700 mb-1">
                {isEn ? "Company & Country" : "Société & Pays"}
              </label>
              <input
                type="text"
                placeholder="e.g. AgroTrade SARL, Senegal / France / UAE"
                value={buyerCompany}
                onChange={(e) => setBuyerCompany(e.target.value)}
                className="w-full p-2 bg-neutral-50 border border-neutral-300 rounded-md focus:ring-1 focus:ring-emerald-700"
              />
            </div>

            <div>
              <label className="block font-semibold text-neutral-700 mb-1">
                {isEn ? "Phone / WhatsApp" : "Téléphone / WhatsApp"}
              </label>
              <input
                type="tel"
                placeholder="+221 77 ... / +33 6 ..."
                value={buyerPhone}
                onChange={(e) => setBuyerPhone(e.target.value)}
                className="w-full p-2 bg-neutral-50 border border-neutral-300 rounded-md focus:ring-1 focus:ring-emerald-700"
              />
            </div>

            <div>
              <label className="block font-semibold text-neutral-700 mb-1">
                {isEn ? "Email Address" : "Email"}
              </label>
              <input
                type="email"
                placeholder="contact@company.com"
                value={buyerEmail}
                onChange={(e) => setBuyerEmail(e.target.value)}
                className="w-full p-2 bg-neutral-50 border border-neutral-300 rounded-md focus:ring-1 focus:ring-emerald-700"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block font-semibold text-neutral-700 mb-1">
              {isEn ? "Additional Specifications or Questions" : "Précisions ou Spécifications Particulières"}
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={isEn ? "e.g. target port, required delivery month, moisture limits..." : "Ex: port de destination, date souhaitée, exigences d'analyses..."}
              className="w-full p-2 bg-neutral-50 border border-neutral-300 rounded-md focus:ring-1 focus:ring-emerald-700"
            />
          </div>

          {/* Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200">
            <button
              type="button"
              onClick={handleSendEmail}
              className="px-4 py-2.5 rounded-lg border border-neutral-300 hover:bg-neutral-100 text-neutral-700 font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-4 h-4 text-neutral-600" />
              <span>{isEn ? "Send via Email (bestfoodsgroup@gmail.com)" : "Envoyer par Email"}</span>
            </button>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#1faa52] text-white font-bold flex items-center gap-2 transition-transform active:scale-95 shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{isEn ? "Instant WhatsApp Quote" : "Envoyer Devis sur WhatsApp Web"}</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
