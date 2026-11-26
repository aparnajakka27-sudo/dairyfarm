import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { Translations } from '../data/translations';
import { SafeImage } from './SafeImage';

interface HeroProps {
  t: Translations;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section
      id="home"
      className="relative min-h-[82vh] lg:min-h-[88vh] flex items-end lg:items-center overflow-hidden bg-[#183D2B]"
    >
      {/* Background Farm Image */}
      <div className="absolute inset-0">
        <SafeImage
          src="/images/hero-farm.jpg"
          alt="Healthy Indian dairy cows grazing on lush green pastures at morning hour"
          fallbackLabel="SINDHU AKULA – Dairy & Farms"
          loading="eager"
          className="w-full h-full object-cover object-center scale-[1.01]"
        />
        {/* Targeted directional overlay ONLY for crisp text legibility without muddying the sunny pasture */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(95deg, rgba(16, 41, 29, 0.86) 0%, rgba(24, 61, 43, 0.68) 45%, rgba(24, 61, 43, 0.16) 100%)',
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-28"
          style={{
            background: 'linear-gradient(to top, rgba(16, 41, 29, 0.55), transparent)',
          }}
        />
      </div>

      {/* Editorial Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[#C49A52]" />
            <span className="text-xs sm:text-[13px] font-semibold tracking-[0.26em] uppercase text-[#F7F1E3]/90">
              {t.hero.eyebrow}
            </span>
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-6xl lg:text-[68px] font-semibold text-[#F7F1E3] leading-[1.04] tracking-tight mb-6">
            {t.hero.heading}
          </h1>

          <p className="text-base sm:text-xl text-[#F7F1E3]/90 font-normal leading-relaxed max-w-xl mb-10">
            {t.hero.subheading}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#products-pricing"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#C49A52] hover:bg-[#b58a42] text-[#112B1E] text-sm font-semibold tracking-wide rounded-sm transition-colors shadow-sm"
            >
              <span>{t.hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#183D2B]/70 hover:bg-[#183D2B] text-[#F7F1E3] text-sm font-semibold tracking-wide rounded-sm border border-[#F7F1E3]/40 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#C49A52]" />
              <span>{t.hero.secondaryCta}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Editorial Strip */}
      <div className="hidden md:flex absolute bottom-6 right-8 z-10 items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#F7F1E3]/80">
        <span>{t.hero.editorialNote}</span>
        <span className="w-6 h-[1px] bg-[#C49A52]" />
      </div>
    </section>
  );
};
