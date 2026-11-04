import React from 'react';
import { Language, PageView } from '../../types';
import { ACADEMY_INFO, NAVIGATION_ITEMS } from '../../data/content';
import { IslamicStarEmblem } from '../common/Visuals';
import { Mail, Phone, MapPin, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  language: Language;
  onNavigate: (page: PageView) => void;
  onOpenPrivacyModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onNavigate,
  onOpenPrivacyModal,
}) => {
  const isRtl = language === 'ar';

  return (
    <footer className="bg-[#173D32] text-[#F8F7F2] border-t border-[#B79A62]/30 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#B79A62]/20">
          {/* Col 1: Identity & Motto (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0F2821] border border-[#B79A62] flex items-center justify-center text-[#B79A62]">
                <IslamicStarEmblem size={26} />
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold tracking-tight text-[#F8F7F2]">
                  {ACADEMY_INFO.name[language]}
                </span>
                <span className="block text-[11px] uppercase tracking-widest text-[#D4BD8B]">
                  {language === 'ar' ? 'الشارقة · دولة الإمارات العربية المتحدة' : 'Sharjah · United Arab Emirates'}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#D6DEC8] font-serif italic text-balance">
              "{ACADEMY_INFO.tagline[language]}"
            </p>

            <p className="text-xs text-[#A5B49F] leading-relaxed max-w-sm">
              {language === 'ar'
                ? 'أكاديمية دولية إسلامية رائدة في إمارة الشارقة، تدمج بين التميز الأكاديمي الدولي والقيم الإسلامية الخالدة، لإعداد جيل من القادة والعلماء.'
                : 'A premier Islamic International Academy in Sharjah combining British international academic excellence with enduring Islamic values to prepare confident future leaders.'}
            </p>

            {/* Portfolio Demo Notice Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#0F2821] border border-[#B79A62]/40 text-[11px] text-[#D4BD8B]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B79A62] shrink-0" />
                <span>
                  {language === 'ar'
                    ? 'نموذج مؤسسي حصري لمحفظة AayanWebHit الدولية'
                    : 'Portfolio Demonstration for AayanWebHit International'}
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#B79A62] font-semibold">
              {language === 'ar' ? 'استكشف الأكاديمية' : 'Explore'}
            </h4>
            <ul className="space-y-2 text-xs text-[#D6DEC8]">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={`foot-${item.id}`}>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate(item.id as PageView);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#B79A62] transition-colors py-0.5"
                  >
                    {item.label[language]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Academic Stages (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#B79A62] font-semibold">
              {language === 'ar' ? 'المراحل التعليمية' : 'Educational Stages'}
            </h4>
            <ul className="space-y-2 text-xs text-[#D6DEC8]">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onNavigate('academics');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#B79A62] transition-colors"
                >
                  {language === 'ar' ? 'مرحلة الطفولة المبكرة (FS1 – FS2)' : 'Early Years Foundation (FS1 – FS2)'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onNavigate('academics');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#B79A62] transition-colors"
                >
                  {language === 'ar' ? 'المرحلة الابتدائية (الصفوف 1 – 5)' : 'Primary School (Grades 1 – 5)'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onNavigate('academics');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#B79A62] transition-colors"
                >
                  {language === 'ar' ? 'المرحلة المتوسطة (الصفوف 6 – 8)' : 'Middle School (Grades 6 – 8)'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onNavigate('academics');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#B79A62] transition-colors"
                >
                  {language === 'ar' ? 'المرحلة الثانوية (الصفوف 9 – 12)' : 'Senior School & Sixth Form (Grades 9 – 12)'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onNavigate('academics');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#B79A62] transition-colors"
                >
                  {language === 'ar' ? 'برنامج القرآن الكريم واللغة العربية' : 'Quranic Sciences & Classical Arabic'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus & Inquiries (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#B79A62] font-semibold">
              {language === 'ar' ? 'معلومات التواصل' : 'Campus Office'}
            </h4>
            <div className="space-y-2.5 text-xs text-[#D6DEC8]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B79A62] shrink-0 mt-0.5" />
                <span>{ACADEMY_INFO.location[language]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B79A62] shrink-0" />
                <a href={`tel:${ACADEMY_INFO.phone}`} className="hover:text-[#B79A62] font-mono">
                  {ACADEMY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#B79A62] shrink-0" />
                <a href={`mailto:${ACADEMY_INFO.email}`} className="hover:text-[#B79A62]">
                  {ACADEMY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#B79A62] shrink-0 mt-0.5" />
                <span className="text-[11px]">{ACADEMY_INFO.workingHours[language]}</span>
              </div>
            </div>

            {/* Quick action button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  onNavigate('admissions');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-2 px-3 text-xs font-semibold bg-[#0F2821] hover:bg-[#B79A62] hover:text-[#173D32] border border-[#B79A62]/40 rounded text-center transition-all flex items-center justify-center gap-1.5"
              >
                <span>{language === 'ar' ? 'بوابة التسجيل والقبول' : 'Admissions Portal 2026–27'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Portfolio disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A5B49F]">
          <p className="text-center md:text-start">
            © 2026 {ACADEMY_INFO.fullName[language]}. {language === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </p>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-[#D4BD8B]">
              {language === 'ar' ? 'موقع توضيحي للعرض فقط' : 'Demonstration Portfolio Project'}
            </span>
            <span>·</span>
            <span>Sharjah, United Arab Emirates</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
