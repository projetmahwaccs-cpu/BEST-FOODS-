export interface ContactPerson {
  name: string;
  role: string;
  roleFr: string;
  phone: string;
  phoneFormatted: string;
  whatsappUrl: string;
  avatarInitials: string;
}

export const COMPANY_DETAILS = {
  name: "BEST FOODS",
  legalName: "BEST FOODS GROUP SARL",
  taglineEn: "International Agro Commodities & Spices Import-Export",
  taglineFr: "Import-Export & Négoce International de Produits Agroalimentaires et Épices",
  email: "bestfoodsgroup@gmail.com",
  address: "Hann Maristes en Face Coris Bank, DAKAR - SÉNÉGAL",
  city: "Dakar",
  country: "Sénégal",
  hours: "Mon - Sat: 08:00 - 18:30 (GMT)",
  coordinates: {
    lat: 14.7337,
    lng: -17.4323,
    landmark: "Hann Maristes en Face Coris Bank, Dakar",
  },
  contacts: [
    {
      name: "MODOU SOURANG",
      role: "Managing Director / Commercial & Exports",
      roleFr: "Directeur Général / Commercial & Export",
      phone: "+221776220000",
      phoneFormatted: "+221 77 622 00 00",
      altPhone: "+221776990000",
      altPhoneFormatted: "+221 77 699 00 00",
      whatsappUrl: "https://wa.me/221776220000",
      avatarInitials: "MS",
    },
    {
      name: "DJILY SOURANG",
      role: "Operations & Supply Chain Director",
      roleFr: "Directeur des Opérations & Logistique",
      phone: "+221773360000",
      phoneFormatted: "+221 77 336 00 00",
      altPhone: null,
      altPhoneFormatted: null,
      whatsappUrl: "https://wa.me/221773360000",
      avatarInitials: "DS",
    },
  ],
  allPhones: [
    { number: "+221776220000", display: "+221 77 622 00 00", assignedTo: "Modou Sourang" },
    { number: "+221776990000", display: "+221 77 699 00 00", assignedTo: "Modou Sourang" },
    { number: "+221773360000", display: "+221 77 336 00 00", assignedTo: "Djily Sourang" },
  ],
};

export function buildWhatsAppLink(phone: string, message: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
