import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { WelcomeSection } from "./components/WelcomeSection";
import { ProductCardGrid } from "./components/ProductCardGrid";
import { ProductPage } from "./components/ProductPage";
import { ProductDetailPage } from "./components/ProductDetailPage";
import { AboutUsPage } from "./components/AboutUsPage";
import { QualityPage } from "./components/QualityPage";
import { ContactPage } from "./components/ContactPage";
import { ExpertiseSection } from "./components/ExpertiseSection";
import { WhyUsSection } from "./components/WhyUsSection";
import { GallerySection } from "./components/GallerySection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ProductModal } from "./components/ProductModal";
import { QuoteModal } from "./components/QuoteModal";
import { ProductItem } from "./data/products";

export default function App() {
  const [currentLang, setCurrentLang] = useState<"en" | "fr">("fr");
  const [activePage, setActivePage] = useState<"home" | "products" | "about" | "quality" | "contact" | "product-detail">("home");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedProductForModal, setSelectedProductForModal] = useState<ProductItem | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [quoteProduct, setQuoteProduct] = useState<ProductItem | null>(null);

  useEffect(() => {
    // Check if initial URL or hash points to product, about, quality or contact
    const checkRoute = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes("about") || hash.includes("about")) {
        setActivePage("about");
      } else if (path.includes("product") || hash.includes("product")) {
        setActivePage("products");
      } else if (path.includes("qualit") || hash.includes("qualit") || path.includes("quatil") || hash.includes("quatil")) {
        setActivePage("quality");
      } else if (path.includes("contact") || hash.includes("contact")) {
        setActivePage("contact");
      }
    };

    checkRoute();
    window.addEventListener("hashchange", checkRoute);
    return () => window.removeEventListener("hashchange", checkRoute);
  }, []);

  const handleOpenQuote = (product?: ProductItem) => {
    setQuoteProduct(product || null);
    setQuoteModalOpen(true);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLearnMore = () => {
    setActivePage("about");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = (page: "home" | "products" | "about" | "quality" | "contact", sectionId?: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  };

  // When user clicks a product anywhere (grid, cards, table): open complete dedicated product page!
  const handleOpenProductDetailPage = (product: ProductItem) => {
    setSelectedProduct(product);
    setActivePage("product-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans">
      {/* 1. Dynamic Header with solid green at top and frosted glass effect on scroll */}
      <Header
        currentLang={currentLang}
        activePage={activePage}
        onToggleLang={setCurrentLang}
        onRequestQuote={() => handleOpenQuote()}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        {activePage === "about" ? (
          /* Dedicated About Us page matching exact hero section */
          <AboutUsPage
            currentLang={currentLang}
            onBackToHome={() => handleNavigate("home")}
            onRequestQuote={() => handleOpenQuote()}
          />
        ) : activePage === "quality" ? (
          /* Dedicated Quality page matching exact hero section */
          <QualityPage
            currentLang={currentLang}
            onBackToHome={() => handleNavigate("home")}
            onRequestQuote={() => handleOpenQuote()}
          />
        ) : activePage === "contact" ? (
          /* Dedicated Contact page matching exact hero section */
          <ContactPage
            currentLang={currentLang}
            onBackToHome={() => handleNavigate("home")}
            onRequestQuote={() => handleOpenQuote()}
          />
        ) : activePage === "product-detail" && selectedProduct ? (
          /* Dedicated Full Product Page with clean specs & instant actions */
          <ProductDetailPage
            product={selectedProduct}
            currentLang={currentLang}
            onBack={() => {
              setActivePage("products");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onSelectAnotherProduct={(prod) => {
              setSelectedProduct(prod);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onRequestQuote={(prod) => handleOpenQuote(prod)}
          />
        ) : activePage === "products" ? (
          /* Dedicated Product page matching exact hero section */
          <ProductPage
            currentLang={currentLang}
            onSelectProduct={(product) => handleOpenProductDetailPage(product)}
            onRequestQuote={(product) => handleOpenQuote(product)}
            onBackToHome={() => handleNavigate("home")}
          />
        ) : (
          /* Main Homepage matching Bhandari Agro layout with exact Product Cards from Image 1 */
          <>
            {/* 2. Hero Banner with curved bottom wave */}
            <HeroBanner
              currentLang={currentLang}
              onLearnMore={handleLearnMore}
              onRequestQuote={() => handleOpenQuote()}
            />

            {/* 3. Welcome to BEST FOODS Section */}
            <WelcomeSection
              currentLang={currentLang}
              onLearnMore={() => handleNavigate("about")}
            />

            {/* 4. Nos Produits Cards Matching Image 1 (2 Rows: 6 & 7 items) */}
            <ProductCardGrid
              currentLang={currentLang}
              onSelectProduct={(product) => handleOpenProductDetailPage(product)}
              onRequestQuote={(product) => handleOpenQuote(product)}
            />

            {/* 5. Expertise & Quality Standards (3 Circular Pillars + Video) */}
            <ExpertiseSection currentLang={currentLang} />

            {/* 6. Why Us? with green leaf bullets */}
            <WhyUsSection currentLang={currentLang} />

            {/* 7. Facility & Products Gallery */}
            <GallerySection currentLang={currentLang} />

            {/* 8. Contact & Executives (Modou Sourang & Djily Sourang) */}
            <ContactSection currentLang={currentLang} />
          </>
        )}
      </main>

      {/* 10. Deep Green Footer + Exact Footer Bottom Band from Image 2 */}
      <Footer
        currentLang={currentLang}
        onScrollToTop={handleScrollToTop}
        onNavigate={handleNavigate}
      />

      {/* Product Technical Specs Quick Modal fallback */}
      <ProductModal
        product={selectedProductForModal}
        currentLang={currentLang}
        onClose={() => setSelectedProductForModal(null)}
        onRequestQuote={(prod) => {
          setSelectedProductForModal(null);
          handleOpenQuote(prod);
        }}
      />

      {/* Request For Quote (RFQ) Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        initialProduct={quoteProduct}
        currentLang={currentLang}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}
