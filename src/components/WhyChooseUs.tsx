import React from 'react';
import { ShieldCheck, Sprout, Clock3, Users } from 'lucide-react';
import { Translations } from '../data/translations';
import { useReveal } from '../hooks/useReveal';

interface WhyChooseUsProps {
  t: Translations;
}

const PROMISE_ICONS = [ShieldCheck, Sprout, Clock3, Users];

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ t }) => {
  const { ref, isVisible } = useReveal();

  return (
    <section id="our-promise" className="py-20 lg:py-24 bg-[#DCE6D6]/45 border-y border-[#183D2B]/10">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-section ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Sticky-style Left Editorial Column */}
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#C49A52] block mb-2.5">
              {t.whyChooseUs.eyebrow}
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-semibold text-[#183D2B] leading-[1.08] mb-4">
              {t.whyChooseUs.heading}
            </h2>
            <p className="text-base text-[#4E5C53] leading-relaxed mb-6">
              {t.whyChooseUs.subheading}
            </p>
            <span className="inline-block px-3 py-1 bg-[#F7F1E3] border border-[#183D2B]/15 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#183D2B] rounded-xs">
              {t.whyChooseUs.editableNote}
            </span>
          </div>

          {/* Clean 2x2 Architectural Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {t.whyChooseUs.items.map((item, idx) => {
              const Icon = PROMISE_ICONS[idx] || ShieldCheck;
              return (
                <div
                  key={item.title}
                  className="bg-[#FBF8F0] border border-[#183D2B]/12 rounded-sm p-6 sm:p-7 hover:border-[#C49A52]/70 transition-colors"
                >
                  <div className="w-10 h-10 rounded-sm bg-[#183D2B] text-[#C49A52] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" strokeWidth={1.7} />
                  </div>
                  <h3 className="font-serif-editorial text-2xl font-semibold text-[#183D2B] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4E5C53] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
