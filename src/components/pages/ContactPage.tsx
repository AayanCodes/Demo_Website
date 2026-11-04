import React, { useState } from 'react';
import { ContactFormData, Language } from '../../types';
import { ACADEMY_INFO } from '../../data/content';
import { IslamicStarEmblem } from '../common/Visuals';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  Navigation,
} from 'lucide-react';

interface ContactPageProps {
  language: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ language }) => {
  const isRtl = language === 'ar';

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = language === 'ar' ? 'يرجى إدخال الاسم كاملاً' : 'Please enter your full name';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = language === 'ar' ? 'يرجى إدخال بريد إلكتروني صالح' : 'Please enter a valid email address';
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errs.phone = language === 'ar' ? 'يرجى إدخال رقم هاتف صالح' : 'Please enter a valid phone number';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = language === 'ar' ? 'يرجى كتابة رسالتكم (10 أحرف على الأقل)' : 'Please enter your message (at least 10 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('noor_contact_messages') || '[]');
        existing.push({
          ...formData,
          id: `MSG-${Date.now()}`,
          date: new Date().toISOString(),
        });
        localStorage.setItem('noor_contact_messages', JSON.stringify(existing));
      } catch {
        // Fallback
      }

      setIsSubmitted(true);
      setSubmitting(false);
    }, 500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: 'General Inquiry',
      message: '',
    });
    setErrors({});
  };

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* 1. Header Banner */}
      <section className="bg-[#173D32] text-[#F8F7F2] py-20 px-4 md:px-8 border-b border-[#B79A62]/30">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0F2821] border border-[#B79A62]/40 text-xs text-[#D4BD8B] font-mono">
            <IslamicStarEmblem size={16} />
            <span>{language === 'ar' ? 'التواصل المباشر' : 'Get in Touch'}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8F7F2]">
            {language === 'ar' ? 'اتصل بأكاديمية نور' : 'Contact the Academy'}
          </h1>

          <p className="font-serif text-lg sm:text-xl text-[#D4BD8B] italic">
            "{ACADEMY_INFO.tagline[language]}"
          </p>

          <p className="text-sm text-[#A5B49F] max-w-2xl mx-auto leading-relaxed font-sans">
            {language === 'ar'
              ? 'يسعدنا دائماً استقبال استفساراتكم والترحيب بكم في صالة استقبال أولياء الأمور بحرم الأكاديمية بالمدينة الجامعية في الشارقة.'
              : 'Our Admissions and Administrative teams welcome your inquiries, campus tour requests, and correspondence.'}
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid (Details + Form) */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-start">
          {/* Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#B79A62] font-mono font-semibold">
                {language === 'ar' ? 'العناوين والأوقات' : 'Locations & Hours'}
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#173D32]">
                {language === 'ar' ? 'مقر الأكاديمية ومكاتب الإدارة' : 'Campus Directorate'}
              </h2>
            </div>

            {/* Address */}
            <div className="p-6 rounded-2xl bg-white border border-[#B79A62]/20 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#173D32]/10 border border-[#B79A62]/30 flex items-center justify-center text-[#173D32] shrink-0">
                <MapPin className="w-5 h-5 text-[#B79A62]" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-base font-bold text-[#173D32]">
                  {language === 'ar' ? 'موقع الحرم المدرسي' : 'Campus Location'}
                </h4>
                <p className="text-xs text-[#596159] leading-relaxed">
                  {ACADEMY_INFO.location[language]}
                </p>
                <p className="text-[11px] font-mono text-[#A5B49F]">
                  GPS: 25.3082° N, 55.4851° E · Sharjah, UAE
                </p>
              </div>
            </div>

            {/* Telephone & Email */}
            <div className="p-6 rounded-2xl bg-white border border-[#B79A62]/20 shadow-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#173D32]/10 border border-[#B79A62]/30 flex items-center justify-center text-[#173D32] shrink-0">
                  <Phone className="w-5 h-5 text-[#B79A62]" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-base font-bold text-[#173D32]">
                    {language === 'ar' ? 'الهاتف الرئيسي والقبول' : 'Direct Telephone'}
                  </h4>
                  <a
                    href={`tel:${ACADEMY_INFO.phone}`}
                    className="block text-sm font-mono text-[#173D32] hover:text-[#B79A62] font-semibold"
                  >
                    {ACADEMY_INFO.phone}
                  </a>
                  <p className="text-[11px] text-[#A5B49F]">
                    {language === 'ar' ? 'الخط الساخن لأولياء الأمور' : 'Admissions & Reception Line'}
                  </p>
                </div>
              </div>

              <div className="border-t border-[#173D32]/10 pt-4 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#173D32]/10 border border-[#B79A62]/30 flex items-center justify-center text-[#173D32] shrink-0">
                  <Mail className="w-5 h-5 text-[#B79A62]" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-base font-bold text-[#173D32]">
                    {language === 'ar' ? 'البريد الإلكتروني الرسمي' : 'Official Email'}
                  </h4>
                  <a
                    href={`mailto:${ACADEMY_INFO.email}`}
                    className="block text-xs text-[#173D32] hover:text-[#B79A62] font-medium"
                  >
                    {ACADEMY_INFO.email}
                  </a>
                  <a
                    href={`mailto:${ACADEMY_INFO.generalEmail}`}
                    className="block text-xs text-[#596159] hover:text-[#B79A62]"
                  >
                    {ACADEMY_INFO.generalEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="p-6 rounded-2xl bg-white border border-[#B79A62]/20 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#173D32]/10 border border-[#B79A62]/30 flex items-center justify-center text-[#173D32] shrink-0">
                <Clock className="w-5 h-5 text-[#B79A62]" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-base font-bold text-[#173D32]">
                  {language === 'ar' ? 'أوقات العمل واستقبال الزوار' : 'Administrative Hours'}
                </h4>
                <p className="text-xs text-[#596159] leading-relaxed">
                  {ACADEMY_INFO.workingHours[language]}
                </p>
                <p className="text-[11px] text-[#A5B49F]">
                  {language === 'ar' ? 'عطلة نهاية الأسبوع: السبت والأحد' : 'Weekend Closure: Saturday & Sunday'}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#B79A62]/30 shadow-xl overflow-hidden p-8 md:p-10">
              <div className="space-y-2 mb-6">
                <span className="text-xs uppercase tracking-widest text-[#B79A62] font-mono font-semibold">
                  {language === 'ar' ? 'المراسلة المباشرة' : 'Send a Message'}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#173D32]">
                  {language === 'ar' ? 'استمارة التواصل والاستفسار' : 'General Enquiry Form'}
                </h3>
                <p className="text-xs text-[#596159]">
                  {language === 'ar'
                    ? 'يرجى ملء النموذج أدناه وسيقوم ممثل الأكاديمية بالرد على رسالتكم بأسرع وقت ممكن.'
                    : 'Fill in your details below. An academy representative will address your correspondence promptly.'}
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#173D32]/10 border border-[#B79A62] flex items-center justify-center text-[#173D32]">
                    <CheckCircle2 className="w-8 h-8 text-[#173D32]" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#173D32] font-bold">
                    {language === 'ar' ? 'تم إرسال رسالتكم بنجاح' : 'Message Sent Successfully'}
                  </h4>
                  <p className="text-xs text-[#596159] max-w-md mx-auto leading-relaxed">
                    {language === 'ar'
                      ? 'نشكركم على تواصلكم مع أكاديمية نور. سيتم مراجعة رسالتكم والرد عليها في أقرب وقت.'
                      : 'Thank you for contacting Noor Academy. A member of our administrative council will respond shortly.'}
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-[#173D32] text-white text-xs font-semibold rounded border border-[#B79A62] hover:bg-[#0F2821] transition-colors"
                  >
                    {language === 'ar' ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                  <div>
                    <label className="block font-medium text-[#242824] mb-1">
                      {language === 'ar' ? 'الاسم الكامل' : 'Full Name'} *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full py-2.5 px-3 rounded-lg border ${
                        errors.fullName ? 'border-red-500 bg-red-50' : 'border-[#A5B49F]/60'
                      } focus:outline-none focus:border-[#173D32] bg-[#FDFCF9]`}
                      placeholder={language === 'ar' ? 'اسمكم الكريم' : 'Your Full Name'}
                    />
                    {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium text-[#242824] mb-1">
                        {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'} *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full py-2.5 px-3 rounded-lg border ${
                          errors.email ? 'border-red-500 bg-red-50' : 'border-[#A5B49F]/60'
                        } focus:outline-none focus:border-[#173D32] bg-[#FDFCF9]`}
                        placeholder="name@example.com"
                      />
                      {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block font-medium text-[#242824] mb-1">
                        {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'} *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full py-2.5 px-3 rounded-lg border ${
                          errors.phone ? 'border-red-500 bg-red-50' : 'border-[#A5B49F]/60'
                        } focus:outline-none focus:border-[#173D32] bg-[#FDFCF9]`}
                        placeholder="+971 50 000 0000"
                      />
                      {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block font-medium text-[#242824] mb-1">
                      {language === 'ar' ? 'الموضوع' : 'Subject of Inquiry'}
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full py-2.5 px-3 rounded-lg border border-[#A5B49F]/60 focus:outline-none focus:border-[#173D32] bg-[#FDFCF9]"
                    >
                      <option value="General Inquiry">General Information (استفسار عام)</option>
                      <option value="Admissions 2026-27">Admissions & Registration (التسجيل والقبول)</option>
                      <option value="Curriculum & Hifz">Curriculum & Hifz Program (المناهج وبرنامج الحفظ)</option>
                      <option value="Careers">Academic Careers & Recruitment (التوظيف والوظائف الأكاديمية)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium text-[#242824] mb-1">
                      {language === 'ar' ? 'نص الرسالة' : 'Your Message'} *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full p-3 rounded-lg border ${
                        errors.message ? 'border-red-500 bg-red-50' : 'border-[#A5B49F]/60'
                      } focus:outline-none focus:border-[#173D32] bg-[#FDFCF9]`}
                      placeholder={language === 'ar' ? 'اكتبوا استفساركم هنا...' : 'Write your detailed message here...'}
                    />
                    {errors.message && <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 bg-[#173D32] hover:bg-[#0F2821] text-[#F8F7F2] font-semibold text-xs rounded-lg border border-[#B79A62] shadow transition-colors flex items-center justify-center gap-2"
                  >
                    <span>{submitting ? (language === 'ar' ? 'جارٍ الإرسال...' : 'Sending...') : (language === 'ar' ? 'إرسال الرسالة' : 'Send Message')}</span>
                    <Send className="w-3.5 h-3.5 text-[#B79A62]" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Styled Gulf Map Component */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto space-y-6 text-start">
        <div className="space-y-1">
          <span className="text-xs uppercase tracking-widest text-[#B79A62] font-mono font-semibold">
            {language === 'ar' ? 'الموقع الجغرافي' : 'Campus Geography'}
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#173D32]">
            {language === 'ar' ? 'خريطة الوصول إلى الحرم المدرسي' : 'Access & University City Coordinates'}
          </h3>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-[#B79A62]/30 bg-[#173D32] shadow-xl aspect-[16/8] sm:aspect-[16/7]">
          {/* Stylized Vector Map of Sharjah University City */}
          <svg viewBox="0 0 1000 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
            {/* Sand / Desert Ivory Terrain */}
            <rect width="1000" height="450" fill="#EFE8D8" />

            {/* Coastal Arabian Gulf representation in upper-left corner */}
            <path d="M0 0 L240 0 Q180 80, 0 140 Z" fill="#245848" fillOpacity="0.3" />
            <path d="M0 0 L230 0 Q170 75, 0 130 Z" fill="#245848" fillOpacity="0.4" />
            <text x="30" y="45" fill="#173D32" fontSize="11" fontFamily="sans-serif" letterSpacing="2">ARABIAN GULF</text>

            {/* University City Masterplan Green Belts */}
            <circle cx="580" cy="230" r="140" fill="#D8E2D4" stroke="#A5B49F" strokeWidth="1" />
            <circle cx="580" cy="230" r="100" fill="#E4EBDD" />

            {/* Highway Arterials (Sheikh Mohammed Bin Zayed Rd & University City Rd) */}
            <line x1="0" y1="290" x2="1000" y2="290" stroke="#FFFFFF" strokeWidth="12" />
            <line x1="0" y1="290" x2="1000" y2="290" stroke="#D4BD8B" strokeWidth="2" strokeDasharray="8 6" />
            <text x="50" y="280" fill="#6A5844" fontSize="10" fontFamily="sans-serif">University City Road (E88)</text>

            <line x1="280" y1="0" x2="280" y2="450" stroke="#FFFFFF" strokeWidth="14" />
            <line x1="280" y1="0" x2="280" y2="450" stroke="#B79A62" strokeWidth="2" strokeDasharray="10 8" />
            <text x="295" y="420" fill="#6A5844" fontSize="10" fontFamily="sans-serif">Sheikh Mohammed Bin Zayed Rd</text>

            {/* Academic City Landmarks */}
            <circle cx="480" cy="180" r="8" fill="#173D32" />
            <text x="475" y="165" fill="#173D32" fontSize="10" fontFamily="serif" textAnchor="middle">Sharjah University</text>

            <circle cx="680" cy="190" r="8" fill="#173D32" />
            <text x="680" y="175" fill="#173D32" fontSize="10" fontFamily="serif" textAnchor="middle">American University of Sharjah</text>

            <circle cx="580" cy="360" r="8" fill="#173D32" />
            <text x="580" y="385" fill="#173D32" fontSize="10" fontFamily="serif" textAnchor="middle">Sharjah Airport Free Zone</text>

            {/* NOOR ACADEMY CAMPUS PIN (PULSING PIN) */}
            <g transform="translate(580, 220)">
              {/* Outer pulsing ring */}
              <circle cx="0" cy="0" r="32" fill="#B79A62" fillOpacity="0.25" />
              <circle cx="0" cy="0" r="20" fill="#173D32" stroke="#B79A62" strokeWidth="3" />
              <polygon points="0,-10 6,4 -6,4" fill="#B79A62" />
              <circle cx="0" cy="0" r="4" fill="#F8F7F2" />
            </g>

            {/* Noor Academy Pin Card Box */}
            <g transform="translate(580, 100)">
              <rect x="-140" y="0" width="280" height="70" rx="8" fill="#173D32" stroke="#B79A62" strokeWidth="2" />
              <polygon points="0,70 -8,82 8,82" fill="#173D32" />
              <text x="0" y="24" fill="#F8F7F2" fontSize="13" fontFamily="serif" fontWeight="bold" textAnchor="middle">NOOR ACADEMY CAMPUS</text>
              <text x="0" y="42" fill="#D4BD8B" fontSize="10" fontFamily="sans-serif" textAnchor="middle">University City · Sharjah, UAE</text>
              <text x="0" y="58" fill="#A5B49F" fontSize="9" fontFamily="sans-serif" textAnchor="middle">Visitors Reception at Gate 2</text>
            </g>
          </svg>

          {/* Map Overlay Controls */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#173D32] bg-white/95 backdrop-blur-md rounded-xl p-3 border border-[#B79A62]/30 shadow">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#B79A62]" />
              <span className="font-serif font-bold">Noor Islamic International Academy</span>
              <span className="hidden sm:inline-block text-[#596159]">· Gate 2 Main Pavilion</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#596159]">
              <Navigation className="w-3.5 h-3.5 text-[#B79A62]" />
              <span>25.3082° N, 55.4851° E</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
