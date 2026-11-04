import React from 'react';
import { Language, PageView } from '../../types';
import { ACADEMY_INFO, LEADERSHIP_TEAM } from '../../data/content';
import {
  CampusHeroVisual,
  LibraryVisual,
  PrincipalPortraitVisual,
  PrayerHallVisual,
  IslamicStarEmblem,
  RealPhotoSlot,
} from '../common/Visuals';
import { Target, Compass, Award, Shield, BookCheck, ArrowRight, ArrowLeft } from 'lucide-react';

interface AboutPageProps {
  language: Language;
  onNavigate: (page: PageView) => void;
  onOpenTourModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  language,
  onNavigate,
  onOpenTourModal,
}) => {
  const isRtl = language === 'ar';

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* 1. Header Banner */}
      <section className="bg-[#173D32] text-[#F8F7F2] py-20 px-4 md:px-8 border-b border-[#B79A62]/30">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0F2821] border border-[#B79A62]/40 text-xs text-[#D4BD8B] font-mono">
            <IslamicStarEmblem size={16} />
            <span>{language === 'ar' ? 'نبذة عن الصرح' : 'Institutional Heritage'}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8F7F2]">
            {language === 'ar' ? 'عن أكاديمية نور' : 'About Noor Academy'}
          </h1>

          <p className="font-serif text-lg sm:text-xl text-[#D4BD8B] italic">
            "{ACADEMY_INFO.tagline[language]}"
          </p>

          <p className="text-sm text-[#A5B49F] max-w-2xl mx-auto leading-relaxed font-sans">
            {language === 'ar'
              ? 'صرح تعليمي إسلامي دولي رائد في إمارة الشارقة، يكرس جهوده لتنشئة أجيال تجمع بين رقي الأخلاق الإسلامية وأعلى معايير التميز الأكاديمي العالمي.'
              : 'Established in the cultural heart of Sharjah, Noor Academy unites classical Islamic principles with world-class British international curricula.'}
          </p>
        </div>
      </section>

      {/* 2. Academy Overview */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-start">
            <span className="text-xs uppercase tracking-widest text-[#B79A62] font-mono font-semibold">
              {language === 'ar' ? 'النشأة والرؤية' : 'The Academy Genesis'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#173D32] font-semibold leading-tight">
              {language === 'ar'
                ? 'تعليم يبني العقل ويحيي الضمير'
                : 'Education that enlightens the mind and nurtures the soul'}
            </h2>
            <p className="text-sm sm:text-base text-[#596159] leading-relaxed">
              {language === 'ar'
                ? 'تأسست أكاديمية نور في إمارة الشارقة انطلاقاً من إيمان راسخ بأن التعليم الحقيقي هو الذي يجمع بين التميز المعرفي الرصين، والاعتزاز بالهوية الإسلامية والعربية، والقدرة على التعامل مع متطلبات القرن الحادي والعشرين بثقة واقتدار.'
                : 'Noor Academy was established in Sharjah upon the conviction that authentic education must balance rigorous academic mastery, pride in Islamic identity, and fluency in the modern global landscape.'}
            </p>
            <p className="text-sm sm:text-base text-[#596159] leading-relaxed">
              {language === 'ar'
                ? 'يقدم الحرم المدرسي الممتد في المدينة الجامعية تجربة تعليمية متميزة تبدأ من سنوات الطفولة المبكرة (FS1) وتستمر حتى الصف الثاني عشر (A-Levels)، متيحة لطلبتنا الوصول إلى أرقى الجامعات العالمية.'
                : 'Our sprawling campus in Sharjah University City provides a seamless continuum from Early Years (FS1) through Grade 12 (A-Levels), equipping graduates for leadership and competitive global university admissions.'}
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenTourModal}
                className="px-5 py-2.5 bg-[#173D32] text-[#F8F7F2] font-medium text-xs rounded border border-[#B79A62] hover:bg-[#0F2821] transition-colors inline-flex items-center gap-2"
              >
                <span>{language === 'ar' ? 'حجز زيارة للحرم المدرسي' : 'Schedule a Campus Visit'}</span>
                {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <CampusHeroVisual className="aspect-[4/3] w-full" />
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Cards */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-start">
          {/* Vision */}
          <div className="bg-white rounded-2xl border border-[#B79A62]/30 p-8 md:p-10 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#173D32]/10 border border-[#B79A62]/40 flex items-center justify-center text-[#173D32]">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#B79A62] font-mono font-semibold block">
              {language === 'ar' ? 'رؤيتنا' : 'Our Vision'}
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#173D32]">
              {language === 'ar'
                ? 'الريادة العالمية في التعليم الإسلامي الدولي'
                : 'Global Leadership in Values-Driven Education'}
            </h3>
            <p className="text-sm text-[#596159] leading-relaxed">
              {language === 'ar'
                ? 'أن نكون المنارة التربوية الأولى في المنطقة، متفردين بتخريج قادة ومفكرين مبدعين يجمعون بين استيعاب العلوم المعاصرة والتمسك بثوابت الشريعة وقيم الخير للبشرية جمعاء.'
                : 'To be the region’s premier academy of holistic scholarship, graduating articulate scholars and principled leaders who harmonize advanced sciences with enduring Islamic stewardship.'}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl border border-[#B79A62]/30 p-8 md:p-10 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#173D32]/10 border border-[#B79A62]/40 flex items-center justify-center text-[#173D32]">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#B79A62] font-mono font-semibold block">
              {language === 'ar' ? 'رسالتنا' : 'Our Mission'}
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#173D32]">
              {language === 'ar'
                ? 'إلهام العقول وصقل الأخلاق في بيئة آمنة'
                : 'Inspiring Minds & Refining Character'}
            </h3>
            <p className="text-sm text-[#596159] leading-relaxed">
              {language === 'ar'
                ? 'توفير بيئة تعليمية داعمة ومحفزة تتيح لكل طالب اكتشاف مواهبه، وتطوير قدراته التحليلية، وترسيخ الفصاحة باللغتين العربية والإنجليزية، والتحلي بروح المسؤولية المجتمعية.'
                : 'To deliver exceptional international education in a safe, compassionate sanctuary, equipping every learner with critical thinking, dual-language fluency, and deep civic commitment.'}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Educational Philosophy & Islamic Core Values */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto space-y-10 text-start">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#B79A62] font-mono font-semibold">
            {language === 'ar' ? 'القيم الجوهرية' : 'Foundational Values'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#173D32] font-semibold">
            {language === 'ar' ? 'قيمنا الإسلامية الراسخة' : 'Our Guiding Islamic Ethos'}
          </h2>
          <p className="text-sm text-[#596159]">
            {language === 'ar'
              ? 'خمس قيم تشكل جوهر السلوك والتعامل اليومي في الأكاديمية.'
              : 'Five core tenets informing student conduct, pedagogy, and pastoral stewardship.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              enTitle: 'Ihsan (Excellence)',
              arTitle: 'الإحسان والإتقان',
              enDesc: 'Pursuing mastery in all deeds with sincerity and highest standards.',
              arDesc: 'بذل أقصى درجات الجودة والإخلاص في كل عمل وقول.',
              icon: Award,
            },
            {
              enTitle: 'Amanah (Integrity)',
              arTitle: 'الأمانة والصدق',
              enDesc: 'Upholding truthful conduct, accountability, and scholarly trust.',
              arDesc: 'التحلي بالصدق في القول والعمل والنزاهة الأكاديمية التامة.',
              icon: Shield,
            },
            {
              enTitle: 'Tawadu (Humility)',
              arTitle: 'التواضع والوقار',
              enDesc: 'Grounding intellectual growth in reverence, modesty, and open hearts.',
              arDesc: 'خضوع الجناح وحسن الاستماع والحرص على التعلم المستمر.',
              icon: BookCheck,
            },
            {
              enTitle: 'Adab (Refinement)',
              arTitle: 'الأدب وحسن المعاملة',
              enDesc: 'Practicing respect toward elders, peers, teachers, and surroundings.',
              arDesc: 'احترام المعلمين وبر الوالدين وإفشاء السلام وحسن الخلق.',
              icon: IslamicStarEmblem,
            },
            {
              enTitle: 'Khidmah (Service)',
              arTitle: 'خدمة المجتمع والوطن',
              enDesc: 'Active compassionate dedication to community uplift and global good.',
              arDesc: 'البذل والعطاء والإسهام الفاعل في رقي الوطن والإنسانية.',
              icon: Target,
            },
          ].map((val, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#B79A62]/20 p-6 text-center space-y-3 hover:border-[#173D32] transition-colors"
            >
              <div className="w-10 h-10 mx-auto rounded-full bg-[#173D32]/10 border border-[#B79A62]/40 flex items-center justify-center text-[#173D32]">
                <IslamicStarEmblem size={20} />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#173D32]">
                {language === 'ar' ? val.arTitle : val.enTitle}
              </h4>
              <p className="text-xs text-[#596159] leading-relaxed">
                {language === 'ar' ? val.arDesc : val.enDesc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Leadership Team */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto space-y-12 text-start">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#B79A62] font-mono font-semibold">
            {language === 'ar' ? 'القيادة الأكاديمية' : 'Academic Stewardship'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#173D32] font-semibold">
            {language === 'ar' ? 'فريق القيادة التربوية' : 'Leadership & Governance'}
          </h2>
          <p className="text-sm text-[#596159] max-w-2xl">
            {language === 'ar'
              ? 'نخبة من القيادات التربوية الحاصلين على مؤهلات عليا من كبرى الجامعات، يجمعون بين الرؤية العالمية وعمق التجربة الخليجية.'
              : 'Our leadership team brings decades of international executive experience, dedicated to institutional excellence.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEADERSHIP_TEAM.map((leader, i) => {
            const leaderImageKeys = ['principal', 'leader-vice', 'leader-senior'];
            const imgKey = leaderImageKeys[i] || 'principal';

            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#B79A62]/25 overflow-hidden shadow-sm p-6 space-y-4 hover:border-[#173D32] transition-colors flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#B79A62]/50 shadow">
                      <RealPhotoSlot
                        imageKey={imgKey}
                        altText={leader.name[language]}
                        aspect="1:1"
                        showOverlay={false}
                        className="w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#173D32]">
                        {leader.name[language]}
                      </h3>
                      <p className="text-xs font-medium text-[#B79A62]">
                        {leader.role[language]}
                      </p>
                    </div>
                  </div>

                  <div className="text-[11px] font-mono text-[#596159] bg-[#F8F7F2] p-2.5 rounded border border-[#173D32]/10">
                    {leader.credentials[language]}
                  </div>

                  <p className="text-xs text-[#596159] leading-relaxed">
                    {leader.bio[language]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Campus Introduction Showcase */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#173D32] text-[#F8F7F2] rounded-3xl p-8 md:p-14 border border-[#B79A62]/40 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4 text-start">
              <span className="text-xs uppercase tracking-widest text-[#D4BD8B] font-mono font-semibold">
                {language === 'ar' ? 'العمارة والبيئة المكانية' : 'Architectural Harmony'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                {language === 'ar'
                  ? 'حرم مدرسي مستوحى من عبق التراث الأندلسي'
                  : 'An Architectural Sanctuary in Sharjah'}
              </h2>
              <p className="text-sm text-[#D6DEC8] leading-relaxed font-sans">
                {language === 'ar'
                  ? 'صُمم حرم الأكاديمية في الشارقة ليحاكي توازن العمارة الإسلامية التاريخية مع المتطلبات البيئية المعاصرة: أفنية مظللة، مشربيات هندسية تنثر النور الطبيعي، ونوافير مياه عذبة تعزز السكينة.'
                  : 'Designed to harmonize traditional Islamic spatial geometry with sustainable Gulf architecture: shaded courtyards, mashrabiya light screens, and contemplative reflecting water basins.'}
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('campus-life')}
                  className="px-5 py-2.5 bg-[#B79A62] hover:bg-[#D4BD8B] text-[#173D32] font-semibold text-xs rounded transition-colors"
                >
                  {language === 'ar' ? 'استكشف مرافق الحرم بالتفصيل' : 'Explore Campus Facilities'}
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <PrayerHallVisual className="aspect-[4/3] w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
