import React from 'react';
import { Translations } from '../data/translations';
import { useReveal } from '../hooks/useReveal';
import { SafeImage } from './SafeImage';

interface GallerySectionProps {
  t: Translations;
}

const GALLERY_IMAGES = [
  '/images/hero-farm.jpg',
  '/images/gallery-cows.jpg',
  '/images/farm-story.jpg',
  '/images/product-ghee.jpg',
];

export const GallerySection: React.FC<GallerySectionProps> = ({ t }) => {
  const { ref, isVisible } = useReveal();

  return (
    <section className="py-20 lg:py-24 bg-[#F7F1E3]">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-section ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#C49A52] block mb-2.5">
            {t.gallery.eyebrow}
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-semibold text-[#183D2B] leading-[1.1] mb-3">
            {t.gallery.heading}
          </h2>
          <p className="text-base text-[#4E5C53] leading-relaxed">
            {t.gallery.subheading}
          </p>
        </div>

        {/* Asymmetric Editorial Photo Mosaic */}
        <div className="grid md:grid-cols-12 gap-5">
          {t.gallery.items.map((item, idx) => {
            const colSpan =
              idx === 0
                ? 'md:col-span-7 aspect-[16/10]'
                : idx === 1
                  ? 'md:col-span-5 aspect-[4/3] md:aspect-auto'
                  : idx === 2
                    ? 'md:col-span-5 aspect-[4/3] md:aspect-[5/4]'
                    : 'md:col-span-7 aspect-[16/10]';

            return (
              <figure
                key={item.title}
                className={`group relative overflow-hidden rounded-sm border border-[#183D2B]/14 bg-[#EDE4CF] ${colSpan}`}
              >
                <SafeImage
                  src={GALLERY_IMAGES[idx]}
                  alt={item.title}
                  fallbackLabel={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <figcaption
                  className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-[#F7F1E3]"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(16, 41, 29, 0.88) 0%, rgba(16, 41, 29, 0.45) 60%, transparent 100%)',
                  }}
                >
                  <span className="font-serif-editorial text-xl sm:text-2xl font-semibold block">
                    {item.title}
                  </span>
                  <span className="text-xs sm:text-sm text-[#F7F1E3]/85 block mt-0.5">
                    {item.caption}
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};
