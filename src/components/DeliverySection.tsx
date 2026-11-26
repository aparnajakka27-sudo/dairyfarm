import React from 'react';
import {
  Truck,
  Store,
  CalendarClock,
  PackageCheck,
  MapPin,
  Clock,
  IndianRupee,
  Sparkles,
  Info,
} from 'lucide-react';
import { Language } from '../types';
import { DELIVERY_CONFIG, DELIVERY_OPTIONS } from '../data/farmCatalog';
import { Translations } from '../data/translations';
import { useReveal } from '../hooks/useReveal';

interface DeliverySectionProps {
  language: Language;
  t: Translations;
  onOpenOrderModal: () => void;
}

const OPTION_ICONS = {
  'home-delivery': Truck,
  'farm-pickup': Store,
  'daily-subscription': CalendarClock,
  'bulk-orders': PackageCheck,
};

export const DeliverySection: React.FC<DeliverySectionProps> = ({
  language,
  t,
  onOpenOrderModal,
}) => {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="delivery"
      className="py-20 lg:py-24 bg-[#183D2B] text-[#F7F1E3] relative overflow-hidden"
    >
      {/* Subtle architectural hairline accents */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-[1px] bg-[#C49A52]/40"
      />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-section ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-2.5">
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#C49A52]">
                {t.deliverySection.eyebrow}
              </span>
              <span className="px-2 py-0.5 bg-[#C49A52]/20 border border-[#C49A52]/50 text-[#C49A52] text-[10px] font-bold uppercase tracking-wider rounded-xs">
                {t.deliverySection.demoTag}
              </span>
            </div>

            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-semibold text-[#F7F1E3] leading-[1.1] mb-4">
              {t.deliverySection.heading}
            </h2>
            <p className="text-base text-[#DCE6D6]/90 leading-relaxed">
              {t.deliverySection.subheading}
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenOrderModal}
            className="inline-flex items-center justify-center gap-2 self-start lg:self-end px-6 py-3.5 bg-[#C49A52] hover:bg-[#b58a42] text-[#112B1E] text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer shrink-0"
          >
            <span>{t.deliverySection.enquireDeliveryCta}</span>
          </button>
        </div>

        {/* 4 Delivery Option Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {DELIVERY_OPTIONS.map((option) => {
            const Icon = OPTION_ICONS[option.id];
            return (
              <div
                key={option.id}
                className="bg-[#112B1E]/85 border border-[#F7F1E3]/14 rounded-sm p-6 flex flex-col justify-between hover:border-[#C49A52]/65 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-10 h-10 rounded-sm bg-[#183D2B] border border-[#C49A52]/40 flex items-center justify-center text-[#C49A52]">
                      <Icon className="w-5 h-5" strokeWidth={1.7} />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.16em] text-[#C49A52] font-semibold">
                      {option.highlightTag[language]}
                    </span>
                  </div>

                  <h3 className="font-serif-editorial text-2xl font-semibold text-[#F7F1E3] mb-2">
                    {option.title[language]}
                  </h3>

                  <p className="text-sm text-[#F7F1E3]/85 leading-relaxed mb-4">
                    {option.summary[language]}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F7F1E3]/12">
                  <span className="block text-[10px] uppercase tracking-[0.16em] text-[#C49A52] font-semibold mb-1">
                    {t.deliverySection.howItWorksLabel}
                  </span>
                  <p className="text-xs text-[#DCE6D6]/85 leading-relaxed">
                    {option.howItWorks[language]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editable Delivery Terms & Coverage Panel */}
        <div className="bg-[#F7F1E3] text-[#26332B] rounded-sm border border-[#C49A52]/50 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-[#183D2B]/12">
            <div className="flex items-center gap-2.5">
              <Info className="w-5 h-5 text-[#183D2B]" />
              <h3 className="font-serif-editorial text-2xl sm:text-3xl font-semibold text-[#183D2B]">
                {t.deliverySection.infoTitle}
              </h3>
            </div>
            <span className="self-start sm:self-auto px-3 py-1 bg-[#DCE6D6] text-[#183D2B] text-[11px] font-bold uppercase tracking-wider rounded-xs">
              {t.deliverySection.demoTag}
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#C49A52] shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] uppercase tracking-[0.16em] text-[#4E5C53] font-semibold mb-1">
                  {t.deliverySection.areasLabel}
                </span>
                <p className="text-sm font-medium text-[#183D2B]">
                  {DELIVERY_CONFIG.deliveryAreas[language]}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#C49A52] shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] uppercase tracking-[0.16em] text-[#4E5C53] font-semibold mb-1">
                  {t.deliverySection.timingsLabel}
                </span>
                <p className="text-sm font-medium text-[#183D2B]">
                  {DELIVERY_CONFIG.deliveryTimings[language]}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Store className="w-5 h-5 text-[#C49A52] shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] uppercase tracking-[0.16em] text-[#4E5C53] font-semibold mb-1">
                  {t.deliverySection.pickupNoteLabel}
                </span>
                <p className="text-sm font-medium text-[#183D2B]">
                  {DELIVERY_CONFIG.farmPickupNote[language]}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 sm:border-t sm:border-[#183D2B]/10">
              <IndianRupee className="w-5 h-5 text-[#C49A52] shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] uppercase tracking-[0.16em] text-[#4E5C53] font-semibold mb-1">
                  {t.deliverySection.minOrderLabel}
                </span>
                <p className="text-base font-bold text-[#183D2B]">
                  ₹{DELIVERY_CONFIG.minimumOrderAmountInr}{' '}
                  <span className="text-xs font-medium text-[#4E5C53]">
                    ({t.deliverySection.demoTag})
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 sm:border-t sm:border-[#183D2B]/10">
              <Truck className="w-5 h-5 text-[#C49A52] shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] uppercase tracking-[0.16em] text-[#4E5C53] font-semibold mb-1">
                  {t.deliverySection.deliveryChargeLabel}
                </span>
                <p className="text-base font-bold text-[#183D2B]">
                  ₹{DELIVERY_CONFIG.deliveryChargeInr}{' '}
                  <span className="text-xs font-medium text-[#4E5C53]">
                    ({t.deliverySection.demoTag})
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 sm:border-t sm:border-[#183D2B]/10">
              <Sparkles className="w-5 h-5 text-[#C49A52] shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] uppercase tracking-[0.16em] text-[#4E5C53] font-semibold mb-1">
                  {t.deliverySection.freeDeliveryLabel}
                </span>
                <p className="text-base font-bold text-[#183D2B]">
                  {t.deliverySection.freeAbovePrefix} ₹{DELIVERY_CONFIG.freeDeliveryThresholdInr}+{' '}
                  <span className="text-xs font-medium text-[#4E5C53]">
                    ({t.deliverySection.demoTag})
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
