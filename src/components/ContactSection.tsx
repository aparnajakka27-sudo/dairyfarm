import React from 'react';
import { MessageCircle, Phone, MapPin, Clock, Mail, ClipboardList } from 'lucide-react';
import { Language } from '../types';
import { FARM_CONTACT } from '../data/farmCatalog';
import { Translations } from '../data/translations';
import { useReveal } from '../hooks/useReveal';

interface ContactSectionProps {
  language: Language;
  t: Translations;
  onOpenOrderModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  language,
  t,
  onOpenOrderModal,
}) => {
  const { ref, isVisible } = useReveal();

  const directWhatsappUrl = `https://wa.me/${FARM_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    'Hello SINDHU AKULA – Dairy & Farms, I would like to enquire about your dairy products.'
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#FBF8F0] border-t border-[#183D2B]/12">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-section ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Left WhatsApp Highlight Panel */}
          <div className="lg:col-span-5 bg-[#183D2B] text-[#F7F1E3] rounded-sm p-8 sm:p-10 flex flex-col justify-between border border-[#C49A52]/40">
            <div>
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#C49A52] block mb-3">
                {t.contact.eyebrow}
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl font-semibold leading-tight mb-4">
                {t.contact.whatsappCardTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#DCE6D6]/90 leading-relaxed mb-8">
                {t.contact.whatsappCardDesc}
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#C49A52] hover:bg-[#b58a42] text-[#112B1E] text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.contact.whatsappButton}</span>
              </a>

              <button
                type="button"
                onClick={onOpenOrderModal}
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-transparent hover:bg-[#112B1E] text-[#F7F1E3] text-xs font-semibold uppercase tracking-wider rounded-sm border border-[#F7F1E3]/30 transition-colors cursor-pointer"
              >
                <ClipboardList className="w-4 h-4 text-[#C49A52]" />
                <span>{t.contact.openOrderFormCta}</span>
              </button>
            </div>
          </div>

          {/* Right Contact Placeholders */}
          <div className="lg:col-span-7 bg-[#F7F1E3] border border-[#183D2B]/15 rounded-sm p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-serif-editorial text-3xl font-semibold text-[#183D2B] mb-2">
                {t.contact.heading}
              </h3>
              <p className="text-sm sm:text-base text-[#4E5C53] leading-relaxed mb-8">
                {t.contact.subheading}
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-sm bg-[#DCE6D6]/70 flex items-center justify-center text-[#183D2B] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-[0.16em] text-[#4E5C53] font-semibold">
                      {t.contact.phoneLabel}
                    </span>
                    <p className="text-sm font-semibold text-[#183D2B] mt-0.5">
                      {FARM_CONTACT.phoneDisplay}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-sm bg-[#DCE6D6]/70 flex items-center justify-center text-[#183D2B] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-[0.16em] text-[#4E5C53] font-semibold">
                      {t.contact.emailLabel}
                    </span>
                    <p className="text-sm font-semibold text-[#183D2B] mt-0.5 break-all">
                      {FARM_CONTACT.emailDisplay}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-sm bg-[#DCE6D6]/70 flex items-center justify-center text-[#183D2B] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-[0.16em] text-[#4E5C53] font-semibold">
                      {t.contact.locationLabel}
                    </span>
                    <p className="text-sm font-medium text-[#26332B] mt-0.5">
                      {FARM_CONTACT.locationDisplay[language]}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-sm bg-[#DCE6D6]/70 flex items-center justify-center text-[#183D2B] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-[0.16em] text-[#4E5C53] font-semibold">
                      {t.contact.hoursLabel}
                    </span>
                    <p className="text-sm font-medium text-[#26332B] mt-0.5">
                      {FARM_CONTACT.visitingHours[language]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#183D2B]/12 text-xs text-[#4E5C53]">
              {t.contact.placeholderNote}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
