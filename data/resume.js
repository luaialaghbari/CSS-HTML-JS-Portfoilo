// Central resume data used by Next.js landing page
// Update fields here and the page will reflect automatically

const resume = {
  name: 'Luai Alaghbari',
  role: 'Frontend Developer · UI/UX Designer · Flutter/Dart · React/Next.js',
  location: "Sana'a, Yemen",
  email: 'louiyaseralag@gmail.com',
  phone: '772642380',
  resumeUrl: '/assets/Ruesme.pdf', // placed under public/assets
  socials: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  summary:
    'Frontend developer & UI/UX designer specializing in Flutter/Dart (mobile) and React/Next.js (web). I design and build pixel‑perfect, accessible, and performance‑first \n interfaces — from polished micro‑interactions to responsive systems — that help products feel fast, usable, and delightful for real users.',

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
    { degree: 'TOEFL Certificate', school: '', location: '', period: '2021', details: [
      'Test of English as a Foreign Language certification demonstrating proficiency in English reading, writing, listening, and speaking skills.',
    ] },
    { degree: 'ICDL Certificate', school: '', location: '', period: '2021', details: [
      'International Computer Driving Licence certification covering essential computer skills including word processing, spreadsheets, and digital literacy.',
    ] },
    { degree: 'TESOL Certificate', school: '', location: '', period: '2023', details: [
      'Training in modern teaching methods, classroom management, and curriculum development.',
    ] },
  ],

  experience: [
    {
      title: 'Software Engineer & UI/UX Designer — Summer Internship Program',
      company: 'Yemen Soft',
      location: "Sana'a, Yemen",
      period: '2024',
      highlights: [
        '3‑month internship across the full SDLC — from system analysis to UI/UX.',
        'Collaborated on an English management app, contributing to technical structure and UX design.',
      ],
      technologies: ['UI/UX', 'SDLC', 'Flutter', 'Dart'],
    },
    {
      title: 'Graduation Project — Food Delivery App',
      company: 'Universtiy of scince and Techonalogy',
      location: '',
      period: '2024',
      preview: '/assets/Graduation project.pdf',
      source: '#',
      highlights: [
        'Designed and developed a delivery application featuring real‑time order tracking using Google Maps.',
        'Covered requirements, UI/UX, implementation, and testing with a focus on simplicity and user experience.',
      ],
      technologies: ['Flutter', 'Dart', 'Firebase Auth', 'Trello', 'Git', 'GitHub', 'OpenStreetMap'],
    },
    {
      title: 'Yemeni Store E‑commerce App (Fullstack — UI/UX) — In Progress',
      company: '',
      location: '',
      period: 'May 2025 – Present',
      preview: '#',
      source: '#',
      highlights: [
        'Developed branded splash and onboarding flow in Flutter with fast startup and smooth transition.',
        'Designed & built a Home UI for product categories and featured items using responsive layouts and custom widgets.',
        'Created Cart and Favorites with add/remove functionality using Provider for state and local data persistence.',
      ],
      technologies: ['Flutter', 'Dart', 'Supabase Auth', 'Git', 'GitHub'],
    },
    {
      title: 'Water Delivery App (UI/UX Designer & Frontend)',
      company: 'Aljazeera Springs factory',
      location: 'Jeddah',
      period: 'In progress – Present',
      preview: '#',
      source: '#',
      highlights: [
        'Multi‑platform customer app to place orders, schedule deliveries, and track in real time.',
        'Driver app with live GPS sharing and Mapbox‑based turn‑by‑turn navigation.',
        'Operations dashboard in React.js with Node.js APIs for orders, drivers, products, and promotions.',
        'Owning architecture, UI/UX, data modeling, and integrations (auth, push notifications, maps).',
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
