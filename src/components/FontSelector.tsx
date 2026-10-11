import { useState, useEffect } from "react";
import { Type, Check } from "lucide-react";

interface FontSelectorProps {
  currentLang: "en" | "fr";
  isScrolled?: boolean;
}

const FONTS = [
  { id: "montserrat", label: "Montserrat", desc: "Corporate & Bold (Default)" },
  { id: "poppins", label: "Poppins", desc: "Geometric & Smooth" },
  { id: "syne", label: "Syne", desc: "Bold Editorial" },
  { id: "inter", label: "Inter", desc: "Minimal & Clean" },
];

export function FontSelector({ currentLang, isScrolled = false }: FontSelectorProps) {
  const isEn = currentLang === "en";
  const [selectedFont, setSelectedFont] = useState<string>("montserrat");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("bf_website_font") || "montserrat";
    setSelectedFont(saved);
    applyFont(saved);
  }, []);

  const applyFont = (fontId: string) => {
    document.documentElement.setAttribute("data-font", fontId);
    document.body.setAttribute("data-font", fontId);
    localStorage.setItem("bf_website_font", fontId);
  };

  const handleSelect = (fontId: string) => {
    setSelectedFont(fontId);
    applyFont(fontId);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        title={isEn ? "Change website font" : "Changer la police du site"}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-bold transition-all cursor-pointer ${
          isScrolled
            ? "bg-neutral-100 hover:bg-neutral-200 border-neutral-300 text-neutral-800"
            : "bg-[#0b4325] hover:bg-[#125833] border-emerald-600/50 text-white"
        }`}
      >
        <Type className="w-3.5 h-3.5 text-amber-400" />
        <span className="capitalize hidden sm:inline">{selectedFont}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white text-neutral-900 rounded-xl shadow-xl border border-neutral-200 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
            <div className="px-3 py-1.5 border-b border-neutral-100 text-[10px] font-black uppercase tracking-wider text-neutral-400">
              {isEn ? "Select Font" : "Choisir la police"}
            </div>
            {FONTS.map((font) => (
              <button
                key={font.id}
                type="button"
                onClick={() => handleSelect(font.id)}
                className={`w-full px-3 py-2 text-left text-xs font-semibold flex items-center justify-between hover:bg-emerald-50 transition-colors cursor-pointer ${
                  selectedFont === font.id ? "text-[#0e5831] font-bold bg-emerald-50/50" : "text-neutral-700"
                }`}
              >
                <div>
                  <span className="block leading-tight">{font.label}</span>
                  <span className="text-[10px] text-neutral-400 font-normal">{font.desc}</span>
                </div>
                {selectedFont === font.id && <Check className="w-3.5 h-3.5 text-emerald-600" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
