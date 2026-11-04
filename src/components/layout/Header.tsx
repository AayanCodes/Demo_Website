import React, { useState, useEffect } from 'react';
import { Language, PageView } from '../../types';
import { ACADEMY_INFO, NAVIGATION_ITEMS } from '../../data/content';
import { IslamicStarEmblem } from '../common/Visuals';
import { Globe, Phone, Mail, Menu, X, ArrowRight, ArrowLeft } from 'lucide-react';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenTourModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  currentPage,
  onNavigate,
  onOpenTourModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isRtl = language === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: PageView) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full z-50 sticky top-0 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-[#173D32] text-[#F8F7F2] border-b border-[#B79A62]/30 text-xs py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Location & Academic Session */}
          <div className="flex items-center gap-4 text-[#EAE3D2] truncate">
            <span className="font-serif tracking-wider flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B79A62] inline-block" />
              {ACADEMY_INFO.shortLocation[language]}
            </span>
            <span className="hidden sm:inline-block text-[#B79A62]">·</span>
            <span className="hidden sm:inline-block font-sans text-[#D4BD8B] whitespace-nowrap">
              {ACADEMY_INFO.session[language]}
            </span>
          </div>

          {/* Contact & Language Selector */}
          <div className="flex items-center gap-5 shrink-0">
            {/* Phone */}
            <a
              href={`tel:${ACADEMY_INFO.phone}`}
              className="hidden lg:flex items-center gap-1.5 text-[#EAE3D2] hover:text-[#B79A62] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B79A62]" />
              <span className="font-mono">{ACADEMY_INFO.phone}</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${ACADEMY_INFO.email}`}
              className="hidden md:flex items-center gap-1.5 text-[#EAE3D2] hover:text-[#B79A62] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#B79A62]" />
              <span>{ACADEMY_INFO.email}</span>
            </a>

            {/* Language Switcher */}
            <div className="flex items-center bg-[#0F2821] border border-[#B79A62]/40 rounded overflow-hidden">
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 text-[11px] font-medium transition-colors ${
                  language === 'en'
                    ? 'bg-[#B79A62] text-[#173D32] font-semibold'
                    : 'text-[#EAE3D2] hover:text-white'
                }`}
                title="Switch to English"
              >
                English
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('ar')}
                className={`px-2.5 py-1 text-[11px] font-medium transition-colors font-serif ${
                  language === 'ar'
                    ? 'bg-[#B79A62] text-[#173D32] font-semibold'
                    : 'text-[#EAE3D2] hover:text-white'
                }`}
                title="التحويل إلى العربية"
              >
                العربية
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full bg-[#F8F7F2]/95 backdrop-blur-md transition-shadow duration-300 border-b ${
          isScrolled ? 'shadow-md border-[#B79A62]/20' : 'border-[#173D32]/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-start focus:outline-none"
            aria-label="Noor Academy Home"
          >
            <div className="w-10 h-10 rounded-lg bg-[#173D32] border border-[#B79A62] flex items-center justify-center text-[#B79A62] shadow-sm transition-transform group-hover:scale-105">
              <IslamicStarEmblem size={28} />
            </div>
            <div>
              <span className="block font-serif text-xl md:text-2xl font-bold tracking-tight text-[#173D32] leading-none group-hover:text-[#B79A62] transition-colors">
                {ACADEMY_INFO.name[language]}
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-[#596159] mt-0.5 font-sans">
                {language === 'ar' ? 'أكاديمية دولية إسلامية · الشارقة' : 'Islamic International Academy · Sharjah'}
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id as PageView)}
                  className={`relative text-sm font-medium transition-colors whitespace-nowrap py-1 ${
                    isActive
                      ? 'text-[#173D32] font-semibold'
                      : 'text-[#596159] hover:text-[#173D32]'
                  }`}
                >
                  {item.label[language]}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B79A62] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Actions: Book Visit + Apply Now */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenTourModal}
              className="px-3.5 py-2 text-xs font-medium text-[#173D32] border border-[#173D32]/30 rounded hover:border-[#173D32] hover:bg-[#173D32]/5 transition-colors whitespace-nowrap"
            >
              {language === 'ar' ? 'حجز زيارة الحرم' : 'Book a Campus Tour'}
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('admissions')}
              className="px-4 py-2 text-xs font-semibold text-[#F8F7F2] bg-[#173D32] hover:bg-[#0F2821] border border-[#B79A62] rounded shadow-sm hover:shadow transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>{language === 'ar' ? 'سجّل الآن' : 'Apply Now'}</span>
              {isRtl ? (
                <ArrowLeft className="w-3.5 h-3.5 text-[#B79A62]" />
              ) : (
                <ArrowRight className="w-3.5 h-3.5 text-[#B79A62]" />
              )}
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#173D32] hover:bg-[#173D32]/10 rounded focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#173D32]/10 bg-[#F8F7F2] px-6 py-6 shadow-xl animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-4">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id as PageView)}
                    className={`text-start py-2 text-base font-serif transition-colors border-b border-[#173D32]/5 ${
                      isActive ? 'text-[#173D32] font-bold' : 'text-[#596159]'
                    }`}
                  >
                    {item.label[language]}
                  </button>
                );
              })}

              <div className="pt-4 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTourModal();
                  }}
                  className="w-full py-2.5 text-xs font-medium text-[#173D32] border border-[#173D32] rounded text-center"
                >
                  {language === 'ar' ? 'حجز زيارة الحرم المدرسي' : 'Book a Campus Tour'}
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('admissions')}
                  className="w-full py-2.5 text-xs font-semibold text-white bg-[#173D32] border border-[#B79A62] rounded text-center shadow"
                >
                  {language === 'ar' ? 'التقديم والقبول 2026–2027' : 'Apply for Admission 2026–27'}
                </button>
              </div>

              {/* Mobile Quick Contact */}
              <div className="pt-4 text-xs text-[#596159] space-y-1">
                <p>📍 {ACADEMY_INFO.location[language]}</p>
                <p>📞 {ACADEMY_INFO.phone}</p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
