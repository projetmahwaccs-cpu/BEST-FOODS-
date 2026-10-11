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
  Building
} from "lucide-react";
import { COMPANY_DETAILS, buildWhatsAppLink } from "../data/contacts";
import { ParallaxBackground } from "./ParallaxBackground";

interface ContactSectionProps {
  currentLang: "en" | "fr";
}

export function ContactSection({ currentLang }: ContactSectionProps) {
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
      ? `*BEST FOODS - Inquiry from Website*
• Name: ${senderName}
• Phone: ${senderPhone}
• Email: ${senderEmail}
• Subject: ${subject}
• Message: ${message}`
      : `*BEST FOODS - Demande de contact via le site*
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
    <ParallaxBackground
      imageSrc="/bg-parallax-contact.png"
      fallbackSrc=""
      speed={0.16}
      overlayClassName="bg-white/94"
      pattern="dots"
      className="py-16 sm:py-24 border-t border-neutral-200"
    >
      <section id="contact" className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex justify-center items-center gap-1.5 mb-2">
            <div className="w-10 h-1 bg-[#0e5831] rounded-full" />
            <div className="w-6 h-1 bg-[#e87817] rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e5831] font-heading tracking-tight">
            {isEn ? "Get In Touch With BEST FOODS" : "Contactez BEST FOODS"}
          </h2>
          <p className="mt-2 text-neutral-600 text-sm sm:text-base">
            {isEn
              ? "Direct access to our management team in Hann Maristes, Dakar. We respond promptly via WhatsApp Web and email."
              : "Contact direct avec notre direction à Hann Maristes, Dakar. Réponse rapide via WhatsApp Web et email."}
          </p>
        </div>

        {/* 2-Column Layout: Direct Contacts & Map vs Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Location (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Direct Executive Contacts Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Modou Sourang Card */}
              <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200 hover:border-emerald-600 transition-colors shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-full bg-[#0e5831] text-white font-black flex items-center justify-center text-sm shadow-xs">
                    MS
                  </div>
                  <div>
                    <h3 className="font-extrabold text-neutral-900 text-sm">MODOU SOURANG</h3>
                    <div className="text-xs text-emerald-800 font-semibold">
                      {isEn ? "Managing Director / Commercial" : "Directeur Général / Commercial"}
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-neutral-600">
                  <div className="flex items-center gap-2 font-mono font-bold text-neutral-900">
                    <Phone className="w-3.5 h-3.5 text-emerald-700" />
                    <span>+221 77 622 00 00</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono font-medium text-neutral-700">
                    <Phone className="w-3.5 h-3.5 text-emerald-700" />
                    <span>+221 77 699 00 00</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-200/80 flex items-center gap-2">
                  <a
                    href="https://wa.me/221776220000?text=Hello%20Modou%20Sourang,%20I%20am%20contacting%20you%20regarding%20BEST%20FOODS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp Web</span>
                  </a>
                </div>
              </div>

              {/* Djily Sourang Card */}
              <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200 hover:border-emerald-600 transition-colors shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-full bg-[#0e5831] text-white font-black flex items-center justify-center text-sm shadow-xs">
                    DS
                  </div>
                  <div>
                    <h3 className="font-extrabold text-neutral-900 text-sm">DJILY SOURANG</h3>
                    <div className="text-xs text-emerald-800 font-semibold">
                      {isEn ? "Operations & Supply Chain" : "Opérations & Logistique"}
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-neutral-600">
                  <div className="flex items-center gap-2 font-mono font-bold text-neutral-900">
                    <Phone className="w-3.5 h-3.5 text-emerald-700" />
                    <span>+221 77 336 00 00</span>
                  </div>
                  <div className="text-[11px] text-neutral-500">
                    {isEn ? "Port logistics & container handling" : "Logistique portuaire & transport"}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-200/80 flex items-center gap-2">
                  <a
                    href="https://wa.me/221773360000?text=Hello%20Djily%20Sourang,%20I%20am%20contacting%20you%20regarding%20BEST%20FOODS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp Web</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Warehouse Address Banner */}
            <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-neutral-800 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0e5831] text-white flex items-center justify-center shrink-0">
                  <Building className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <div className="font-extrabold text-neutral-900 text-sm">
                    BEST FOODS - Siège & Entrepôt
                  </div>
                  <div className="text-neutral-600 mt-0.5 font-medium">
                    Hann Maristes en Face Coris Bank, DAKAR - SÉNÉGAL
                  </div>
                  <div className="text-emerald-800 font-mono mt-1 font-semibold">
                    bestfoodsgroup@gmail.com
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Hann+Maristes+Coris+Bank+Dakar"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 text-xs font-bold text-[#0e5831] bg-white border border-emerald-300 rounded-lg hover:bg-emerald-50 transition-colors flex items-center gap-1.5 shrink-0 shadow-2xs"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Simulated Interactive Map Card */}
            <div className="relative rounded-xl overflow-hidden border border-neutral-300 h-56 bg-neutral-100 flex items-center justify-center">
              {/* Map background pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#15803d_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
              <div className="absolute inset-0 bg-neutral-200/50" />
              
              {/* Graphic roads and coastline */}
              <svg className="absolute inset-0 w-full h-full stroke-neutral-400 fill-none" opacity="0.6">
                <path d="M0,80 Q200,60 400,120 T800,100" strokeWidth="6" stroke="#ffffff" />
                <path d="M100,0 Q180,140 240,240" strokeWidth="4" stroke="#ffffff" />
                <path d="M250,0 Q260,180 320,240" strokeWidth="3" stroke="#fef08a" />
              </svg>

              {/* Pin for Hann Maristes / Coris Bank */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="animate-bounce">
                  <div className="w-9 h-9 rounded-full bg-[#e87817] text-white flex items-center justify-center shadow-lg border-2 border-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
                <div className="mt-1 px-3 py-1 bg-neutral-900/90 backdrop-blur-xs text-white text-[11px] font-bold rounded-md shadow-md text-center">
                  BEST FOODS • Hann Maristes en Face Coris Bank
                </div>
                <div className="text-[10px] text-neutral-600 font-semibold bg-white/90 px-2 py-0.5 rounded mt-0.5 shadow-2xs">
                  DAKAR - SÉNÉGAL
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Contact Form (5 Cols) */}
          <div className="lg:col-span-5 bg-neutral-50 rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm">
            
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
              <Mail className="w-4 h-4" />
              <span>{isEn ? "Direct Message" : "Message Rapide"}</span>
            </div>

            <h3 className="text-xl font-bold text-neutral-900 font-heading mb-4">
              {isEn ? "Send Us an Inquiry" : "Écrivez-nous Directement"}
            </h3>

            {isSent ? (
              <div className="p-4 bg-emerald-100 border border-emerald-300 rounded-xl text-emerald-900 text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                  <span>{isEn ? "Message dispatched!" : "Message envoyé !"}</span>
                </div>
                <p>
                  {isEn
                    ? "Thank you. Our team (Modou Sourang & Djily Sourang) will review your requirements and respond shortly."
                    : "Merci. Notre équipe (Modou Sourang & Djily Sourang) traite votre demande dans les plus brefs délais."}
                </p>
                <button
                  type="button"
                  onClick={() => setIsSent(false)}
                  className="mt-2 text-xs font-bold text-emerald-800 underline"
                >
                  {isEn ? "Send another message" : "Envoyer un autre message"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">
                    {isEn ? "Full Name *" : "Nom et Prénom *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Modou Ndiaye"
                    className="w-full p-2.5 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      {isEn ? "Email *" : "Email *"}
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="votre@email.com"
                      className="w-full p-2.5 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      {isEn ? "Phone / WhatsApp" : "Téléphone / WhatsApp"}
                    </label>
                    <input
                      type="tel"
                      value={senderPhone}
                      onChange={(e) => setSenderPhone(e.target.value)}
                      placeholder="+221 77..."
                      className="w-full p-2.5 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">
                    {isEn ? "Commodity of Interest" : "Produit Souhaité"}
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder={isEn ? "e.g. Black Pepper, Sugar, Lentils, Cloves..." : "Ex: Poivre noir, Sucre, Lentilles, Girofle..."}
                    className="w-full p-2.5 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">
                    {isEn ? "Message & Required Volumes" : "Message & Quantités requises"}
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={isEn ? "Specify quantity (e.g. 1 FCL), packing, destination port..." : "Précisez vos volumes (ex: 1 conteneur 20ft), port d'arrivée..."}
                    className="w-full p-2.5 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#0e5831] hover:bg-[#13713f] active:scale-[0.99] rounded-lg transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-amber-300" />
                  <span>{isEn ? "Send Message via WhatsApp / Email" : "Envoyer via WhatsApp / Email"}</span>
                </button>
              </form>
            )}

            <div className="mt-4 pt-4 border-t border-neutral-200 text-[11px] text-neutral-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-700" />
              <span>{isEn ? "Operating Hours: Mon - Sat 08:00 - 18:30 GMT" : "Horaires d'ouverture : Lun - Sam 08h00 - 18h30 GMT"}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  </ParallaxBackground>
);
}
