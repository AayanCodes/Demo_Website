import { AcademicStage, FacilityItem, FaqItem, NewsItem } from '../types';

export const ACADEMY_INFO = {
  name: {
    en: 'Noor Academy',
    ar: 'أكاديمية نور',
  },
  fullName: {
    en: 'Noor Islamic International Academy',
    ar: 'أكاديمية نور الإسلامية الدولية',
  },
  tagline: {
    en: 'Rooted in values. Ready for the world.',
    ar: 'راسخون في القيم. متطلعون إلى العالم.',
  },
  location: {
    en: 'University City, Sharjah, United Arab Emirates',
    ar: 'المدينة الجامعية، الشارقة، الإمارات العربية المتحدة',
  },
  shortLocation: {
    en: 'Sharjah, United Arab Emirates',
    ar: 'الشارقة، الإمارات العربية المتحدة',
  },
  session: {
    en: 'Academic Session 2026–2027',
    ar: 'العام الدراسي 2026–2027',
  },
  phone: '+971 6 500 0000',
  email: 'admissions@nooracademy.ae',
  generalEmail: 'info@nooracademy.ae',
  workingHours: {
    en: 'Mon – Thu: 7:30 AM – 3:30 PM | Fri: 7:30 AM – 12:00 PM',
    ar: 'الإثنين – الخميس: 7:30 صباحاً – 3:30 مساءً | الجمعة: 7:30 صباحاً – 12:00 ظهراً',
  },
};

export const NAVIGATION_ITEMS = [
  { id: 'home', label: { en: 'Home', ar: 'الرئيسية' } },
  { id: 'about', label: { en: 'About', ar: 'عن الأكاديمية' } },
  { id: 'academics', label: { en: 'Learning', ar: 'المناهج التعليمية' } },
  { id: 'campus-life', label: { en: 'Campus Life', ar: 'الحياة المدرسية' } },
  { id: 'admissions', label: { en: 'Admissions', ar: 'القبول والتسجيل' } },
  { id: 'contact', label: { en: 'Contact', ar: 'اتصل بنا' } },
];

export const ACADEMIC_STAGES: AcademicStage[] = [
  {
    id: 'early-years',
    name: { en: 'Early Years Foundation', ar: 'مرحلة الطفولة المبكرة' },
    grades: { en: 'FS1 – FS2 (Pre-KG – KG1)', ar: 'الروضة الأولى – الروضة الثانية' },
    ages: { en: 'Ages 3 – 5 Years', ar: 'الأعمار 3 – 5 سنوات' },
    description: {
      en: 'A nurturing bilingual foundation where natural wonder and moral awareness take root through purposeful, play-based exploration.',
      ar: 'بيئة ثنائية اللغة دافئة تنمي فضول الطفل الطبيعي وإدراكه القيمي من خلال التعلم القائم على الاستكشاف واللعب الهادف.',
    },
    highlights: {
      en: ['Bilingual phonics & vocabulary', 'Sensory Arabic & English storytelling', 'Foundations of empathy & sharing', 'Expansive natural outdoor play areas'],
      ar: ['التأسيس الصوتي الثنائي باللغتين', 'سرد القصص التفاعلي باللغتين', 'غرس قيم التعاون والمشاركة', 'باحات استكشاف طبيعية مفتوحة'],
    },
    outcomes: {
      en: ['Confident verbal communication in English & Arabic', 'Fine & gross motor dexterity', 'Joyful love for structured discovery', 'Basic Islamic etiquette & kindness'],
      ar: ['الطلاقة اللغوية الأولية بالعربية والإنجليزية', 'التطور الحركي الدقيق والإدراكي', 'الشغف بالاستكشاف والتعلم', 'التحلي بآداب التعامل الإسلامية الرفيعة'],
    },
    imageKey: 'early-years',
  },
  {
    id: 'primary',
    name: { en: 'Primary School', ar: 'المرحلة الابتدائية' },
    grades: { en: 'Grades 1 – 5 (Years 2 – 6)', ar: 'الصفوف 1 – 5' },
    ages: { en: 'Ages 6 – 11 Years', ar: 'الأعمار 6 – 11 سنة' },
    description: {
      en: 'Building foundational mastery in core disciplines alongside Islamic character development, critical literacy, and scientific enquiry.',
      ar: 'بناء التميز الأكاديمي في العلوم واللغات مع ترسيخ الأخلاق الإسلامية، القراءة النقدية، والاستقصاء العلمي الرصين.',
    },
    highlights: {
      en: ['Mastery in Mathematics & STEM', 'Classical Arabic literature & recitation', 'Quranic studies & character building', 'Collaborative inquiry-based projects'],
      ar: ['التمكن في الرياضيات والعلوم التطبيقية', 'اللغة العربية الفصحى والتلاوة المجودة', 'الدراسات الإسلامية والتربية الأخلاقية', 'مشاريع جماعية قائمة على البحث'],
    },
    outcomes: {
      en: ['Strong computational & analytical skills', 'Fluency in formal Arabic & English', 'Independent study habits', 'Reflective ethical awareness in daily life'],
      ar: ['مهارات تحليلية ورياضية متقدمة', 'فصاحة اللسان باللغتين كتابة ومحادثة', 'عادات استذكار مستقلة ومنتظمة', 'وعي أخلاقي وسلوكي متوازن'],
    },
    imageKey: 'primary',
  },
  {
    id: 'middle-school',
    name: { en: 'Middle School', ar: 'المرحلة المتوسطة' },
    grades: { en: 'Grades 6 – 8 (Years 7 – 9)', ar: 'الصفوف 6 – 8' },
    ages: { en: 'Ages 11 – 14 Years', ar: 'الأعمار 11 – 14 سنة' },
    description: {
      en: 'Fostering intellectual autonomy, scientific investigation, and global perspectives anchored by principled Muslim identity.',
      ar: 'صقل الاستقلال الفكري، البحث العلمي، واستشراف القضايا العالمية في إطار هوية إسلامية راسخة ومعاصرة.',
    },
    highlights: {
      en: ['Integrated science laboratories', 'Islamic history & civilizations', 'Robotics, coding & digital literacy', 'Leadership, debate & public speaking'],
      ar: ['مختبرات العلوم المتكاملة الحديثة', 'تاريخ الحضارة الإسلامية والفكر الإنساني', 'البرمجة والروبوتات والذكاء الاصطناعي', 'مهارات الخطابة والمناظرات والقيادة'],
    },
    outcomes: {
      en: ['Structured academic debate skills', 'Experimental research proficiency', 'Moral leadership within peer groups', 'Comprehensive preparation for senior exams'],
      ar: ['القدرة على الحوار الأكاديمي المنضبط', 'إتقان البحث التجريبي والاستدلالي', 'الريادة الأخلاقية ومسؤولية المجتمع', 'الجاهزية التامة للمرحلة الثانوية'],
    },
    imageKey: 'middle',
  },
  {
    id: 'senior-school',
    name: { en: 'Senior School & Sixth Form', ar: 'المرحلة الثانوية' },
    grades: { en: 'Grades 9 – 12 (Years 10 – 13)', ar: 'الصفوف 9 – 12' },
    ages: { en: 'Ages 14 – 18 Years', ar: 'الأعمار 14 – 18 سنة' },
    description: {
      en: 'Rigorous international qualifications preparing articulate, compassionate scholars equipped for premier global universities.',
      ar: 'مناهج دولية متقدمة تؤهل خريجين متميزين بالعلم والحكمة للالتحاق بأعرق الجامعات العالمية والإسهام في نهضة الأوطان.',
    },
    highlights: {
      en: ['Rigorous international curriculum', 'University counseling & career guidance', 'Advanced Islamic jurisprudence & contemporary ethics', 'Community service & civic leadership'],
      ar: ['مقررات دولية متخصصة ومعتمدة', 'توجيه أكاديمي ومهني للقبول الجامعي', 'قضايا الفقه المعاصر والفلسفة الأخلاقية', 'المبادرات المجتمعية والعمل التطوعي'],
    },
    outcomes: {
      en: ['Acceptance to top international universities', 'Steadfast personal faith and global empathy', 'In-depth subject specialization', 'Leadership readiness for future industries'],
      ar: ['القبول في كبرى الجامعات المرموقة', 'ثبات عقدي وفكر منفتح على العالم', 'تخصص معرفي وبحثي معمق', 'جاهزية لقيادة مسارات المستقبل'],
    },
    imageKey: 'senior',
  },
];

export const PILLARS = [
  {
    id: 'excellence',
    title: { en: 'Academic Excellence', ar: 'التميز الأكاديمي' },
    shortDesc: {
      en: 'A challenging international curriculum that nurtures intellectual curiosity, critical thinking, and mastery in sciences, humanities, and languages.',
      ar: 'منهج دولي رصين يغذي الفضول المعرفي، التفكير النقدي، والتمكن في مجالات العلوم والآداب واللغات المتعددة.',
    },
    features: {
      en: ['Holistic STEM & Arts balance', 'Individualized academic mentoring', 'World-class laboratory facilities'],
      ar: ['توازن معرفي بين العلوم والآداب', 'إشراف أكاديمي فردي مستمر', 'مختبرات بحثية متطورة عالمياً'],
    },
  },
  {
    id: 'values',
    title: { en: 'Islamic Values', ar: 'القيم الإسلامية' },
    shortDesc: {
      en: 'Character education deeply woven into daily life, instilling honesty, humility, civic service, and reverent stewardship of our shared world.',
      ar: 'تربية وجدانية وأخلاقية متجذرة في التفاصيل اليومية، تغرس الأمانة، التواضع، خدمة المجتمع، وعمارة الأرض بالخير.',
    },
    features: {
      en: ['Quran memorization & contemplation', 'Prophetic morals in practice', 'Serene prayer & reflection halls'],
      ar: ['حفظ القرآن الكريم وتدبر معانيه', 'تطبيق الأخلاق النبوية في السلوك', 'مصليات رحبة ومساحات للتأمل'],
    },
  },
  {
    id: 'community',
    title: { en: 'A Caring Community', ar: 'مجتمع مدرسي متآلف' },
    shortDesc: {
      en: 'A safe, inspiring sanctuary where every learner is known, honored, and supported by world-class educators and engaged families.',
      ar: 'بيئة آمنة وملهمة ينال فيها كل طالب الرعاية والتقدير، مدعوماً بنخبة من خيرة المعلمين وشراكة وثيقة مع أولياء الأمور.',
    },
    features: {
      en: ['Compassionate pastoral support', 'Active family engagement', 'Safe, sustainable green campus'],
      ar: ['رعاية نفسية وتربوية حانية', 'شراكة فاعلة مع الأسرة', 'حرم مدرسي مستدام وآمن بالكامل'],
    },
  },
];

export const CAMPUS_FACILITIES: FacilityItem[] = [
  {
    id: 'grand-library',
    title: { en: 'The Averroes Grand Library', ar: 'مكتبة ابن رشد الكبرى' },
    category: 'academic',
    description: {
      en: 'A sun-drenched double-height sanctuary holding over 25,000 bilingual volumes, rare manuscript replicas, quiet research pods, and digital archives.',
      ar: 'صرح معرفي مشرق يضم أكثر من 25,000 مجلد باللغتين، أجنحة مخصصة للبحث الهادئ، ومكتبة رقمية متصلة بكبرى الأرشيفات العالمية.',
    },
    specs: { en: '25,000+ volumes · 8 seminar pods · 200 study seats', ar: '25,000+ مجلد · 8 قاعات نقاش · 200 مقعد دراسي' },
    imageKey: 'library',
  },
  {
    id: 'stem-innovation',
    title: { en: 'Al-Khwarizmi STEM & Robotics Center', ar: 'مركز الخوارزمي للابتكار والروبوتات' },
    category: 'academic',
    description: {
      en: 'State-of-the-art computational laboratories with rapid prototyping stations, 3D printers, competitive robotics arenas, and AI workstations.',
      ar: 'مختبرات حاسوبية متطورة مزودة بأحدث منصات النمذجة ثلاثية الأبعاد، حلبات روبوتات تنافسية، ومحطات متخصصة في الذكاء الاصطناعي.',
    },
    specs: { en: '6 specialized labs · 3D printing suite · Clean room tech', ar: '6 مختبرات تخصصية · جناح طباعة ثلاثية الأبعاد · تقنيات الغرف النظيفة' },
    imageKey: 'stem',
  },
  {
    id: 'sports-complex',
    title: { en: 'Falcon Sports Pavilion & Aquatics', ar: 'مجمع الصقر الرياضي والمسابح الأولمبية' },
    category: 'sports',
    description: {
      en: 'Climate-controlled athletic arena with an Olympic-specification 25m swimming pool, multi-sport indoor gymnasium, martial arts dojo, and FIFA-grade turf pitch.',
      ar: 'مجمع رياضي مكيف بالكامل يشمل مسبحاً نصف أولمبي بطول 25 متراً، صالة ألعاب متعددة، ملعب كرة قدم بمعايير الفيفا، ومساحات للرماية والدفاع عن النفس.',
    },
    specs: { en: '25m pool · 6-lane athletic track · Indoor FIFA arena', ar: 'مسبح 25م · مضمار 6 حارات · صالة رياضية مغطاة' },
    imageKey: 'sports',
  },
  {
    id: 'prayer-pavilion',
    title: { en: 'The Noor Reflection & Prayer Sanctuary', ar: 'مسجد ومصلى النور للسكينة والتدبر' },
    category: 'faith',
    description: {
      en: 'Designed with acoustic timber ribbing and soft natural lighting filtering through geometric mashrabiya screens, providing a tranquil haven for congregational prayers.',
      ar: 'صُمم بعناية فائقة وتكسيات خشبية هندسية تعكس روح العمارة الإسلامية المعاصرة، ليوفر أجواء من السكينة والخشوع لأداء الصلوات وحلقات القرآن.',
    },
    specs: { en: 'Capacity for 800 worshippers · Dedicated ablution suites', ar: 'يتسع لـ 800 مصلٍ · مرافق وضوء متكاملة وفاخرة' },
    imageKey: 'prayer',
  },
  {
    id: 'arts-studio',
    title: { en: 'Sinan Fine Arts & Calligraphy Ateliers', ar: 'أتيليه سنان للفنون التشكيلية والخط العربي' },
    category: 'arts',
    description: {
      en: 'North-facing light-filled studios for classical Islamic illumination, contemporary sculpture, pottery ceramics, and architectural drawing.',
      ar: 'استوديوهات مضاءة بنور طبيعي شمالي، مخصصة لفنون الزخرفة الإسلامية، الخط العربي الأصيل، الخزف، والتصميم المعماري اليدوي والرقمي.',
    },
    specs: { en: '4 art studios · Ceramic kiln · Exhibition galleria', ar: '4 مراسم فنية · فرن خزف حراري · رواق معارض دائم' },
    imageKey: 'arts',
  },
  {
    id: 'botanical-courtyard',
    title: { en: 'Andalusian Courtyards & Sensory Gardens', ar: 'الحدائق الأندلسية والممرات الخضراء' },
    category: 'campus',
    description: {
      en: 'Courtyards woven with native desert flora, flowing water fountains, date palm pergolas, and outdoor amphitheaters for open-air learning.',
      ar: 'أفنية مستوحاة من العمارة الأندلسية بأشجار النخيل والنباتات المحلية ونوافير المياه الهادئة، تحتضن مدرجات تعليمية مكشوفة.'
    },
    specs: { en: '12,000 m² open green landscape · Solar pergolas', ar: '12,000 م² مسطحات خضراء مفتوحة · مظلات طاقة شمسية' },
    imageKey: 'courtyard',
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    date: { en: 'November 2026', ar: 'نوفمبر 2026' },
    category: { en: 'Academic Distinction', ar: 'تميز أكاديمي' },
    title: {
      en: 'Noor Academy Students Excel in Regional STEM & Arabic Olympiad',
      ar: 'طلبة أكاديمية نور يحصدون جوائز أولمبياد العلوم واللغة العربية الإقليمي',
    },
    summary: {
      en: 'Our Grade 10 research delegation secured distinguished accolades for innovative solar water desalination prototypes and classical Arabic debate.',
      ar: 'حقق وفد الصف العاشر إنجازاً علمياً لافتاً في ابتكار محطات التحلية الشمسية والمناظرة الأدبية باللغة العربية الفصحى.',
    },
    imageKey: 'news-stem',
  },
  {
    id: 'news-2',
    date: { en: 'October 2026', ar: 'أكتوبر 2026' },
    category: { en: 'Campus Architecture', ar: 'الحرم المدرسي' },
    title: {
      en: 'Inauguration of the New Eco-Innovation & Sensory Botanical Garden',
      ar: 'افتتاح الحديقة النباتية البيئية ومنظومة الزراعة المستدامة',
    },
    summary: {
      en: 'Designed by sustainable architects, the courtyard combines heritage desert botany with automated hydroponic learning stations managed by students.',
      ar: 'تمزج الحديقة بين النباتات التراثية وأنظمة الزراعة المائية الذكية التي يشرف عليها الطلبة تعزيزاً لمفهوم الاستدامة.',
    },
    imageKey: 'news-garden',
  },
  {
    id: 'news-3',
    date: { en: 'September 2026', ar: 'سبتمبر 2026' },
    category: { en: 'Community & Faith', ar: 'المجتمع والقيم' },
    title: {
      en: 'Annual Noor Quranic Memorization & Virtues Colloquium',
      ar: 'ملتقى نور السنوي لحفظ القرآن الكريم وتأصيل القيم الأخلاقية',
    },
    summary: {
      en: 'A dignified assembly honoring 140 student memorizers while celebrating classical recitation mastery alongside academic excellence.',
      ar: 'حفل بهيج كرمت فيه الأكاديمية 140 حافظاً وحافظة لكتاب الله، تأكيداً على الجمع المبارك بين العلم الشرعي والتميز المعاصر.',
    },
    imageKey: 'news-quran',
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    category: 'admissions',
    question: {
      en: 'What curriculum does Noor Academy offer?',
      ar: 'ما هو المنهج التعليمي المعتمد في أكاديمية نور؟',
    },
    answer: {
      en: 'Noor Academy delivers a dual-strength international educational framework. We combine the rigorous British International curriculum (culminating in IGCSE and A-Levels) with an enhanced Ministry of Education Islamic Studies, Arabic Language, and UAE Social Studies program.',
      ar: 'تقدم الأكاديمية نموذجاً تعليمياً مزدوج القوة؛ يجمع بين المنهاج البريطاني الدولي المعتمد المؤهل لشهادات (IGCSE و A-Levels) مع برنامج متقدم ومعمق في الدراسات الإسلامية واللغة العربية والتربية الأخلاقية.',
    },
  },
  {
    category: 'admissions',
    question: {
      en: 'What are the required admissions documents?',
      ar: 'ما هي المستندات المطلوبة للتسجيل والقبول؟',
    },
    answer: {
      en: 'Prospective families must provide: copies of the student and parents’ valid passports and Emirates IDs, birth certificate, previous two years of academic transcripts, a formal transfer certificate, and official vaccination records.',
      ar: 'تشمل المستندات المطلوبة: صورة عن جواز سفر وهوية الطالب وأولياء الأمور سارية المفعول، شهادة الميلاد، الشهادات الأكاديمية لآخر عامين دراسيين، شهادة الانتقال الرسمية، وبطاقة التطعيمات المعتمدة.',
    },
  },
  {
    category: 'academics',
    question: {
      en: 'How are Islamic values integrated into daily learning?',
      ar: 'كيف تُدمج القيم الإسلامية في الممارسات اليومية للطلبة؟',
    },
    answer: {
      en: 'Islamic values are not merely taught in weekly lectures; they form our school culture. From morning remembrances and congregational prayers to daily ethical reflection, community charity initiatives, and Quran recitation circles, faith informs every dimension of student conduct.',
      ar: 'القيم الإسلامية في أكاديمية نور هي أسلوب حياة؛ تتجلى في الأذكار الصباحية، إقامة الصلوات جماعة، حلقات تدبر القرآن، مبادرات العطاء المجتمعي، والتعامل الراقي القائم على الصدق والتواضع وبر الوالدين.',
    },
  },
  {
    category: 'academics',
    question: {
      en: 'Are Arabic programs available for non-native speakers?',
      ar: 'هل تتوفر برامج مخصصة لتعليم اللغة العربية لغير الناطقين بها؟',
    },
    answer: {
      en: 'Yes. We offer specialized Arabic pathways tailored for both native speakers (Arabic A) focusing on classical rhetoric and advanced literature, and non-native speakers (Arabic B) utilizing immersive, modern communicative pedagogies.',
      ar: 'نعم بكل تأكيد؛ نوفر مسارين مدروسين: مسار (اللغة العربية أ) للناطقين بها لتعزيز البلاغة والأدب، ومسار (اللغة العربية ب) لغير الناطقين بها بأساليب تفاعلية حديثة تحقق الطلاقة في التحدث والاستيعاب.',
    },
  },
  {
    category: 'campus',
    question: {
      en: 'Does the school provide campus transport in Sharjah and neighboring Emirates?',
      ar: 'هل توفر المدرسة حافلات نقل مدرسي في الشارقة والإمارات المجاورة؟',
    },
    answer: {
      en: 'Yes. The Academy operates an air-conditioned, GPS-tracked modern bus fleet covering Sharjah, Ajman, and key residential districts in Dubai, adhering to the highest road safety protocols with trained attendants.',
      ar: 'نعم، يوفر الحرم المدرسي أسطول حافلات حديث ومكيف ومزود بأنظمة التتبع الذكي وأحزمة الأمان، يغطي مختلف مناطق إمارة الشارقة وعجمان ومناطق محددة في دبي بإشراف مشرفات مدربات.',
    },
  },
];

export const LEADERSHIP_TEAM = [
  {
    name: { en: 'Dr. Tariq Al-Hashemi', ar: 'د. طارق الهاشمي' },
    role: { en: 'Executive Principal', ar: 'المدير التنفيذي العام' },
    credentials: { en: 'Ph.D. Educational Leadership (Oxford), M.Ed. (Cambridge)', ar: 'دكتوراه في القيادة التربوية (أكسفورد)، ماجستير التربية (كامبريدج)' },
    bio: {
      en: 'Bringing over 24 years of international and Gulf educational leadership, Dr. Al-Hashemi is dedicated to creating schools where intellectual rigor meets enduring spiritual depth.',
      ar: 'يمتلك أكثر من 24 عاماً من الخبرة في إدارة المدارس الدولية المرموقة في الخليج والمملكة المتحدة، مكرساً جهده لبناء صروح تجمع بين العراقة القيمية والحداثة المعرفية.',
    },
  },
  {
    name: { en: 'Maryam Bint Sultan Al-Qasimi', ar: 'مريم بنت سلطان القاسمي' },
    role: { en: 'Vice Principal & Head of Arabic & Islamic Heritage', ar: 'نائبة المدير ورئيسة قسم الهوية والدراسات الإسلامية' },
    credentials: { en: 'M.A. Arabic Linguistics, B.Ed. Islamic Pedagogy', ar: 'ماجستير في اللسانيات العربية، بكالوريوس أصول التربية الإسلامية' },
    bio: {
      en: 'A pioneer in bilingual curriculum design, overseeing the harmonious fusion of classical Quranic sciences, Arabic eloquence, and contemporary pedagogy.',
      ar: 'خبيرة رائدة في تطوير المناهج ثنائية اللغة، تشرف على غرس الفصاحة اللغوية وتأصيل الهوية الإسلامية والوطنية بأساليب تربوية جاذبة.',
    },
  },
  {
    name: { en: 'Edward C. Montgomery', ar: 'إدوارد سي. مونتغمري' },
    role: { en: 'Head of Senior School & Academic Standards', ar: 'رئيس المرحلة الثانوية ومعايير الاعتماد الأكاديمي' },
    credentials: { en: 'B.Sc. (Hons) Physics (Imperial College), PGCE', ar: 'بكالوريوس شرفي في الفيزياء (إمبريال كوليدج لندن)، دبلوم الدراسات العليا في التربية' },
    bio: {
      en: 'A former head of academics in London and Abu Dhabi, leading our students to exemplary outcomes in sciences, mathematics, and university placement.',
      ar: 'شغل مناصب قيادية في مدارس عريقة في لندن وأبوظبي، ويقود برامج التميز في العلوم والرياضيات وتأهيل الطلبة للالتحاق بأعرق الجامعات العالمية.',
    },
  },
];
