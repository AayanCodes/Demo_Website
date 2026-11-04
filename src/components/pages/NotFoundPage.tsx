import React from 'react';
import { Language, PageView } from '../../types';
import { IslamicStarEmblem } from '../common/Visuals';
import { ArrowRight, ArrowLeft, Home, Compass } from 'lucide-react';

interface NotFoundPageProps {
  language: Language;
  onNavigate: (page: PageView) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  language,
  onNavigate,
}) => {
  const isRtl = language === 'ar';

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-xl w-full text-center space-y-6 bg-white p-8 md:p-12 rounded-3xl border border-[#B79A62]/30 shadow-xl">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-[#173D32] border border-[#B79A62] flex items-center justify-center text-[#B79A62]">
          <IslamicStarEmblem size={36} />
        </div>

        <span className="font-mono text-sm uppercase tracking-widest text-[#B79A62] block">
          Error 404 · Page Not Found
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl text-[#173D32] font-bold">
          {language === 'ar' ? 'الصفحة المطلوبة غير متوفرة' : 'The page you seek has moved'}
        </h1>

        <p className="text-xs sm:text-sm text-[#596159] leading-relaxed max-w-md mx-auto">
          {language === 'ar'
            ? 'نعتذر، لم نتمكن من العثور على المسار المطلوب. ندعوكم لاستكشاف أقسام الأكاديمية عبر الروابط التالية.'
            : 'We apologize, but the requested address could not be located on the Noor Academy portal. Please use the directory below.'}
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="px-5 py-2.5 bg-[#173D32] text-white text-xs font-semibold rounded-lg border border-[#B79A62] hover:bg-[#0F2821] transition-colors flex items-center gap-2"
          >
            <Home className="w-4 h-4 text-[#B79A62]" />
            <span>{language === 'ar' ? 'العودة للصفحة الرئيسية' : 'Return to Home'}</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('admissions')}
            className="px-5 py-2.5 bg-white text-[#173D32] text-xs font-semibold rounded-lg border border-[#173D32]/30 hover:border-[#173D32] transition-colors"
          >
            {language === 'ar' ? 'بوابة القبول والتسجيل' : 'Admissions Portal'}
          </button>
        </div>
      </div>
    </div>
  );
};
