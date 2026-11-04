export interface RealImageMeta {
  url: string;
  alt: { en: string; ar: string };
  credit?: string;
  category: string;
}

export const REAL_ACADEMY_IMAGES: Record<string, RealImageMeta> = {
  // Hero Campus Architecture
  hero: {
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80',
    alt: {
      en: 'Noor Academy Campus exterior in Sharjah with modern limestone architecture and landscaped courtyards',
      ar: 'المبنى الرئيسي لأكاديمية نور بالشارقة بواجهات حجرية عصرية وفناء خارجي منسق',
    },
    credit: 'Sharjah Campus Architecture',
    category: 'campus',
  },

  // The Averroes Grand Library
  library: {
    url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    alt: {
      en: 'The Averroes Grand Library interior with double-height oak bookcases and sunlit study areas',
      ar: 'مكتبة ابن رشد الكبرى بروافد خشبية عالية ومقاعد استذكار مضاءة بنور طبيعي',
    },
    credit: 'The Averroes Grand Library',
    category: 'academic',
  },

  // Principal Dr. Tariq Al-Hashemi
  principal: {
    url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    alt: {
      en: 'Dr. Tariq Al-Hashemi, Executive Principal of Noor Islamic International Academy',
      ar: 'د. طارق الهاشمي، المدير التنفيذي العام لأكاديمية نور الإسلامية الدولية',
    },
    credit: 'Office of the Principal',
    category: 'leadership',
  },

  // Leadership Team
  'leader-vice': {
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    alt: {
      en: 'Maryam Bint Sultan Al-Qasimi, Vice Principal & Head of Arabic & Islamic Heritage',
      ar: 'مريم بنت سلطان القاسمي، نائبة المدير ورئيسة قسم الهوية والدراسات الإسلامية',
    },
    credit: 'Vice Principal Directorate',
    category: 'leadership',
  },

  'leader-senior': {
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    alt: {
      en: 'Edward C. Montgomery, Head of Senior School & Academic Standards',
      ar: 'إدوارد سي. مونتغمري، رئيس المرحلة الثانوية ومعايير الاعتماد الأكاديمي',
    },
    credit: 'Senior School Directorate',
    category: 'leadership',
  },

  // Al-Khwarizmi STEM & Robotics Center
  stem: {
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    alt: {
      en: 'Al-Khwarizmi STEM & Robotics Center with cutting-edge engineering workstations and sensors',
      ar: 'مركز الخوارزمي للابتكار والروبوتات المجهز بأحدث التقنيات وأجهزة الاستشعار',
    },
    credit: 'STEM & Robotics Center',
    category: 'academic',
  },

  // Science / Chemistry Laboratory
  science: {
    url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
    alt: {
      en: 'State-of-the-art physics and chemistry laboratory with research benches and equipment',
      ar: 'مختبرات العلوم المتطورة المجهزة بأحدث أدوات البحث العلمي والتجارب',
    },
    credit: 'Integrated Science Laboratories',
    category: 'academic',
  },

  // Noor Reflection & Prayer Sanctuary
  prayer: {
    url: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80',
    alt: {
      en: 'The Noor Reflection & Prayer Sanctuary with acoustic timber ceilings and natural soft light',
      ar: 'مسجد ومصلى النور بتكسيات خشبية هندسية وأجواء عامرة بالسكينة والخشوع',
    },
    credit: 'The Noor Prayer Sanctuary',
    category: 'faith',
  },

  // Falcon Sports Pavilion & Aquatics
  sports: {
    url: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80',
    alt: {
      en: 'Falcon Sports Pavilion with Olympic-specification 25m swimming pool and indoor arena',
      ar: 'مجمع الصقر الرياضي بالمسبح الأولمبي والصالة الرياضية المغطاة',
    },
    credit: 'Falcon Sports Complex',
    category: 'sports',
  },

  // Sinan Fine Arts & Calligraphy Ateliers
  arts: {
    url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80',
    alt: {
      en: 'Sinan Fine Arts & Calligraphy Ateliers bathed in natural north light with art easels',
      ar: 'أتيليه سنان للفنون التشكيلية والخط العربي بإضاءة طبيعية وأجنحة رسم احترافية',
    },
    credit: 'Fine Arts & Calligraphy Ateliers',
    category: 'arts',
  },

  // Andalusian Courtyards & Sensory Gardens
  courtyard: {
    url: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1200&q=80',
    alt: {
      en: 'Andalusian courtyards with date palms, calm water fountains, and limestone pathways',
      ar: 'الأفنية الأندلسية بأشجار النخيل ونوافير المياه وممرات الحجر الطبيعي',
    },
    credit: 'Campus Botanical Courtyard',
    category: 'campus',
  },

  // Early Years Foundation
  'early-years': {
    url: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80',
    alt: {
      en: 'Early Years Foundation classroom with natural wooden play materials and storytelling area',
      ar: 'فصل مرحلة الطفولة المبكرة بمواد استكشاف خشبية طبيعية وركن القراءة التفاعلي',
    },
    credit: 'Early Years Foundation Stage',
    category: 'academic',
  },

  // Primary School
  primary: {
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    alt: {
      en: 'Primary School students engaged in collaborative inquiry and reading in modern classroom',
      ar: 'طلبة المرحلة الابتدائية يشاركون في القراءة التفاعلية والاستقصاء المعرفي',
    },
    credit: 'Primary School Faculty',
    category: 'academic',
  },

  // Middle School
  middle: {
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
    alt: {
      en: 'Middle School students participating in scientific analysis and debate',
      ar: 'طلبة المرحلة المتوسطة في حصة العلوم والمناظرة الفكرية',
    },
    credit: 'Middle School Faculty',
    category: 'academic',
  },

  // Senior School
  senior: {
    url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    alt: {
      en: 'Senior School students in advanced seminar discussion preparing for university entrance',
      ar: 'طلبة المرحلة الثانوية في حلقة نقاش أكاديمية متقدمة للتأهيل الجامعي',
    },
    credit: 'Senior School & Sixth Form',
    category: 'academic',
  },

  // News 1: STEM Olympiad
  'news-stem': {
    url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80',
    alt: {
      en: 'Noor Academy student research delegation celebrating academic achievement in STEM',
      ar: 'تكريم وفد طلبة أكاديمية نور المشارك في أولمبياد العلوم والتكنولوجيا',
    },
    credit: 'Academic Excellence Awards',
    category: 'news',
  },

  // News 2: Botanical Garden
  'news-garden': {
    url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
    alt: {
      en: 'Lush green botanical courtyard and student hydroponics greenhouse',
      ar: 'الحديقة النباتية ومحطات الزراعة المائية التفاعلية بالحرم المدرسي',
    },
    credit: 'Campus Sustainability Project',
    category: 'news',
  },

  // News 3: Quranic Colloquium
  'news-quran': {
    url: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1200&q=80',
    alt: {
      en: 'Annual Quranic memorization and recitation honors assembly at Noor Academy',
      ar: 'ملتقى حفظ القرآن الكريم السنوي وتكريم الحفظة المتميزين',
    },
    credit: 'Faith & Community Heritage',
    category: 'news',
  },
};
