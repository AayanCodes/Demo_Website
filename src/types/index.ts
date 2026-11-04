export type Language = 'en' | 'ar';

export type PageView = 'home' | 'about' | 'academics' | 'campus-life' | 'admissions' | 'contact' | 'not-found';

export interface AdmissionFormData {
  studentName: string;
  dateOfBirth: string;
  gradeApplying: string;
  parentName: string;
  email: string;
  phone: string;
  countryOfResidence: string;
  message: string;
  preferredLanguage?: 'en' | 'ar';
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface TourBookingData {
  parentName: string;
  email: string;
  phone: string;
  tourDate: string;
  timeSlot: string;
  gradeOfInterest: string;
  attendeesCount: number;
}

export interface NewsItem {
  id: string;
  date: { en: string; ar: string };
  title: { en: string; ar: string };
  category: { en: string; ar: string };
  summary: { en: string; ar: string };
  imageKey: string;
}

export interface AcademicStage {
  id: string;
  name: { en: string; ar: string };
  grades: { en: string; ar: string };
  ages: { en: string; ar: string };
  description: { en: string; ar: string };
  highlights: { en: string[]; ar: string[] };
  outcomes: { en: string[]; ar: string[] };
  imageKey: string;
}

export interface FacilityItem {
  id: string;
  title: { en: string; ar: string };
  category: 'academic' | 'sports' | 'faith' | 'arts' | 'campus';
  description: { en: string; ar: string };
  specs: { en: string; ar: string };
  imageKey: string;
}

export interface FaqItem {
  question: { en: string; ar: string };
  answer: { en: string; ar: string };
  category: 'admissions' | 'academics' | 'campus';
}
