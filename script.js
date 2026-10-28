const { useState, useEffect, useRef, useLayoutEffect } = React;

function ContactIcon({ type, size = 22, color = 'currentColor' }) {
  const icons = {
    mail: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
        <path d="M4 5.5h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z" />
        <path d="m22 7-10 7L2 7" />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z" />
        <rect x="2" y="9" width="4" height="12" rx="1" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    github: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    sun: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" />
      </svg>
    ),
    moon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
        <path d="M21 12.8A9 9 0 0 1 11.2 3a7.5 7.5 0 1 0 9.8 9.8Z" />
      </svg>
    ),
    menu: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
        <path d="M3 7h18M3 12h18M3 17h18" />
      </svg>
    ),
    x: (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
        <path d="m6 6 12 12M18 6 6 18" />
      </svg>
    ),
    'arrow-up-right': (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
        <path d="M7 17 17 7" />
        <path d="M8 7h9v9" />
      </svg>
    )
  };

  return <span className="icon-wrap">{icons[type] || null}</span>;
}

function Portfolio() {
  const [theme, setTheme] = useState('dark');
  const [projectFilter, setProjectFilter] = useState('all');
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionRefs = useRef({});

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const projects = [
  {
    id: 'voxi',
    number: '01',
    title: 'Voxi Chatting App',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    description:
      'A messaging application built for text and image sharing, combining a clean user interface with practical offline support.',
    image: './images/Voxi.png',
    linkedinUrl:
      'https://www.linkedin.com/posts/wissal-hammad-98b72132a_voxi-activity-7414303434096451585-RkfR?utm_source=share&utm_medium=member_android&rcm=ACoAAFMLYjsB33yycgTVV3h1hSq_oQxNfkKQ9b8',
    tags: ['Android', 'Kotlin', 'Messaging', 'UI/UX']
  },
  {
    id: 'mol-taxi',
    number: '02',
    title: 'Mol Taxi App',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    description:
      'An Android taxi-management application featuring trip tracking, fare calculation, driver profiles, and QR-based verification.',
    image: './images/mol_taxi.jpeg',
    linkedinUrl:
      'https://www.linkedin.com/posts/wissal-hammad-98b72132a_android-kotlin-googlemaps-activity-7401550700029362176-a9lU?utm_source=share&utm_medium=member_android&rcm=ACoAAFMLYjsB33yycgTVV3h1hSq_oQxNfkKQ9b8',
    tags: ['Android', 'Kotlin', 'Google Maps', 'QR']
  },
  {
    id: 'lolokids',
    number: '03',
    title: 'LoLoKids',
    category: 'mobile',
    categoryLabel: 'Educational App',
    description:
      'An educational application that helps children explore the alphabet through tracing activities and multilingual learning.',
    image: './images/LoloKids.png',
    linkedinUrl:
      'https://www.linkedin.com/posts/wissal-hammad-98b72132a_daezveloppementandroid-kotlin-applicationaezducative-activity-7411338947265572864-v-JQ?utm_source=share&utm_medium=member_android&rcm=ACoAAFMLYjsB33yycgTVV3h1hSq_oQxNfkKQ9b8',
    tags: ['Android', 'Education', 'Learning', 'UI/UX']
  },
  {
    id: 'back2owner',
    number: '04',
    title: 'Back2Owner',
    category: 'web/mobile',
    categoryLabel: 'Web/Mobile App',
    description:
      'A lost-and-found platform designed to reconnect people with their missing belongings through weighted matching based on item details, category, location, and date, with chat after a match.',
    linkedinUrl: 'https://lnkd.in/p/eVSusf9v',
    image: './images/Back2Owner.png',
    tags: ['Flutter', 'Node.js', 'MySQL', 'Firebase', 'Matching']
  },
  {
    id: 'derbacademy',
    number: '05',
    title: 'DerbAcademy',
    category: 'web/mobile',
    categoryLabel: 'Web/Mobile App',
    description:
      'A mobile and web educational marketplace connecting students, parents, and teachers through teacher discovery, course bookings, reviews, role-based access, and notifications.',
    image: './images/DerbAcademy.png',
    tags: ['Flutter', 'Next.js', 'Node.js', 'MySQL', 'Firebase']
  },
  {
    id: 'wsl-beauty',
    number: '06',
    title: 'WSL Beauty Salon',
    category: 'web',
    categoryLabel: 'Web Development',
    description:
      'A responsive beauty salon website showcasing services, blog content, and contact information for booking inquiries.',
    image: './images/WSLLOGO.png',
    demoUrl: 'https://hammadwissal.github.io/Fwebsite/WSL.html',
    tags: ['Responsive', 'Web Design', 'Services']
  },
  {
    id: 'travel-agency',
    number: '07',
    title: 'Travel Agency',
    category: 'web',
    categoryLabel: 'Web Development',
    description:
      'A responsive travel website presenting destinations, travel packages, and testimonials through a user-focused browsing experience.',
    image: './images/TravelAgency.jpg',
    demoUrl: 'https://hammadwissal.github.io/TravelAgency/',
    tags: ['Responsive', 'Travel', 'UX']
  }
];

  useEffect(() => {
    document.documentElement.classList.toggle('theme-light', theme === 'light');
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
      const order = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const id of order) {
        const element = sectionRefs.current[id];
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useLayoutEffect(() => {
    const rootElement = document.documentElement;
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const revealTimers = new Set();
    let observer;

    const revealTargetsImmediately = () => {
      if (observer) observer.disconnect();
      revealTimers.forEach((timer) => window.clearTimeout(timer));
      revealTimers.clear();
      rootElement.classList.remove('motion-ready');
      document.querySelectorAll('[data-reveal]').forEach((element) => {
        element.style.removeProperty('--reveal-delay');
        element.classList.add('is-visible');
      });
    };

    const observeRevealTargets = () => {
      if (observer) observer.disconnect();

      if (motionPreference.matches || !('IntersectionObserver' in window)) {
        revealTargetsImmediately();
        return;
      }

      const groupIndexes = new Map();
      observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.getComputedStyle(entry.target).opacity;
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);

            const delay = parseFloat(entry.target.style.getPropertyValue('--reveal-delay')) || 0;
            const duration = window.getComputedStyle(entry.target).transitionDuration.split(',')[0].trim();
            const durationMs = parseFloat(duration) * (duration.endsWith('ms') ? 1 : 1000);
            const timer = window.setTimeout(() => {
              entry.target.style.removeProperty('--reveal-delay');
              revealTimers.delete(timer);
            }, durationMs + delay + 32);
            revealTimers.add(timer);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });

      document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((element) => {
        const group = element.closest('[data-reveal-group]') || element.parentElement;
        const index = groupIndexes.get(group) || 0;
        groupIndexes.set(group, index + 1);
        const stagger = parseFloat(window.getComputedStyle(group).getPropertyValue('--motion-stagger')) || 80;
        element.style.setProperty('--reveal-delay', `${Math.min(index, 5) * stagger}ms`);
        observer.observe(element);
      });

      rootElement.classList.add('motion-ready');
    };

    const handleMotionPreferenceChange = () => {
      if (motionPreference.matches) {
        revealTargetsImmediately();
      } else {
        observeRevealTargets();
      }
    };

    observeRevealTargets();
    if (motionPreference.addEventListener) {
      motionPreference.addEventListener('change', handleMotionPreferenceChange);
    } else {
      motionPreference.addListener(handleMotionPreferenceChange);
    }

    return () => {
      if (observer) observer.disconnect();
      revealTimers.forEach((timer) => window.clearTimeout(timer));
      revealTimers.clear();
      document.querySelectorAll('[data-reveal].is-visible').forEach((element) => {
        element.style.removeProperty('--reveal-delay');
      });
      if (motionPreference.removeEventListener) {
        motionPreference.removeEventListener('change', handleMotionPreferenceChange);
      } else {
        motionPreference.removeListener(handleMotionPreferenceChange);
      }
    };
  }, [projectFilter]);

  const filteredProjects = projectFilter === 'all' ? projects : projects.filter((project) => project.category === projectFilter);

  return (
    <div className="portfolio-shell">
      <header className={`topbar ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container navbar">
          <a href="#home" className="brand" aria-label="Go to home section">
            <img
              src={theme === 'dark' ? './images/WSLPersonalLogo-dark-removedbg.png' : './images/WSLPersonalLogo-LIGHT-bgRemoved.png'}
              alt="WSL brand mark"
              className="brand-mark"
            />
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  className={`nav-link ${activeSection === id ? 'is-active' : ''}`}
                >
                  {item}
                </a>
              );
            })}
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              aria-label="Switch color theme"
              onClick={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
            >
              <ContactIcon type={theme === 'dark' ? 'sun' : 'moon'} size={18} />
            </button>

            <button
              type="button"
              className="menu-toggle"
              aria-label="Toggle navigation menu"
              onClick={() => setIsMenuOpen((value) => !value)}
            >
              <ContactIcon type={isMenuOpen ? 'x' : 'menu'} size={18} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="container mobile-menu">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  className={`nav-link ${activeSection === id ? 'is-active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              );
            })}
          </div>
        )}
      </header>

      <main>
        <section id="home" ref={(node) => { sectionRefs.current.home = node; }} className="section hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="hero-kicker">Hello!</span>
              <h1 className="hero-title">I&apos;m <span className="accent-text">Wissal</span></h1>
              <p className="hero-subtitle">Mobile Developer</p>
              <p className="hero-description">
                Passionate about creating beautiful and functional mobile applications. Specialized in Kotlin native and Flutter development, with a focus on user experience and clean code.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="CV_HAMMAD_Wissal.pdf" download>
                  Download CV
                </a>
                <a className="button button-secondary" href="#projects">
                  View Projects
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="portrait-frame">
                <img src="./images/personalPicture-noBg3.png" alt="Portrait of Wissal Hammad" />
              </div>
              <span className="portrait-badge">Available for internship</span>
            </div>
          </div>
        </section>

        <section id="about" ref={(node) => { sectionRefs.current.about = node; }} className="section">
          <div className="container about-grid">
            <div className="about-visual">
              <div className="about-card about-brand-card">
                <img
                  src={theme === 'dark' ? './images/WSLPersonalLogo-dark-removedbg.png' : './images/WSLPersonalLogo-LIGHT-bgRemoved.png'}
                  alt="WSL brand mark"
                />
              </div>
            </div>

            <div className="about-copy">
              <div className="eyebrow">About</div>
              <h2 className="section-heading">Designing intuitive digital experiences.</h2>
              <p>
                I&apos;m a dedicated developer with a passion for building elegant solutions to real-world problems. My work combines technical expertise with a strong eye for design and usability.
              </p>
              <p>
                I work across mobile and web development, creating interfaces that feel polished while remaining intuitive and highly functional.
              </p>

              <div className="fact-grid">
                <div className="fact-box">
                  <span className="fact-label">Location</span>
                  <span className="fact-value">Morocco</span>
                </div>
                <div className="fact-box">
                  <span className="fact-label">Focus</span>
                  <span className="fact-value">Mobile & Web</span>
                </div>
                <div className="fact-box">
                  <span className="fact-label">Email</span>
                  <span className="fact-value">wissalhammad@gmail.com</span>
                </div>
                <div className="fact-box">
                  <span className="fact-label">Availability</span>
                  <span className="fact-value">Open to internship</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" ref={(node) => { sectionRefs.current.skills = node; }} className="section skills-shell">
          <div className="container">
            <div className="eyebrow" data-reveal>Skills</div>
            <h2 className="section-heading" data-reveal>Focused on product quality and performance.</h2>
            <p className="skills-legend" data-reveal>Filled tags are what I use every day. Outlined tags are tools I&apos;m comfortable with.</p>

            <div className="skills-grid">
              {[
                {
                  title: 'Mobile',
                  skills: [
                    { name: 'Kotlin', core: true },
                    { name: 'Flutter', core: true },
                    { name: 'Jetpack Compose' },
                    { name: 'Firebase' },
                    { name: 'Android Studio' }
                  ]
                },
                {
                  title: 'Web',
                  skills: [
                    { name: 'HTML', core: true },
                    { name: 'CSS', core: true },
                    { name: 'JavaScript', core: true },
                    { name: 'React' },
                    { name: 'Responsive UI' }
                  ]
                },
                {
                  title: 'Backend & Data',
                  skills: [
                    { name: 'MySQL', core: true },
                    { name: 'node.js',core: true },
                    { name: 'PHP' },
                    { name: 'SQL' },
                    { name: 'REST APIs' },
                    { name: 'API Integration' }
                  ]
                },
                {
                  title: 'Design & Tools',
                  skills: [
                    { name: 'Git & GitHub', core: true },
                    { name: 'Figma' },
                    { name: 'Canva' },
                    { name: 'UI/UX' },
                    { name: 'Material Design' }
                  ]
                }
              ].map((group) => (
                <div key={group.title} className="skill-group" data-reveal data-reveal-group="skills">
                  <h3>{group.title}</h3>
                  <ul className="skill-tags">
                    {group.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className={`tag${skill.core ? ' tag--core' : ''}`}
                        data-reveal
                      >
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" ref={(node) => { sectionRefs.current.projects = node; }} className="section projects-shell">
          <div className="container">
            <div className="eyebrow" data-reveal>Projects</div>
            <h2 className="section-heading" data-reveal>Crafted with code and curiosity.</h2>

            <div className="projects-toolbar" data-reveal>
              <div className="filter-group" role="group" aria-label="Project filters">
                {[
                  { id: 'all', label: 'All Projects', count: 7 },
                  { id: 'web', label: 'Web Development', count: 2 },
                  { id: 'mobile', label: 'Mobile Applications', count: 3 },
                  { id: 'web/mobile', label: 'Web/Mobile Applications', count: 2 }
                ].map((filter) => (
                  <button
                    key={filter.id}
                    type="button"
                    className={`filter-button ${projectFilter === filter.id ? 'is-active' : ''}`}
                    onClick={() => setProjectFilter(filter.id)}
                    aria-pressed={projectFilter === filter.id}
                  >
                    {filter.label}
                    <span>{filter.count}</span>
                  </button>
                ))}
              </div>

              <div className="projects-layout-note">Selected projects</div>
            </div>

            <div className="projects-grid" data-reveal-group="projects">
              {filteredProjects.map((project) => {
                const actionUrl = project.demoUrl || project.linkedinUrl;
                const actionLabel = project.demoUrl ? 'Live Demo' : 'View Case Study';

                return (
                  <article key={project.id} className="project-card" data-reveal>
                    <div className="project-preview">
                      <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                      <div className="project-preview-overlay" />
                      <div className="project-preview-top">
                        <span className="project-type">{project.categoryLabel}</span>
                        <span className="project-number">{project.number}</span>
                      </div>
                      <span className="project-preview-status">
                        <span className="status-dot" />
                        {project.demoUrl ? 'Live demo' : 'Case study'}
                      </span>
                    </div>

                    <div className="project-card-body">
                      <div className="project-card-heading">
                        <div>
                          <p className="project-card-kicker">Project {project.number}</p>
                          <h3 className="project-card-title">{project.title}</h3>
                        </div>
                      </div>

                      <p className="project-card-description">{project.description}</p>

                      <div className="project-tags">
                        {project.tags.map((tag) => (
                          <span key={tag} className="project-tag">{tag}</span>
                        ))}
                      </div>

                      <div className="project-card-footer">
                        {actionUrl && (
                          <a
                            href={actionUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`project-action ${project.demoUrl ? 'project-action-primary' : ''}`}
                          >
                            {actionLabel}
                            <ContactIcon type="arrow-up-right" size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" ref={(node) => { sectionRefs.current.contact = node; }} className="section contact-shell">
          <div className="container">
            <div className="contact-block">
              <div className="contact-copy">
                <div className="eyebrow">Contact</div>
                <h2 className="section-heading">Let&apos;s build something thoughtful.</h2>
                <p>
                  I&apos;m open to meaningful mobile and web opportunities, product work, and collaborations that value clean design and strong engineering.
                </p>
              </div>

              <div className="contact-links" aria-label="Contact links">
                {[
                  { href: 'mailto:wissalhammad@gmail.com', icon: 'mail', label: 'Email' },
                  { href: 'https://www.linkedin.com/in/wissal-hammad-98b72132a/', icon: 'linkedin', label: 'LinkedIn' },
                  { href: 'https://github.com/HAMMADWISSAL', icon: 'github', label: 'GitHub' }
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="contact-link"
                    aria-label={item.label}
                  >
                    <ContactIcon type={item.icon} size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src={theme === 'dark' ? './images/WSLPersonalLogo-dark-removedbg.png' : './images/WSLPersonalLogo-LIGHT-bgRemoved.png'} alt="WSL footer mark" />
            <small>© 2026 WSL Portfolio</small>
          </div>
          <small>Made by Wissal</small>
        </div>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Portfolio />);