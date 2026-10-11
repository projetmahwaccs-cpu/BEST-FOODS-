import { useState, useEffect } from "react";
import { 
  Home, 
  Info, 
  Package, 
  Image as ImageIcon, 
  Award, 
  FileText, 
  PhoneCall, 
  Menu, 
  X,
  ChevronDown,
  Phone,
  MessageCircle
} from "lucide-react";
import { Logo } from "./Logo";
import { FontSelector } from "./FontSelector";
import { COMPANY_DETAILS } from "../data/contacts";

interface HeaderProps {
  currentLang: "en" | "fr";
  activePage: "home" | "products" | "about" | "quality" | "contact" | "product-detail";
  onToggleLang: (lang: "en" | "fr") => void;
  onRequestQuote: () => void;
  onNavigate: (page: "home" | "products" | "about" | "quality" | "contact", sectionId?: string) => void;
}

export function Header({
  currentLang,
  activePage,
  onToggleLang,
  onRequestQuote,
  onNavigate,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isEn = currentLang === "en";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: "home", label: isEn ? "Home" : "Accueil", page: "home" as const, icon: Home },
    { id: "about", label: isEn ? "About us" : "À propos", page: "about" as const, icon: Info },
    { id: "products", label: isEn ? "Products" : "Produits", page: "products" as const, hasDropdown: true, icon: Package },
    { id: "quality", label: isEn ? "Quality" : "Qualité", page: "quality" as const, icon: FileText },
    { id: "gallery", label: isEn ? "Gallery" : "Galerie", page: "home" as const, section: "gallery", icon: ImageIcon },
    { id: "contact", label: isEn ? "Contact" : "Contact", page: "contact" as const, icon: PhoneCall },
  ];

  const handleItemClick = (page: "home" | "products" | "about" | "quality" | "contact", section?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, section);
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Dynamic top bar: Switches from solid brand green to frosted glass blur when scrolled */}
      <div 
        className={`relative transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-neutral-200/80 text-neutral-800"
            : "bg-[#0e5831] shadow-md text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24 transition-all">
            
            {/* Logo Island: adapting smoothly to mobile screen sizes & glass scroll */}
            <div className={`relative z-10 transition-transform ${isScrolled ? "-mb-2" : "-mb-4 sm:-mb-6"}`}>
              <button
                type="button"
                onClick={() => handleItemClick("home")}
                className={`px-3 sm:px-5 py-2 sm:py-3 rounded-b-2xl shadow-lg border-b-2 border-x transition-all duration-300 flex items-center gap-2 sm:gap-3 text-left cursor-pointer ${
                  isScrolled
                    ? "bg-white/95 backdrop-blur-sm border-neutral-300 shadow-neutral-400/20"
                    : "bg-white border-neutral-200/80 hover:scale-[1.01]"
                }`}
                aria-label="BEST FOODS Home"
              >
                {/* Responsive size: sm on mobile screens, md on tablets and desktop */}
                <div className="block sm:hidden">
                  <Logo size="sm" showText={true} />
                </div>
                <div className="hidden sm:block">
                  <Logo size="md" showText={true} />
                </div>
              </button>
            </div>

            {/* Desktop Navigation with Leaf/Circle Icons (Visible on large screens) */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
              {navItems.map((item) => {
                const isCurrent =
                  (item.page === activePage && !item.section) ||
                  (item.id === "products" && (activePage === "products" || activePage === "product-detail"));

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleItemClick(item.page, item.section)}
                    className={`group flex flex-col items-center transition-all text-xs font-semibold cursor-pointer ${
                      isScrolled
                        ? isCurrent
                          ? "text-[#0e5831] font-extrabold"
                          : "text-neutral-700 hover:text-[#0e5831]"
                        : isCurrent
                          ? "text-amber-300 font-bold"
                          : "text-white/90 hover:text-white"
                    }`}
                  >
                    {/* Circle badge with green leaf/icon inside */}
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center mb-1 transition-all shadow-xs group-hover:scale-105 ${
                        isScrolled
                          ? isCurrent
                            ? "bg-[#0e5831] border-[#0e5831] text-white"
                            : "bg-neutral-100 group-hover:bg-emerald-100/70 border-neutral-300/80 text-emerald-800"
                          : isCurrent
                            ? "bg-[#229757] border-amber-300 text-amber-200"
                            : "bg-[#187543] group-hover:bg-[#229757] border-emerald-400/30 text-emerald-100"
                      }`}
                    >
                      <svg 
                        viewBox="0 0 24 24" 
                        className={`w-4 h-4 ${
                          isScrolled
                            ? isCurrent
                              ? "fill-white stroke-white"
                              : "fill-[#0e5831] stroke-[#0e5831]"
                            : "fill-emerald-200 stroke-emerald-100"
                        }`} 
                        strokeWidth="1"
                      >
                        <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 4C16.4 4 20 7.6 20 12C20 16.4 16.4 20 12 20C7.6 20 4 16.4 4 12C4 7.6 7.6 4 12 4Z" opacity="0.2"/>
                        <path d="M17 8C12 8 8 12 8 17C13 17 17 13 17 8Z" />
                        <path d="M8 17L12 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <span>{item.label}</span>
                      {item.hasDropdown && <ChevronDown className="w-3 h-3 opacity-70 group-hover:opacity-100" />}
                    </div>
                  </button>
                );
              })}
            </nav>

            {/* Desktop Right Action: Language Switcher, Font Selector & Quote CTA */}
            <div className="hidden lg:flex items-center gap-2.5">
              {/* Font Selector */}
              <FontSelector currentLang={currentLang} isScrolled={isScrolled} />

              {/* Language Switch */}
              <div 
                className={`flex items-center p-0.5 rounded-full border text-[11px] font-bold transition-colors ${
                  isScrolled
                    ? "bg-neutral-100 border-neutral-300 text-neutral-800"
                    : "bg-[#0b4325] border-emerald-600/50 text-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => onToggleLang("fr")}
                  className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                    currentLang === "fr" 
                      ? "bg-amber-500 text-neutral-950 shadow-xs" 
                      : "opacity-75 hover:opacity-100"
                  }`}
                >
                  FR
                </button>
                <button
                  type="button"
                  onClick={() => onToggleLang("en")}
                  className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                    currentLang === "en" 
                      ? "bg-amber-500 text-neutral-950 shadow-xs" 
                      : "opacity-75 hover:opacity-100"
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Quote CTA */}
              <button
                type="button"
                onClick={onRequestQuote}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#e87817] hover:bg-[#d46a0f] rounded-full transition-all shadow-md active:scale-95 cursor-pointer"
              >
                {isEn ? "Get Quote" : "Devis Express"}
              </button>
            </div>

            {/* MOBILE & TABLET ACTION BAR (Prominent Hamburger Menu for Phones) */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 lg:hidden">
              {/* Font Selector on mobile */}
              <FontSelector currentLang={currentLang} isScrolled={isScrolled} />

              {/* Language Switcher pill on mobile */}
              <div 
                className={`flex items-center p-0.5 rounded-full border text-[10px] sm:text-[11px] font-bold transition-colors ${
                  isScrolled
                    ? "bg-neutral-100 border-neutral-300 text-neutral-800"
                    : "bg-[#0b4325] border-emerald-600/50 text-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => onToggleLang("fr")}
                  className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                    currentLang === "fr" ? "bg-amber-500 text-neutral-950 font-black" : "opacity-75"
                  }`}
                >
                  FR
                </button>
                <button
                  type="button"
                  onClick={() => onToggleLang("en")}
                  className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                    currentLang === "en" ? "bg-amber-500 text-neutral-950 font-black" : "opacity-75"
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Quick Devis button on small devices */}
              <button
                type="button"
                onClick={onRequestQuote}
                className="hidden xs:inline-flex px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white bg-[#e87817] hover:bg-[#d46a0f] rounded-full shadow-xs active:scale-95 cursor-pointer"
              >
                {isEn ? "Quote" : "Devis"}
              </button>

              {/* DEDICATED PROMINENT BURGER BUTTON FOR MOBILE / PHONE */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2.5 sm:p-3 rounded-xl border flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-90 ${
                  isScrolled
                    ? mobileMenuOpen
                      ? "bg-red-500 text-white border-red-600 shadow-md"
                      : "bg-[#0e5831] text-white border-emerald-800 hover:bg-[#146b3d]"
                    : mobileMenuOpen
                      ? "bg-red-500 text-white border-red-600 shadow-md"
                      : "bg-[#187543] text-white border-emerald-400/40 hover:bg-[#208c52]"
                }`}
                aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu de navigation mobile (Burger)"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 stroke-[2.5]" />
                ) : (
                  <div className="flex flex-col justify-center items-center gap-1.2 w-6 h-6">
                    <span className="block h-0.5 w-6 bg-current rounded-full transition-transform"></span>
                    <span className="block h-0.5 w-6 bg-current rounded-full transition-opacity"></span>
                    <span className="block h-0.5 w-6 bg-current rounded-full transition-transform"></span>
                  </div>
                )}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* FULL-SCREEN MOBILE BURGER DRAWER FOR SMARTPHONES */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-x-0 top-20 sm:top-24 bottom-0 z-40 bg-white/95 backdrop-blur-xl border-t border-neutral-200 overflow-y-auto animate-in slide-in-from-top-4 duration-200 flex flex-col justify-between p-5 sm:p-6 shadow-2xl text-neutral-800"
          role="dialog"
          aria-modal="true"
        >
          {/* Navigation Items List */}
          <div className="space-y-2">
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#0e5831] px-2 mb-2 flex items-center justify-between">
              <span>{isEn ? "Navigation Menu" : "Menu de Navigation"}</span>
              <span className="text-neutral-400 font-mono text-[10px]">BEST FOODS DAKAR</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {navItems.map((item) => {
                const isCurrent =
                  (item.page === activePage && !item.section) ||
                  (item.id === "products" && (activePage === "products" || activePage === "product-detail"));

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleItemClick(item.page, item.section)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-bold transition-all text-left cursor-pointer border ${
                      isCurrent
                        ? "bg-[#0e5831] text-white border-[#0e5831] shadow-md shadow-emerald-900/20"
                        : "bg-neutral-50 hover:bg-emerald-50 text-neutral-800 border-neutral-200/90"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                          isCurrent ? "bg-white/20 text-white" : "bg-[#0e5831]/10 text-[#0e5831]"
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="tracking-wide">{item.label}</span>
                    </div>

                    <ChevronDown className={`w-4 h-4 -rotate-90 opacity-40 ${isCurrent ? "text-white opacity-80" : ""}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Actions inside the Burger drawer */}
          <div className="pt-6 mt-6 border-t border-neutral-200 space-y-3">
            {/* Quick Quotation CTA */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#e87817] hover:bg-[#d6690d] rounded-xl text-center cursor-pointer shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2"
            >
              <span>{isEn ? "Request Instant Quotation" : "Demander une Cotation Immédiate"}</span>
            </button>

            {/* Direct WhatsApp Call & Chat */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://wa.me/221776220000"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:+221776220000"
                className="py-3 px-3 bg-[#0e5831] hover:bg-[#146b3d] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-95"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Appeler</span>
              </a>
            </div>

            {/* Address snippet */}
            <div className="text-center text-[11px] text-neutral-500 pt-1">
              Hann Maristes en Face Coris Bank, DAKAR — SÉNÉGAL
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
