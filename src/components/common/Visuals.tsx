import React, { useState } from 'react';
import { REAL_ACADEMY_IMAGES } from '../../data/images';
import { Language } from '../../types';

// Islamic 8-pointed star emblem (Rub el Hizb)
export const IslamicStarEmblem: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 40,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    aria-hidden="true"
  >
    <rect x="22" y="22" width="56" height="56" fill="#173D32" stroke="#B79A62" strokeWidth="2.5" />
    <rect
      x="22"
      y="22"
      width="56"
      height="56"
      transform="rotate(45 50 50)"
      fill="#173D32"
      stroke="#B79A62"
      strokeWidth="2.5"
    />
    <circle cx="50" cy="50" r="16" fill="#0F2821" stroke="#B79A62" strokeWidth="1.5" />
    <circle cx="50" cy="50" r="6" fill="#B79A62" />
    <circle cx="50" cy="18" r="2" fill="#B79A62" />
    <circle cx="50" cy="82" r="2" fill="#B79A62" />
    <circle cx="18" cy="50" r="2" fill="#B79A62" />
    <circle cx="82" cy="50" r="2" fill="#B79A62" />
  </svg>
);

// Resilient Real Photographic Image Component with Zero-Broken-Image Fallback
export const RealPhotoSlot: React.FC<{
  imageKey: string;
  altText?: string;
  className?: string;
  aspect?: '16:9' | '4:3' | '1:1' | '16:10' | 'auto';
  showOverlay?: boolean;
  title?: string;
  subtitle?: string;
  priority?: boolean;
}> = ({
  imageKey,
  altText,
  className = '',
  aspect = '4:3',
  showOverlay = true,
  title,
  subtitle,
  priority = false,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const meta = REAL_ACADEMY_IMAGES[imageKey] || REAL_ACADEMY_IMAGES['hero'];
  const finalAlt = altText || meta?.alt?.en || 'Noor Academy Campus Facility';

  const getAspectClass = () => {
    switch (aspect) {
      case '16:9':
        return 'aspect-[16/9]';
      case '16:10':
        return 'aspect-[16/10]';
      case '1:1':
        return 'aspect-square';
      case 'auto':
        return '';
      case '4:3':
      default:
        return 'aspect-[4/3]';
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#0F2821] border border-[#B79A62]/30 shadow-md ${getAspectClass()} ${className}`}
    >
      {/* Background ambient pattern while loading */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#173D32] via-[#1A4538] to-[#0D241E] flex items-center justify-center">
        <div className="opacity-20">
          <IslamicStarEmblem size={140} />
        </div>
      </div>

      {/* Real High-Resolution Photograph */}
      {!hasError && (
        <img
          src={meta.url}
          alt={finalAlt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setImageLoaded(true)}
          onError={() => setHasError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />
      )}

      {/* Warm Photographic Vignette & Contrast Overlay */}
      {showOverlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
      )}

      {/* Title & Subtitle Badge if specified */}
      {(title || subtitle) && (
        <div className="absolute bottom-4 left-4 right-4 z-10 text-start pointer-events-none">
          {subtitle && (
            <span className="block text-[11px] font-mono uppercase tracking-widest text-[#D4BD8B] mb-1">
              {subtitle}
            </span>
          )}
          {title && (
            <h4 className="font-serif text-lg sm:text-xl font-bold text-[#F8F7F2] leading-tight drop-shadow-sm">
              {title}
            </h4>
          )}
        </div>
      )}

      {/* Small Category / Provenance Marker */}
      <div className="absolute top-3 right-3 z-10 pointer-events-none">
        <div className="px-2.5 py-1 rounded bg-[#173D32]/85 backdrop-blur-md border border-[#B79A62]/50 text-[10px] font-mono text-[#D4BD8B] flex items-center gap-1.5 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B79A62]" />
          <span>{meta.credit || 'Noor Academy Campus'}</span>
        </div>
      </div>
    </div>
  );
};

// Real Hero Campus Photograph Component
export const CampusHeroVisual: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative overflow-hidden rounded-3xl bg-[#0F2821] shadow-2xl border border-[#B79A62]/40 ${className}`}>
    <RealPhotoSlot
      imageKey="hero"
      altText="Panoramic real photograph of Noor Academy campus in Sharjah featuring modern limestone Islamic architecture and palm courtyards"
      aspect="16:10"
      priority={true}
      className="w-full h-full"
    />
    <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-[#EAE3D2] border-t border-[#B79A62]/30 pt-3 z-20 pointer-events-none">
      <span className="font-serif tracking-widest uppercase text-[#F8F7F2] drop-shadow">
        The Main Quadrangle & Colonnades
      </span>
      <span className="font-mono text-[#D4BD8B] drop-shadow">
        Sharjah Academic City · United Arab Emirates
      </span>
    </div>
  </div>
);

// Real Library Photograph Component
export const LibraryVisual: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative overflow-hidden rounded-2xl bg-[#0F2821] border border-[#B79A62]/35 shadow-lg ${className}`}>
    <RealPhotoSlot
      imageKey="library"
      altText="Real photograph of the Averroes Grand Library interior with double-height timber bookshelves and quiet research tables"
      aspect="4:3"
      className="w-full h-full"
      title="The Averroes Grand Library"
      subtitle="25,000+ Bilingual Titles · Research Suites"
    />
  </div>
);

// Real Executive Principal Portrait Component
export const PrincipalPortraitVisual: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative overflow-hidden rounded-2xl bg-[#0F2821] border border-[#B79A62]/50 p-3 shadow-xl ${className}`}>
    <div className="relative aspect-square w-full rounded-xl overflow-hidden">
      <RealPhotoSlot
        imageKey="principal"
        altText="Real executive portrait of Dr. Tariq Al-Hashemi, Executive Principal of Noor Academy"
        aspect="1:1"
        showOverlay={false}
        className="w-full h-full"
      />
      {/* Executive Gold Frame Tag */}
      <div className="absolute bottom-3 left-3 right-3 text-center bg-[#173D32]/95 backdrop-blur-md border border-[#B79A62]/60 py-2 px-3 rounded-lg shadow-lg">
        <p className="text-sm font-serif text-[#F8F7F2] font-semibold tracking-wide">
          Dr. Tariq Al-Hashemi
        </p>
        <p className="text-[11px] text-[#D4BD8B] font-sans">
          Executive Principal · Ph.D. Oxford, M.Ed. Cambridge
        </p>
      </div>
    </div>
  </div>
);

// Real STEM Lab Photograph Component
export const STEMLabVisual: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative overflow-hidden rounded-2xl bg-[#0E241E] border border-[#B79A62]/30 shadow-md ${className}`}>
    <RealPhotoSlot
      imageKey="stem"
      altText="Real photograph of students collaborating in the Al-Khwarizmi STEM and Robotics Center"
      aspect="4:3"
      title="Al-Khwarizmi STEM & Robotics Center"
      subtitle="Autonomous Engineering & Rapid Prototyping"
      className="w-full h-full"
    />
  </div>
);

// Real Prayer Hall Photograph Component
export const PrayerHallVisual: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative overflow-hidden rounded-2xl bg-[#112B23] border border-[#B79A62]/30 shadow-md ${className}`}>
    <RealPhotoSlot
      imageKey="prayer"
      altText="Real interior photograph of the serene Noor Reflection and Prayer Sanctuary with Islamic timber geometry"
      aspect="4:3"
      title="The Noor Prayer Sanctuary"
      subtitle="Acoustic Timber Ceiling · 800 Worshippers"
      className="w-full h-full"
    />
  </div>
);

// Central Visual Card used for all facilities, news, and stage thumbnails
export const AcademyVisualCard: React.FC<{
  imageKey: string;
  title: string;
  subtitle?: string;
  aspect?: '16:9' | '4:3' | '1:1' | 'auto';
  className?: string;
}> = ({ imageKey, title, subtitle, aspect = '4:3', className = '' }) => {
  return (
    <RealPhotoSlot
      imageKey={imageKey}
      altText={`${title} - Noor Academy Sharjah`}
      aspect={aspect}
      title={title}
      subtitle={subtitle}
      className={className}
    />
  );
};
