import React, { useState } from 'react';
import { Language, PageView } from '../../types';
import { ACADEMIC_STAGES, ACADEMY_INFO } from '../../data/content';
import {
  AcademyVisualCard,
  STEMLabVisual,
  PrayerHallVisual,
  LibraryVisual,
  IslamicStarEmblem,
} from '../common/Visuals';
import {
  BookOpen,
  Atom,
  Languages,
  Calculator,
  Compass,
  CheckCircle,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

interface AcademicsPageProps {
  language: Language;
  onNavigate: (page: PageView) => void;
  onOpenTourModal: () => void;
}

export const AcademicsPage: React.FC<AcademicsPageProps> = ({
  language,
  onNavigate,
  onOpenTourModal,
}) => {
  const isRtl = language === 'ar';
  const [selectedStageId, setSelectedStageId] = useState<string>('early-years');

  const activeStage =
    ACADEMIC_STAGES.find((s) => s.id === selectedStageId) || ACADEMIC_STAGES[0];

  // Specialized Subject Disciplines
  const subjectDisciplines = [
    {
      id: 'islamic-studies',
      title: { en: 'Islamic Studies & Quranic Ethics', ar: 'الدراسات الإسلامية والقرآن الكريم' },
      intro: {
        en: 'A profound journey through Quran memorization (Hifz), Tajweed recitation, prophetic biographies (Seerah), and practical ethical reasoning.',
        ar: 'منهج رصين يجمع بين حفظ القرآن الكريم وترتيله المجود، مدارسة السيرة النبوية العطرة، والتفقه في الأحكام الأخلاقية والمعاملات المعاصرة.',
      },
      curriculum: {
        en: 'Daily Quran circle, understanding of classical exegesis (Tafsir), comparative moral philosophy, and civic character building.',
        ar: 'حلقة قرآنية يومية، مبادئ التفسير الميسر، الفقه المقارن الميسر، وتطبيقات السلوك والأخلاق في الحياة اليومية.',
      },
      outcomes: {
        en: [
          'Sound memorization and accurate Tajweed',
          'Firm grounding in Islamic jurisprudence & manners',
          'Capacity to articulate faith rationally in modern contexts',
        ],
        ar: [
          'حفظ الأجزاء المقررة مع إتقان مخارج الحروف والترتيل',
          'فهم أصول العقيدة وأحكام العبادات بدليلها',
          'القدرة على التعبير عن الهوية الإسلامية بالحكمة والموعظة الحسنة',
        ],
      },
      visualKey: 'prayer',
      icon: Compass,
    },
    {
      id: 'arabic-language',
      title: { en: 'Classical & Communicative Arabic', ar: 'اللغة العربية الفصحى والبلاغة' },
      intro: {
        en: 'Cultivating love and eloquent mastery for the language of the Holy Quran, classical Arabic literature, and contemporary rhetoric.',
        ar: 'غرس حب لغة الضاد في نفوس الناشئة، وتنمية الفصاحة والبلاغة والذائقة الأدبية لدى الطلبة الناطقين بها ولغير الناطقين بها.',
      },
      curriculum: {
        en: 'Dual tracks (Arabic A for native speakers and Arabic B for international learners), rhetoric (Balaghah), creative calligraphy, and poetry recitation.',
        ar: 'مساران متخصصان (العربية كلغة أم، والعربية لغير الناطقين بها)، النحو الوظيفي، البلاغة والأدب، وفنون الخط العربي الأصيل.',
      },
      outcomes: {
        en: [
          'Articulate public oration and literary composition',
          'Mastery of structural grammar and classical vocabulary',
          'Appreciation of Arab-Islamic cultural heritage',
        ],
        ar: [
          'الخطابة الأدبية الفصيحة والقدرة على الإنشاء الإبداعي',
          'التمكن من قواعد النحو والصرف وتطبيقها بدقة',
          'تذوق التراث الأدبي والشعري العربي العريق',
        ],
      },
      visualKey: 'arts',
      icon: Languages,
    },
    {
      id: 'stem-technology',
      title: { en: 'Science & Emerging Technologies', ar: 'العلوم والتكنولوجيا والابتكار' },
      intro: {
        en: 'Experiential biology, chemistry, physics, and computer science fostering scientific investigation and technological ingenuity.',
        ar: 'برنامج علمي وتطبيقي متقدم في الفيزياء والكيمياء والأحياء والروبوتات والذكاء الاصطناعي ينمي روح الاستقصاء والابتكار.',
      },
      curriculum: {
        en: 'Hands-on laboratory research, python coding, autonomous robotics, environmental sensors, and green biotechnology.',
        ar: 'تجارب مخبرية عملية، لغات البرمجة والذكاء الاصطناعي، الروبوتات المستقلة، وتطبيقات الاستدامة البيئية والطاقة النظيفة.',
      },
      outcomes: {
        en: [
          'Experimental formulation and mathematical modeling',
          'Hardware-software robotics prototyping',
          'Confidence to compete in international science fairs',
        ],
        ar: [
          'صياغة الفرضيات العلمية وإجراء التجارب وضبط المتغيرات',
          'تصميم وبرمجة النماذج الروبوتية المبتكرة',
          'الجاهزية التامة للمسابقات والأولمبياد العلمي الإقليمي والدولي',
        ],
      },
      visualKey: 'stem',
      icon: Atom,
    },
    {
      id: 'mathematics',
      title: { en: 'Mathematics & Computational Logic', ar: 'الرياضيات والمنطق الرياضي' },
      intro: {
        en: 'Fostering deep conceptual comprehension, algebraic agility, geometric visualization, and statistical modeling.',
        ar: 'بناء التفكير المنطقي والقدرة على حل المسائل المعقدة، والتحليل الإحصائي والتفاضل والتكامل.',
      },
      curriculum: {
        en: 'Singapore mastery methodologies in lower stages progressing to pure mathematics, mechanics, and advanced statistics in senior years.',
        ar: 'طرق التدريس التفاعلية وحل المشكلات في المراحل التأسيسية وصولاً إلى الرياضيات البحتة والميكانيكا والإحصاء المتقدم.',
      },
      outcomes: {
        en: [
          'Rigorous deductive logical reasoning',
          'Data visualization and predictive modeling',
          'Fluency in complex calculus and spatial trigonometry',
        ],
        ar: [
          'الاستدلال المنطقي والبرهان الرياضي الرصين',
          'القدرة على نمذجة البيانات وحل المشكلات الرياضية الحياتية',
          'التمكن العالي في التفاضل والتكامل وحساب المثلثات',
        ],
      },
      visualKey: 'courtyard',
      icon: Calculator,
    },
    {
      id: 'english-literature',
      title: { en: 'English Language & World Literature', ar: 'اللغة الإنجليزية والأدب العالمي' },
      intro: {
        en: 'Nurturing insightful critical analysis, persuasive academic rhetoric, and rich appreciation for global texts and oratory.',
        ar: 'تنمية التحليل النقدي للنصوص العالمية، والكتابة الأكاديمية الرصينة، والقدرة على الخطابة والمناظرة باللغة الإنجليزية.',
      },
      curriculum: {
        en: 'Phonics and reading immersion in early years through to Shakespearean critique, academic essay structures, and Model UN debates.',
        ar: 'التأسيس الصوتي والقراءة التعبيرية في الصغر، وصولاً إلى دراسة كلاسيكيات الأدب والمناظرات والنقد الأكاديمي المقارن.',
      },
      outcomes: {
        en: [
          'Elite academic writing and scholarly citation',
          'Nuanced critical reading of historical and modern texts',
          'Poised public speaking and persuasive argumentation',
        ],
        ar: [
          'الكتابة الأكاديمية المتقدمة وفق أعلى المعايير الدولية',
          'القراءة النقدية التحليلية للنصوص الأدبية والفكرية',
          'الطلاقة الخطابية والمناظرة المنطقية المقنعة',
        ],
      },
      visualKey: 'library',
      icon: BookOpen,
    },
  ];

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* 1. Header Banner */}
      <section className="bg-[#173D32] text-[#F8F7F2] py-20 px-4 md:px-8 border-b border-[#B79A62]/30">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0F2821] border border-[#B79A62]/40 text-xs text-[#D4BD8B] font-mono">
            <IslamicStarEmblem size={16} />
            <span>{language === 'ar' ? 'المنهج التعليمي المتكامل' : 'Dual Academic Framework'}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8F7F2]">
            {language === 'ar' ? 'المناهج والبرامج الأكاديمية' : 'Academic Excellence'}
          </h1>

          <p className="font-serif text-lg sm:text-xl text-[#D4BD8B] italic">
            "{ACADEMY_INFO.tagline[language]}"
          </p>

          <p className="text-sm text-[#A5B49F] max-w-2xl mx-auto leading-relaxed font-sans">
            {language === 'ar'
              ? 'مزيج فريد يجمع بين قوة المناهج البريطانية الدولية المرموقة، وعمق التربية الإسلامية واللغة العربية الأصيلة، من الروضة حتى الصف 12.'
              : 'A rigorous dual-track model integrating premier British international learning standards with profound Islamic character development from Early Years through Grade 12.'}
          </p>
        </div>
      </section>

      {/* 2. Interactive Educational Stages Explorer */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto space-y-10 text-start">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#B79A62] font-mono font-semibold">
            {language === 'ar' ? 'المراحل الدراسية' : 'Educational Continuum'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#173D32] font-semibold">
            {language === 'ar' ? 'استكشف مراحل التعلم الأربعة' : 'Four Stages of Growth'}
          </h2>
          <p className="text-sm text-[#596159] max-w-2xl">
            {language === 'ar'
              ? 'اختر المرحلة التعليمية للاطلاع على تفاصيل الصفوف، والفئات العمرية، ومخرجات التعلم المعتمدة.'
              : 'Select a stage below to examine targeted age brackets, curricular highlights, and key learning milestones.'}
          </p>
        </div>

        {/* Stage Selector Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#EAE5D9]/60 rounded-xl border border-[#B79A62]/30">
          {ACADEMIC_STAGES.map((stage) => {
            const isActive = stage.id === selectedStageId;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setSelectedStageId(stage.id)}
                className={`flex-1 min-w-[140px] py-3 px-4 rounded-lg text-xs md:text-sm font-serif transition-all text-center ${
                  isActive
                    ? 'bg-[#173D32] text-[#F8F7F2] font-bold shadow-md border border-[#B79A62]'
                    : 'text-[#242824] hover:bg-white/60'
                }`}
              >
                <span className="block font-medium">{stage.name[language]}</span>
                <span className="block text-[11px] opacity-80 font-sans mt-0.5">
                  {stage.grades[language]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <div className="bg-white rounded-3xl border border-[#B79A62]/30 p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual (5 cols) */}
            <div className="lg:col-span-5">
              <AcademyVisualCard
                imageKey={activeStage.imageKey}
                title={activeStage.name[language]}
                subtitle={activeStage.grades[language]}
                aspect="4:3"
                className="w-full shadow-lg"
              />
            </div>

            {/* Details (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded bg-[#173D32]/10 text-[#173D32] text-xs font-mono font-semibold">
                    {activeStage.grades[language]}
                  </span>
                  <span className="text-xs text-[#596159] font-mono">
                    {activeStage.ages[language]}
                  </span>
                </div>

                <h3 className="font-serif text-3xl font-bold text-[#173D32]">
                  {activeStage.name[language]}
                </h3>

                <p className="text-sm sm:text-base text-[#596159] leading-relaxed font-sans">
                  {activeStage.description[language]}
                </p>
              </div>

              {/* Highlights & Outcomes Split */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#173D32] font-serif border-b border-[#173D32]/10 pb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#B79A62]" />
                    <span>{language === 'ar' ? 'أبرز الملامح المنهجية' : 'Curricular Highlights'}</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-[#242824]">
                    {activeStage.highlights[language].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#B79A62] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#173D32] font-serif border-b border-[#173D32]/10 pb-1 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#B79A62]" />
                    <span>{language === 'ar' ? 'مخرجات التعلم المكتسبة' : 'Expected Outcomes'}</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-[#242824]">
                    {activeStage.outcomes[language].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#173D32] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#173D32]/10 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('admissions')}
                  className="px-5 py-2.5 bg-[#173D32] hover:bg-[#0F2821] text-[#F8F7F2] font-medium text-xs rounded border border-[#B79A62] shadow-sm transition-colors"
                >
                  {language === 'ar' ? `التسجيل في ${activeStage.name[language]}` : `Apply for ${activeStage.name[language]}`}
                </button>
                <button
                  type="button"
                  onClick={onOpenTourModal}
                  className="text-xs font-semibold text-[#173D32] hover:text-[#B79A62] transition-colors"
                >
                  {language === 'ar' ? 'طلب جولة في فصول المرحلة' : 'Book a Tour of this Stage'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dedicated Subject Disciplines */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto space-y-12 text-start">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#B79A62] font-mono font-semibold">
            {language === 'ar' ? 'المسارات المعرفية' : 'Core Disciplines'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#173D32] font-semibold">
            {language === 'ar' ? 'الأقسام الأكاديمية التخصصية' : 'Specialized Subject Faculties'}
          </h2>
          <p className="text-sm text-[#596159] max-w-2xl">
            {language === 'ar'
              ? 'نظرة معمقة على المناهج والمخرجات التعليمية المعتمدة لكل مجال دراسي رئيسي في أكاديمية نور.'
              : 'In-depth overview of curricula, pedagogical frameworks, and learning milestones across key academic departments.'}
          </p>
        </div>

        <div className="space-y-8">
          {subjectDisciplines.map((subj, idx) => {
            const Icon = subj.icon;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={subj.id}
                className="bg-white rounded-3xl border border-[#B79A62]/25 overflow-hidden shadow-sm p-6 sm:p-8 lg:p-10"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual (4 cols) */}
                  <div className={`lg:col-span-4 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <AcademyVisualCard
                      imageKey={subj.visualKey}
                      title={subj.title[language]}
                      aspect="4:3"
                    />
                  </div>

                  {/* Information (8 cols) */}
                  <div
                    className={`lg:col-span-8 space-y-4 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#173D32]/10 border border-[#B79A62]/40 flex items-center justify-center text-[#173D32]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-[#173D32]">
                        {subj.title[language]}
                      </h3>
                    </div>

                    <p className="text-sm text-[#242824] leading-relaxed font-sans">
                      {subj.intro[language]}
                    </p>

                    <div className="p-4 rounded-xl bg-[#F8F7F2] border border-[#173D32]/10 space-y-1.5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#B79A62] font-semibold block">
                        {language === 'ar' ? 'الخطة المنهجية العامة' : 'Curriculum Structure'}
                      </span>
                      <p className="text-xs text-[#596159] leading-relaxed">
                        {subj.curriculum[language]}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#173D32] font-semibold block">
                        {language === 'ar' ? 'أبرز مخرجات التعلم' : 'Target Learning Outcomes'}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {subj.outcomes[language].map((out, oi) => (
                          <div
                            key={oi}
                            className="flex items-start gap-2 p-2.5 rounded bg-white border border-[#A5B49F]/30 text-xs text-[#242824]"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-[#B79A62] shrink-0 mt-0.5" />
                            <span className="leading-snug">{out}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Admissions Advisory Banner */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#173D32] text-[#F8F7F2] rounded-3xl p-8 md:p-12 border border-[#B79A62]/40 text-center space-y-5">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#0F2821] border border-[#B79A62] flex items-center justify-center text-[#B79A62]">
            <GraduationCap className="w-6 h-6" />
          </div>

          <h3 className="font-serif text-3xl font-bold">
            {language === 'ar' ? 'الاستفسار عن تسجيل الطلاب' : 'Ready to begin your child’s academic journey?'}
          </h3>

          <p className="text-sm text-[#D6DEC8] max-w-xl mx-auto leading-relaxed">
            {language === 'ar'
              ? 'باب التسجيل مفتوح الآن للعام الدراسي 2026–2027 لجميع المراحل من الروضة الأولى وحتى الصف الثاني عشر.'
              : 'Admissions are open for the 2026–2027 Academic Session across Early Years through Grade 12.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => onNavigate('admissions')}
              className="px-6 py-3 bg-[#B79A62] hover:bg-[#D4BD8B] text-[#173D32] font-bold text-xs rounded transition-all"
            >
              {language === 'ar' ? 'بدء طلب التسجيل الإلكتروني' : 'Start Online Application'}
            </button>
            <button
              type="button"
              onClick={onOpenTourModal}
              className="px-6 py-3 bg-[#0F2821] hover:bg-black/30 border border-[#B79A62]/40 text-[#F8F7F2] text-xs font-medium rounded transition-all"
            >
              {language === 'ar' ? 'حجز جولة شخصية' : 'Book a Campus Tour'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
