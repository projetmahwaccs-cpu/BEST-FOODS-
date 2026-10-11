import { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  ArrowLeft,
  Sparkles,
  Building,
  Ship,
  UserCheck
} from "lucide-react";
import { COMPANY_DETAILS, buildWhatsAppLink } from "../data/contacts";
import { ParallaxBackground } from "./ParallaxBackground";
import { FloatingCutoutSpice } from "./FloatingCutoutSpice";
import heroImg from "../assets/images/hero_spices_commodities_1791684003019.jpg";

interface ContactPageProps {
  currentLang: "en" | "fr";
  onBackToHome: () => void;
  onRequestQuote: () => void;
}

export function ContactPage({ currentLang, onBackToHome, onRequestQuote }: ContactPageProps) {
  const isEn = currentLang === "en";
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = isEn
      ? `*BEST FOODS - Inquiry from contact.html*
• Name: ${senderName}
• Phone: ${senderPhone}
• Email: ${senderEmail}
• Subject: ${subject}
• Message: ${message}`
      : `*BEST FOODS - Demande de contact via contact.html*
• Nom : ${senderName}
• Téléphone : ${senderPhone}
• Email : ${senderEmail}
• Objet : ${subject}
• Message : ${message}`;

    const link = buildWhatsAppLink("+221776220000", formattedMsg);
    window.open(link, "_blank");
    setIsSent(true);
  };

  return (
    <div className="bg-neutral-100/60 min-h-screen flex flex-col">
      
      {/* ========================================================
          1. HERO SECTION (EXACT SAME STYLE AS ABOUTUS.HTML)
          ======================================================== */}
      <ParallaxBackground
        imageSrc="/bg-parallax-contact-hero.png"
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
              <span className="text-amber-400 font-extrabold">{isEn ? "Contact Us" : "Contact & Coordonnées"}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight text-white drop-shadow-md">
              {isEn ? "Contact BEST FOODS" : "Contactez BEST FOODS"}
            </h1>
            
            <p className="mt-3 text-base sm:text-xl text-emerald-100 font-semibold max-w-2xl mx-auto drop-shadow">
              {isEn
                ? "Direct Access to Management for Wholesale Quotes, Orders & Export Logistics"
                : "Liaison Directe avec la Direction pour vos Devis, Commandes & Expéditions"}
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
              <span className="px-4 py-2 bg-white/10 backdrop-blur-xs rounded-full border border-white/20 text-white flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                +221 77 622 00 00
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
        imageSrc="/bg-parallax-contact.png"
        fallbackSrc=""
        speed={0.15}
        overlayClassName="bg-neutral-100/80"
        pattern="leaf"
        className="py-12 sm:py-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pb-12 space-y-12">
          
          {/* Floating cutout spices on Contact Page */}
          <div className="absolute -top-6 right-8 z-10">
            <FloatingCutoutSpice type="piment" size="sm" rotate={-25} animate={true} />
          </div>
          <div className="absolute top-1/3 -left-4 sm:left-2 z-10">
            <FloatingCutoutSpice type="poivre" size="sm" rotate={15} animate={true} />
          </div>
          <div className="absolute bottom-16 right-4 z-10">
            <FloatingCutoutSpice type="lentilles" size="sm" rotate={-20} animate={false} />
          </div>

          {/* Executive Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Modou Sourang */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-neutral-200/90 flex flex-col justify-between group hover:border-emerald-500 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500 text-neutral-950 font-black text-base flex items-center justify-center shadow-sm">
                    MS
                  </div>
                  <span className="px-3 py-1 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold rounded-full">
                    {isEn ? "General Manager" : "Directeur Général"}
                  </span>
                </div>
                <h3 className="text-xl font-black text-neutral-900 font-heading">
                  MODOU SOURANG
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {isEn ? "Directeur Général & Commercial" : "Directeur Général & Commercial"}
                </p>
                <p className="mt-4 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {isEn
                    ? "Available for wholesale container contract negotiations, pricing structures, and long-term export supply agreements."
                    : "À votre disposition pour la négociation de contrats de gros par conteneurs, tarification FOB/CIF et accords-cadres d'approvisionnement."}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+221776220000"
                  className="flex-1 py-2.5 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#0e5831]" />
                  <span>+221 77 622 00 00</span>
                </a>
                <a
                  href={buildWhatsAppLink("+221776220000", isEn ? "Hello Mr. Modou Sourang, I am contacting you regarding wholesale agro export." : "Bonjour M. Modou Sourang, je vous contacte concernant vos produits agro-export.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Djily Sourang */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-neutral-200/90 flex flex-col justify-between group hover:border-emerald-500 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white font-black text-base flex items-center justify-center shadow-sm">
                    DS
                  </div>
                  <span className="px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold rounded-full">
                    {isEn ? "Operations & Logistics" : "Directeur des Opérations"}
                  </span>
                </div>
                <h3 className="text-xl font-black text-neutral-900 font-heading">
                  DJILY SOURANG
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {isEn ? "Directeur des Opérations & Logistique" : "Directeur des Opérations & Logistique"}
                </p>
                <p className="mt-4 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {isEn
                    ? "In charge of warehouse logistics at Hann Maristes, fumigation, Port of Dakar maritime vessel stuffing, and customs transit."
                    : "Responsable de la logistique d'entrepôt aux Maristes, de la fumigation, de l'empotage maritime au Port de Dakar et du dédouanement."}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+221773360000"
                  className="flex-1 py-2.5 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#0e5831]" />
                  <span>+221 77 336 00 00</span>
                </a>
                <a
                  href={buildWhatsAppLink("+221773360000", isEn ? "Hello Mr. Djily Sourang, I am contacting you regarding logistics and shipment schedules." : "Bonjour M. Djily Sourang, je vous contacte concernant la logistique et les embarquements.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Form & Headquarters Information */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Interactive Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl border border-neutral-200/90 p-6 sm:p-8">
              <div className="flex items-center gap-3 bg-[#e87817] text-white py-3.5 px-5 rounded-xl shadow-sm mb-6">
                <div className="p-1.5 rounded-lg bg-white/20">
                  <Send className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wide">
                  {isEn ? "Direct Inquiry / Message" : "Envoyez-nous un Message Direct"}
                </h3>
              </div>

              {isSent ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-300 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#0e5831] mx-auto" />
                  <h4 className="text-base font-bold text-neutral-900">
                    {isEn ? "Inquiry Dispatched via WhatsApp!" : "Message Transmis via WhatsApp !"}
                  </h4>
                  <p className="text-xs text-neutral-600">
                    {isEn
                      ? "Thank you! Modou Sourang or Djily Sourang will respond promptly to your request."
                      : "Merci ! Modou Sourang ou Djily Sourang vous répondra sans délai."}
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSent(false)}
                    className="text-xs font-bold text-[#0e5831] underline cursor-pointer mt-2"
                  >
                    {isEn ? "Send another message" : "Envoyer un autre message"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                        {isEn ? "Full Name *" : "Nom Complet *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder={isEn ? "e.g. John Doe" : "ex. Amadou Ba"}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0e5831]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                        {isEn ? "WhatsApp / Phone *" : "Téléphone / WhatsApp *"}
                      </label>
                      <input
                        type="tel"
                        required
                        value={senderPhone}
                        onChange={(e) => setSenderPhone(e.target.value)}
                        placeholder="+221..."
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0e5831]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                        {isEn ? "Email Address" : "Adresse Email"}
                      </label>
                      <input
                        type="email"
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="contact@company.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0e5831]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                        {isEn ? "Subject" : "Objet"}
                      </label>
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder={isEn ? "e.g. Wholesale Black Pepper" : "ex. Cotation Poivre Noir 20ft"}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0e5831]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                      {isEn ? "Message & Specific Quantities *" : "Message & Quantités Souhaitées *"}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={isEn ? "Specify commodity, grade, tonnage, and destination port..." : "Précisez la denrée, le tonnage souhaité, le conditionnement et le port de destination..."}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0e5831]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#0e5831] hover:bg-[#093d22] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isEn ? "Send Message via WhatsApp" : "Transmettre le Message via WhatsApp"}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right: Headquarters & Port Logistics */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Warehouse & Headquarters */}
              <div className="bg-white rounded-2xl shadow-xl border border-neutral-200/90 p-6 sm:p-7 space-y-4">
                <div className="flex items-center gap-3 text-[#0e5831]">
                  <Building className="w-5 h-5 text-amber-500" />
                  <h4 className="text-base font-extrabold font-heading">
                    {isEn ? "Headquarters & Warehouse" : "Siège & Entrepôt Principal"}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Hann Maristes en Face Coris Bank, Dakar - Sénégal.
                  <br />
                  <span className="text-neutral-500 text-xs">
                    {isEn ? "Primary processing, lab inspection and central storage." : "Stockage central, triage et laboratoire de conformité."}
                  </span>
                </p>

                <div className="pt-3 border-t border-neutral-100 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-neutral-700">
                    <Mail className="w-4 h-4 text-emerald-600" />
                    <a href="mailto:bestfoodsgroup@gmail.com" className="hover:underline font-mono">
                      bestfoodsgroup@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-700">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>{isEn ? "Mon - Sat : 08:00 - 19:00 (GMT)" : "Lun - Sam : 08h00 - 19h00 (GMT)"}</span>
                  </div>
                </div>
              </div>

              {/* Port Hub PAD */}
              <div className="bg-white rounded-2xl shadow-xl border border-neutral-200/90 p-6 sm:p-7 space-y-4">
                <div className="flex items-center gap-3 text-[#0e5831]">
                  <Ship className="w-5 h-5 text-amber-500" />
                  <h4 className="text-base font-extrabold font-heading">
                    {isEn ? "Maritime Export Logistics" : "Logistique Port de Dakar (PAD)"}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {isEn
                    ? "Direct terminal access at Port Autonome de Dakar. Priority bonded stuffing, ocean bill of lading (BL) issuing, and weekly container departures."
                    : "Accès direct aux terminaux à conteneurs du Port Autonome de Dakar. Empotage sous douane, émission des connaissements (BL) et départs maritimes réguliers."}
                </p>
                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-600">FOB Dakar & CIF Worldwide</span>
                  <button
                    type="button"
                    onClick={onRequestQuote}
                    className="text-xs font-bold text-[#0e5831] underline cursor-pointer"
                  >
                    {isEn ? "Request Price List" : "Demander Cotation"}
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </ParallaxBackground>

    </div>
  );
}
