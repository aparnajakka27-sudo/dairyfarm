import React from 'react';
import { HeartHandshake, Milk, MessageCircle } from 'lucide-react';
import { Translations } from '../data/translations';
import { useReveal } from '../hooks/useReveal';

interface TrustHighlightsProps {
  t: Translations;
}

const ICONS = [HeartHandshake, Milk, MessageCircle];

export const TrustHighlights: React.FC<TrustHighlightsProps> = ({ t }) => {
  const { ref, isVisible } = useReveal();

  return (
    <section className="py-16 lg:py-20 bg-[#FBF8F0] border-b border-[#183D2B]/10">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-section ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-end mb-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#C49A52] block mb-2.5">
              {t.trust.eyebrow}
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl font-semibold text-[#183D2B] leading-tight">
              {t.trust.heading}
            </h2>
          </div>
          <div className="lg:col-span-7 hidden lg:block pb-2">
            <div className="editorial-rule" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {t.trust.items.map((item, idx) => {
            const Icon = ICONS[idx] || Milk;
            return (
              <div
                key={item.title}
                className="group bg-[#F7F1E3] border border-[#183D2B]/12 rounded-sm p-7 transition-colors duration-300 hover:border-[#C49A52]/70"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-sm bg-[#DCE6D6]/70 border border-[#183D2B]/15 flex items-center justify-center text-[#183D2B]">
                    <Icon className="w-5 h-5" strokeWidth={1.7} />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-[#4E5C53] font-medium">
                    0{idx + 1} · {item.meta}
                  </span>
                </div>

                <h3 className="font-serif-editorial text-2xl font-semibold text-[#183D2B] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4E5C53] leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
