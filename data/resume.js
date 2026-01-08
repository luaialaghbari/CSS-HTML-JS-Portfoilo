// Central resume data used by Next.js landing page
// Update fields here and the page will reflect automatically

const resume = {
  name: 'Luai Alaghbari',
  role: 'Frontend Developer & UI/UX Designer',
  location: "Sana'a, Yemen",
  email: 'louiyaseralag@gmail.com',
  phone: '772642380',
  resumeUrl: '/assets/Ruesme.pdf', // placed under public/assets
  socials: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  summary:
    'Frontend Developer & UI/UX Designer focused on building fast, accessible, and intuitive web experiences with clean, scalable UI.',

  education: [
    {
      degree: 'Bachelor of Software Engineering',
      school: 'Universtiy of scince and Techonalogy',
      location: "Sana'a, Yemen",
      period: '2021–2025',
      details: [
        'Focused on full‑stack development, system analysis, and UI/UX design.',
        'Completed graduation project: Real‑time delivery app with modern UI and live tracking.',
      ],
    },
    {
      degree: 'English Language Diploma',
      school: 'YALI (Yemen American Language Institute)',
      location: "Sana'a, Yemen",
      period: '2021',
      details: [
        'Intensive program focused on advanced grammar, writing, speaking, and listening skills.',
      ],
    },
	{
		degree: 'English Business Certificate',
		school: 'YALI (Yemen American Language Institute)',
		location: "Sana'a, Yemen",
		period: '2021',
		details: [
			'Business English training focused on professional communication, presentations, and workplace writing.',
		],
	},
    { degree: 'TOEFL Certificate', school: 'YALI (Yemen American Language Institute)', location: "Sana'a, Yemen", period: '2021', details: [
      'Test of English as a Foreign Language certification demonstrating proficiency in English reading, writing, listening, and speaking skills.',
    ] },
    { degree: 'ICDL Certificate', school: 'New Horizons', location: "Sana'a, Yemen", period: '2021', details: [
      'International Computer Driving Licence certification covering essential computer skills including word processing, spreadsheets, and digital literacy.',
    ] },
	{
		degree: 'CNA 1 Certificate',
		school: 'Cisco',
		location: '',
		period: '2022',
		details: [
			'Completed Cisco Certified Network Associate (CNA 1) covering networking fundamentals and basic routing/switching concepts.',
		],
	},
    { degree: 'TESOL Certificate', school: 'YALI (Yemen American Language Institute)', location: "Sana'a, Yemen", period: '2023', details: [
      'Training in modern teaching methods, classroom management, and curriculum development.',
    ] },
	{
		degree: 'Software Engineering Internship',
		school: 'Yemen Soft',
		location: "Sana'a, Yemen",
		period: '2024',
		details: [
			'3‑month internship across system analysis, UI/UX, and implementation in a professional software team.',
		],
	},
  ],

  experience: [
    {
      title: 'Software Engineer & UI/UX Designer — Summer Internship Program',
      titleAr: 'مهندس برمجيات ومصمم واجهات — برنامج التدريب الصيفي',
      company: 'Yemen Soft',
      companyAr: 'يمن سوفت',
      location: "Sana'a, Yemen",
      locationAr: 'صنعاء، اليمن',
      period: '2024',
      periodAr: '2024',
      highlights: [
        '3‑month internship across the full SDLC — from system analysis to UI/UX.',
        'Collaborated on an English management app, contributing to technical structure and UX design.',
      ],
      highlightsAr: [
        'تدريب مكثف لمدة 3 أشهر شمل دورة حياة تطوير البرمجيات بالكامل — من تحليل النظام إلى تصميم الواجهات.',
        'المشاركة في تطوير تطبيق لإدارة اللغة الإنجليزية، والمساهمة في بناء الهيكل التقني وتحسين تجربة المستخدم.',
      ],
      technologies: ['UI/UX', 'SDLC', 'Flutter', 'Dart'],
    },
    {
      title: 'Graduation Project — Food Delivery App',
      titleAr: 'مشروع التخرج — تطبيق توصيل طعام متكامل',
      company: 'Universtiy of scince and Techonalogy',
      companyAr: 'جامعة العلوم والتكنولوجيا',
      location: '',
      locationAr: '',
      period: '2024',
      periodAr: '2024',
      preview: '/assets/Graduation project.pdf',
      source: '#',
      highlights: [
        'Designed and developed a delivery application featuring real‑time order tracking using Google Maps.',
        'Covered requirements, UI/UX, implementation, and testing with a focus on simplicity and user experience.',
      ],
      highlightsAr: [
        'تصميم وتطوير تطبيق توصيل يتميز بتتبع الطلبات في الوقت الفعلي باستخدام خرائط جوجل.',
        'إدارة كافة مراحل المشروع: المتطلبات، تصميم الواجهات، التنفيذ والاختبار، مع التركيز على سهولة الاستخدام.',
      ],
      technologies: ['Flutter', 'Dart', 'Firebase Auth', 'Trello', 'Git', 'GitHub', 'OpenStreetMap'],
    },
    {
      title: 'Yemeni Store E‑commerce App (Fullstack — UI/UX) — In Progress',
      titleAr: 'تطبيق متجر يمني للتجارة الإلكترونية (متكامل — UI/UX) — قيد التنفيذ',
      company: '',
      companyAr: '',
      location: '',
      locationAr: '',
      period: 'May 2025 – Present',
      periodAr: 'مايو 2025 – الآن',
      preview: '#',
      source: '#',
      highlights: [
        'Developed branded splash and onboarding flow in Flutter with fast startup and smooth transition.',
        'Designed & built a Home UI for product categories and featured items using responsive layouts and custom widgets.',
        'Created Cart and Favorites with add/remove functionality using Provider for state and local data persistence.',
      ],
      highlightsAr: [
        'تطوير شاشة ترحيب وانسيابية تعريفية (Onboarding) في Flutter مع سرعة عالية في التشغيل وانتقالات سلسة.',
        'تصميم وبناء واجهة المتجر الرئيسية للأصناف والمنتجات المميزة باستخدام تخطيطات مرنة وودجت مخصصة.',
        'تنفيذ نظام السلة والمفضلات مع ميزات الإضافة والحذف باستخدام Provider لإدارة الحالة وتخزين البيانات محلياً.',
      ],
      technologies: ['Flutter', 'Dart', 'Supabase Auth', 'Git', 'GitHub'],
    },
    {
      title: 'Water Delivery App (UI/UX Designer & Frontend)',
      titleAr: 'تطبيق توصيل مياه (مصمم واجهات ومطور فرونت إند)',
      company: 'Aljazeera Springs factory',
      companyAr: 'مصنع ينابيع الجزيرة',
      location: 'Jeddah',
      locationAr: 'جدة',
      period: 'In progress – Present',
      periodAr: 'قيد التنفيذ – الآن',
      preview: '#',
      source: '#',
      highlights: [
        'Multi‑platform customer app to place orders, schedule deliveries, and track in real time.',
        'Driver app with live GPS sharing and Mapbox‑based turn‑by‑turn navigation.',
        'Operations dashboard in React.js with Node.js APIs for orders, drivers, products, and promotions.',
        'Owning architecture, UI/UX, data modeling, and integrations (auth, push notifications, maps).',
      ],
      highlightsAr: [
        'تطبيق عملاء متعدد المنصات لطلب المياه وجدولة المواعيد والتتبع في الوقت الفعلي.',
        'تطبيق للسائقين مع ميزة مشاركة الموقع المباشر (GPS) ونظام ملاحة دقيق خطوة بخطوة عبر Mapbox.',
        'لوحة تحكم تشغيلية بـ React.js وNode.js لإدارة الطلبات، السائقين، المنتجات، والعروض الترويجية.',
        'المسؤول الكامل عن بناء الهيكل التقني، تصميم الواجهات، نمذجة البيانات، والربط مع الخدمات (Auth, Push, Maps).',
      ],
      technologies: ['Flutter', 'Dart', 'React.js', 'Node.js', 'Supabase', 'Mapbox', 'Git/GitHub'],
    },
  ],

  skills: [
    {
      category: "Mobile Development",
      items: ['Flutter', 'Dart']
    },
    {
      category: "Frontend Web",
      items: ['React', 'Next.js', 'JavaScript', 'HTML', 'CSS']
    },
    {
      category: "Tools & Design",
      items: ['Figma', 'Git', 'GitHub']
    },
    {
      category: "Backend & Services",
      items: ['Supabase', 'Firebase', 'PHP', 'Java', 'REST APIs']
    }
  ],

  projects: [
    {
      name: 'Delivery App (Flutter)',
      image: '/assets/project-1.png',
      tags: ['Flutter', 'Dart', 'Maps', 'Realtime'],
      preview: '#',
      source: '#',
    },
    {
      name: 'E‑commerce UI',
      image: '/assets/project-2.png',
      tags: ['Flutter', 'Provider', 'Responsive UI'],
      preview: '#',
      source: '#',
    },
    {
      name: 'Portfolio Website',
      image: '/assets/project-3.png',
      tags: ['Next.js', 'CSS', 'Accessibility'],
      preview: '#',
      source: '#',
    },
  ],
};

export default resume;
