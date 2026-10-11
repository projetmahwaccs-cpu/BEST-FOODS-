import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  User, 
  ArrowUp,
  MessageCircle
} from "lucide-react";
import { COMPANY_DETAILS, buildWhatsAppLink } from "../data/contacts";
import { Logo } from "./Logo";
import { FooterBottomBand } from "./FooterBottomBand";

interface FooterProps {
  currentLang: "en" | "fr";
  onScrollToTop: () => void;
  onNavigate?: (page: "home" | "products" | "about" | "quality" | "contact", sectionId?: string) => void;
}

export function Footer({ currentLang, onScrollToTop, onNavigate }: FooterProps) {
  const isEn = currentLang === "en";

  return (
    <footer id="contact" className="relative bg-[#0b4325] text-white pt-16 pb-12 overflow-hidden border-t-4 border-[#e87817]">
      
      {/* Background Watermark Leaf Icon (matching screenshot 7 & 10) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-[500px] h-[500px] fill-white">
          <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="4" fill="none" />
          <path d="M70 140 C65 115 75 80 105 60 C90 85 90 115 70 140 Z" />
          <path d="M130 140 C135 115 125 80 95 60 C110 85 110 115 130 140 Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Logo & Motto */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-10 border-b border-emerald-800/70 gap-6">
          <div className="bg-white/95 px-5 py-2.5 rounded-xl shadow-md">
            <Logo size="sm" showText={true} />
          </div>

          <div className="text-center sm:text-right">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-400">
              LA QUALITÉ AU BON PRIX
            </div>
            <div className="text-xs text-emerald-200 mt-0.5">
              {isEn ? "Direct Agro Commodities & Spices Exporter · Dakar, Senegal" : "Import-Export & Négoce International de Produits Agroalimentaires · Dakar"}
            </div>
          </div>
        </div>

        {/* Main Coordinates Section (Matching Screenshot 7 & 10) */}
        <div className="py-12 text-center max-w-4xl mx-auto">
          
          {/* Location Pin Icon */}
          <div className="w-12 h-12 rounded-full bg-emerald-800/80 border border-emerald-600 flex items-center justify-center mx-auto mb-4 text-emerald-300 shadow-sm">
            <MapPin className="w-6 h-6 text-amber-400" />
          </div>

          {/* Heading */}
          <div className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-1">
            {isEn ? "FACTORY & WAREHOUSE ADDRESS" : "ADRESSE ENTREPÔT & SIÈGE"}
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            BEST FOODS
          </h3>
          <p className="mt-2 text-base sm:text-lg text-emerald-100 font-medium">
            Hann Maristes en Face Coris Bank, DAKAR - SÉNÉGAL
          </p>

          {/* Phone Numbers & WhatsApp Line (exact match to user prompt) */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm font-bold text-amber-300">
            <a
              href="https://wa.me/221776220000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1.5 bg-black/20 px-3.5 py-1.5 rounded-full border border-emerald-700/60"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>+221 77 622 00 00</span>
            </a>
            <span className="text-emerald-500 hidden sm:inline">|</span>
            <a
              href="https://wa.me/221776990000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1.5 bg-black/20 px-3.5 py-1.5 rounded-full border border-emerald-700/60"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>+221 77 699 00 00</span>
            </a>
            <span className="text-emerald-500 hidden sm:inline">ou</span>
            <a
              href="https://wa.me/221773360000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1.5 bg-black/20 px-3.5 py-1.5 rounded-full border border-emerald-700/60"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>+221 77 336 00 00</span>
            </a>
          </div>

          {/* Key Executive Contacts Card (Modou Sourang & Djily Sourang) */}
          <div className="mt-8 p-4 rounded-xl bg-black/25 border border-emerald-700/60 max-w-2xl mx-auto">
            <div className="text-xs uppercase font-bold text-amber-400 tracking-wider mb-2">
              {isEn ? "Direct Executive Contacts :" : "Contacts Directs :"}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-xs">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500 text-neutral-950 font-bold flex items-center justify-center shrink-0">
                  MS
                </div>
                <div>
                  <div className="font-extrabold text-sm text-white">MODOU SOURANG</div>
                  <div className="text-emerald-300 text-[11px]">Directeur Général / Commercial</div>
                  <div className="mt-1 text-amber-300 font-mono font-semibold">+221 77 622 00 00</div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-neutral-950 font-bold flex items-center justify-center shrink-0">
                  DS
                </div>
                <div>
                  <div className="font-extrabold text-sm text-white">DJILY SOURANG</div>
                  <div className="text-emerald-300 text-[11px]">Directeur des Opérations / Logistique</div>
                  <div className="mt-1 text-amber-300 font-mono font-semibold">+221 77 336 00 00</div>
                </div>
              </div>
            </div>
          </div>

          {/* Corporate Office & Cold Chain (Split Matching Screenshot 7 & 10) */}
          <div className="mt-10 pt-8 border-t border-emerald-800/80 grid grid-cols-1 md:grid-cols-2 gap-8 text-center sm:text-left">
            
            {/* Left: Corporate Office */}
            <div className="sm:border-r sm:border-emerald-800/80 sm:pr-8">
              <h4 className="text-lg font-bold text-white font-heading mb-3">
                {isEn ? "Corporate Office" : "Bureau Commercial"}
              </h4>
              <p className="text-xs text-emerald-100 leading-relaxed mb-3">
                Hann Maristes en Face Coris Bank, DAKAR - SÉNÉGAL
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-amber-300">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:bestfoodsgroup@gmail.com" className="hover:underline font-mono">
                  bestfoodsgroup@gmail.com
                </a>
              </div>
            </div>

            {/* Right: Port & Logistics Hub */}
            <div className="sm:pl-8">
              <h4 className="text-lg font-bold text-white font-heading mb-3">
                {isEn ? "Port & Cold Chain Logistics" : "Logistique & Fret Maritime"}
              </h4>
              <p className="text-xs text-emerald-100 leading-relaxed mb-3">
                Port Autonome de Dakar (PAD) Terminal & Magasins Sous Douane
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-emerald-300">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Maritime Containers (FCL) · Dakar to West Africa & Worldwide</span>
              </div>
            </div>

          </div>

          {/* Social Icons (Matching Screenshot 7) */}
          <div className="mt-10 flex items-center justify-center gap-3">
            {[
              { name: "Facebook", bg: "bg-blue-600", letter: "f" },
              { name: "Twitter", bg: "bg-sky-500", letter: "X" },
              { name: "LinkedIn", bg: "bg-blue-700", letter: "in" },
              { name: "YouTube", bg: "bg-red-600", letter: "▶" },
              { name: "Instagram", bg: "bg-pink-600", letter: "ig" },
            ].map((s, idx) => (
              <a
                key={idx}
                href="https://wa.me/221776220000"
                target="_blank"
                rel="noopener noreferrer"
                title={s.name}
                className={`w-9 h-9 rounded-full ${s.bg} flex items-center justify-center text-white text-xs font-bold hover:scale-110 transition-transform shadow-md`}
              >
                {s.letter}
              </a>
            ))}
          </div>

          {/* Quick Page Links */}
          {onNavigate && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-bold text-emerald-200">
              <button
                type="button"
                onClick={() => onNavigate("home")}
                className="hover:text-amber-300 transition-colors cursor-pointer"
              >
                {isEn ? "Home" : "Accueil"}
              </button>
              <span className="text-emerald-700">•</span>
              <button
                type="button"
                onClick={() => onNavigate("about")}
                className="hover:text-amber-300 transition-colors cursor-pointer"
              >
                {isEn ? "About Us (aboutus.html)" : "À Propos"}
              </button>
              <span className="text-emerald-700">•</span>
              <button
                type="button"
                onClick={() => onNavigate("products")}
                className="hover:text-amber-300 transition-colors cursor-pointer"
              >
                {isEn ? "Products (product.html)" : "Nos Produits"}
              </button>
              <span className="text-emerald-700">•</span>
              <button
                type="button"
                onClick={() => onNavigate("quality")}
                className="hover:text-amber-300 transition-colors cursor-pointer"
              >
                {isEn ? "Quality (quatily.html)" : "Qualité & Normes"}
              </button>
              <span className="text-emerald-700">•</span>
              <button
                type="button"
                onClick={() => onNavigate("contact")}
                className="hover:text-amber-300 transition-colors cursor-pointer"
              >
                {isEn ? "Contact (contact.html)" : "Contact"}
              </button>
            </div>
          )}

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-emerald-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-300 gap-4 mb-8">
          <div>
            Copyright © {new Date().getFullYear()} <strong className="text-white">BEST FOODS</strong> | All Rights Reserved.
          </div>
          <div className="text-[11px] text-emerald-400">
            Hann Maristes en Face Coris Bank, Dakar - Sénégal
          </div>
        </div>

      </div>

      {/* Exact Footer Bottom Band matching Image 2 */}
      <FooterBottomBand currentLang={currentLang} />

      {/* Floating Scroll to Top Button (matching screenshot arrow up) */}
      <button
        type="button"
        onClick={onScrollToTop}
        className="fixed bottom-24 right-6 z-40 w-11 h-11 rounded-lg bg-neutral-700/80 hover:bg-neutral-800 text-white flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1 focus:outline-none"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Floating WhatsApp Quick Action Button (Matching Screenshot green circular icon) */}
      <a
        href="https://wa.me/221776220000?text=Hello%20BEST%20FOODS,%20I%20would%20like%20to%20order%20or%20request%20a%20quote"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 focus:outline-none ring-4 ring-white/30"
        title="WhatsApp: +221 77 622 00 00 / Modou Sourang"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>

    </footer>
  );
}
