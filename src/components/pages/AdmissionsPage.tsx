import React, { useState } from 'react';
import { AdmissionFormData, Language, PageView } from '../../types';
import { ACADEMY_INFO, FAQ_LIST } from '../../data/content';
import { IslamicStarEmblem } from '../common/Visuals';
import {
  FileText,
  CheckCircle,
  HelpCircle,
  Send,
  Calendar,
  User,
  Mail,
  Phone,
  Globe,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Download,
  AlertCircle,
  CheckCircle2,
  Clock,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

interface AdmissionsPageProps {
  language: Language;
  onNavigate: (page: PageView) => void;
  onOpenTourModal: () => void;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({
  language,
  onNavigate,
  onOpenTourModal,
}) => {
  const isRtl = language === 'ar';

  // Form State
  const [formData, setFormData] = useState<AdmissionFormData>({
    studentName: '',
    dateOfBirth: '',
    gradeApplying: 'Grade 1 (Year 2)',
    parentName: '',
    email: '',
    phone: '',
    countryOfResidence: 'United Arab Emirates',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    refNumber: string;
    timestamp: string;
    studentName: string;
    grade: string;
  } | null>(null);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const validateForm = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.studentName.trim() || formData.studentName.trim().length < 2) {
      errs.studentName =
        language === 'ar' ? 'يرجى إدخال اسم الطالب كاملاً' : 'Please provide full student name';
    }

    if (!formData.dateOfBirth) {
      errs.dateOfBirth =
        language === 'ar' ? 'يرجى تحديد تاريخ ميلاد الطالب' : 'Please select student date of birth';
    }

    if (!formData.parentName.trim() || formData.parentName.trim().length < 2) {
      errs.parentName =
        language === 'ar' ? 'يرجى إدخال اسم ولي الأمر' : 'Please provide parent/guardian name';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email =
        language === 'ar' ? 'يرجى إدخال عنوان بريد إلكتروني صحيح' : 'Please enter a valid email address';
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      errs.phone =
        language === 'ar' ? 'يرجى إدخال رقم هاتف للتواصل' : 'Please enter a valid contact phone number';
    }

    if (!formData.countryOfResidence.trim()) {
      errs.countryOfResidence =
        language === 'ar' ? 'يرجى تحديد بلد الإقامة' : 'Please select or enter country of residence';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const refNumber = `NOOR-ADM-${Math.floor(100000 + Math.random() * 900000)}`;
      const submission = {
        refNumber,
        timestamp: new Date().toLocaleDateString(language === 'ar' ? 'ar-AE' : 'en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        studentName: formData.studentName,
        grade: formData.gradeApplying,
      };

      // Persist locally for demo integrity
      try {
        const stored = JSON.parse(localStorage.getItem('noor_admission_inquiries') || '[]');
        stored.push({
          ...formData,
          refNumber,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('noor_admission_inquiries', JSON.stringify(stored));
      } catch {
        // Fallback
      }

      setSubmittedData(submission);
      setIsSubmitting(false);
    }, 600);
  };

  const handleResetForm = () => {
    setSubmittedData(null);
    setFormData({
      studentName: '',
      dateOfBirth: '',
      gradeApplying: 'Grade 1 (Year 2)',
      parentName: '',
      email: '',
      phone: '',
      countryOfResidence: 'United Arab Emirates',
      message: '',
    });
    setErrors({});
  };

  // Admission Process Steps
  const admissionSteps = [
    {
      step: '01',
      title: { en: 'Online Enquiry & Registration', ar: 'تقديم الطلب الإلكتروني' },
      desc: {
        en: 'Submit the formal enquiry form below with student details and academic background.',
        ar: 'تعبئة استمارة التسجيل المبدئية عبر الموقع وتحديد المرحلة الدراسية المنشودة.',
      },
    },
    {
      step: '02',
      title: { en: 'Campus Assessment & Dialogue', ar: 'التقييم التربوي والمقابلة' },
      desc: {
        en: 'A warm, encouraging interactive assessment evaluating literacy, numeracy, and personal character.',
        ar: 'لقاء تفاعلي ودي لقياس المهارات اللغوية والحسابية والسمت السلوكي العام للطالب.',
      },
    },
    {
      step: '03',
      title: { en: 'Formal Offer of Place', ar: 'إشعار القبول الرسمي' },
      desc: {
        en: 'Successful applicants receive an official acceptance letter along with enrollment contracts.',
        ar: 'إصدار خطاب القبول الرسمي وجدول المخصصات الدراسية من إدارة القبول والتسجيل.',
      },
    },
    {
      step: '04',
      title: { en: 'Document Verification & Induction', ar: 'استكمال الوثائق ولقاء التهيئة' },
      desc: {
        en: 'Submit required civil documentation and attend the welcoming family orientation session.',
        ar: 'تقديم الأوراق الثبوتية المعتمدة وحضور أسبوع التهيئة لاستقبال العام الدراسي الجديد.',
      },
    },
  ];

  // Required Documents List
  const requiredDocuments = [
    {
      title: { en: 'Student & Parent Passports', ar: 'جوازات السفر للطالب وأولياء الأمور' },
      desc: {
        en: 'Clear copies of valid passport with residency visa pages.',
        ar: 'نسخ ملونة وواضحة من جوازات السفر سارية المفعول مع صفحات الإقامة.',
      },
    },
    {
      title: { en: 'Emirates ID (UAE Residents)', ar: 'بطاقة الهوية الإماراتية' },
      desc: {
        en: 'Original and digital copies of student and parent Emirates IDs.',
        ar: 'صورة عن الهوية الإماراتية الأصلية للطالب والأبوين سارية المفعول.',
      },
    },
    {
      title: { en: 'Official Birth Certificate', ar: 'شهادة الميلاد الرسمية' },
      desc: {
        en: 'Attested birth certificate in Arabic or English.',
        ar: 'شهادة ميلاد مصدقة ومترجمة رسمياً إلى العربية أو الإنجليزية.',
      },
    },
    {
      title: { en: 'Past Academic Transcripts', ar: 'الشهادات المدرسية لآخر عامين' },
      desc: {
        en: 'Previous two years of authenticated report cards or early years profiles.',
        ar: 'شهادات الدرجات لآخر عامين دراسيين مصدقة حسب الأصول الرسمية.',
      },
    },
    {
      title: { en: 'Official Transfer Certificate (TC)', ar: 'شهادة الانتقال الرسمية' },
      desc: {
        en: 'Required for students transferring from other schools within the UAE or abroad.',
        ar: 'مطلوبة للطلبة المنتقلين من داخل الدولة أو خارجها مصدقة من الجهة التعليمية.',
      },
    },
    {
      title: { en: 'Immunization & Health Record', ar: 'السجل الطبي وبطاقة التطعيمات' },
      desc: {
        en: 'Up-to-date health questionnaire and vaccination record.',
        ar: 'سجل اللقاحات المعتمد مع أي تقارير طبية خاصة تستوجب المتابعة الصحية.',
      },
    },
  ];

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* 1. Header Banner */}
      <section className="bg-[#173D32] text-[#F8F7F2] py-20 px-4 md:px-8 border-b border-[#B79A62]/30">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0F2821] border border-[#B79A62]/40 text-xs text-[#D4BD8B] font-mono">
            <IslamicStarEmblem size={16} />
            <span>{ACADEMY_INFO.session[language]}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8F7F2]">
            {language === 'ar' ? 'القبول والتسجيل 2026–2027' : 'Admissions & Enrollment'}
          </h1>

          <p className="font-serif text-lg sm:text-xl text-[#D4BD8B] italic">
            "{language === 'ar' ? 'رحلتكم تبدأ من هنا' : 'Your journey starts here'}"
          </p>

          <p className="text-sm text-[#A5B49F] max-w-2xl mx-auto leading-relaxed font-sans">
            {language === 'ar'
              ? 'يسر أكاديمية نور استقبال طلبات الالتحاق لجميع المراحل الدراسية للعام الأكاديمي 2026–2027. يرجى الاطلاع على الخطوات والمستندات واستكمال نموذج التسجيل أدناه.'
              : 'Noor Academy warmly welcomes applications across Early Years through Grade 12 for the 2026–2027 Academic Session. Explore our 4-stage process and submit your online enquiry below.'}
          </p>
        </div>
      </section>

      {/* 2. Admission Process (4 Steps) */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto space-y-12 text-start">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#B79A62] font-mono font-semibold">
            {language === 'ar' ? 'إجراءات التسجيل' : 'Admission Pathway'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#173D32] font-semibold">
            {language === 'ar' ? 'مراحل التقديم والقبول' : 'Four Steps to Enrollment'}
          </h2>
          <p className="text-sm text-[#596159] max-w-xl">
            {language === 'ar'
              ? 'خطوات واضحة وميسرة تضمن تجربة تسجيل مريحة لكافة الأسر الكريمة.'
              : 'A transparent, collaborative admission pathway designed to welcome prospective families with warmth and clarity.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {admissionSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl border border-[#B79A62]/20 p-6 space-y-4 hover:border-[#173D32] transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-2xl font-serif font-bold text-[#B79A62]">
                  {step.step}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#173D32]">
                  {step.title[language]}
                </h3>
                <p className="text-xs text-[#596159] leading-relaxed">
                  {step.desc[language]}
                </p>
              </div>
              <div className="pt-3 border-t border-[#173D32]/10 flex items-center gap-1.5 text-[11px] text-[#A5B49F]">
                <Clock className="w-3.5 h-3.5 text-[#B79A62]" />
                <span>{language === 'ar' ? 'استجابة سريعة' : 'Dedicated Advisory'}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Online Enquiry Form */}
      <section id="enquiry-form" className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl border border-[#B79A62]/30 shadow-xl overflow-hidden">
          <div className="bg-[#173D32] text-[#F8F7F2] p-8 md:p-10 border-b border-[#B79A62]/30 text-start">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#D4BD8B] font-mono font-semibold">
                {language === 'ar' ? 'التقديم المباشر' : 'Official Portal'}
              </span>
              <h2 className="font-serif text-3xl font-bold">
                {language === 'ar' ? 'استمارة طلب القبول الإلكتروني' : 'Online Admission Enquiry'}
              </h2>
              <p className="text-xs text-[#D6DEC8] leading-relaxed">
                {language === 'ar'
                  ? 'يرجى تزويدنا ببيانات الطالب وولي الأمر. سيتواصل معكم فريق القبول والتسجيل خلال 24 ساعة عمل.'
                  : 'Complete this confidential enquiry form. Our Admissions Directorate will review your details and reach out within 24 working hours.'}
              </p>
            </div>
          </div>

          <div className="p-8 md:p-12 text-start">
            {submittedData ? (
              <div className="max-w-xl mx-auto py-8 text-center space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#173D32]/10 border-2 border-[#B79A62] flex items-center justify-center text-[#173D32]">
                  <CheckCircle2 className="w-10 h-10 text-[#173D32]" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-3xl font-bold text-[#173D32]">
                    {language === 'ar' ? 'تم استلام طلبكم بنجاح' : 'Enquiry Received Successfully'}
                  </h3>
                  <p className="text-sm text-[#596159]">
                    {language === 'ar'
                      ? 'شكراً لاهتمامكم بالانضمام إلى أسرة أكاديمية نور الدولية في الشارقة.'
                      : 'Thank you for your interest in enrolling at Noor Islamic International Academy.'}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#F8F7F2] border border-[#B79A62]/40 text-start space-y-3">
                  <div className="flex justify-between items-center border-b border-[#173D32]/10 pb-2">
                    <span className="text-xs text-[#596159]">{language === 'ar' ? 'رقم الطلب المرجعي:' : 'Reference ID:'}</span>
                    <span className="font-mono font-bold text-sm text-[#173D32]">{submittedData.refNumber}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#173D32]/10 pb-2">
                    <span className="text-xs text-[#596159]">{language === 'ar' ? 'اسم الطالب:' : 'Student Name:'}</span>
                    <span className="text-xs font-semibold text-[#242824]">{submittedData.studentName}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#173D32]/10 pb-2">
                    <span className="text-xs text-[#596159]">{language === 'ar' ? 'المرحلة المطلوبة:' : 'Grade Applied:'}</span>
                    <span className="text-xs font-semibold text-[#242824]">{submittedData.grade}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#596159]">{language === 'ar' ? 'تاريخ التقديم:' : 'Submission Date:'}</span>
                    <span className="text-xs font-mono text-[#242824]">{submittedData.timestamp}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="w-full sm:w-auto px-6 py-2.5 bg-[#173D32] hover:bg-[#0F2821] text-white text-xs font-semibold rounded border border-[#B79A62] transition-colors"
                  >
                    {language === 'ar' ? 'تقديم طلب جديد' : 'Submit Another Enquiry'}
                  </button>
                  <button
                    type="button"
                    onClick={onOpenTourModal}
                    className="w-full sm:w-auto px-6 py-2.5 bg-white border border-[#173D32] text-[#173D32] text-xs font-semibold rounded hover:bg-[#F8F7F2] transition-colors"
                  >
                    {language === 'ar' ? 'حجز جولة في الحرم المدرسي' : 'Book a Campus Visit'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Student Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#242824] mb-1.5">
                      {language === 'ar' ? 'اسم الطالب الثلاثي' : 'Student Full Name'} *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#596159] absolute top-3 left-3 rtl:left-auto rtl:right-3" />
                      <input
                        type="text"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        className={`w-full py-2.5 px-3 pl-9 rtl:pl-3 rtl:pr-9 text-xs rounded-lg border ${
                          errors.studentName ? 'border-red-500 bg-red-50' : 'border-[#A5B49F]/60'
                        } focus:outline-none focus:border-[#173D32] bg-[#FDFCF9]`}
                        placeholder={language === 'ar' ? 'مثال: يوسف خالد المنصوري' : 'e.g. Yousef Khalid Al-Mansouri'}
                      />
                    </div>
                    {errors.studentName && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.studentName}
                      </p>
                    )}
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className="block text-xs font-semibold text-[#242824] mb-1.5">
                      {language === 'ar' ? 'تاريخ ميلاد الطالب' : 'Student Date of Birth'} *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-[#596159] absolute top-3 left-3 rtl:left-auto rtl:right-3" />
                      <input
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                        max="2023-12-31"
                        min="2008-01-01"
                        className={`w-full py-2.5 px-3 pl-9 rtl:pl-3 rtl:pr-9 text-xs rounded-lg border ${
                          errors.dateOfBirth ? 'border-red-500 bg-red-50' : 'border-[#A5B49F]/60'
                        } focus:outline-none focus:border-[#173D32] bg-[#FDFCF9]`}
                      />
                    </div>
                    {errors.dateOfBirth && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.dateOfBirth}
                      </p>
                    )}
                  </div>

                  {/* Grade Applying For */}
                  <div>
                    <label className="block text-xs font-semibold text-[#242824] mb-1.5">
                      {language === 'ar' ? 'المرحلة / الصف المراد الالتحاق به' : 'Grade Applying For'} *
                    </label>
                    <select
                      value={formData.gradeApplying}
                      onChange={(e) => setFormData({ ...formData, gradeApplying: e.target.value })}
                      className="w-full py-2.5 px-3 text-xs rounded-lg border border-[#A5B49F]/60 focus:outline-none focus:border-[#173D32] bg-[#FDFCF9]"
                    >
                      <optgroup label="Early Years">
                        <option value="FS1 (Pre-KG)">FS1 (Pre-KG · Age 3)</option>
                        <option value="FS2 (KG1)">FS2 (KG1 · Age 4)</option>
                        <option value="Year 1 (KG2)">Year 1 (KG2 · Age 5)</option>
                      </optgroup>
                      <optgroup label="Primary School">
                        <option value="Grade 1 (Year 2)">Grade 1 (Year 2 · Age 6)</option>
                        <option value="Grade 2 (Year 3)">Grade 2 (Year 3 · Age 7)</option>
                        <option value="Grade 3 (Year 4)">Grade 3 (Year 4 · Age 8)</option>
                        <option value="Grade 4 (Year 5)">Grade 4 (Year 5 · Age 9)</option>
                        <option value="Grade 5 (Year 6)">Grade 5 (Year 6 · Age 10)</option>
                      </optgroup>
                      <optgroup label="Middle School">
                        <option value="Grade 6 (Year 7)">Grade 6 (Year 7 · Age 11)</option>
                        <option value="Grade 7 (Year 8)">Grade 7 (Year 8 · Age 12)</option>
                        <option value="Grade 8 (Year 9)">Grade 8 (Year 9 · Age 13)</option>
                      </optgroup>
                      <optgroup label="Senior School & Sixth Form">
                        <option value="Grade 9 (Year 10 - IGCSE)">Grade 9 (Year 10 · IGCSE)</option>
                        <option value="Grade 10 (Year 11 - IGCSE)">Grade 10 (Year 11 · IGCSE)</option>
                        <option value="Grade 11 (Year 12 - A Levels)">Grade 11 (Year 12 · A Levels)</option>
                        <option value="Grade 12 (Year 13 - A Levels)">Grade 12 (Year 13 · A Levels)</option>
                      </optgroup>
                    </select>
                  </div>

                  {/* Parent Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#242824] mb-1.5">
                      {language === 'ar' ? 'اسم ولي الأمر الكريم' : 'Parent / Guardian Full Name'} *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#596159] absolute top-3 left-3 rtl:left-auto rtl:right-3" />
                      <input
                        type="text"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className={`w-full py-2.5 px-3 pl-9 rtl:pl-3 rtl:pr-9 text-xs rounded-lg border ${
                          errors.parentName ? 'border-red-500 bg-red-50' : 'border-[#A5B49F]/60'
                        } focus:outline-none focus:border-[#173D32] bg-[#FDFCF9]`}
                        placeholder={language === 'ar' ? 'اسم الوالد أو الوالدة' : 'Full Name'}
                      />
                    </div>
                    {errors.parentName && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.parentName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-[#242824] mb-1.5">
                      {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'} *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#596159] absolute top-3 left-3 rtl:left-auto rtl:right-3" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full py-2.5 px-3 pl-9 rtl:pl-3 rtl:pr-9 text-xs rounded-lg border ${
                          errors.email ? 'border-red-500 bg-red-50' : 'border-[#A5B49F]/60'
                        } focus:outline-none focus:border-[#173D32] bg-[#FDFCF9]`}
                        placeholder="parent@domain.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-[#242824] mb-1.5">
                      {language === 'ar' ? 'رقم الهاتف المتحرك' : 'Contact Phone Number'} *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#596159] absolute top-3 left-3 rtl:left-auto rtl:right-3" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full py-2.5 px-3 pl-9 rtl:pl-3 rtl:pr-9 text-xs rounded-lg border ${
                          errors.phone ? 'border-red-500 bg-red-50' : 'border-[#A5B49F]/60'
                        } focus:outline-none focus:border-[#173D32] bg-[#FDFCF9]`}
                        placeholder="+971 50 123 4567"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Country of Residence */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-[#242824] mb-1.5">
                      {language === 'ar' ? 'بلد الإقامة الحالي' : 'Country of Current Residence'} *
                    </label>
                    <div className="relative">
                      <Globe className="w-4 h-4 text-[#596159] absolute top-3 left-3 rtl:left-auto rtl:right-3" />
                      <select
                        value={formData.countryOfResidence}
                        onChange={(e) => setFormData({ ...formData, countryOfResidence: e.target.value })}
                        className="w-full py-2.5 px-3 pl-9 rtl:pl-3 rtl:pr-9 text-xs rounded-lg border border-[#A5B49F]/60 focus:outline-none focus:border-[#173D32] bg-[#FDFCF9]"
                      >
                        <option value="United Arab Emirates">United Arab Emirates (الإمارات العربية المتحدة)</option>
                        <option value="Saudi Arabia">Kingdom of Saudi Arabia (المملكة العربية السعودية)</option>
                        <option value="Qatar">Qatar (دولة قطر)</option>
                        <option value="Kuwait">Kuwait (دولة الكويت)</option>
                        <option value="Oman">Sultanate of Oman (سلطنة عمان)</option>
                        <option value="Bahrain">Kingdom of Bahrain (مملكة البحرين)</option>
                        <option value="United Kingdom">United Kingdom (المملكة المتحدة)</option>
                        <option value="Other International">Other International (دولة أخرى)</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Notes / Message */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-[#242824] mb-1.5">
                      {language === 'ar' ? 'ملاحظات إضافية أو استفسارات خاصة' : 'Additional Information or Specific Inquiries'}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 text-xs rounded-lg border border-[#A5B49F]/60 focus:outline-none focus:border-[#173D32] bg-[#FDFCF9]"
                      placeholder={
                        language === 'ar'
                          ? 'أي تفاصيل عن اهتمامات الطالب، اللغات، أو برامج القرآن الكريم...'
                          : 'Please share any specific interests, language preferences, or pastoral questions...'
                      }
                    />
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-[#596159]">
                    {language === 'ar'
                      ? 'جميع البيانات المقدمة تعامل بسرية تامة وتخضع لسياسة الخصوصية بالأكاديمية.'
                      : 'All personal information is held in strict institutional confidence.'}
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3 bg-[#173D32] hover:bg-[#0F2821] text-[#F8F7F2] font-semibold text-xs rounded-lg border border-[#B79A62] shadow hover:shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>{isSubmitting ? (language === 'ar' ? 'جارٍ الإرسال...' : 'Submitting...') : (language === 'ar' ? 'إرسال طلب القبول' : 'Submit Admission Enquiry')}</span>
                    <Send className="w-3.5 h-3.5 text-[#B79A62]" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 4. Required Documents Checklist */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto space-y-12 text-start">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#B79A62] font-mono font-semibold">
            {language === 'ar' ? 'الوثائق الثبوتية' : 'Documentation'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#173D32] font-semibold">
            {language === 'ar' ? 'المستندات المطلوبة للتسجيل' : 'Required Admission Documents'}
          </h2>
          <p className="text-sm text-[#596159] max-w-xl">
            {language === 'ar'
              ? 'قائمة الوثائق الرسمية المطلوبة لاستكمال ملف قبول الطالب وفق اللوائح المعتمدة.'
              : 'Official civil and educational documentation required upon provisional place confirmation.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requiredDocuments.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#B79A62]/20 p-6 space-y-3 hover:border-[#173D32] transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[#173D32]/10 border border-[#B79A62]/30 flex items-center justify-center text-[#173D32]">
                <FileText className="w-5 h-5 text-[#B79A62]" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#173D32]">
                {doc.title[language]}
              </h3>
              <p className="text-xs text-[#596159] leading-relaxed">
                {doc.desc[language]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Frequently Asked Questions (Accordion) */}
      <section className="px-4 md:px-8 max-w-5xl mx-auto space-y-10 text-start">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#B79A62] font-mono font-semibold">
            {language === 'ar' ? 'الأسئلة الشائعة' : 'Admissions FAQ'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#173D32] font-semibold">
            {language === 'ar' ? 'إجابات على أكثر الاستفسارات' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-sm text-[#596159]">
            {language === 'ar'
              ? 'إليك إجابات مفصلة حول المناهج، النقل، ومواعيد التسجيل.'
              : 'Find direct answers to common questions regarding admissions and school life.'}
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#B79A62]/25 overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-6 text-start flex items-center justify-between gap-4 font-serif text-lg font-bold text-[#173D32] hover:text-[#B79A62] transition-colors"
                >
                  <span>{faq.question[language]}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#B79A62] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#B79A62] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#596159] leading-relaxed font-sans border-t border-[#173D32]/10 bg-[#F8F7F2]/40">
                    <p>{faq.answer[language]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
