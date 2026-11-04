import React from 'react';
import { FacilityItem, Language, PageView } from '../../types';
import {
  ACADEMY_INFO,
  ACADEMIC_STAGES,
  PILLARS,
  CAMPUS_FACILITIES,
  NEWS_ITEMS,
} from '../../data/content';
import {
  CampusHeroVisual,
  LibraryVisual,
  PrincipalPortraitVisual,
  AcademyVisualCard,
  IslamicStarEmblem,
} from '../common/Visuals';
import {
  GraduationCap,
  HeartHandshake,
  Compass,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Sparkles,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';

interface HomePageProps {
  language: Language;
  onNavigate: (page: PageView) => void;
  onOpenTourModal: () => void;
  onSelectFacility: (facility: FacilityItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  language,
  onNavigate,
  onOpenTourModal,
  onSelectFacility,
}) => {
  const isRtl = language === 'ar';

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 md:pt-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Deck (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#173D32]/10 border border-[#B79A62]/40 text-[#173D32] text-xs font-serif tracking-wider">
              <IslamicStarEmblem size={16} />
              <span>{ACADEMY_INFO.session[language]}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#173D32] font-normal tracking-tight leading-[1.15] text-balance">
              {language === 'ar' ? (
                <>
                  <span className="block font-bold">راسخون في القيم.</span>
                  <span className="block italic text-[#B79A62]">متطلعون إلى العالم.</span>
                </>
              ) : (
                <>
                  <span className="block font-bold">Rooted in values.</span>
                  <span className="block italic text-[#B79A62]">Ready for the world.</span>
                </>
              )}
            </h1>

            <p className="text-base text-[#596159] leading-relaxed max-w-lg font-sans">
              {language === 'ar'
                ? 'بيئة تعليمية دولية رائدة في الشارقة، ينبض فيها التميز المعرفي بالتكامل مع الأخلاق السامية وفضول الاستكشاف.'
                : 'An environment where knowledge, character and curiosity grow together.'}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="px-6 py-3.5 bg-[#173D32] hover:bg-[#0F2821] text-[#F8F7F2] font-medium text-sm rounded border border-[#B79A62] shadow-sm hover:shadow transition-all flex items-center gap-2 group"
              >
                <span>{language === 'ar' ? 'استكشف الأكاديمية' : 'Explore the Academy'}</span>
                {isRtl ? (
                  <ArrowLeft className="w-4 h-4 text-[#B79A62] transition-transform group-hover:-translate-x-1" />
                ) : (
                  <ArrowRight className="w-4 h-4 text-[#B79A62] transition-transform group-hover:translate-x-1" />
                )}
              </button>

              <button
                type="button"
                onClick={() => onNavigate('admissions')}
                className="px-6 py-3.5 bg-white hover:bg-[#F8F7F2] text-[#173D32] border border-[#173D32]/30 font-medium text-sm rounded shadow-sm hover:border-[#173D32] transition-all"
              >
                {language === 'ar' ? 'القبول 2026–2027' : 'Admissions 2026–27'}
              </button>
            </div>

            {/* Quiet Operational Ribbon */}
            <div className="pt-4 border-t border-[#173D32]/10 flex flex-wrap items-center gap-6 text-xs text-[#596159]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#B79A62]" />
                <span>{language === 'ar' ? 'من الروضة إلى الصف 12' : 'Early Years to Grade 12'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#173D32]" />
                <span>{language === 'ar' ? 'تعليم ثنائي اللغة (عربي / إنجليزي)' : 'Bilingual Immersion'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#A5B49F]" />
                <span>{language === 'ar' ? 'المدينة الجامعية، الشارقة' : 'Sharjah University City'}</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Slot (7 cols) */}
          <div className="lg:col-span-7">
            <CampusHeroVisual className="aspect-[16/10] w-full" />
          </div>
        </div>
      </section>

      {/* 2. ACADEMY INTRODUCTION */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl border border-[#B79A62]/25 shadow-sm p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual (5 cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <LibraryVisual className="aspect-[4/3] w-full" />
            </div>

            {/* Content (7 cols) */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-start">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#B79A62] font-mono font-semibold">
                  {language === 'ar' ? 'رسالتنا وهويتنا' : 'Philosophy & Purpose'}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#173D32] font-semibold leading-tight text-balance">
                  {language === 'ar' ? 'صرحٌ للتعلم والانتماء.' : 'A place to learn and belong.'}
                </h2>
              </div>

              <p className="text-base sm:text-lg text-[#596159] leading-relaxed font-sans">
                {language === 'ar'
                  ? 'في أكاديمية نور، لا يقتصر التعليم على أسوار الفصول الدراسية؛ بل نجمع بين التميز الأكاديمي الدولي، والقيم الإسلامية الراسخة، ومجتمع مدرسي متآلف يحتضن كل طالب.'
                  : 'At Noor Academy, education goes beyond the classroom. We bring academic excellence, Islamic values and a supportive community together.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F8F7F2] border border-[#173D32]/10 space-y-1">
                  <h4 className="font-serif text-base font-bold text-[#173D32]">
                    {language === 'ar' ? 'بيئة إسلامية ثرية' : 'Authentic Values'}
                  </h4>
                  <p className="text-xs text-[#596159] leading-relaxed">
                    {language === 'ar'
                      ? 'غرس السمت الإسلامي والبر بالوالدين والأمانة العلمية في كافة مراحل النشأة.'
                      : 'Nurturing deep moral integrity, civic reverence, and spiritual grounding.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F7F2] border border-[#173D32]/10 space-y-1">
                  <h4 className="font-serif text-base font-bold text-[#173D32]">
                    {language === 'ar' ? 'آفاق جامعية عالمية' : 'Global Readiness'}
                  </h4>
                  <p className="text-xs text-[#596159] leading-relaxed">
                    {language === 'ar'
                      ? 'مناهج دولية متقدمة تفتح أبواب أعرق الجامعات في العالم أمام خريجينا.'
                      : 'Rigorous academic pathways preparing students for top world universities.'}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="text-xs font-semibold text-[#173D32] hover:text-[#B79A62] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>{language === 'ar' ? 'اقرأ المزيد عن فلسفتنا التعليمية' : 'Learn more about our educational vision'}</span>
                  {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH (3 COLUMNS) */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto space-y-12 text-start">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#B79A62] font-mono font-semibold">
            {language === 'ar' ? 'ركائز أكاديمية نور' : 'The Three Pillars'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#173D32] font-semibold">
            {language === 'ar' ? 'نهجنا التربوي المتكامل' : 'Our Approach'}
          </h2>
          <p className="text-sm text-[#596159]">
            {language === 'ar'
              ? 'ثلاث ركائز جوهرية تشكل بوصلة كل خطة دراسية ونشاط يمارسه طلبتنا.'
              : 'Three enduring pillars guiding every lesson, interaction, and milestone across our campus.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar, idx) => {
            const icons = [GraduationCap, Compass, HeartHandshake];
            const IconComponent = icons[idx];
            return (
              <div
                key={pillar.id}
                className="bg-white rounded-2xl border border-[#B79A62]/20 p-8 shadow-sm flex flex-col justify-between hover:border-[#173D32] transition-colors group"
              >
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-xl bg-[#173D32]/10 border border-[#B79A62]/40 flex items-center justify-center text-[#173D32] group-hover:bg-[#173D32] group-hover:text-[#F8F7F2] transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#173D32]">
                    {pillar.title[language]}
                  </h3>

                  <p className="text-sm text-[#596159] leading-relaxed font-sans">
                    {pillar.shortDesc[language]}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#173D32]/10 space-y-2">
                  {pillar.features[language].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#242824]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B79A62] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. PRINCIPAL'S WELCOME */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#173D32] text-[#F8F7F2] rounded-3xl border border-[#B79A62]/40 shadow-xl overflow-hidden p-8 md:p-14 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Principal Portrait (4 cols) */}
            <div className="lg:col-span-4 flex justify-center">
              <PrincipalPortraitVisual className="w-full max-w-xs" />
            </div>

            {/* Principal Quote & Bio (8 cols) */}
            <div className="lg:col-span-8 space-y-6 text-start">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4BD8B] font-mono">
                <IslamicStarEmblem size={18} />
                <span>{language === 'ar' ? 'كلمة الإدارة العامة' : 'Leadership Perspective'}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#F8F7F2] font-semibold leading-snug">
                {language === 'ar' ? 'رسالة من مدير الأكاديمية' : 'A message from our Principal'}
              </h2>

              <blockquote className="relative font-serif text-lg sm:text-xl text-[#EAE3D2] italic leading-relaxed pl-6 rtl:pl-0 rtl:pr-6 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#B79A62]">
                {language === 'ar' ? (
                  <>
                    "يستحق كل طفل بيئة تعليمية يشعر فيها بالتقدير والإلهام والتحدي الإيجابي. في أكاديمية نور، نعمل بتفانٍ على بناء متعلمين واثقين يمتلكون قيماً أصيلة وشغفاً راسخاً بالمعرفة طوال حياتهم."
                  </>
                ) : (
                  <>
                    "Every child deserves an environment where they feel valued, challenged and inspired. At Noor Academy, we work to develop confident learners with strong values and a lifelong love of learning."
                  </>
                )}
              </blockquote>

              <p className="text-sm text-[#A5B49F] leading-relaxed font-sans max-w-2xl">
                {language === 'ar'
                  ? 'يسعدنا أن نفتح أبوابنا للعام الأكاديمي 2026–2027، مقدمين صرحاً يلتقي فيه عبق التاريخ الإسلامي بروح العصر الحديث، لنصنع معاً قادة الغد.'
                  : 'We invite you to discover an educational culture built on mutual dignity, rigorous scholarship, and an unwavering commitment to each learner’s personal potential.'}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#B79A62]/30">
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#F8F7F2]">
                    {language === 'ar' ? 'د. طارق الهاشمي' : 'Dr. Tariq Al-Hashemi'}
                  </h4>
                  <p className="text-xs text-[#D4BD8B] font-sans">
                    {language === 'ar' ? 'المدير التنفيذي العام · دكتوراه أكسفورد' : 'Executive Principal · Ph.D. Oxford, M.Ed. Cambridge'}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="px-4 py-2 rounded bg-[#0F2821] hover:bg-[#B79A62] hover:text-[#173D32] border border-[#B79A62]/50 text-xs font-medium text-[#F8F7F2] transition-colors self-start sm:self-auto"
                >
                  {language === 'ar' ? 'التعرف على الفريق القيادي' : 'Meet Academy Leadership'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEARNING JOURNEY (FOUR STAGES) */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto space-y-12 text-start">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#B79A62] font-mono font-semibold">
              {language === 'ar' ? 'المسار الأكاديمي' : 'Curriculum Framework'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#173D32] font-semibold">
              {language === 'ar' ? 'رحلة التعلّم والنمو' : 'The Learning Journey'}
            </h2>
            <p className="text-sm text-[#596159] max-w-xl">
              {language === 'ar'
                ? 'أربع مراحل تعليمية متكاملة تصاحب الطالب من أولى خطوات الاستكشاف وحتى بوابات الجامعة.'
                : 'Four progressive educational phases guiding learners from early wonder to university qualification.'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('academics')}
            className="text-xs font-semibold text-[#173D32] hover:text-[#B79A62] inline-flex items-center gap-1.5 transition-colors self-start md:self-auto"
          >
            <span>{language === 'ar' ? 'عرض تفاصيل المناهج والصفوف' : 'View Full Academic Curriculum'}</span>
            {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACADEMIC_STAGES.map((stage) => (
            <div
              key={stage.id}
              className="bg-white rounded-2xl border border-[#B79A62]/20 overflow-hidden shadow-sm flex flex-col justify-between hover:border-[#173D32] transition-all group"
            >
              {/* Visual Thumbnail */}
              <div className="p-3 bg-[#F8F7F2]">
                <AcademyVisualCard
                  imageKey={stage.imageKey}
                  title={stage.name[language]}
                  subtitle={stage.grades[language]}
                  aspect="4:3"
                />
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-[#B79A62] uppercase tracking-wider block">
                    {stage.ages[language]}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#173D32] group-hover:text-[#B79A62] transition-colors">
                    {stage.name[language]}
                  </h3>
                  <p className="text-xs text-[#596159] leading-relaxed line-clamp-3">
                    {stage.description[language]}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#173D32]/10">
                  <button
                    type="button"
                    onClick={() => onNavigate('academics')}
                    className="text-xs font-semibold text-[#173D32] group-hover:text-[#B79A62] flex items-center justify-between w-full"
                  >
                    <span>{language === 'ar' ? 'استكشف المرحلة' : 'Discover Stage'}</span>
                    {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CAMPUS LIFE PHOTO GALLERY */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto space-y-12 text-start">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#B79A62] font-mono font-semibold">
              {language === 'ar' ? 'المرافق والتجهيزات' : 'Campus Environment'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#173D32] font-semibold">
              {language === 'ar' ? 'الحياة في رحاب الحرم المدرسي' : 'Campus Life & Architecture'}
            </h2>
            <p className="text-sm text-[#596159] max-w-xl">
              {language === 'ar'
                ? 'مرافق عالمية صممت وفق أحدث المعايير لتوفير بيئة مشجعة على الإبداع والبحث والرياضة والسكينة.'
                : 'Modern educational spaces designed to inspire scholarly focus, athletic excellence, and spiritual reflection.'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenTourModal}
              className="px-4 py-2 border border-[#173D32] text-xs font-semibold text-[#173D32] rounded hover:bg-[#173D32] hover:text-white transition-colors"
            >
              {language === 'ar' ? 'حجز جولة شخصية' : 'Book a Campus Visit'}
            </button>
            <button
              type="button"
              onClick={() => onNavigate('campus-life')}
              className="text-xs font-semibold text-[#173D32] hover:text-[#B79A62] inline-flex items-center gap-1.5 transition-colors"
            >
              <span>{language === 'ar' ? 'عرض جميع المرافق' : 'View All Facilities'}</span>
              {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAMPUS_FACILITIES.map((facility) => (
            <div
              key={facility.id}
              onClick={() => onSelectFacility(facility)}
              className="cursor-pointer group bg-white rounded-2xl border border-[#B79A62]/25 overflow-hidden shadow-sm hover:shadow-md transition-all hover:border-[#173D32]"
            >
              <div className="relative overflow-hidden">
                <AcademyVisualCard
                  imageKey={facility.imageKey}
                  title={facility.title[language]}
                  aspect="4:3"
                  className="transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 bg-[#173D32]/90 text-white text-xs font-medium rounded backdrop-blur-sm border border-[#B79A62]/50">
                    {language === 'ar' ? 'انقر لتكبير الصورة والتفاصيل' : 'Click to Inspect Facility'}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-2">
                <span className="text-[11px] font-mono text-[#B79A62] block">
                  {facility.specs[language]}
                </span>
                <h4 className="font-serif text-lg font-bold text-[#173D32] group-hover:text-[#B79A62] transition-colors">
                  {facility.title[language]}
                </h4>
                <p className="text-xs text-[#596159] leading-relaxed line-clamp-2">
                  {facility.description[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. ADMISSIONS CALLOUT */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-r from-[#173D32] to-[#0F2821] text-[#F8F7F2] rounded-3xl p-8 md:p-14 border border-[#B79A62]/50 shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <IslamicStarEmblem size={260} />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6 text-start">
            <span className="text-xs uppercase tracking-widest text-[#D4BD8B] font-mono font-semibold">
              {language === 'ar' ? 'القبول والتسجيل 2026–2027' : 'Admissions Open 2026–2027'}
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
              {language === 'ar' ? 'رحلتكم تبدأ من هنا.' : 'Your journey starts here.'}
            </h2>

            <p className="text-base sm:text-lg text-[#D6DEC8] leading-relaxed font-sans">
              {language === 'ar'
                ? 'اكتشف بيئة تعليمية متفردة تجمع بين التميز الأكاديمي، وبناء الشخصية، والفرص الواعدة لأبنائكم.'
                : 'Discover an educational environment built around learning, character and opportunity.'}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('admissions')}
                className="px-6 py-3.5 bg-[#B79A62] hover:bg-[#D4BD8B] text-[#173D32] font-bold text-sm rounded shadow transition-all"
              >
                {language === 'ar' ? 'التقديم لطلب القبول' : 'Apply for Admission'}
              </button>
              <button
                type="button"
                onClick={onOpenTourModal}
                className="px-6 py-3.5 bg-transparent hover:bg-white/10 text-[#F8F7F2] border border-[#F8F7F2]/40 text-sm font-medium rounded transition-all"
              >
                {language === 'ar' ? 'استفسر الآن / حجز جولة' : 'Enquire Now'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. NEWS AND EVENTS */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto space-y-12 text-start">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#B79A62] font-mono font-semibold">
              {language === 'ar' ? 'الأخبار والفعاليات' : 'Campus Chronicles'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#173D32] font-semibold">
              {language === 'ar' ? 'أخبار الأكاديمية ومستجداتها' : 'News & Events'}
            </h2>
          </div>
          <span className="text-xs text-[#596159]">
            {language === 'ar' ? 'العام الدراسي 2026–2027' : 'Academic Session 2026–2027'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl border border-[#B79A62]/20 overflow-hidden shadow-sm flex flex-col justify-between hover:border-[#173D32] transition-colors group"
            >
              <div className="relative">
                <AcademyVisualCard
                  imageKey={item.imageKey}
                  title={item.title[language]}
                  aspect="16:9"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#596159]">
                    <span className="text-[#B79A62] font-medium">{item.category[language]}</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date[language]}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#173D32] group-hover:text-[#B79A62] transition-colors leading-snug">
                    {item.title[language]}
                  </h3>

                  <p className="text-xs text-[#596159] leading-relaxed line-clamp-3">
                    {item.summary[language]}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#173D32]/10 flex items-center justify-between text-xs font-semibold text-[#173D32]">
                  <span>{language === 'ar' ? 'قراءة البيان كاملاً' : 'Read Full Announcement'}</span>
                  {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
