import React, { useEffect } from 'react';
import { FacilityItem, Language } from '../../types';
import { AcademyVisualCard } from './Visuals';
import { X } from 'lucide-react';

interface LightboxModalProps {
  item: FacilityItem | null;
  onClose: () => void;
  language: Language;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  language,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#173D32] rounded-2xl overflow-hidden border border-[#B79A62]/50 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white hover:text-[#B79A62] flex items-center justify-center transition-colors border border-white/20"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Slot */}
        <div className="w-full">
          <AcademyVisualCard
            imageKey={item.imageKey}
            title={item.title[language]}
            aspect="16:9"
            className="w-full"
          />
        </div>

        {/* Description & Specs Details */}
        <div className="p-6 md:p-8 bg-[#0F2821] border-t border-[#B79A62]/30 text-start">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#B79A62]/20 pb-4 mb-4">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#B79A62] font-mono">
                {language === 'ar' ? 'مرافق حرم أكاديمية نور' : 'Campus Infrastructure & Architecture'}
              </span>
              <h3 className="text-2xl font-serif text-[#F8F7F2] font-bold mt-1">
                {item.title[language]}
              </h3>
            </div>
            <div className="px-3.5 py-1.5 rounded bg-[#173D32] border border-[#B79A62]/30 text-xs text-[#D4BD8B] font-mono">
              {item.specs[language]}
            </div>
          </div>

          <p className="text-sm text-[#D6DEC8] leading-relaxed font-sans">
            {item.description[language]}
          </p>
        </div>
      </div>
    </div>
  );
};
