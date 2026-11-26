import React, { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  loading?: 'eager' | 'lazy';
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackLabel,
  loading = 'lazy',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-[#DCE6D6]/55 text-[#183D2B] p-6 text-center ${className}`}
      >
        <svg
          viewBox="0 0 48 48"
          className="w-10 h-10 mb-2.5 text-[#183D2B]/70"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M24 7C24 7 13 19.5 13 28.5C13 34.85 17.92 40 24 40C30.08 40 35 34.85 35 28.5C35 19.5 24 7 24 7Z" />
          <path d="M20 30C20 32.5 21.8 34.5 24 34.5" strokeLinecap="round" />
        </svg>
        <span className="font-serif-editorial text-lg font-semibold tracking-wide text-[#183D2B]">
          {fallbackLabel || alt}
        </span>
        <span className="text-xs uppercase tracking-[0.18em] text-[#4E5C53] mt-1">
          SINDHU AKULA – Dairy &amp; Farms
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
