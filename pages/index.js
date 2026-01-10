
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import resume from '../data/resume';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [active, setActive] = useState('profile');
  const [lang, setLang] = useState('en');
  const [scrolled, setScrolled] = useState(false);
  const yearRef = useRef(null);
  
  // Scroll listener for hero shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const t = {
    en: {
      home: 'Home',
      about: 'About',
      education: 'Education',
      experience: 'Experience',
      contact: 'Contact',
      skills_nav: 'Skills',
      download: 'Download resume',
      available: 'Available for work',
      toolkit: 'Toolkit',
      skills: 'Skills',
      skillsSubtitle: 'Toolkit',
      background: 'Background',
      eduTitle: 'Education',
      expTitle: 'Experience',
      recentWork: 'Recent work',
      getInTouch: 'Get in touch',
      contactMe: 'Contact me',
      footer: 'All rights reserved.',
      dark: 'Dark',
      light: 'Light',
      aboutMe: 'About me',
      aboutMeStroke: 'ABOUT',
      aboutMeGradient: 'ME',
      visionReality: 'Turning ideas into fast, polished products.',
      aboutText1: 'I’m a Frontend Developer for web and mobile, turning design ideas into sleek, responsive interfaces that delight users.',
      aboutText2: 'I create modern, visually appealing UI/UX designs that prioritize user experience, clarity, and engagement across web and mobile.',
      mastery: '01 – Frontend Development',
      masteryDesc: 'Building responsive apps with Next.js for web and Flutter for mobile, writing clean, maintainable code for high performance across devices.',
      designCentric: '02 – UI/UX Design',
      designCentricDesc: 'Designing intuitive interfaces with attention to layout, typography, colors, and interactions for a seamless user experience.',
      globalVision: '03 – Languages',
      globalVisionDesc: 'Fluent in English and Arabic, enabling clear communication and smooth collaboration from design to implementation.',
      featuredWork: 'Featured Work',
      preview: 'Preview',
      source: 'Source',
      subject: 'Subject',
      message: 'Message',
      send: 'Send',
      catMobile: 'Mobile Development',
      catFrontend: 'Frontend Web',
      catTools: 'Tools & Design',
      catBackend: 'Backend & Services',

      /* Hero */
      heroRole: 'Frontend Developer & UI/UX Designer',
      heroLead: 'Frontend Developer & UI/UX Designer focused on building intuitive, high-performance digital experiences.',

      /* Contact */
      contactHeadline: "Ready to start a project?",
      contactDesc: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
      contactEmph1: "new projects",
      contactEmph2: "creative ideas",
      contactEmph3: "your visions",
      name: 'Your name',
      timeline: 'Timeline',
      timelineSoon: 'ASAP',
      timelineWeeks: '2–4 weeks',
      timelineMonths: '1–3 months',
      timelineFlexible: 'Flexible',
      replyTime: 'Response within 24 hours',
      privacyNote: 'Confidential by default.',
      tzLine: 'Based in GMT+3',
      tzLineAr: 'Mecca time',
      placeholderHelp: 'How can I help you?',
      socialLinkedIn: 'LinkedIn',
      socialGitHub: 'GitHub',
      socialWhatsApp: 'WhatsApp',
      socialEmail: 'Email',
    },
    ar: {
      home: 'الرئيسية',
      about: 'نبذة عنّي',
      education: 'التعليم',
      experience: 'الخبرة',
      contact: 'تواصل معي',
      skills_nav: 'المهارات',
      download: 'تحميل السيرة الذاتية',
      available: 'متاح للعمل',
      toolkit: 'الأدوات',
      skills: 'المهارات',
      skillsSubtitle: 'الأدوات',
      background: 'الخلفية',
      eduTitle: 'التعليم',
      expTitle: 'الخبرة العملية',
      recentWork: 'أحدث الأعمال',
      getInTouch: 'دعنا نتواصل',
      contactMe: 'للتواصل',
      footer: 'جميع الحقوق محفوظة.',
      dark: 'داكن',
      light: 'فاتح',
      aboutMe: 'نبذة عنّي',
      aboutMeStroke: 'نبذة',
      aboutMeGradient: 'عنّي',
      visionReality: 'أحوّل الأفكار إلى منتجات سريعة ومصقولة.',
      aboutText1: 'أنا مطوّر واجهات أمامية للويب والموبايل، أحوّل أفكار التصميم إلى واجهات عصرية ومتجاوبة تبسط تجربة المستخدم وتشد انتباهه.',
      aboutText2: 'أصمّم واجهات حديثة وجذابة بصريًا تركز على تجربة المستخدم والوضوح والتفاعل، لتعمل بسلاسة على الويب والموبايل.',
      mastery: '01 – تطوير الواجهات',
      masteryDesc: 'بناء تطبيقات متجاوبة باستخدام  Next.js للويب و Flutter للجوال، مع كود نظيف وقابل للصيانة لضمان أداء عالي عبر الأجهزة.',
      designCentric: '02 – تصميم UI/UX',
      designCentricDesc: 'تصميم واجهات بديهية مع الاهتمام بالتخطيط، الخطوط، الألوان، والتفاعلات لتجربة مستخدم سلسة وجذابة.',
      globalVision: '03 – اللغات',
      globalVisionDesc: 'أتقن العربية والإنجليزية بطلاقة، مما يضمن تواصلًا واضحًا وعملًا سلسًا من التصميم حتى التنفيذ.',
      featuredWork: 'أعمال مختارة',
      preview: 'معاينة',
      source: 'المصدر',
      subject: 'الموضوع',
      message: 'الرسالة',
      send: 'إرسال',
      catMobile: 'تطوير الموبايل',
      catFrontend: 'تطوير الويب',
      catTools: 'الأدوات والتصميم',
      catBackend: 'الخدمات والبنية الخلفية',

      /* Hero */
      heroRole: 'مطوّر واجهات أمامية ومصمّم UI/UX',
      heroLead: 'مطوّر واجهات أمامية ومصمّم UI/UX أركّز على بناء تجارب رقمية سهلة الاستخدام وعالية الأداء.',

      /* Contact */
      contactHeadline: 'هل لديك مشروع؟',
      contactDesc: 'أنا متاح دائماً لمناقشة المشاريع الجديدة، الأفكار الإبداعية أو الفرص لنكون جزءاً من رؤيتك.',
      contactEmph1: 'المشاريع الجديدة',
      contactEmph2: 'الأفكار الإبداعية',
      contactEmph3: 'رؤيتك',
      name: 'الاسم',
      timeline: 'الإطار الزمني',
      timelineSoon: 'بأسرع وقت',
      timelineWeeks: '2–4 أسابيع',
      timelineMonths: '1–3 أشهر',
      timelineFlexible: 'مرن',
      replyTime: 'الرد خلال 24 ساعة',
      privacyNote: 'خصوصيتك محفوظة.',
      tzLine: 'GMT+3',
      tzLineAr: 'توقيت مكة المكرمة',
      placeholderHelp: 'كيف يمكنني مساعدتك؟',
      socialLinkedIn: 'لينكدإن',
      socialGitHub: 'جيت هب',
      socialWhatsApp: 'واتساب',
      socialEmail: 'إيميل',
    }
  };

  const trans = t[lang];

  // Language load/persist
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
    if (saved === 'en' || saved === 'ar') setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;
      localStorage.setItem('lang', lang);
    }
  }, [lang]);

  // Scroll reveal effect
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Footer year
  useEffect(() => {
    if (yearRef.current) {
      yearRef.current.textContent = new Date().getFullYear();
    }
  }, []);

  // Mouse move effect for cards
  useEffect(() => {
    
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Card mouse tracking
      for (const card of document.querySelectorAll('.node-card')) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }

      // Hero spotlight tracking
      const hero = document.getElementById('profile');
      if (hero) {
        const rect = hero.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        hero.style.setProperty('--mouse-x', `${x}%`);
        hero.style.setProperty('--mouse-y', `${y}%`);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleMenu = () => setMenuOpen((v) => !v);

  // Theme load/persist
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (saved === 'light' || saved === 'dark') setTheme(saved);
  }, []);
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  // Active section tracking
  useEffect(() => {
    const sections = ['profile','about','experience','skills','education','contact'];
    const elements = sections.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0.01 });
    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);


  // --- Magnetic Avatar Component ---
  const MagneticAvatar = ({ children }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
      if (!ref.current) return;
      const { clientX, clientY } = e;
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
    };

    const reset = () => {
      setPosition({ x: 0, y: 0 });
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      >
        {children}
      </motion.div>
    );
  };

  // --- Skills helpers: icon renderer ---
  const renderSkillIcon = (skillName) => {
    const skillKey = skillName.toLowerCase().replace(/\s+/g, '').replace(/[\.\-\/]/g, '');
    const iconMap = {
      flutter: 'flutter',
      dart: 'dart',
      react: 'react',
      'next.js': 'nextdotjs',
      nextjs: 'nextdotjs',
      javascript: 'javascript',
      js: 'javascript',
      html: 'html5',
      css: 'css',
      java: 'openjdk',
      php: 'php',
      supabase: 'supabase',
      firebase: 'firebase',
      figma: 'figma',
      git: 'git',
      github: 'github',
      photoshop: 'adobephotoshop',
      illustrator: 'adobeillustrator',
      xd: 'adobexd',
      sketch: 'sketch',
      framer: 'framer',
      dribbble: 'dribbble',
      behance: 'behance',
      'c++': 'cplusplus',
      cpp: 'cplusplus',
      microsoft: 'microsoft',
      restapis: 'postman',
      restapi: 'postman',
      rest: 'postman',
      nodejs: 'nodedotjs',
      node: 'nodedotjs'
    };
    
    const iconName = iconMap[skillKey];
    if (iconName) {
      const brandColors = { javascript: 'F7DF1E', html5: 'E34F26', css: '1572B6', react: '61DAFB', flutter: '02569B', dart: '0175C2', php: '777BB4', firebase: 'FFCA28', figma: 'F24E1E', github: '181717', adobephotoshop: '31A8FF', adobeillustrator: 'FF9A00', adobexd: 'FF61F6', sketch: 'FDB927', framer: '0055FF', dribbble: 'EA4C89', behance: '1769FF' };
      const color = brandColors[iconName];
      const src = color ? `https://cdn.simpleicons.org/${iconName}/${color}` : `https://cdn.simpleicons.org/${iconName}`;
      return <img src={src} alt={skillName} loading="lazy" />;
    }
    
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    );
  };

  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Background intentionally minimal/black */}

      {/* Desktop Navigation */}
      <nav id="desktop-nav">
        <div className="left-nav">
          <a className="logo" href="#profile">{lang === 'ar' ? 'لؤي الغبري' : 'Luai Alaghbari'}</a>
        </div>
        <ul className="nav-links">
          <li><a className={active==='about'?'active':''} href="#about">{trans.about}</a></li>
          <li><a className={active==='experience'?'active':''} href="#experience">{trans.experience}</a></li>
          <li><a className={active==='skills'?'active':''} href="#skills">{trans.skills_nav}</a></li>
          <li><a className={active==='education'?'active':''} href="#education">{trans.education}</a></li>
          <li><a className={active==='contact'?'active':''} href="#contact">{trans.contact}</a></li>
        </ul>
        <div className="nav-controls">
          <button className="lang-toggle" onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} aria-label="Toggle language">
            {lang === 'en' ? 'Ar' : 'En'}
          </button>
          <button className="theme-toggle" onClick={() => setTheme(theme==='dark'?'light':'dark')} aria-label="Toggle theme">
            {theme==='dark' ? (
              <>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.64 13A9 9 0 1 1 11 2.36a7 7 0 1 0 10.63 10.63Z"/></svg>
                <span>{trans.dark}</span>
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 4a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0-18a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm10 7h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2ZM3 12H2a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm15.78 7.78a1 1 0 0 1-1.41 0l-.71-.7a1 1 0 0 1 1.41-1.42l.71.71a1 1 0 0 1 0 1.41ZM7.34 6.34a1 1 0 0 1-1.41 0l-.71-.71A1 1 0 1 1 6.63 4.2l.71.71a1 1 0 0 1 0 1.41Zm10 0a1 1 0 0 1-1.41-1.41l.71-.71A1 1 0 0 1 18.95 5l-.71.71a1 1 0 0 1-1.41 0ZM5.66 19.8a1 1 0 0 1-1.41 0l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41Z"/></svg>
                <span>{trans.light}</span>
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Hamburger Navigation */}
      <nav id="hamburger-nav">
        <div className="left-nav">
          <a className="logo" href="#profile">{lang === 'ar' ? 'لؤي الغبري' : 'Luai Alaghbari'}</a>
        </div>
        <div className="nav-controls-mobile">
          <button className="lang-toggle" onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} aria-label="Toggle language">
            {lang === 'en' ? 'Ar' : 'En'}
          </button>
          <div className="hamburger-menu">
            <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <span></span><span></span><span></span>
            </div>
            <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
              <ul>
                <li><a href="#about" onClick={toggleMenu}>{trans.about}</a></li>
                <li><a href="#experience" onClick={toggleMenu}>{trans.experience}</a></li>
                <li><a href="#skills" onClick={toggleMenu}>{trans.skills_nav}</a></li>
                <li><a href="#education" onClick={toggleMenu}>{trans.education}</a></li>
                <li><a href="#contact" onClick={toggleMenu}>{trans.contact}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <section id="profile" className={`hero-modern ${scrolled ? 'scrolled' : ''}`}>
        {/* Aesthetic background elements */}
        <div className="hero-bg-glow"></div>
        <div className="hero-rings">
          <div className="ring ring-1"></div>
          <div className="ring ring-2"></div>
          <div className="ring ring-3"></div>
        </div>
        
        <div className="hero-modern-container">
          {/* Large Background Name */}
          <div className="hero-name-bg">
            <h1 className="name-main">
              <span className="first-name">Luai</span> <span className="name-accent">Alaghbari</span>
            </h1>
          </div>

          <div className="hero-modern-grid">
            {/* Left Column: Bio & Socials */}
            <div className="hero-col-left">
              <motion.div 
                className="hero-bio-box"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p>
                  {lang === 'ar' ? (
                    <>أنا <span className="text-gradient-small">مصمم UI/UX ومطور واجهات أمامية</span>، أصمم تجارب رقمية سلسة وعالية الأداء.</>
                  ) : (
                    <>I'm a <span className="text-gradient-small">UI/UX Designer & Frontend Developer</span> crafting high-performance, intuitive digital experiences.</>
                  )}
                </p>
              </motion.div>
            </div>

            {/* Center Column: Portrait Image */}
            <div className="hero-col-center">
              <motion.div 
                className="hero-portrait"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="portrait-glow-circle"></div>
                <img src="/assets/newprofilelogo.png" alt="Luai Alaghbari" />
                <div className="hero-line-separator"></div>
              </motion.div>

              {/* Mobile-only CTA */}
              <motion.div
                className="hero-center-cta mobile-only-btn"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button className="btn-modern-pill" onClick={() => window.open('/assets/My Resume.pdf', '_blank')}>
                  <span>{lang === 'ar' ? 'تحميل السيرة الذاتية' : 'Download Resume'}</span>
                  <div className="btn-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </div>
                </button>
              </motion.div>
            </div>

            {/* Right Column: CTA & Blurb */}
            <div className="hero-col-right">
              <motion.div 
                className="hero-cta-box"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="cta-blurb">
                  {lang === 'ar' ? (
                    <>ملتزم بالإتقان الفني، أقدم حلولاً متفوقة في <span className="text-gradient-small">الـ UI/UX والواجهات الأمامية</span> تجمع بين الدقة التقنية و <span className="text-gradient-small">الأناقة في التصميم</span>.</>
                  ) : (
                    <>Dedicated to high-end craftsmanship, I deliver superior <span className="text-gradient-small">UI/UX & Frontend solutions</span> that combine technical precision with <span className="text-gradient-small">elegant design</span>.</>
                  )}
                </p>
              </motion.div>

              {/* Desktop-only CTA */}
              <motion.div
                className="hero-right-cta desktop-only-btn"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button className="btn-modern-pill" onClick={() => window.open('/assets/My Resume.pdf', '_blank')}>
                  <span>{lang === 'ar' ? 'تحميل السيرة الذاتية' : 'Download Resume'}</span>
                  <div className="btn-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </div>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section-bold">
        <motion.div 
          className="about-wrapper-bold"
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.16, 1, 0.3, 1], // Custom spring-like ease
            delay: 0.1 
          }}
        >
          {/* Refined Header - Smaller Scale, No Name */}
          <motion.div
            className="about-header-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="title-massive">
              <span className="text-stroke">{lang === 'ar' ? 'من' : 'About'}</span>
              <span className="gradient-text">{lang === 'ar' ? ' أنا' : ' Me'}</span>
            </h1>
          </motion.div>

          {/* Big Statement Section */}
          <div className="about-statement">
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {lang === 'ar' ? (
                <>تحويل <span className="gradient-text">الرؤية</span> إلى <br /> <span className="gradient-text">حقيقة عالية الأداء</span>.</>
              ) : (
                <>Turning <span className="gradient-text">Vision</span> into <br /> <span className="gradient-text">High-Performance Reality</span>.</>
              )}
            </motion.h2>
          </div>

          {/* Main Content Grid - No Boxes */}
          <div className="about-grid-bold">
            <div className="grid-left">
              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {lang === 'ar' ? (
                  <>أنا <span className="gradient-text">مطوّر واجهات أمامية</span> للويب والموبايل، أحوّل <span className="gradient-text">أفكار التصميم</span> إلى واجهات عصرية ومتجاوبة تبسط تجربة المستخدم وتشد انتباهه.</>
                ) : (
                  <>I’m a <span className="gradient-text">Frontend Developer</span> for web and mobile, turning design ideas into <span className="gradient-text">sleek, responsive interfaces</span> that delight users.</>
                )}
              </motion.p>
            </div>
            <div className="grid-right">
              <motion.p 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {lang === 'ar' ? (
                  <>أصمّم <span className="gradient-text">واجهات حديثة وجذابة بصريًا</span> تركز على <span className="gradient-text">تجربة المستخدم</span> والوضوح والتفاعل، لتعمل بسلاسة على الويب والموبايل.</>
                ) : (
                  <>I create <span className="gradient-text">modern, visually appealing UI/UX designs</span> that prioritize <span className="gradient-text">user experience</span>, clarity, and engagement across web and mobile.</>
                )}
              </motion.p>
            </div>
          </div>

          {/* Staggered High-Impact Stats/Highlights */}
          <div className="about-nodes-bold">
            <div className="node-item">
              <div className="node-line"></div>
              <div className="node-content">
                <h3 className="gradient-text">{trans.mastery}</h3>
                <p>{trans.masteryDesc}</p>
              </div>
            </div>
            <div className="node-item">
              <div className="node-line"></div>
              <div className="node-content">
                <h3 className="gradient-text">{trans.designCentric}</h3>
                <p>{trans.designCentricDesc}</p>
              </div>
            </div>
            <div className="node-item">
              <div className="node-line"></div>
              <div className="node-content">
                <h3 className="gradient-text">{trans.globalVision}</h3>
                <p>{trans.globalVisionDesc}</p>
              </div>
            </div>
          </div>

          {/* Down Arrow - Moved Inside Wrapper */}
          <div className="arrow-container">
            <motion.img
              src="/assets/arrow.png"
              className="icon arrow"
              alt="Scroll down"
              onClick={() => { const el = document.getElementById('experience'); el && el.scrollIntoView({ behavior: 'smooth'}); }}
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="modern-experience">
        <motion.div 
          className="section-header-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <p className="subtitle-editorial">{trans.recentWork}</p>
          <h2 className="title-refined">{trans.expTitle}</h2>
        </motion.div>
        
        <div className="experience-container">
          <div className="experience-vertical-line"></div>
          
          {resume.experience.map((exp, idx) => {
            const isCandy = exp.title.toLowerCase().includes('water delivery');
            const isYemeniStore = exp.title.toLowerCase().includes('yemeni store');
            const isGraduation = exp.title.toLowerCase().includes('graduation project');
            const isInternship = exp.title.toLowerCase().includes('summer internship');
            const isQrEvents = exp.title.toLowerCase().includes('qr events');
            
            return (
              <motion.div 
                key={idx}
                className={`experience-node ${idx % 2 === 0 ? 'left' : 'right'} ${isCandy ? 'candy-node' : ''} ${isYemeniStore ? 'yemeni-node' : ''} ${isGraduation ? 'graduation-node' : ''} ${isInternship ? 'internship-node' : ''} ${isQrEvents ? 'qr-node' : ''}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              >
                <div className="node-dot"></div>
                {isQrEvents && (
                  <>
                    <div className="qr-phone-right-container">
                      <motion.div 
                        className="iphone-17-frame titanium-silver"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                      >
                        <div className="iphone-inner-border"></div>
                        <div className="iphone-dynamic-island"></div>
                        <div className="iphone-buttons-left">
                          <div className="action-button"></div>
                          <div className="volume-up"></div>
                          <div className="volume-down"></div>
                        </div>
                        <div className="iphone-buttons-right">
                          <div className="power-button"></div>
                          <div className="camera-control"></div>
                        </div>
                        <div className="iphone-screen">
                          <img src="/assets/Screenshot_20250703_173702.jpg" alt="QR Events App" />
                        </div>
                        <div className="iphone-bottom-details">
                          <div className="speaker-grill">
                            <span></span><span></span><span></span>
                          </div>
                          <div className="usb-c-port"></div>
                          <div className="speaker-grill">
                            <span></span><span></span><span></span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    <div className="project-connector-line">
                      <div className="project-beam-arrow"></div>
                    </div>
                  </>
                )}
                {isInternship && (
                  <>
                    <div className="internship-phone-right-container">
                      <motion.div 
                        className="iphone-17-frame titanium-natural"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                      >
                        <div className="iphone-inner-border"></div>
                        <div className="iphone-dynamic-island"></div>
                        <div className="iphone-buttons-left">
                          <div className="action-button"></div>
                          <div className="volume-up"></div>
                          <div className="volume-down"></div>
                        </div>
                        <div className="iphone-buttons-right">
                          <div className="power-button"></div>
                          <div className="camera-control"></div>
                        </div>
                        <div className="iphone-screen">
                          <img src="/assets/Screenshot 2026-01-09 233757.png" alt="Internship Project" />
                        </div>
                        <div className="iphone-bottom-details">
                          <div className="speaker-grill">
                            <span></span><span></span><span></span>
                          </div>
                          <div className="usb-c-port"></div>
                          <div className="speaker-grill">
                            <span></span><span></span><span></span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    <div className="project-connector-line">
                      <div className="project-beam-arrow"></div>
                    </div>
                  </>
                )}

                {isCandy && (
                  <>
                    <div className="candy-phone-left-container">
                      <motion.div 
                        className="iphone-17-frame video-frame titanium-orange"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                      >
                        <div className="iphone-inner-border"></div>
                        <div className="iphone-dynamic-island"></div>
                        <div className="iphone-buttons-left">
                          <div className="action-button"></div>
                          <div className="volume-up"></div>
                          <div className="volume-down"></div>
                        </div>
                        <div className="iphone-buttons-right">
                          <div className="power-button"></div>
                          <div className="camera-control"></div>
                        </div>
                        <div className="iphone-screen">
                          <video 
                            src="/assets/Screen_Recording_20260106_005631_Crystal Drop.mp4" 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                          />
                        </div>
                        <div className="iphone-bottom-details">
                          <div className="speaker-grill">
                            <span></span><span></span><span></span>
                          </div>
                          <div className="usb-c-port"></div>
                          <div className="speaker-grill">
                            <span></span><span></span><span></span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    <div className="project-connector-line">
                      <div className="project-beam-arrow"></div>
                    </div>
                  </>
                )}

                {isYemeniStore && (
                  <>
                    <div className="yemeni-phone-right-container">
                      <motion.div 
                        className="iphone-17-frame video-frame titanium-deep-blue"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                      >
                        <div className="iphone-inner-border"></div>
                        <div className="iphone-dynamic-island"></div>
                        <div className="iphone-buttons-left">
                          <div className="action-button"></div>
                          <div className="volume-up"></div>
                          <div className="volume-down"></div>
                        </div>
                        <div className="iphone-buttons-right">
                          <div className="power-button"></div>
                          <div className="camera-control"></div>
                        </div>
                        <div className="iphone-screen">
                          <video 
                            src="/assets/Screen_Recording_20250725_203231.mp4" 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                          />
                        </div>
                        <div className="iphone-bottom-details">
                          <div className="speaker-grill">
                            <span></span><span></span><span></span>
                          </div>
                          <div className="usb-c-port"></div>
                          <div className="speaker-grill">
                            <span></span><span></span><span></span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    <div className="project-connector-line">
                      <div className="project-beam-arrow"></div>
                    </div>
                  </>
                )}

                {isGraduation && (
                  <>
                    <div className="graduation-phone-left-container">
                      <motion.div 
                        className="iphone-17-frame titanium-silver"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                      >
                        <div className="iphone-inner-border"></div>
                        <div className="iphone-dynamic-island"></div>
                        <div className="iphone-buttons-left">
                          <div className="action-button"></div>
                          <div className="volume-up"></div>
                          <div className="volume-down"></div>
                        </div>
                        <div className="iphone-buttons-right">
                          <div className="power-button"></div>
                          <div className="camera-control"></div>
                        </div>
                        <div className="iphone-screen">
                          <img src="/assets/Screenshot_20250225_002302.jpg" alt="Graduation Project" />
                        </div>
                        <div className="iphone-bottom-details">
                          <div className="speaker-grill">
                            <span></span><span></span><span></span>
                          </div>
                          <div className="usb-c-port"></div>
                          <div className="speaker-grill">
                            <span></span><span></span><span></span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    <div className="project-connector-line">
                      <div className="project-beam-arrow"></div>
                    </div>
                  </>
                )}
                
                <div className="node-content-wrapper">
                  <div className="node-info-stack">
                    <div className="node-step-label">
                      <span className="step-index">{String(idx + 1).padStart(2, '0')}</span>
                      <span className="step-text">{lang === 'ar' ? 'محطة' : 'Milestone'}</span>
                    </div>
                    <div className="node-date">{exp.period}</div>
                  </div>
                  
                  <div className="node-card">
                    <div className="node-card-glass"></div>
                    <div className="node-card-content">
                      <h3 className="node-title">{lang === 'ar' ? exp.titleAr : exp.title}</h3>
                      <div className="node-company-row">
                        <span className="node-company">{lang === 'ar' ? exp.companyAr : exp.company}</span>
                        {(exp.location || exp.locationAr) && <span className="node-location"> • {lang === 'ar' ? exp.locationAr : exp.location}</span>}
                      </div>
                      
                      <ul className="node-highlights">
                        {(lang === 'ar' ? exp.highlightsAr : exp.highlights).map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>

                      <div className="node-tech">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="tech-badge">{tech}</span>
                        ))}
                      </div>

                      {(exp.preview && exp.preview !== '#') || (exp.source && exp.source !== '#') ? (
                        <div className="node-actions">
                          {exp.preview && exp.preview !== '#' && (
                            <a href={exp.preview} target="_blank" rel="noopener" className="btn btn-color-2 btn-sm">
                              {trans.preview}
                            </a>
                          )}
                          {exp.source && exp.source !== '#' && (
                            <a href={exp.source} target="_blank" rel="noopener" className="btn btn-color-1 btn-sm">
                              {trans.source}
                            </a>
                          )}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
            </motion.div>
          );
        })}
        </div>
        <div className="arrow-container">
          <motion.img
            src="/assets/arrow.png"
            className="icon arrow"
            alt="Scroll down"
            onClick={() => { const el = document.getElementById('skills'); el && el.scrollIntoView({ behavior: 'smooth'}); }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </section>

      {/* Skills Section - Modern Bento Grid */}
      <section id="skills">
        <motion.div 
          className="section-header-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <p className="subtitle-editorial">{trans.skillsSubtitle}</p>
          <h2 className="title-refined">{trans.skills}</h2>
        </motion.div>

        <div className="skills-layout">
          <div className="skills-grid-categories">
            {resume.skills.map((category, idx) => {
              const catKey = `cat${category.category.split(' ')[0]}`;
              return (
                <motion.div 
                  key={category.category}
                  className="skill-category-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 70,
                    damping: 15,
                    delay: idx * 0.1
                  }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <h3 className="category-title">{trans[catKey] || category.category}</h3>
                <div className="category-content">
                  {category.items.map((skill, sIdx) => (
                    <motion.div 
                      key={skill} 
                      className="skill-chip"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ 
                        type: "spring",
                        stiffness: 150,
                        damping: 12,
                        delay: (idx * 0.1) + (sIdx * 0.05) 
                      }}
                      whileHover={{ 
                        scale: 1.15,
                        rotate: [0, -2, 2, 0],
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="chip-icon">
                        {renderSkillIcon(skill)}
                      </div>
                      <span className="chip-label">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )})}
          </div>
        </div>
        <div className="arrow-container">
          <motion.img
            src="/assets/arrow.png"
            className="icon arrow"
            alt="Scroll down"
            onClick={() => { const el = document.getElementById('education'); el && el.scrollIntoView({ behavior: 'smooth'}); }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <motion.div 
          className="section-header-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <p className="subtitle-editorial">{trans.background}</p>
          <h2 className="title-refined">{trans.eduTitle}</h2>
        </motion.div>

        <div className="premium-education-narrative">
          {resume.education.map((ed, idx) => (
            <React.Fragment key={idx}>
              <motion.div
                className={"edu-narrative-block"}
                data-edu-index={idx + 1}
                initial={{ opacity: 0, x: 50, y: 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Watermark Year */}
                <motion.div 
                  className="edu-watermark"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  {lang === 'ar' ? ed.periodAr.split('–')[0] || ed.periodAr.split('-')[0] : ed.period.split('–')[0] || ed.period.split('-')[0]}
                </motion.div>

                <div className="edu-premium-card">
                  <div className="edu-card-glow"></div>
                  <div className="edu-card-content">
                    <div className="edu-header">
                      <span className="edu-number">0{idx + 1}</span>
                      {idx !== 1 && <span className="edu-period-tag">{lang === 'ar' ? ed.periodAr : ed.period}</span>}
                    </div>
                    <h3 className="edu-degree-title">{lang === 'ar' ? ed.degreeAr : ed.degree}</h3>
                    <div className="edu-institution">
                      <span className="edu-school-name">{lang === 'ar' ? ed.schoolAr : ed.school}</span>
                      <span className="edu-location-dot"></span>
                      <span className="edu-location-text">{lang === 'ar' ? ed.locationAr : ed.location}</span>
                    </div>
                    {(ed.details || ed.detailsAr) && (
                      <p className="edu-details-text">
                        {lang === 'ar' 
                          ? (Array.isArray(ed.detailsAr) ? ed.detailsAr.join(' ') : ed.detailsAr)
                          : (Array.isArray(ed.details) ? ed.details.join(' ') : ed.details)}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
              
              {/* Connector Arrow */}
              {idx < resume.education.length - 1 && (
                <div className="edu-connector">
                  <motion.img 
                    src="/assets/arrow.png"
                    className="connector-arrow-img"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 0.3, x: 0 }}
                    transition={{ delay: 0.5 }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="arrow-container">
          <motion.img
            src="/assets/arrow.png"
            className="icon arrow"
            alt="Scroll down"
            onClick={() => { const el = document.getElementById('contact'); el && el.scrollIntoView({ behavior: 'smooth'}); }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-apple">
        <motion.div 
          className="section-header-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <p className="subtitle-editorial">{trans.getInTouch}</p>
          <h2 className="title-refined">{trans.contactMe}</h2>
        </motion.div>

        <div className="contact-apple-surface">
          <div className="contact-apple-container">
            <motion.div
              className="contact-apple-grid"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="contact-apple-left">
                <h3 className="contact-apple-title">{trans.contactHeadline}</h3>
                <p className="contact-apple-desc">
                  {lang === 'ar' ? (
                    <>
                      {'شارك '}
                      <span className="contact-apple-emphasis">{trans.contactEmph1}</span>
                      {' و'}
                      <span className="contact-apple-emphasis">{trans.contactEmph2}</span>
                      {'، وسأرد عليك بالخطوات التالية و'}
                      <span className="contact-apple-emphasis">{trans.contactEmph3}</span>
                      {'.'}
                    </>
                  ) : (
                    <>
                      {'Share your '}
                      <span className="contact-apple-emphasis">{trans.contactEmph1}</span>
                      {' and '}
                      <span className="contact-apple-emphasis">{trans.contactEmph2}</span>
                      {'. I’ll reply with next steps and a '}
                      <span className="contact-apple-emphasis">{trans.contactEmph3}</span>
                      {'.'}
                    </>
                  )}
                </p>

                <div className="contact-apple-primary">
                  <a className="contact-apple-email" href={`mailto:${resume.email}`}>{resume.email}</a>
                  <div className="contact-apple-meta">{trans.available} • {lang === 'ar' ? trans.tzLineAr : trans.tzLine}</div>
                </div>




              </div>

              <div className="contact-apple-right">
                <div className="contact-apple-links">
                  <a href={resume.socials.whatsapp} target="_blank" rel="noreferrer" className="contact-link-pill whatsapp">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    <span>{trans.socialWhatsApp}</span>
                  </a>
                  <a href={resume.socials.linkedin} target="_blank" rel="noreferrer" className="contact-link-pill linkedin">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.56c0-1.33-.02-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.94v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.45v6.3zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.93 2.06 2.06 0 1.14-.93 2.06-2.06 2.06zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
                    <span>{trans.socialLinkedIn}</span>
                  </a>
                  <a href={resume.socials.github} target="_blank" rel="noreferrer" className="contact-link-pill github">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.86-.01-1.7-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05.8-.23 1.66-.34 2.52-.35.86.01 1.72.12 2.52.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.58 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.58.69.48 3.96-1.35 6.83-5.18 6.83-9.7C22 6.58 17.52 2 12 2z"/></svg>
                    <span>{trans.socialGitHub}</span>
                  </a>
                  <a href={`mailto:${resume.email}`} className="contact-link-pill email">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <span>{trans.socialEmail}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-logo-container">
        <p className="footer-tagline">
          {lang === 'ar' ? 'تحويل الأفكار إلى واقع رقمي ملموس — شغف بالإتقان وتركيز على التفاصيل في كل سطر برمجِي.' : 'Turning ideas into tangible digital reality — a passion for perfection and focus on details in every line of code.'}
        </p>

        <div className="footer-socials">
          <a href="#" className="footer-social-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
          </a>
          <a href="#" className="footer-social-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" className="footer-social-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"></path></svg>
          </a>
        </div>

        <div className="footer-middle-row">
          <div className="footer-copyright">
            © <span ref={yearRef} /> {lang === 'ar' ? 'لؤي الغبري. جميع الحقوق محفوظة.' : 'Luai Alaghbari. All Rights Reserved.'}
          </div>
        </div>

        <div className="footer-massive-logo">
          <h2>create.</h2>
        </div>
      </footer>


    </>
  );
}
