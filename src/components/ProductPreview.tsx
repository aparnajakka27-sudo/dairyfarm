import React from 'react';
import { ArrowDownRight, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { PRODUCTS } from '../data/farmCatalog';
import { Translations } from '../data/translations';
import { useReveal } from '../hooks/useReveal';
import { SafeImage } from './SafeImage';

interface ProductPreviewProps {
  language: Language;
  t: Translations;
  onSelectProduct: (productId: string, packSizeId: string) => void;
}

export const ProductPreview: React.FC<ProductPreviewProps> = ({
  language,
  t,
  onSelectProduct,
}) => {
  const { ref, isVisible } = useReveal();

  return (
    <section id="our-products" className="py-20 lg:py-24 bg-[#F7F1E3]">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-section ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#C49A52] block mb-2.5">
              {t.productPreview.eyebrow}
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-semibold text-[#183D2B] leading-[1.1] mb-4">
              {t.productPreview.heading}
            </h2>
            <p className="text-base text-[#4E5C53] leading-relaxed">
              {t.productPreview.subheading}
            </p>
          </div>

          <a
            href="#products-pricing"
            className="inline-flex items-center gap-2 self-start lg:self-end px-5 py-3 border border-[#183D2B]/30 hover:border-[#183D2B] bg-[#FBF8F0] text-[#183D2B] text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors"
          >
            <span>{t.productPreview.viewPricingCta}</span>
            <ArrowDownRight className="w-4 h-4 text-[#C49A52]" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="group bg-[#FBF8F0] border border-[#183D2B]/12 rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:border-[#C49A52]/70 hover:shadow-[0_14px_34px_rgba(24,61,43,0.07)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EDE4CF]">
                <SafeImage
                  src={product.image}
                  alt={product.name[language]}
                  fallbackLabel={product.name[language]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#F7F1E3]/92 border border-[#183D2B]/15 text-[11px] font-semibold tracking-wide uppercase text-[#183D2B] rounded-xs">
                  {product.categoryTag[language]}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif-editorial text-2xl font-semibold text-[#183D2B]">
                    {product.name[language]}
                  </h3>
                  <Sparkles className="w-4 h-4 text-[#C49A52] shrink-0 mt-1.5" />
                </div>

                <p className="text-sm text-[#4E5C53] leading-relaxed mb-5 flex-1">
                  {product.shortDescription[language]}
                </p>

                <div className="pt-4 border-t border-[#183D2B]/10 flex items-center justify-between gap-3">
                  <span className="text-xs font-medium text-[#4E5C53]">
                    {product.freshnessNote[language]}
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectProduct(product.id, product.packSizes[0].id)}
                    className="text-xs font-semibold uppercase tracking-wider text-[#183D2B] hover:text-[#A67E38] transition-colors cursor-pointer"
                  >
                    {t.productPreview.enquireItemCta} →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
