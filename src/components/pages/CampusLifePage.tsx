import React, { useState } from 'react';
import { FacilityItem, Language, PageView } from '../../types';
import { CAMPUS_FACILITIES, ACADEMY_INFO } from '../../data/content';
import {
  AcademyVisualCard,
  IslamicStarEmblem,
} from '../common/Visuals';
import {
  Sparkles,
  Layers,
  Dumbbell,
  BookOpen,
  Palette,
  Compass,
  ArrowRight,
  ArrowLeft,
  Maximize2,
} from 'lucide-react';

interface CampusLifePageProps {
  language: Language;
  onNavigate: (page: PageView) => void;
  onOpenTourModal: () => void;
  onSelectFacility: (facility: FacilityItem) => void;
}

export const CampusLifePage: React.FC<CampusLifePageProps> = ({
  language,
  onNavigate,
  onOpenTourModal,
  onSelectFacility,
}) => {
  const isRtl = language === 'ar';
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: { en: 'All Facilities', ar: 'كافة المرافق' } },
    { id: 'academic', label: { en: 'Academic & STEM', ar: 'المراكز الأكاديمية والمختبرات' } },
    { id: 'faith', label: { en: 'Faith & Reflection', ar: 'المصليات والمساحات الإيمانية' } },
    { id: 'sports', label: { en: 'Athletics & Sports', ar: 'المجمعات الرياضية' } },
    { id: 'arts', label: { en: 'Fine Arts & Culture', ar: 'الفنون والتراث' } },
  ];

  const filteredFacilities =
    activeCategory === 'all'
      ? CAMPUS_FACILITIES
      : CAMPUS_FACILITIES.filter((f) => f.category === activeCategory);

  // Student Co-Curricular Clubs & Activities
  const studentActivities = [
    {
      title: { en: 'Model United Nations & Global Diplomacy', ar: 'نموذج الأمم المتحدة والدبلوماسية الطلابية' },
      desc: {
        en: 'Cultivating international affairs literacy, resolution writing, debate etiquette, and negotiation skills.',
        ar: 'تأهيل الطلبة في فنون الخطابة والمناظرات الدولية وكتابة القرارات وحل النزاعات العالمية بالحوار البناء.',
      },
      schedule: { en: 'Weekly on Tuesdays · Grades 8–12', ar: 'أسبوعياً كل ثلاثاء · الصفوف 8–12' },
    },
    {
      title: { en: 'Hifz & Quran Recitation Circles', ar: 'حلقات التحفيظ والتلاوة المتقنة' },
      desc: {
        en: 'Dedicated morning and afternoon mentorship guiding students through structured Quranic memorization.',
        ar: 'حلقات صباحية ومسائية مخصصة للمراجعة والحفظ المتقن بإشراف نخبة من المقرئين المعتمدين.',
      },
      schedule: { en: 'Daily after Fajr & Afternoon · All Grades', ar: 'يومياً بعد الفجر والعصر · جميع الصفوف' },
    },
    {
      title: { en: 'Autonomous Robotics & AI Engineering', ar: 'نادي الروبوتات والذكاء الاصطناعي' },
      desc: {
        en: 'Teams design, construct, and program competitive autonomous robotics competing in national STEM tournaments.',
        ar: 'فرق طلابية تصمم وتبرمج روبوتات ذكية وتشارك في البطولات والأولمبياد الوطني للذكاء الاصطناعي.',
      },
      schedule: { en: 'Wednesdays & Saturdays · Grades 6–12', ar: 'الأربعاء والسبت · الصفوف 6–12' },
    },
    {
      title: { en: 'Falcon Equestrian & Outdoor Heritage Club', ar: 'نادي الفروسية وركوب الخيل التراثي' },
      desc: {
        en: 'Partnered with Sharjah equestrian facilities to instill patience, equine care, and traditional Gulf horsemanship.',
        ar: 'برنامج شراكة مع نوادي الشارقة للفروسية لتعليم ركوب الخيل، والعناية بها، وغرس الصبر والفروسية العربية الأصيلة.',
      },
      schedule: { en: 'Thursday Afternoons · Grades 5–12', ar: 'مساء الخميس · الصفوف 5–12' },
    },
    {
      title: { en: 'Classical Arabic Calligraphy & Manuscript Guild', ar: 'رابطة الخط العربي والمخطوطات الإسلامية' },
      desc: {
        en: 'Mastering the Thuluth, Naskh, and Diwani scripts alongside gold leaf illumination and traditional reed pen cutting.',
        ar: 'إتقان خطوط الثلث والنسخ والديواني، وفنون التذهيب التراثي، وصناعة أقلام القصب والحبر الطبيعي.',
      },
      schedule: { en: 'Mondays & Thursdays · Grades 4–12', ar: 'الإثنين والخميس · الصفوف 4–12' },
    },
    {
      title: { en: 'Eco-Stewards & Botanical Research', ar: 'نادي حماة البيئة والزراعة المائية' },
      desc: {
        en: 'Managing the campus sensory gardens, automated hydroponic greenhouses, and solar energy initiatives.',
        ar: 'إدارة الحديقة النباتية للحرم المدرسي، ومحطات الزراعة المائية الذكية، ومبادرات تدوير المياه والطاقة الشمسية.',
      },
      schedule: { en: 'Sundays & Tuesdays · Grades 3–12', ar: 'الأحد والثلاثاء · الصفوف 3–12' },
    },
  ];

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* 1. Header Banner */}
      <section className="bg-[#173D32] text-[#F8F7F2] py-20 px-4 md:px-8 border-b border-[#B79A62]/30">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0F2821] border border-[#B79A62]/40 text-xs text-[#D4BD8B] font-mono">
            <IslamicStarEmblem size={16} />
            <span>{language === 'ar' ? 'بيئة الحرم المتكاملة' : 'Campus Sanctuary & Culture'}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8F7F2]">
            {language === 'ar' ? 'الحياة المدرسية والبيئة المكانية' : 'Campus Life & Facilities'}
          </h1>

          <p className="font-serif text-lg sm:text-xl text-[#D4BD8B] italic">
            "{ACADEMY_INFO.tagline[language]}"
          </p>

          <p className="text-sm text-[#A5B49F] max-w-2xl mx-auto leading-relaxed font-sans">
            {language === 'ar'
              ? 'صُممت مرافقنا في المدينة الجامعية بالشارقة لتكون واحة تعليمية فريدة تحفز الإبداع العلمي، وتصقل المهارات الرياضية، وترسخ السكينة والروح الإيمانية.'
              : 'Our campus in Sharjah University City represents a modern educational oasis where scholarly focus, athletic vitality, and spiritual tranquility converge.'}
          </p>
        </div>
      </section>

      {/* 2. Facilities Filter & Gallery */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto space-y-10 text-start">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#B79A62] font-mono font-semibold">
              {language === 'ar' ? 'معرض المرافق' : 'Architectural Portfolio'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#173D32] font-semibold">
              {language === 'ar' ? 'مرافق الأكاديمية المتطورة' : 'Explore Our Campus Spaces'}
            </h2>
            <p className="text-sm text-[#596159] max-w-xl">
              {language === 'ar'
                ? 'انقر على أي مرفق لتكبير الصورة والاطلاع على المواصفات الهندسية والميزات التعليمية.'
                : 'Click any facility to view in high resolution with architectural specifications and usage details.'}
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenTourModal}
            className="px-5 py-2.5 bg-[#173D32] hover:bg-[#0F2821] text-[#F8F7F2] text-xs font-semibold rounded border border-[#B79A62] transition-colors self-start md:self-auto"
          >
            {language === 'ar' ? 'حجز جولة شخصية في الحرم' : 'Schedule a Campus Visit'}
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 p-1 bg-[#EAE5D9]/60 rounded-xl border border-[#B79A62]/30 max-w-3xl">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#173D32] text-white shadow font-semibold'
                  : 'text-[#242824] hover:bg-white/60'
              }`}
            >
              {cat.label[language]}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              onClick={() => onSelectFacility(facility)}
              className="group cursor-pointer bg-white rounded-3xl border border-[#B79A62]/25 overflow-hidden shadow-sm hover:shadow-xl transition-all hover:border-[#173D32] flex flex-col justify-between"
            >
              <div className="relative overflow-hidden">
                <AcademyVisualCard
                  imageKey={facility.imageKey}
                  title={facility.title[language]}
                  aspect="4:3"
                  className="transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute top-3 right-3 p-2 bg-[#173D32]/80 text-[#D4BD8B] rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#B79A62]">
                    <span className="uppercase tracking-wider">
                      {facility.category}
                    </span>
                    <span>{facility.specs[language]}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#173D32] group-hover:text-[#B79A62] transition-colors">
                    {facility.title[language]}
                  </h3>

                  <p className="text-xs text-[#596159] leading-relaxed">
                    {facility.description[language]}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#173D32]/10 flex items-center justify-between text-xs font-semibold text-[#173D32]">
                  <span>{language === 'ar' ? 'عرض التفاصيل الكاملة' : 'View Specifications'}</span>
                  {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Islamic Learning Environment & Prayer Life */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#173D32] text-[#F8F7F2] rounded-3xl p-8 md:p-14 border border-[#B79A62]/40 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5 text-start">
              <span className="text-xs uppercase tracking-widest text-[#D4BD8B] font-mono font-semibold">
                {language === 'ar' ? 'السمت الإيماني اليومي' : 'Spiritual Stewardship'}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                {language === 'ar'
                  ? 'بيئة إسلامية تغذي الروح وتصقل السلوك'
                  : 'A Living Islamic Environment Built on Reverence and Care'}
              </h2>

              <p className="text-sm text-[#D6DEC8] leading-relaxed font-sans">
                {language === 'ar'
                  ? 'في أكاديمية نور، لا تنفصل الصلاة عن مسار اليوم المدرسي. يجتمع الطلاب والمعلمون يومياً في مصلى النور لأداء صلاتي الظهر والعصر جماعة، يعقبها تأمل أخلاقي قصير يربط تعاليم الوحي بالتعامل اليومي.'
                  : 'Faith at Noor Academy is an organic pulse that anchors every academic day. Students and faculty gather in the Noor Sanctuary for midday congregational prayers, followed by reflective ethical reminders that connect divine revelation to civic action.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-[#0F2821] border border-[#B79A62]/30 space-y-1">
                  <h4 className="font-serif text-sm font-bold text-[#D4BD8B]">
                    {language === 'ar' ? 'صلوات الجماعة اليومية' : 'Congregational Prayer'}
                  </h4>
                  <p className="text-[11px] text-[#A5B49F]">
                    {language === 'ar' ? 'إقامة الظهر والعصر في أجواء من الخشوع والسكينة.' : 'Daily Dhuhr & Asr prayers in our serene acoustic timber sanctuary.'}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0F2821] border border-[#B79A62]/30 space-y-1">
                  <h4 className="font-serif text-sm font-bold text-[#D4BD8B]">
                    {language === 'ar' ? 'التوجيه التربوي الوجداني' : 'Pastoral Mentorship'}
                  </h4>
                  <p className="text-[11px] text-[#A5B49F]">
                    {language === 'ar' ? 'مشرفون تربويون يتابعون سلوك وأخلاق كل طالب برفق ومحبة.' : 'Dedicated moral advisors fostering empathy, honesty, and peer kindness.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-4 bg-[#0F2821] rounded-2xl border border-[#B79A62]/30 space-y-4">
                <div className="flex items-center gap-2 text-xs font-serif text-[#D4BD8B] border-b border-[#B79A62]/20 pb-2">
                  <IslamicStarEmblem size={20} />
                  <span>{language === 'ar' ? 'جدول العبادات والسمت الطلابي' : 'Daily Faith Routine'}</span>
                </div>
                <div className="space-y-3 text-xs text-[#EAE3D2]">
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span>{language === 'ar' ? 'الأذكار الصباحية وتلاوة القرآن' : 'Morning Remembrances & Recitation'}</span>
                    <span className="font-mono text-[#D4BD8B]">07:45 AM</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span>{language === 'ar' ? 'الاستراحة وصلاة الضحى (اختياري)' : 'Duha Mid-Morning Contemplation'}</span>
                    <span className="font-mono text-[#D4BD8B]">10:15 AM</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span>{language === 'ar' ? 'أذان الظهر وصلاة الجماعة' : 'Dhuhr Congregational Prayer'}</span>
                    <span className="font-mono text-[#D4BD8B]">12:45 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{language === 'ar' ? 'خاطرة إيمانية وسلوك نبوي' : 'Daily Prophetic Character Reminder'}</span>
                    <span className="font-mono text-[#D4BD8B]">01:05 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Student Clubs & Co-Curricular Activities */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto space-y-12 text-start">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#B79A62] font-mono font-semibold">
            {language === 'ar' ? 'الأنشطة اللاصفية' : 'Beyond the Classroom'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#173D32] font-semibold">
            {language === 'ar' ? 'الأندية الطلابية والمواهب' : 'Student Societies & Leadership Clubs'}
          </h2>
          <p className="text-sm text-[#596159] max-w-2xl">
            {language === 'ar'
              ? 'أكثر من 30 نادياً طلابياً تشمل العلوم، الفنون، الرياضة، والخطابة لصقل شخصية الطالب المتكاملة.'
              : 'Over 30 co-curricular societies nurturing leadership, civic engagement, and artistic eloquence.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentActivities.map((act, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#B79A62]/20 p-6 space-y-4 hover:border-[#173D32] transition-colors"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-[#B79A62]">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  <span>Activity Club</span>
                </span>
                <span>{act.schedule[language]}</span>
              </div>

              <h3 className="font-serif text-lg font-bold text-[#173D32]">
                {act.title[language]}
              </h3>

              <p className="text-xs text-[#596159] leading-relaxed">
                {act.desc[language]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Visit Campus CTA */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#EAE5D9]/70 rounded-3xl p-8 md:p-12 border border-[#B79A62]/30 text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#173D32] font-bold">
            {language === 'ar' ? 'ندعوكم لزيارة حرمنا والتعرف على طلبتنا' : 'Experience Noor Academy in Person'}
          </h3>
          <p className="text-sm text-[#596159] max-w-lg mx-auto">
            {language === 'ar'
              ? 'تفضلوا بحجز موعد لجولة خاصة تصحبكم فيها قيادة الأكاديمية للاطلاع على بيئتنا التعليمية.'
              : 'Our Admissions Ambassador would be delighted to guide you through our classrooms, laboratories, and reflection spaces.'}
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenTourModal}
              className="px-6 py-3 bg-[#173D32] hover:bg-[#0F2821] text-white font-medium text-xs rounded border border-[#B79A62] shadow transition-colors"
            >
              {language === 'ar' ? 'حجز موعد جولة تفقدية' : 'Book a Guided Campus Tour'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
