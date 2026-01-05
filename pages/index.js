
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import resume from '../data/resume';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [active, setActive] = useState('profile');
  const [lang, setLang] = useState('en');
  const yearRef = useRef(null);

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
      skills: 'SKILLS',
      skillsSubtitle: 'Technologies I use to design, build, and ship quality software.',
      background: 'Background',
      eduTitle: 'EDUCATION',
      expTitle: 'EXPERIENCE',
      projects: 'PROJECTS',
      recentWork: 'Recent Work',
      getInTouch: 'Get in Touch',
      contactMe: 'CONTACT ME',
      footer: 'All rights reserved.',
      dark: 'Dark',
      light: 'Light',
      aboutMe: 'ABOUT ME',
      aboutMeStroke: 'ABOUT',
      aboutMeGradient: 'ME',
      visionReality: 'Turning Vision into High-Performance Reality.',
      aboutText1: 'I am a Software Engineer who thrives on technical challenges. I build robust digital products that bridge the gap between complex engineering and intuitive user experiences.',
      aboutText2: 'My focus is on creating scalable, high-quality applications. I combine precision coding with innovative design to deliver solutions that are both powerful and beautiful.',
      mastery: 'Mobile & Web Mastery',
      masteryDesc: 'Advanced expertise in Flutter, Next.js, and modern architectures.',
      designCentric: 'Design Centric',
      designCentricDesc: 'Prioritizing UI/UX to create interfaces that feel natural and intuitive.',
      globalVision: 'Global Vision',
      globalVisionDesc: 'Fluent in Arabic and English, bringing a diverse perspective to every solution.',
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
    },
    ar: {
      home: 'الرئيسية',
      about: 'عني',
      education: 'التعليم',
      experience: 'الخبرة',
      contact: 'اتصل بي',
      skills_nav: 'المهارات',
      download: 'تحميل السيرة الذاتية',
      available: 'متاح للعمل',
      toolkit: 'الأدوات',
      skills: 'المهارات',
      skillsSubtitle: 'التقنيات التي أستخدمها لتصميم وبناء وشحن برمجيات عالية الجودة.',
      background: 'الخلفية',
      eduTitle: 'التعليم',
      expTitle: 'الخبرة العملية',
      projects: 'المشاريع',
      recentWork: 'أحدث الأعمال',
      getInTouch: 'تواصل معي',
      contactMe: 'اتصل بي',
      footer: 'جميع الحقوق محفوظة.',
      dark: 'داكن',
      light: 'فاتح',
      aboutMe: 'من أنا',
      aboutMeStroke: 'من',
      aboutMeGradient: 'أنا',
      visionReality: 'تحويل الرؤية إلى حقيقة عالية الأداء.',
      aboutText1: 'أنا مهندس برمجيات أحب التحديات التقنية. أقوم ببناء منتجات رقمية قوية تجسر الفجوة بين الهندسة المعقدة وتجارب المستخدم البديهية.',
      aboutText2: 'ينصب تركيزي على إنشاء تطبيقات قابلة للتوسع وعالية الجودة. أجمع بين البرمجة الدقيقة والتصميم المبتكر لتقديم حلول قوية وجميلة.',
      mastery: 'إتقان الموبايل والويب',
      masteryDesc: 'خبرة متقدمة في فلاتر، Next.js، والمعماريات الحديثة.',
      designCentric: 'محور التصميم',
      designCentricDesc: 'إعطاء الأولوية لواجهة المستخدم وتجربة المستخدم لإنشاء واجهات طبيعية وبديهية.',
      globalVision: 'رؤية عالمية',
      globalVisionDesc: 'أتقن اللغتين العربية والإنجليزية، مما يضفي منظوراً متنوعاً لكل حل.',
      featuredWork: 'أعمال مختارة',
      preview: 'معاينة',
      source: 'المصدر',
      subject: 'الموضوع',
      message: 'الرسالة',
      send: 'إرسال',
      catMobile: 'تطوير الموبايل',
      catFrontend: 'تطوير الويب',
      catTools: 'الأدوات والتصميم',
      catBackend: 'البنية التحتية والخدمات',
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
    const handleMouseMove = (e) => {
      for (const card of document.querySelectorAll('.node-card')) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
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
      const brandColors = { javascript: 'F7DF1E', html5: 'E34F26', css: '1572B6', react: '61DAFB', flutter: '02569B', dart: '0175C2', php: '777BB4', firebase: 'FFCA28', figma: 'F24E1E', github: '181717' };
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
          <li><a className={active==='profile'?'active':''} href="#profile">{trans.home}</a></li>
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
                <li><a href="#profile" onClick={toggleMenu}>{trans.home}</a></li>
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

      {/* Hero Section */}
      <section id="profile" className="hero-centered">
        <motion.div className="hero-copy" initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{duration:.6}}>
          <motion.div className="badge" initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.2}}>{trans.available}</motion.div>
          <h1 className="title-massive hero-title">
            <span className="text-stroke-gradient">{lang === 'ar' ? 'لؤي' : 'LUAI'}</span>
            <span className="gradient-text">{lang === 'ar' ? 'الغبري' : 'ALAGHBARI'}</span>
          </h1>
          <motion.p className="section_text_p1" style={{opacity:.9}} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4}}>
            {lang === 'ar' ? 'مطور واجهات أمامية · مصمم تجربة مستخدم · فلاتر · ريأكت' : resume.role}
          </motion.p>
          <motion.p className="lead" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.5}}>
            {lang === 'ar' ? 'مطور واجهات أمامية ومصمم تجربة مستخدم متخصص في فلاتر (موبايل) و ريأكت (ويب). أقوم بتصميم وبناء واجهات بكسل مثالية وسهلة الاستخدام وعالية الأداء.' : resume.summary}
          </motion.p>
          <motion.div className="btn-container" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.6}}>
            <button className="btn btn-color-2 btn-magnetic" onClick={() => window.open(resume.resumeUrl || '/assets/Ruesme.pdf','_blank')}><span>{trans.download}</span></button>
          </motion.div>
          <motion.div id="socials-container" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.7}}>
            <a href={resume.socials.linkedin} target="_blank" rel="noopener">
              <img src="/assets/linkedin.png" className="icon" alt="LinkedIn"/>
            </a>
            <a href={resume.socials.github} target="_blank" rel="noopener">
              <img src="/assets/github.png" className="icon" alt="GitHub"/>
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Floating Coding Icons */}
          <div className="floating-icons-container">
            {[
              { name: 'flutter', top: '-10%', left: '0%', delay: 0 },
              { name: 'react', top: '-5%', right: '5%', delay: 1 },
              { name: 'javascript', bottom: '5%', left: '-5%', delay: 2 },
              { name: 'dart', bottom: '-10%', right: '20%', delay: 1.5 },
              { name: 'nodejs', top: '40%', right: '-10%', delay: 0.5 },
              { name: 'figma', top: '25%', left: '-15%', delay: 2.5 },
              { name: 'supabase', bottom: '20%', right: '-15%', delay: 3 },
              { name: 'git', top: '70%', left: '-10%', delay: 1.2 },
            ].map((icon, i) => (
              <motion.div
                key={i}
                className="floating-icon"
                style={{ 
                  position: 'absolute',
                  top: icon.top,
                  left: icon.left,
                  right: icon.right,
                  bottom: icon.bottom,
                  zIndex: 10
                }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: icon.delay,
                  ease: "easeInOut"
                }}
              >
                {renderSkillIcon(icon.name)}
              </motion.div>
            ))}
          </div>

          <MagneticAvatar>
            <div className="avatar-ring">
              <div className="image-frame">
                <img src="/assets/profilepic.png" alt="Luai Alaghbari profile picture" />
              </div>
            </div>
          </MagneticAvatar>
        </motion.div>
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
              <span className="text-stroke">{lang === 'ar' ? 'من' : 'ABOUT'}</span>
              <span className="gradient-text">{lang === 'ar' ? 'أنا' : 'ME'}</span>
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
                {trans.aboutText1}
              </motion.p>
            </div>
            <div className="grid-right">
              <motion.p 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {trans.aboutText2}
              </motion.p>
            </div>
          </div>

          {/* Staggered High-Impact Stats/Highlights */}
          <div className="about-nodes-bold">
            <div className="node-item">
              <div className="node-line"></div>
              <div className="node-content">
                <span className="node-num">01</span>
                <h3 className="gradient-text">{trans.mastery}</h3>
                <p>{trans.masteryDesc}</p>
              </div>
            </div>
            <div className="node-item">
              <div className="node-line"></div>
              <div className="node-content">
                <span className="node-num">02</span>
                <h3 className="gradient-text">{trans.designCentric}</h3>
                <p>{trans.designCentricDesc}</p>
              </div>
            </div>
            <div className="node-item">
              <div className="node-line"></div>
              <div className="node-content">
                <span className="node-num">03</span>
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
        <div className="experience-ambient" aria-hidden="true">
          <span className="experience-orb orb-1"></span>
          <span className="experience-orb orb-2"></span>
          <span className="experience-orb orb-3"></span>
          <span className="experience-grid"></span>
        </div>
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="overline text-stroke">{trans.recentWork}</div>
          <h1 className="title-massive">
            <span className="gradient-text">{trans.expTitle}</span>
          </h1>
        </motion.div>

        <div className="experience-container">
          
          {resume.experience.map((exp, idx) => {
            const isCandy = exp.title.toLowerCase().includes('water delivery');
            const isYemeniStore = exp.title.toLowerCase().includes('yemeni store');
            const isGraduation = exp.title.toLowerCase().includes('graduation project');
            
            return (
              <motion.div 
                key={idx}
                className={`experience-node ${idx % 2 === 0 ? 'left' : 'right'} ${isCandy ? 'candy-node' : ''} ${isYemeniStore ? 'yemeni-node' : ''} ${isGraduation ? 'graduation-node' : ''}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              >
                {isCandy && (
                  <>
                    <div className="project-hud-label">{lang === 'ar' ? 'معاينة_النظام' : 'SYSTEM_PREVIEW'}</div>
                    <div className="data-fragment" style={{ top: '20%', left: '10%' }}></div>
                    <div className="data-fragment" style={{ top: '60%', left: '15%', animationDelay: '1s' }}></div>
                    <div className="candy-phone-left-container">
                      <motion.div 
                        className="iphone-17-frame video-frame"
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
                        <div className="iphone-button-right"></div>
                        <div className="iphone-screen">
                          <video 
                            src="/assets/Screen_Recording_20260106_005631_Crystal Drop.mp4" 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                          />
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
                    <div className="project-hud-label">{lang === 'ar' ? 'بث_البيانات' : 'DATA_STREAM'}</div>
                    <div className="data-fragment" style={{ top: '30%', right: '10%' }}></div>
                    <div className="data-fragment" style={{ top: '70%', right: '15%', animationDelay: '1.5s' }}></div>
                    <div className="yemeni-phone-right-container">
                      <motion.div 
                        className="iphone-17-frame video-frame"
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
                        <div className="iphone-button-right"></div>
                        <div className="iphone-screen">
                          <video 
                            src="/assets/Screen_Recording_20250725_203231.mp4" 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                          />
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
                    <div className="project-hud-label">{lang === 'ar' ? 'نموذج_أولي' : 'CORE_PROTOTYPE'}</div>
                    <div className="data-fragment" style={{ top: '15%', left: '12%' }}></div>
                    <div className="data-fragment" style={{ top: '55%', left: '18%', animationDelay: '0.5s' }}></div>
                    <div className="graduation-phone-left-container">
                      <motion.div 
                        className="iphone-17-frame"
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
                        <div className="iphone-button-right"></div>
                        <div className="iphone-screen">
                          <img src="/assets/Screenshot_20250225_002302.jpg" alt="Graduation Project" />
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
                      <h3 className="node-title">{exp.title}</h3>
                      <div className="node-company-row">
                        <span className="node-company">{exp.company}</span>
                        {exp.location && <span className="node-location"> • {exp.location}</span>}
                      </div>
                      
                      <ul className="node-highlights">
                        {exp.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>

                      <div className="node-tech">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="tech-badge">{tech}</span>
                        ))}
                      </div>

                      {(exp.preview || exp.source) && (
                        <div className="node-actions">
                          {exp.preview && (
                            <a href={exp.preview} target="_blank" rel="noopener" className="btn btn-color-2 btn-sm">
                              {trans.preview}
                            </a>
                          )}
                          {exp.source && (
                            <a href={exp.source} target="_blank" rel="noopener" className="btn btn-color-1 btn-sm">
                              {trans.source}
                            </a>
                          )}
                        </div>
                      )}
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
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="overline text-stroke">{trans.toolkit}</div>
          <h1 className="title-massive">
            <span className="gradient-text">{trans.skills}</span>
          </h1>
          <p className="subtitle">{trans.skillsSubtitle}</p>
        </motion.div>

        <div className="skills-layout">
          <div className="skills-grid-categories">
            {resume.skills.map((category, idx) => {
              const catKey = `cat${category.category.split(' ')[0]}`;
              return (
                <motion.div 
                  key={category.category}
                  className="skill-category-card"
                  initial={{ opacity: 0, y: 50, rotateX: 15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <p className="section_text_p1 text-stroke">{trans.background}</p>
          <h1 className="title-massive">
            <span className="gradient-text">{trans.eduTitle}</span>
          </h1>
        </motion.div>

        <div className="timeline">
          {resume.education.map((ed, idx) => (
            <motion.div
              key={idx}
              className="edu-card"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h3>{ed.degree}</h3>
              <div className="meta">{[ed.school, ed.location].filter(Boolean).join(' — ')}{ed.period ? ` • ${ed.period}` : ''}</div>
              <p className="edu-desc">{Array.isArray(ed.details) && ed.details.length > 0 ? ed.details.join(' ') : ''}</p>
            </motion.div>
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
      <section id="contact" className="contact-premium">
        <div className="contact-container-modern">
          <div className="contact-content-grid">
            <motion.div 
              className="contact-text-side"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="contact-overline">{trans.getInTouch}</span>
              <h2 className="contact-big-title">
                {(lang === 'ar' ? ['لنصنع', 'شيئاً'] : ["LET'S", "CREATE"]).map((word, i) => (
                  <motion.span 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    style={{ display: 'inline-block', marginInlineEnd: '0.3em' }}
                  >
                    {word}
                  </motion.span>
                ))}
                <br />
                <motion.span 
                  className="gradient-text"
                  initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                  whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={{ display: 'inline-block' }}
                >
                  {lang === 'ar' ? 'عظيماً معاً' : "SOMETHING GREAT"}
                </motion.span>
              </h2>
              
              <div className="contact-info-list">
                {[
                  { label: "Email", value: resume.email, href: `mailto:${resume.email}` },
                  { label: "LinkedIn", value: "Connect with me", href: resume.socials.linkedin },
                  { label: "GitHub", value: "View my work", href: resume.socials.github },
                  resume.phone && { label: lang === 'ar' ? "واتساب" : "WhatsApp", value: resume.phone, href: `https://wa.me/${resume.phone.replace(/\s+/g, '')}` }
                ].filter(Boolean).map((link, i) => (
                  <motion.a 
                    key={i}
                    href={link.href}
                    target={link.label !== "Email" ? "_blank" : undefined}
                    rel={link.label !== "Email" ? "noopener" : undefined}
                    className="contact-link-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.6 }}
                  >
                    <span className="link-label">{link.label}</span>
                    <span className="link-value">{link.value}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="contact-form-side"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form className="premium-form" onSubmit={(e) => { e.preventDefault(); const subject=e.currentTarget.subject.value; const message=e.currentTarget.message.value; window.location.href=`mailto:${resume.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`; }}>
                <div className="premium-form-group">
                  <input name="subject" type="text" className="premium-input" placeholder={trans.subject} required />
                  <div className="input-focus-line"></div>
                </div>
                <div className="premium-form-group">
                  <textarea name="message" className="premium-textarea" placeholder={trans.message} required></textarea>
                  <div className="input-focus-line"></div>
                </div>
                <button className="premium-submit-btn" type="submit">
                  <span className="btn-text">{trans.send}</span>
                  <span className="btn-icon">→</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="contact-bg-glow"></div>
        <div className="contact-lines"></div>
      </section>

      {/* Footer */}
      <footer style={{textAlign:'center', color:'#94a3b8', padding:'2rem 1rem'}}>
        <small>© <span ref={yearRef} /> {lang === 'ar' ? 'لؤي الغبري' : 'Luai Alaghbari'}. {trans.footer}</small>
      </footer>
    </>
  );
}
