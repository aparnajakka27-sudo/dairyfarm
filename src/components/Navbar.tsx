import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { FARM_CONTACT } from '../data/farmCatalog';
import { Translations } from '../data/translations';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  t: Translations;
  onOpenOrderModal: () => void;
}

const LANGUAGE_OPTIONS: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'hi', label: 'हिन्दी' },
];

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  t,
  onOpenOrderModal,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#products-pricing', label: t.nav.products },
    { href: '#our-farm', label: t.nav.farm },
    { href: '#our-promise', label: t.nav.promise },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#F7F1E3]/95 backdrop-blur-md border-[#183D2B]/12 shadow-[0_6px_24px_rgba(24,61,43,0.06)]'
          : 'bg-[#F7F1E3]/92 backdrop-blur-sm border-[#183D2B]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Logo & Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-3 group shrink-0"
            aria-label="SINDHU AKULA – Dairy & Farms Home"
          >
            <div className="w-10 h-10 rounded-sm bg-[#183D2B] flex items-center justify-center border border-[#C49A52]/60 shadow-xs transition-transform duration-300 group-hover:scale-[1.03]">
              <svg
                viewBox="0 0 36 36"
                className="w-6 h-6 text-[#F7F1E3]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M18 5.5C18 5.5 9.5 14.5 9.5 21.5C9.5 26.2 13.3 30 18 30C22.7 30 26.5 26.2 26.5 21.5C26.5 14.5 18 5.5 18 5.5Z"
                  stroke="#F7F1E3"
                />
                <path
                  d="M18 14C15.5 17.5 15.5 21.5 18 24.5C20.5 21.5 20.5 17.5 18 14Z"
                  stroke="#C49A52"
                  fill="#C49A52"
                  fillOpacity="0.25"
                />
              </svg>
            </div>
            <div className="leading-tight">
              <span className="block font-serif-editorial text-xl sm:text-[22px] font-bold tracking-[0.08em] text-[#183D2B]">
                {FARM_CONTACT.brandName}
              </span>
              <span className="block text-[11px] uppercase tracking-[0.22em] text-[#C49A52] font-semibold -mt-0.5">
                {FARM_CONTACT.brandSubtitle[language]}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#26332B] hover:text-[#183D2B] relative py-1 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-[#C49A52] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Controls: Language Selector & WhatsApp Enquiry */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <div
              className="inline-flex items-center border border-[#183D2B]/20 bg-[#FBF8F0] rounded-sm p-0.5"
              role="group"
              aria-label="Language Selector"
            >
              {LANGUAGE_OPTIONS.map((opt, idx) => (
                <React.Fragment key={opt.code}>
                  {idx > 0 && <span className="text-[#183D2B]/20 text-xs select-none">|</span>}
                  <button
                    type="button"
                    onClick={() => onLanguageChange(opt.code)}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
                      language === opt.code
                        ? 'bg-[#183D2B] text-[#F7F1E3]'
                        : 'text-[#26332B] hover:text-[#183D2B]'
                    }`}
                  >
                    {opt.label}
                  </button>
                </React.Fragment>
              ))}
            </div>

            <button
              type="button"
              onClick={onOpenOrderModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#183D2B] hover:bg-[#112B1E] text-[#F7F1E3] text-xs font-semibold tracking-wide uppercase rounded-sm border border-[#C49A52]/40 transition-colors cursor-pointer shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#C49A52]" />
              <span>{t.nav.whatsappCta}</span>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <div className="inline-flex items-center border border-[#183D2B]/20 bg-[#FBF8F0] rounded-sm p-0.5">
              {LANGUAGE_OPTIONS.map((opt) => (
                <button
                  key={opt.code}
                  type="button"
                  onClick={() => onLanguageChange(opt.code)}
                  className={`px-2 py-1 text-[11px] font-semibold rounded-xs transition-colors cursor-pointer ${
                    language === opt.code
                      ? 'bg-[#183D2B] text-[#F7F1E3]'
                      : 'text-[#26332B]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              className="p-2 rounded-sm border border-[#183D2B]/20 text-[#183D2B] hover:bg-[#DCE6D6]/50 transition-colors cursor-pointer"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#183D2B]/12 bg-[#FBF8F0] px-4 py-5 space-y-4">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2.5 text-base font-medium text-[#26332B] hover:bg-[#DCE6D6]/40 hover:text-[#183D2B] rounded-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-[#183D2B]/10">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenOrderModal();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#183D2B] text-[#F7F1E3] text-sm font-semibold rounded-sm border border-[#C49A52]/40 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#C49A52]" />
              <span>{t.nav.whatsappCta}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
