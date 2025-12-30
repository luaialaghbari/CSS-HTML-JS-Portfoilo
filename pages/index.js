import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import resume from '../data/resume';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [active, setActive] = useState('profile');
  const yearRef = useRef(null);

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
    // Track the landing section as `profile` (Home) so Home highlights on landing
    const sections = ['profile','about','education','experience','contact'];
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

  // Minimal mode: remove extra motion/handlers for clean feel

  // Build Projects list including items mentioned in Experience (no duplicates)
  const combinedProjects = (() => {
    const base = Array.isArray(resume.projects) ? [...resume.projects] : [];
    const names = new Set(base.map((p) => p.name?.toLowerCase()));
    const exp = Array.isArray(resume.experience) ? resume.experience : [];
    const looksLikeProject = (ex) => /app|project|portfolio/i.test(`${ex.title} ${ex.company}`);
    const fallbackImages = ['/assets/project-1.png','/assets/project-2.png','/assets/project-3.png'];
    let imgIdx = 0;
    exp.forEach((ex) => {
      if (!looksLikeProject(ex)) return;
      const name = (ex.company && /app|project/i.test(ex.company)) ? ex.company : ex.title;
      const key = (name || '').toLowerCase();
      if (key && !names.has(key)) {
        base.push({
          name,
          image: fallbackImages[imgIdx++ % fallbackImages.length],
          tags: ex.technologies || [],
          preview: '#',
          source: '#',
        });
        names.add(key);
      }
    });
    return base;
  })();

  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Background intentionally minimal/black */}

      {/* Desktop Navigation */}
      <nav id="desktop-nav">
        <div className="left-nav reveal">
          <a className="logo" href="#profile">Luai Alaghbari</a>
        </div>
        <ul className="nav-links reveal">
          <li><a className={active==='profile'?'active':''} href="#profile">Home</a></li>
          <li><a className={active==='about'?'active':''} href="#about">About</a></li>
          <li><a className={active==='education'?'active':''} href="#education">Education</a></li>
          <li><a className={active==='experience'?'active':''} href="#experience">Experience</a></li>
          <li><a className={active==='contact'?'active':''} href="#contact">Contact</a></li>
        </ul>
        <button className="theme-toggle" onClick={() => setTheme(theme==='dark'?'light':'dark')} aria-label="Toggle theme">
          {theme==='dark' ? (
            <>
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.64 13A9 9 0 1 1 11 2.36a7 7 0 1 0 10.63 10.63Z"/></svg>
              <span>Dark</span>
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 4a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0-18a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm10 7h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2ZM3 12H2a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm15.78 7.78a1 1 0 0 1-1.41 0l-.71-.7a1 1 0 0 1 1.41-1.42l.71.71a1 1 0 0 1 0 1.41ZM7.34 6.34a1 1 0 0 1-1.41 0l-.71-.71A1 1 0 1 1 6.63 4.2l.71.71a1 1 0 0 1 0 1.41Zm10 0a1 1 0 0 1-1.41-1.41l.71-.71A1 1 0 0 1 18.95 5l-.71.71a1 1 0 0 1-1.41 0ZM5.66 19.8a1 1 0 0 1-1.41 0l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41Z"/></svg>
              <span>Light</span>
            </>
          )}
        </button>
      </nav>

      {/* Hamburger Navigation */}
      <nav id="hamburger-nav">
        <div className="left-nav">
          <a className="logo" href="#profile">Luai Alaghbari</a>
        </div>
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span><span></span><span></span>
          </div>
          <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#profile" onClick={toggleMenu}>Home</a></li>
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="#education" onClick={toggleMenu}>Education</a></li>
              <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="profile" className="hero-grid">
        <motion.div className="hero-copy" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:.6}}>
          <div className="badge reveal">Available for work</div>
          <h1 className="title gradient-text reveal">{resume.name}</h1>
          <p className="section_text_p1" style={{opacity:.9}}>{resume.role}</p>
          <p className="lead reveal">{resume.summary}</p>
          <div className="btn-container reveal">
            <button className="btn btn-color-2 btn-magnetic" onClick={() => window.open(resume.resumeUrl || '/assets/Ruesme.pdf','_blank')}><span>Download resume</span></button>
          </div>
          <div id="socials-container" className="reveal">
            <a href={resume.socials.linkedin} target="_blank" rel="noopener">
              <img src="/assets/linkedin.png" className="icon" alt="LinkedIn"/>
            </a>
            <a href={resume.socials.github} target="_blank" rel="noopener">
              <img src="/assets/github.png" className="icon" alt="GitHub"/>
            </a>
          </div>
        </motion.div>
        <motion.div className="hero-visual reveal" initial={{opacity:0, scale:.98}} animate={{opacity:1, scale:1}} transition={{duration:.6, delay:.1}}>
          <div className="image-frame">
            <img src="/assets/picprofile2.png.jpg" alt="Luai portrait" width="420" height="420" loading="lazy" decoding="async" />
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section id="education" className="reveal">
        <p className="section_text_p1">Background</p>
        <h1 className="title gradient-text">Education</h1>

        <div className="timeline">
          {resume.education.map((ed, idx) => (
            <motion.div
              key={idx}
              className="edu-card"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3>{ed.degree}</h3>
              <div className="meta">{[ed.school, ed.location].filter(Boolean).join(' — ')}{ed.period ? ` • ${ed.period}` : ''}</div>
              <p className="edu-desc">{Array.isArray(ed.details) && ed.details.length > 0 ? ed.details.join(' ') : ''}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="reveal">
        <div className="section-header">
          <div className="overline">Toolkit</div>
          <h1 className="title gradient-text">Skills</h1>
          <p className="subtitle">Technologies I use to design, build, and ship quality software.</p>
        </div>
        <div className="skills-grid">
          {resume.skills.map((s, i) => {
            // Skills with official logos
            const skillsWithLogos = ['flutter', 'dart', 'react', 'next.js', 'nextjs', 'javascript', 'js', 'html', 'css', 'java', 'php', 'supabase', 'firebase', 'figma', 'git', 'github', 'c++', 'cpp', 'microsoft', 'restapis', 'restapi', 'rest'];

            const skill = s.toLowerCase().replace(/\s+/g, '').replace(/[\.\-\/]/g, '');
            const hasOfficialLogo = skillsWithLogos.some(logo => skill.includes(logo.replace(/[\.\-\/]/g, '')));

            // Use a subtle blue → purple gradient for skill cards (muted, not too bright)
            const getSkillGradient = (index) => {
              return 'linear-gradient(135deg, rgba(59,130,246,0.10), rgba(124,58,237,0.10))';
            };

            // Slightly stronger gradient on hover
            const getSkillHoverGradient = (index) => {
              return 'linear-gradient(135deg, rgba(59,130,246,0.14), rgba(124,58,237,0.14))';
            };

            // Get icon - either official logo or unique generic icon
            const getSkillIcon = (skillName, index) => {
              if (hasOfficialLogo) {
                const skill = skillName.toLowerCase().replace(/\s+/g, '').replace(/[\.\-\/]/g, '');
                const iconMap = {
                  'flutter': 'flutter',
                  'dart': 'dart',
                  'react': 'react',
                  'next.js': 'nextdotjs',
                  'nextjs': 'nextdotjs',
                  'javascript': 'javascript',
                  'js': 'javascript',
                  'html': 'html5',
                  'css': 'css',
                  'java': 'openjdk',
                  'php': 'php',
                  'supabase': 'supabase',
                  'firebase': 'firebase',
                  'figma': 'figma',
                  'git': 'git',
                  'github': 'github',
                  'c++': 'cplusplus',
                  'cpp': 'cplusplus',
                  'microsoftapps': 'microsoft',
                  'microsoft': 'microsoft',
                  'restapis': 'postman',
                  'restapi': 'postman',
                  'rest': 'postman'
                };
                const iconName = iconMap[skill] || 'code';
                // Provide brand color where appropriate so icons render in their brand hue
                const iconColors = {
                  'java': '5382A1',
                  'css': '1572B6',
                  'html5': 'E34F26',
                  'javascript': 'F7DF1E',
                  'react': '61DAFB',
                  'flutter': '02569B',
                  'dart': '0175C2',
                  'php': '777BB4',
                  'firebase': 'FFCA28',
                  'supabase': '3ECF8E',
                  'figma': 'F24E1E',
                  'github': '181717',
                };
                const color = iconColors[iconName];
                const src = color ? `https://cdn.simpleicons.org/${iconName}/${color}` : `https://cdn.simpleicons.org/${iconName}`;
                return <img src={src} alt={skillName} loading="lazy" />;
              } else {
                // Unique generic icons for skills without official logos
                const genericIcons = [
                  // Code/Development
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>,
                  // Puzzle/Problem Solving
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7 6.3C15.1 6.3 15.4 6 15.4 5.6V4.4C15.4 4 15.1 3.7 14.7 3.7C14.3 3.7 14 4.4 14 5.6V6.3C14 6.7 14.3 7 14.7 7C15.1 7 15.4 6.7 15.4 6.3Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M20 9C20 11.2 18.2 13 16 13H14V15C14 15.6 13.6 16 13 16H11C10.4 16 10 15.6 10 15V13H8C5.8 13 4 11.2 4 9V7C4 4.8 5.8 3 8 3H16C18.2 3 20 4.8 20 7V9Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>,
                  // Team/Collaboration
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 20C17 18.3 15.7 17 14 17H10C8.3 17 7 18.3 7 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="9" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="15" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 13C10.3 13 9 14.3 9 16V17H15V16C15 14.3 13.7 13 12 13Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>,
                  // Time Management
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>,
                  // Adaptability
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12L10.5 14.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>,
                  // Microsoft/General
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 9H15V15H9V9Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 7V9M12 15V17M7 12H9M15 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>,
                  // REST APIs
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12H16M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                  </svg>,
                  // UI/UX
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M7 17H11M13 17H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ];
                return genericIcons[index % genericIcons.length];
              }
            };

            // All cards span 1 column for 8 cards per row layout
            const getCardSpan = (index) => {
              return 1; // All cards span 1 column for consistent layout
            };

            return (
              <motion.div
                key={i}
                className="skill-card"
                style={{
                  gridColumn: `span ${getCardSpan(i)}`
                }}
                initial={{ opacity: 0, rotateY: -15, x: -30, scale: 0.9 }}
                whileInView={{ opacity: 1, rotateY: 0, x: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.04,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{
                  scale: 1.05,
                  y: -6,
                  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
              >
                <div className="skill-icon">
                  {getSkillIcon(s, i)}
                </div>
                <span className="skill-card-text">{s}</span>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="section-header reveal">
          <div className="overline">Get To Know More</div>
          <h1 className="title gradient-text">About Me</h1>
        </div>

        <div className="about-modern">
          <div className="about-hero reveal">
            <p className="about-hero-text">
              Software Engineer and English Teacher focused on Flutter/Dart and full‑stack development.
              I translate complex requirements into elegant solutions with a strong emphasis on design systems and maintainability.
            </p>
            <div className="focus-highlight">
              <div className="highlight-dot"></div>
              <span>100% Focused in Frontend Dev Mobile & App</span>
            </div>
          </div>

          <div className="experience-grid reveal">
            <div className="exp-card">
              <div className="exp-card-header">
                <div className="exp-icon">💼</div>
                <h3>Professional Experience</h3>
              </div>
              <p>3‑month internship at Yemen Soft (SDLC, UI/UX)</p>
            </div>
            <div className="exp-card">
              <div className="exp-card-header">
                <div className="exp-icon">💧</div>
                <h3>Candy App</h3>
              </div>
              <p>Water Delivery - Worked remotely for Aljazeera Springs, Jeddah</p>
            </div>
            <div className="exp-card">
              <div className="exp-card-header">
                <div className="exp-icon">📚</div>
                <h3>English Teacher</h3>
              </div>
              <p>Teaching English with TESOL certification</p>
            </div>
            <div className="exp-card">
              <div className="exp-card-header">
                <div className="exp-icon">🚀</div>
                <h3>Graduation Project</h3>
              </div>
              <p>Real‑time delivery app with live GPS tracking</p>
            </div>
          </div>
        </div>

        {/* Down Arrow */}
        <img src="/assets/arrow.png" className="icon arrow" alt="Scroll down" onClick={() => { const el = document.querySelector('#experience'); el && el.scrollIntoView({ behavior: 'smooth'}); }} />
      </section>

      {/* Experience Section (shows Projects) */}
      <section id="experience" className="reveal">
        <p className="section_text_p1">Featured Work</p>
        <h1 className="title gradient-text">Experience</h1>

        <div className="projects-grid">
          {combinedProjects.map((p, idx) => (
            <motion.div key={idx} className="project-card reveal" initial={{opacity:0, y:14}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:.2}} transition={{duration:.45, delay: idx*0.05}}>
              <img src={p.image} alt={p.name} />
              <div className="content">
                <h3>{p.name}</h3>
                {Array.isArray(p.tags) && (
                  <div className="project-tags">{p.tags.map((t,i)=>(<span className="tag" key={i}>{t}</span>))}</div>
                )}
                <div className="actions">
                  <a className="btn btn-color-2" href={p.preview || '#'} target="_blank" rel="noopener">Preview</a>
                  <a className="btn btn-color-1" href={p.source || '#'} target="_blank" rel="noopener">Source</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects section removed — projects are shown under Experience above. */}

      {/* Contact Section */}
      <section id="contact" className="reveal">
        <p className="section_text_p1">Get In Touch</p>
        <h1 className="title gradient-text">Contact</h1>

        <div className="contact-container">
          <div className="contact-rows">
            <div className="contact-info">
              <p>Email: <a href={`mailto:${resume.email}`}>{resume.email}</a></p>
              {resume.phone && (<p>Phone: <a href={`tel:${resume.phone}`}>{resume.phone}</a></p>)}
              <p>LinkedIn: <a href={resume.socials.linkedin} target="_blank" rel="noopener">linkedin.com</a></p>
              <p>GitHub: <a href={resume.socials.github} target="_blank" rel="noopener">github.com</a></p>
            </div>
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); const subject=e.currentTarget.subject.value; const message=e.currentTarget.message.value; window.location.href=`mailto:${resume.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`; }}>
              <input name="subject" type="text" placeholder="Subject" required />
              <textarea name="message" placeholder="Message" required></textarea>
              <button className="btn btn-color-1" type="submit">Send</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="reveal" style={{textAlign:'center', color:'#94a3b8', padding:'2rem 1rem'}}>
        <small>© <span ref={yearRef} /> Luai Alaghbari. All rights reserved.</small>
      </footer>
    </>
  );
}
