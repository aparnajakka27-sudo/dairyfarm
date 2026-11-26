import React, { useState } from 'react';
import { Info, ShoppingBag, Check } from 'lucide-react';
import { Language } from '../types';
import { DEMO_PRICING_META, PRODUCTS } from '../data/farmCatalog';
import { Translations } from '../data/translations';
import { useReveal } from '../hooks/useReveal';
import { SafeImage } from './SafeImage';

interface ProductsPricingSectionProps {
  language: Language;
  t: Translations;
  onOrderNow: (productId: string, packSizeId: string) => void;
}

export const ProductsPricingSection: React.FC<ProductsPricingSectionProps> = ({
  language,
  t,
  onOrderNow,
}) => {
  const { ref, isVisible } = useReveal();
  // Track selected pack size per product card
  const [selectedPacks, setSelectedPacks] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    PRODUCTS.forEach((p) => {
      initial[p.id] = p.packSizes[0].id;
    });
    return initial;
  });

  const handleSelectPack = (productId: string, packId: string) => {
    setSelectedPacks((prev) => ({ ...prev, [productId]: packId }));
  };

  return (
    <section
      id="products-pricing"
      className="py-20 lg:py-24 bg-[#FBF8F0] border-y border-[#183D2B]/12"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-section ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        {/* Header & Clear Demo Notice */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#C49A52] block mb-2.5">
              {t.pricingSection.eyebrow}
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-semibold text-[#183D2B] leading-[1.1] mb-4">
              {t.pricingSection.heading}
            </h2>
            <p className="text-base text-[#4E5C53] leading-relaxed max-w-2xl">
              {t.pricingSection.subheading}
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#DCE6D6]/55 border border-[#183D2B]/20 rounded-sm p-5">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#183D2B] shrink-0 mt-0.5" />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#183D2B]">
                    {t.pricingSection.demoBannerTitle}
                  </span>
                  <span className="px-2 py-0.5 bg-[#C49A52] text-[#112B1E] text-[10px] font-bold uppercase tracking-wider rounded-xs">
                    {DEMO_PRICING_META.badgeLabel[language]}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#26332B] leading-relaxed">
                  {DEMO_PRICING_META.noticeText[language]}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {PRODUCTS.map((product) => {
            const activePackId = selectedPacks[product.id] || product.packSizes[0].id;
            const activePack =
              product.packSizes.find((pk) => pk.id === activePackId) || product.packSizes[0];

            return (
              <div
                key={product.id}
                className="bg-[#F7F1E3] border border-[#183D2B]/15 rounded-sm overflow-hidden flex flex-col shadow-[0_4px_18px_rgba(24,61,43,0.04)] hover:border-[#C49A52] transition-colors duration-300"
              >
                <div className="relative aspect-[16/10] bg-[#EDE4CF] overflow-hidden">
                  <SafeImage
                    src={product.image}
                    alt={product.name[language]}
                    fallbackLabel={product.name[language]}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 right-3 px-2.5 py-1 bg-[#183D2B]/90 text-[#F7F1E3] border border-[#C49A52]/60 text-[10px] font-bold uppercase tracking-widest rounded-xs">
                    {DEMO_PRICING_META.badgeLabel[language]}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-serif-editorial text-2xl sm:text-[26px] font-semibold text-[#183D2B]">
                      {product.name[language]}
                    </h3>
                    <span className="text-[11px] font-medium uppercase tracking-wider text-[#C49A52]">
                      {product.freshnessNote[language]}
                    </span>
                  </div>

                  <p className="text-sm text-[#4E5C53] leading-relaxed mb-5">
                    {product.shortDescription[language]}
                  </p>

                  {/* Pack Size Selector */}
                  <div className="mb-5">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4E5C53] mb-2">
                      {t.pricingSection.packSizeLabel}
                    </span>
                    <div className="grid grid-cols-2 gap-2.5">
                      {product.packSizes.map((pack) => {
                        const isSelected = pack.id === activePack.id;
                        return (
                          <button
                            key={pack.id}
                            type="button"
                            onClick={() => handleSelectPack(product.id, pack.id)}
                            className={`flex items-center justify-between px-3 py-2.5 rounded-sm border text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#183D2B] text-[#F7F1E3] border-[#183D2B]'
                                : 'bg-[#FBF8F0] text-[#26332B] border-[#183D2B]/20 hover:border-[#C49A52]'
                            }`}
                          >
                            <span className="text-xs font-semibold">{pack.label[language]}</span>
                            <span
                              className={`text-xs font-bold ${
                                isSelected ? 'text-[#C49A52]' : 'text-[#183D2B]'
                              }`}
                            >
                              ₹{pack.demoPriceInr}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Price & Order CTA */}
                  <div className="mt-auto pt-4 border-t border-[#183D2B]/12 flex items-center justify-between gap-4">
                    <div>
                      <span className="block text-[10px] uppercase tracking-[0.16em] text-[#4E5C53] font-semibold">
                        {t.pricingSection.priceLabel} · {activePack.label[language]}
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-serif-editorial text-3xl font-bold text-[#183D2B]">
                          ₹{activePack.demoPriceInr}
                        </span>
                        <span className="text-[11px] font-semibold text-[#A67E38]">
                          ({DEMO_PRICING_META.badgeLabel[language]})
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOrderNow(product.id, activePack.id)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#183D2B] hover:bg-[#112B1E] text-[#F7F1E3] text-xs font-semibold uppercase tracking-wider rounded-sm border border-[#C49A52]/40 transition-colors cursor-pointer shrink-0"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#C49A52]" />
                      <span>{t.pricingSection.orderNowCta}</span>
                    </button>
                  </div>

                  <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-[#4E5C53]">
                    <Check className="w-3 h-3 text-[#183D2B]" />
                    <span>{t.pricingSection.perPackNote}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
