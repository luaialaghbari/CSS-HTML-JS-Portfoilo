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
          <h1 className="title reveal" style={{color:'var(--color-text)'}}>{resume.name}</h1>
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
            <div className="edu-card" key={idx}>
              <h3>{ed.degree}</h3>
              <div className="meta">{[ed.school, ed.location].filter(Boolean).join(' — ')}{ed.period ? ` • ${ed.period}` : ''}</div>
              <p className="edu-desc">{Array.isArray(ed.details) && ed.details.length > 0 ? ed.details.join(' ') : ''}</p>
            </div>
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
        <div className="chips skills-cloud">
          {resume.skills.map((s, i) => (<span className="chip" key={i}>{s}</span>))}
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="section-header reveal">
          <div className="overline">Get To Know More</div>
          <h1 className="title gradient-text">About Me</h1>
          <p className="subtitle">{resume.summary}</p>
        </div>

        <div className="about-grid">
          <div className="bio-card reveal">
            <p>
              Software Engineer focused on Flutter/Dart and full‑stack development. I translate complex
              requirements into elegant solutions with a strong emphasis on design systems and
              maintainability.
            </p>
            <ul className="features">
              <li>3‑month internship at Yemen Soft (SDLC, UI/UX)</li>
              <li>Graduation project: real‑time delivery app with live tracking</li>
              <li>Clean architecture, responsive UI, and accessible patterns</li>
            </ul>

            <div className="chips">
              <span className="chip">Flutter</span>
              <span className="chip">Dart</span>
              <span className="chip">JavaScript</span>
              <span className="chip">UI/UX</span>
              <span className="chip">REST APIs</span>
            </div>
          </div>

          <div className="stats-grid reveal">
            <div className="stat-card">
              <div className="num">10+</div>
              <div className="label">Screens Built</div>
            </div>
            <div className="stat-card">
              <div className="num">3</div>
              <div className="label">Major Projects</div>
            </div>
            <div className="stat-card">
              <div className="num">1yr</div>
              <div className="label">Hands-on Experience</div>
            </div>
            <div className="stat-card">
              <div className="num">100%</div>
              <div className="label">Focus on UX</div>
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
