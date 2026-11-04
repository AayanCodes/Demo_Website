import React, { useState } from 'react';
import { Language, TourBookingData } from '../../types';
import { IslamicStarEmblem } from './Visuals';
import { X, Calendar, Clock, CheckCircle, User, Mail, Phone, Users } from 'lucide-react';

interface BookVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const BookVisitModal: React.FC<BookVisitModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const isRtl = language === 'ar';

  const [formData, setFormData] = useState<TourBookingData>({
    parentName: '',
    email: '',
    phone: '',
    tourDate: '',
    timeSlot: '09:00 AM – 10:30 AM',
    gradeOfInterest: 'Primary (Grades 1 – 5)',
    attendeesCount: 2,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.parentName.trim()) {
      errs.parentName = language === 'ar' ? 'يرجى إدخال اسم ولي الأمر' : 'Please enter parent/guardian name';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = language === 'ar' ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email address';
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errs.phone = language === 'ar' ? 'يرجى إدخال رقم هاتف صحيح' : 'Please enter a valid phone number';
    }
    if (!formData.tourDate) {
      errs.tourDate = language === 'ar' ? 'يرجى اختيار تاريخ الزيارة' : 'Please select a preferred tour date';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const ref = `NAT-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);

    // Save to localStorage for demo persistence
    try {
      const existing = JSON.parse(localStorage.getItem('noor_tour_bookings') || '[]');
      existing.push({ ...formData, ref, dateSubmitted: new Date().toISOString() });
      localStorage.setItem('noor_tour_bookings', JSON.stringify(existing));
    } catch {
      // Local storage fallback
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      parentName: '',
      email: '',
      phone: '',
      tourDate: '',
      timeSlot: '09:00 AM – 10:30 AM',
      gradeOfInterest: 'Primary (Grades 1 – 5)',
      attendeesCount: 2,
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#F8F7F2] rounded-2xl shadow-2xl border border-[#B79A62]/40 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#173D32] text-[#F8F7F2] p-5 flex items-center justify-between border-b border-[#B79A62]/30">
          <div className="flex items-center gap-2.5">
            <IslamicStarEmblem size={24} />
            <h3 className="font-serif text-lg tracking-wide">
              {language === 'ar' ? 'حجز جولة تفقدية في الحرم المدرسي' : 'Book a Personalized Campus Tour'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-[#EAE3D2] hover:text-[#B79A62] p-1 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#173D32]/10 border border-[#B79A62] flex items-center justify-center text-[#173D32]">
                <CheckCircle className="w-8 h-8 text-[#173D32]" />
              </div>

              <h4 className="font-serif text-2xl text-[#173D32] font-semibold">
                {language === 'ar' ? 'تم تأكيد طلب الزيارة بنجاح' : 'Campus Tour Request Confirmed'}
              </h4>

              <div className="bg-[#173D32]/5 border border-[#B79A62]/30 rounded-lg p-4 text-xs text-[#242824] space-y-2 text-start">
                <div className="flex justify-between">
                  <span className="text-[#596159]">{language === 'ar' ? 'رقم الحجز:' : 'Reference ID:'}</span>
                  <span className="font-mono font-bold text-[#173D32]">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#596159]">{language === 'ar' ? 'التاريخ المختار:' : 'Selected Date:'}</span>
                  <span className="font-medium">{formData.tourDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#596159]">{language === 'ar' ? 'الفترة:' : 'Time Slot:'}</span>
                  <span className="font-medium">{formData.timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#596159]">{language === 'ar' ? 'ولي الأمر:' : 'Parent:'}</span>
                  <span className="font-medium">{formData.parentName}</span>
                </div>
              </div>

              <p className="text-xs text-[#596159] leading-relaxed">
                {language === 'ar'
                  ? 'سيقوم فريق علاقات القبول بالتواصل معكم عبر البريد الإلكتروني لتأكيد موعد اللقاء واستقبالكم في صالة كبار الزوار بالحرم المدرسي.'
                  : 'Our Admissions Ambassador will contact you via email with directions, visitor parking information, and check-in guidance at the Executive Reception.'}
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="w-full py-2.5 bg-[#173D32] text-[#F8F7F2] rounded font-medium text-xs hover:bg-[#0F2821] transition-colors"
              >
                {language === 'ar' ? 'إغلاق والعودة للموقع' : 'Close & Return to Website'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <p className="text-xs text-[#596159] pb-1">
                {language === 'ar'
                  ? 'يسرنا استقبالكم في حرم أكاديمية نور بالمدينة الجامعية في الشارقة للتعرف على مرافقنا وبيئتنا التعليمية الاستثنائية.'
                  : 'We invite prospective parents to experience our facilities, observe our learning spaces, and meet our academic leadership.'}
              </p>

              {/* Parent Name */}
              <div>
                <label className="block font-medium text-[#242824] mb-1">
                  {language === 'ar' ? 'اسم ولي الأمر الكريم' : "Parent / Guardian Name"} *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#596159] absolute top-2.5 left-3 rtl:left-auto rtl:right-3" />
                  <input
                    type="text"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className={`w-full py-2 px-3 pl-9 rtl:pl-3 rtl:pr-9 rounded border ${
                      errors.parentName ? 'border-red-500 bg-red-50' : 'border-[#A5B49F]/60'
                    } focus:outline-none focus:border-[#173D32] bg-white`}
                    placeholder={language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                  />
                </div>
                {errors.parentName && <p className="text-[11px] text-red-600 mt-0.5">{errors.parentName}</p>}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-[#242824] mb-1">
                    {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'} *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#596159] absolute top-2.5 left-3 rtl:left-auto rtl:right-3" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full py-2 px-3 pl-9 rtl:pl-3 rtl:pr-9 rounded border ${
                        errors.email ? 'border-red-500 bg-red-50' : 'border-[#A5B49F]/60'
                      } focus:outline-none focus:border-[#173D32] bg-white`}
                      placeholder="parent@example.com"
                    />
                  </div>
                  {errors.email && <p className="text-[11px] text-red-600 mt-0.5">{errors.email}</p>}
                </div>

                <div>
                  <label className="block font-medium text-[#242824] mb-1">
                    {language === 'ar' ? 'رقم الهاتف المتحرك' : 'Phone Number'} *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#596159] absolute top-2.5 left-3 rtl:left-auto rtl:right-3" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full py-2 px-3 pl-9 rtl:pl-3 rtl:pr-9 rounded border ${
                        errors.phone ? 'border-red-500 bg-red-50' : 'border-[#A5B49F]/60'
                      } focus:outline-none focus:border-[#173D32] bg-white`}
                      placeholder="+971 50 000 0000"
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-red-600 mt-0.5">{errors.phone}</p>}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-[#242824] mb-1">
                    {language === 'ar' ? 'تاريخ الزيارة المفضل' : 'Preferred Tour Date'} *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#596159] absolute top-2.5 left-3 rtl:left-auto rtl:right-3" />
                    <input
                      type="date"
                      value={formData.tourDate}
                      onChange={(e) => setFormData({ ...formData, tourDate: e.target.value })}
                      min="2026-11-04"
                      className={`w-full py-2 px-3 pl-9 rtl:pl-3 rtl:pr-9 rounded border ${
                        errors.tourDate ? 'border-red-500 bg-red-50' : 'border-[#A5B49F]/60'
                      } focus:outline-none focus:border-[#173D32] bg-white`}
                    />
                  </div>
                  {errors.tourDate && <p className="text-[11px] text-red-600 mt-0.5">{errors.tourDate}</p>}
                </div>

                <div>
                  <label className="block font-medium text-[#242824] mb-1">
                    {language === 'ar' ? 'الفترة الزمنية' : 'Preferred Time Slot'}
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#596159] absolute top-2.5 left-3 rtl:left-auto rtl:right-3" />
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full py-2 px-3 pl-9 rtl:pl-3 rtl:pr-9 rounded border border-[#A5B49F]/60 focus:outline-none focus:border-[#173D32] bg-white"
                    >
                      <option value="08:30 AM – 10:00 AM">08:30 AM – 10:00 AM (Morning Session)</option>
                      <option value="10:30 AM – 12:00 PM">10:30 AM – 12:00 PM (Midday Session)</option>
                      <option value="01:30 PM – 03:00 PM">01:30 PM – 03:00 PM (Afternoon Session)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Grade of Interest & Attendees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-[#242824] mb-1">
                    {language === 'ar' ? 'المرحلة الدراسية المرغوبة' : 'Grade of Interest'}
                  </label>
                  <select
                    value={formData.gradeOfInterest}
                    onChange={(e) => setFormData({ ...formData, gradeOfInterest: e.target.value })}
                    className="w-full py-2 px-3 rounded border border-[#A5B49F]/60 focus:outline-none focus:border-[#173D32] bg-white"
                  >
                    <option value="Early Years (FS1 – FS2)">Early Years (FS1 – FS2 / Pre-KG – KG1)</option>
                    <option value="Primary (Grades 1 – 5)">Primary School (Grades 1 – 5)</option>
                    <option value="Middle School (Grades 6 – 8)">Middle School (Grades 6 – 8)</option>
                    <option value="Senior School (Grades 9 – 12)">Senior School (Grades 9 – 12)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-[#242824] mb-1">
                    {language === 'ar' ? 'عدد الحاضرين' : 'Number of Visitors'}
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#596159] absolute top-2.5 left-3 rtl:left-auto rtl:right-3" />
                    <select
                      value={formData.attendeesCount}
                      onChange={(e) => setFormData({ ...formData, attendeesCount: Number(e.target.value) })}
                      className="w-full py-2 px-3 pl-9 rtl:pl-3 rtl:pr-9 rounded border border-[#A5B49F]/60 focus:outline-none focus:border-[#173D32] bg-white"
                    >
                      <option value={1}>1 Person</option>
                      <option value={2}>2 Persons (Parents)</option>
                      <option value={3}>3 Persons (Parents + Child)</option>
                      <option value={4}>4+ Family Members</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-[#A5B49F] rounded text-[#596159] hover:bg-black/5 transition-colors"
                >
                  {language === 'ar' ? 'إلغاء' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#173D32] hover:bg-[#0F2821] text-[#F8F7F2] font-semibold rounded border border-[#B79A62] shadow transition-colors"
                >
                  {language === 'ar' ? 'تأكيد حجز الزيارة' : 'Confirm Tour Booking'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
