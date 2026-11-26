import { useState } from 'react';
import { Language } from './types';
import { TRANSLATIONS } from './data/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustHighlights } from './components/TrustHighlights';
import { ProductPreview } from './components/ProductPreview';
import { ProductsPricingSection } from './components/ProductsPricingSection';
import { FarmStory } from './components/FarmStory';
import { DeliverySection } from './components/DeliverySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderEnquiryModal } from './components/OrderEnquiryModal';

export function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [orderModalState, setOrderModalState] = useState<{
    isOpen: boolean;
    productId?: string;
    packSizeId?: string;
  }>({ isOpen: false });

  const t = TRANSLATIONS[language];

  const openOrderModal = (productId?: string, packSizeId?: string) => {
    setOrderModalState({ isOpen: true, productId, packSizeId });
  };

  const closeOrderModal = () => {
    setOrderModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F1E3] text-[#26332B]">
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        t={t}
        onOpenOrderModal={() => openOrderModal()}
      />

      <main className="flex-1">
        <Hero t={t} />
        <TrustHighlights t={t} />
        <ProductPreview
          language={language}
          t={t}
          onSelectProduct={(productId, packSizeId) => openOrderModal(productId, packSizeId)}
        />
        <ProductsPricingSection
          language={language}
          t={t}
          onOrderNow={(productId, packSizeId) => openOrderModal(productId, packSizeId)}
        />
        <FarmStory language={language} t={t} />
        <DeliverySection
          language={language}
          t={t}
          onOpenOrderModal={() => openOrderModal()}
        />
        <WhyChooseUs t={t} />
        <GallerySection t={t} />
        <ContactSection
          language={language}
          t={t}
          onOpenOrderModal={() => openOrderModal()}
        />
      </main>

      <Footer language={language} onLanguageChange={setLanguage} t={t} />

      <OrderEnquiryModal
        isOpen={orderModalState.isOpen}
        onClose={closeOrderModal}
        language={language}
        t={t}
        initialProductId={orderModalState.productId}
        initialPackSizeId={orderModalState.packSizeId}
      />
    </div>
  );
}

export default App;
