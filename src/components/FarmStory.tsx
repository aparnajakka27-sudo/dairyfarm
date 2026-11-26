import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { Language } from '../types';
import { Translations } from '../data/translations';
import { useReveal } from '../hooks/useReveal';
import { SafeImage } from './SafeImage';

interface FarmStoryProps {
  language: Language;
  t: Translations;
}

export const FarmStory: React.FC<FarmStoryProps> = ({ t }) => {
  const { ref, isVisible } = useReveal();
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="our-farm" className="py-20 lg:py-28 bg-[#F7F1E3] overflow-hidden">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-section ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Asymmetrical Editorial Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 border border-[#183D2B]/15 bg-[#FBF8F0] p-2.5 sm:p-3.5 rounded-sm shadow-[0_14px_36px_rgba(24,61,43,0.08)]">
              <div className="aspect-[4/3] overflow-hidden bg-[#DCE6D6]/50">
                <SafeImage
                  src="/images/farm-story.jpg"
                  alt="Serene dairy farm courtyard and fresh farm surroundings"
                  fallbackLabel="SINDHU AKULA – Dairy & Farms"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Subtle decorative gold & sage offset frame */}
            <div
              aria-hidden="true"
              className="hidden sm:block absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-[#C49A52]/55 rounded-sm pointer-events-none"
            />
          </div>

          {/* Editorial Copy */}
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#C49A52] block mb-3">
              {t.farmStory.eyebrow}
            </span>

            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-semibold text-[#183D2B] leading-[1.08] mb-5">
              {t.farmStory.heading}
            </h2>

            <p className="text-base sm:text-lg text-[#26332B] font-medium leading-relaxed mb-4">
              {t.farmStory.lead}
            </p>

            <p className="text-sm sm:text-base text-[#4E5C53] leading-relaxed mb-4">
              {t.farmStory.body1}
            </p>

            <p className="text-sm sm:text-base text-[#4E5C53] leading-relaxed mb-7">
              {t.farmStory.body2}
            </p>

            {/* Pillars Strip */}
            <div className="grid grid-cols-3 gap-4 py-5 border-y border-[#183D2B]/14 mb-7">
              {t.farmStory.pillars.map((pillar) => (
                <div key={pillar.label}>
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-[#C49A52] font-semibold mb-1">
                    {pillar.label}
                  </span>
                  <span className="font-serif-editorial text-lg sm:text-xl font-semibold text-[#183D2B]">
                    {pillar.value}
                  </span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#183D2B] hover:bg-[#112B1E] text-[#F7F1E3] text-xs font-semibold uppercase tracking-wider rounded-sm border border-[#C49A52]/40 transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#C49A52]" />
              <span>{t.farmStory.cta}</span>
              {expanded ? (
                <ChevronUp className="w-4 h-4 text-[#F7F1E3]/80" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#F7F1E3]/80" />
              )}
            </button>

            {expanded && (
              <div className="mt-4 p-4 bg-[#DCE6D6]/50 border border-[#183D2B]/15 rounded-sm text-sm text-[#26332B] leading-relaxed">
                {t.farmStory.expandedNote}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
