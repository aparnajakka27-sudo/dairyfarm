import React from 'react';
import { Language } from '../types';
import { FARM_CONTACT } from '../data/farmCatalog';
import { Translations } from '../data/translations';

interface FooterProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  t: Translations;
}

const LANGUAGE_OPTIONS: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'hi', label: 'हिन्दी' },
];

export const Footer: React.FC<FooterProps> = ({ language, onLanguageChange, t }) => {
  return (
    <footer className="bg-[#112B1E] text-[#F7F1E3] border-t border-[#C49A52]/35">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#F7F1E3]/12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <span className="font-serif-editorial text-2xl font-bold tracking-[0.08em] text-[#F7F1E3] block">
                {FARM_CONTACT.brandName}
              </span>
              <span className="text-xs uppercase tracking-[0.22em] text-[#C49A52] font-semibold">
                {FARM_CONTACT.brandSubtitle[language]}
              </span>
            </div>
            <p className="font-serif-editorial italic text-xl text-[#DCE6D6] mb-4">
              “{t.footer.tagline}”
            </p>
            <p className="text-xs text-[#DCE6D6]/75 leading-relaxed max-w-sm">
              {t.footer.demoDisclaimer}
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C49A52] mb-4">
              {t.footer.navigationTitle}
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F7F1E3]/85">
              <li>
                <a href="#home" className="hover:text-[#C49A52] transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#products-pricing" className="hover:text-[#C49A52] transition-colors">
                  {t.nav.products}
                </a>
              </li>
              <li>
                <a href="#delivery" className="hover:text-[#C49A52] transition-colors">
                  {t.nav.delivery}
                </a>
              </li>
              <li>
                <a href="#our-farm" className="hover:text-[#C49A52] transition-colors">
                  {t.nav.farm}
                </a>
              </li>
              <li>
                <a href="#our-promise" className="hover:text-[#C49A52] transition-colors">
                  {t.nav.promise}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C49A52] transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Placeholders */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C49A52] mb-4">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-2.5 text-sm text-[#DCE6D6]/85">
              <li>{FARM_CONTACT.phoneDisplay}</li>
              <li className="break-all">{FARM_CONTACT.emailDisplay}</li>
              <li>{FARM_CONTACT.locationDisplay[language]}</li>
            </ul>
          </div>

          {/* Language & Social Placeholders */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C49A52] mb-3">
                {t.footer.languageTitle}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {LANGUAGE_OPTIONS.map((opt) => (
                  <button
                    key={opt.code}
                    type="button"
                    onClick={() => onLanguageChange(opt.code)}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-xs border transition-colors cursor-pointer ${
                      language === opt.code
                        ? 'bg-[#C49A52] text-[#112B1E] border-[#C49A52]'
                        : 'bg-transparent text-[#F7F1E3]/80 border-[#F7F1E3]/25 hover:border-[#C49A52]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C49A52] mb-2">
                {t.footer.socialTitle}
              </h4>
              <div className="flex flex-wrap gap-3 text-xs text-[#DCE6D6]/80">
                <a href="#contact" className="underline decoration-[#C49A52]/60 hover:text-[#C49A52]">
                  Instagram
                </a>
                <a href="#contact" className="underline decoration-[#C49A52]/60 hover:text-[#C49A52]">
                  WhatsApp
                </a>
                <a href="#contact" className="underline decoration-[#C49A52]/60 hover:text-[#C49A52]">
                  Facebook
                </a>
              </div>
              <p className="text-[11px] text-[#DCE6D6]/60 mt-1.5">
                {t.footer.socialPlaceholderNote}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#DCE6D6]/70">
          <span>{t.footer.copyright}</span>
          <span>SINDHU AKULA – Dairy &amp; Farms</span>
        </div>
      </div>
    </footer>
  );
};
