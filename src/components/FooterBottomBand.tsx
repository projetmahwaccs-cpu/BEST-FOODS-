import { Mail, MapPin, MessageCircle, Users } from "lucide-react";
import { COMPANY_DETAILS } from "../data/contacts";

interface FooterBottomBandProps {
  currentLang?: "en" | "fr";
}

export function FooterBottomBand({ currentLang = "fr" }: FooterBottomBandProps) {
  const isEn = currentLang === "en";

  return (
    <div className="w-full bg-[#084222] border-t-2 border-emerald-700/50 border-b-4 border-[#e87817] text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 items-center">
          
          {/* Section 1: Email */}
          <div className="flex items-center gap-3.5 lg:border-r lg:border-amber-500/40 lg:pr-4">
            <div className="w-11 h-11 rounded-full bg-[#d97706] flex items-center justify-center shrink-0 shadow-sm border border-amber-300/40">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="text-xs font-bold text-amber-400 tracking-wide">
                Email :
              </div>
              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="text-xs sm:text-sm font-semibold text-white hover:text-amber-200 transition-colors break-all"
              >
                {COMPANY_DETAILS.email}
              </a>
            </div>
          </div>

          {/* Section 2: Adresse */}
          <div className="flex items-center gap-3.5 lg:border-r lg:border-amber-500/40 lg:pr-4">
            <div className="w-11 h-11 rounded-full bg-[#d97706] flex items-center justify-center shrink-0 shadow-sm border border-amber-300/40">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight text-xs sm:text-sm text-white font-semibold">
              <div className="text-xs font-bold text-amber-400 tracking-wide">
                {isEn ? "Address :" : "Adresse :"}
              </div>
              <div>Hann Maristes en Face Coris Bank</div>
              <div className="text-[11px] text-emerald-200 font-bold uppercase tracking-wider">
                DAKAR—SENEGAL
              </div>
            </div>
          </div>

          {/* Section 3: WhatsApp Web */}
          <div className="flex items-center gap-3.5 lg:border-r lg:border-amber-500/40 lg:pr-4">
            <div className="w-11 h-11 rounded-full bg-[#d97706] flex items-center justify-center shrink-0 shadow-sm border border-amber-300/40">
              <MessageCircle className="w-5 h-5 text-white fill-white" />
            </div>
            <div className="leading-tight text-xs text-white">
              <div className="text-xs font-bold text-amber-400 tracking-wide">
                WhatsApp Web :
              </div>
              <div className="font-semibold text-[13px] text-white">
                <a
                  href="https://wa.me/221776220000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  +221 77 622 00 00
                </a>
                {" | "}
                <a
                  href="https://wa.me/221776990000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  +221 77 699 00 00
                </a>
              </div>
              <div className="text-xs font-medium text-emerald-200">
                {isEn ? "or " : "ou "}
                <a
                  href="https://wa.me/221773360000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 font-semibold hover:underline"
                >
                  +221 77 336 00 00
                </a>
              </div>
            </div>
          </div>

          {/* Section 4: Contacts */}
          <div className="flex items-center gap-3.5 lg:pl-2">
            <div className="w-11 h-11 rounded-full bg-[#d97706] flex items-center justify-center shrink-0 shadow-sm border border-amber-300/40">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight text-xs text-white">
              <div className="text-xs font-bold text-amber-400 tracking-wide">
                Contacts :
              </div>
              <ul className="space-y-0.5 mt-0.5 font-semibold text-xs text-white">
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>MODOU SOURANG</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Djily SOURANG</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
