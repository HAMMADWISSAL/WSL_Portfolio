
      const { useState, useEffect, useRef } = React;

      // Alternative: Direct SVG icons for contact section
      const ContactIcon = ({ type, size = 32, color = '#A34A28' }) => {
        const icons = {
          mail: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          ),
          linkedin: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          ),
          github: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          ),
          sun: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ),
          moon: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          ),
          menu: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          ),
          x: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ),
          'arrow-up-right': (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          ),
          'external-link': (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          ),
          github2: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          )
        };
        
        return (
          <span className="icon-hover">
            {icons[type] || <span>Icon</span>}
          </span>
        );
      };

      function SkillBar({ skill, level, index, isDarkMode }) {
        const accentPrimary = '#A34A28';
        const accentSecondary = '#F58B54';
        const [animatedLevel, setAnimatedLevel] = useState(0);
        
        useEffect(() => {
          const timer = setTimeout(() => {
            setAnimatedLevel(level);
          }, index * 100);
          return () => clearTimeout(timer);
        }, [level, index]);
        
        return (
          <div 
            className="mb-8 group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full"
                     style={{ backgroundColor: accentSecondary }}></div>
                <span className="font-semibold text-lg"
                      style={{ color: isDarkMode ? '#DFDDC7' : '#211717' }}>
                  {skill}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold"
                      style={{ color: accentSecondary }}>
                  {level}%
                </span>
                <div className="w-10 h-1 rounded-full overflow-hidden"
                     style={{ backgroundColor: isDarkMode ? '#3a2a2a' : '#e1dfcc' }}>
                  <div className="h-full progress-fill"
                       style={{
                         background: `linear-gradient(90deg, ${accentPrimary}, ${accentSecondary})`,
                         width: `${animatedLevel}%`,
                         animationDelay: `${index * 0.2}s`
                       }}>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-3 rounded-full overflow-hidden"
                 style={{ backgroundColor: isDarkMode ? '#3a2a2a' : '#e1dfcc' }}>
              <div 
                className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  background: `linear-gradient(90deg, ${accentPrimary}, ${accentSecondary})`,
                  width: `${animatedLevel}%`,
                  boxShadow: `0 0 20px ${accentSecondary}40`
                }}
              >
                <div className="absolute top-0 left-0 w-20 h-full opacity-50"
                     style={{
                       background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                       animation: 'shimmer 2s infinite'
                     }}>
                </div>
              </div>
              
              <div className="absolute top-1/2 transform -translate-y-1/2 flex w-full justify-between px-1">
                {[...Array(10)].map((_, i) => (
                  <div 
                    key={i}
                    className={`w-1 h-1 rounded-full transition-all duration-300 ${animatedLevel >= (i + 1) * 10 ? 'opacity-100 scale-125' : 'opacity-30'}`}
                    style={{ 
                      backgroundColor: animatedLevel >= (i + 1) * 10 ? accentSecondary : isDarkMode ? '#5a4a4a' : '#c5c3b0'
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        );
      }

      function Portfolio() {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const [isDarkMode, setIsDarkMode] = useState(true);
        const [activeSection, setActiveSection] = useState('home');
        const [scrolled, setScrolled] = useState(false);
        const sectionRefs = useRef({});

        const toggleTheme = () => {
          setIsDarkMode(!isDarkMode);
        };

        useEffect(() => {
          // Initialize Lucide icons
          if (window.lucide && window.lucide.createIcons) {
            window.lucide.createIcons();
          }

          // Handle scroll for navbar and section visibility
          const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            
            // Check which section is in view
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            for (const section of sections) {
              const element = sectionRefs.current[section];
              if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 150 && rect.bottom >= 150) {
                  setActiveSection(section);
                  // Add visible class to section when in view
                  element.classList.add('section-visible');
                  break;
                }
              }
            }
          };

          window.addEventListener('scroll', handleScroll);
          handleScroll(); // Initial check

          // Add visible class to home section initially
          setTimeout(() => {
            const homeSection = sectionRefs.current.home;
            if (homeSection) {
              homeSection.classList.add('section-visible');
            }
          }, 100);

          return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        const skills = [
          { name: 'JavaScript', level: 80 },
          { name: 'HTML', level: 90 },
          { name: 'CSS', level: 85 },
          { name: 'PHP', level: 85 },
          { name: 'MySQL', level: 80 },
          { name: 'Python', level: 80 },
          { name: 'Kotlin', level: 90 },
          { name: 'Flutter', level: 80 },
          { name: 'UI/UX Design', level: 80 },
          { name: 'API Integration', level: 85 },
          { name: 'Material Design', level: 85 },
          { name: 'Git & GitHub', level: 90 },
          { name: 'Figma', level: 75 },
          { name: 'Canva', level: 95 }
        ];

        const projects = [
          { title: 'WSL Beauty Salon', description: 'Modern and responsive beauty salon website presenting WSL services with clean design, organized service sections, informative blog content, and an inviting contact section for bookings', image: './images/WSLLOGO.png', link: 'https://hammadwissal.github.io/Fwebsite/WSL.html', type: 'website' },
          { title: 'Travel Agency', description: 'Modern and responsive travel agency website showcasing destinations, services, and testimonials with intuitive navigation and clean design', image: './images/TravelAgency.jpg', link: 'https://hammadwissal.github.io/TravelAgency/', type: 'website' },
          { title: 'Voxi Chatting App', description: 'Modern and secure messaging app for instant text and image sharing with seamless offline support and a clean, intuitive design.', image: './images/Voxi.png'  , type: 'website', link: 'https://www.linkedin.com/posts/wissal-hammad-98b72132a_voxi-activity-7414303434096451585-RkfR?utm_source=share&utm_medium=member_android&rcm=ACoAAFMLYjsB33yycgTVV3h1hSq_oQxNfkKQ9b8'},
          { title: 'Mol Taxi App', description: 'Modern and intuitive taxi management mobile application featuring real-time trip tracking, fare calculation, driver profiles, and QR-based verification with a clean and professional UI.', image: './images/mol_taxi.jpeg', link: 'https://www.linkedin.com/posts/wissal-hammad-98b72132a_android-kotlin-googlemaps-activity-7401550700029362176-a9lU?utm_source=share&utm_medium=member_android&rcm=ACoAAFMLYjsB33yycgTVV3h1hSq_oQxNfkKQ9b8', type: 'website' },
          { title: 'LoLoKids', description: 'Modern and professional LinkedIn marketing graphic promoting the LoloKids educational mobile app, highlighting interactive alphabet learning, letter tracing, and multilingual features with a clean, kid-friendly design.', image: './images/LoloKids.png', link: 'https://www.linkedin.com/posts/wissal-hammad-98b72132a_daezveloppementandroid-kotlin-applicationaezducative-activity-7411338947265572864-v-JQ?utm_source=share&utm_medium=member_android&rcm=ACoAAFMLYjsB33yycgTVV3h1hSq_oQxNfkKQ9b8', type: 'website' }
        ];

        // New Color Palette
        const bgPrimary = isDarkMode ? 'bg-[#211717]' : 'bg-[#DFDDC7]';
        const bgSecondary = isDarkMode ? 'bg-[#2a1f1f]' : 'bg-[#e9e7d4]';
        const textPrimary = isDarkMode ? 'text-[#DFDDC7]' : 'text-[#211717]';
        const textSecondary = isDarkMode ? 'text-[#c5c3b0]' : 'text-[#5a4a4a]';
        const accentPrimary = '#A34A28';
        const accentSecondary = '#F58B54';
        const borderColor = isDarkMode ? 'border-[#3a2a2a]' : 'border-[#d1cfba]';
        const cardBg = isDarkMode ? 'bg-[#2a1f1f]' : 'bg-white';
        const cardBorder = isDarkMode ? 'border-[#3a2a2a]' : 'border-[#e1dfcc]';
        const navBg = isDarkMode ? 'bg-[#211717]/95' : 'bg-[#DFDDC7]/95';
        const footerBg = isDarkMode ? 'bg-[#1a1212]' : 'bg-[#d5d3c0]';

        return (
          <div className={`min-h-screen ${bgPrimary} ${textPrimary} transition-all duration-700 page-transition overflow-hidden`}>
            {/* Navigation */}
            <nav className={`fixed w-full top-0 z-50 ${navBg} backdrop-blur-lg border-b ${borderColor} transition-all duration-700 navbar-animation ${scrolled ? 'shadow-2xl shadow-[#A34A28]/10' : ''}`}>
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="h-15 w-20 flex items-center">
                    {isDarkMode ? (
                      <img 
                        src="./images/WSLPersonalLogo-dark-removedbg.png" 
                        alt="WSL Logo" 
                        className="h-12 transition-all duration-500 hover:scale-110 hover:rotate-3" 
                      />
                    ) : (
                      <img 
                        src="./images/WSLPersonalLogo-LIGHT-bgremoved.png" 
                        alt="WSL Logo" 
                        className="h-12 transition-all duration-500 hover:scale-110 hover:rotate-3" 
                      />
                    )}
                  </div>
                  
                  <div className="hidden md:flex gap-8 items-center">
                    {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => {
                      const section = item.toLowerCase();
                      return (
                        <a 
                          key={item}
                          href={`#${section}`} 
                          className={`${textSecondary} transition-all duration-500 relative group font-medium`}
                          style={{
                            color: activeSection === section ? accentSecondary : '',
                            transform: activeSection === section ? 'translateY(-2px)' : '',
                            animationDelay: `${index * 0.1}s`
                          }}
                        >
                          <span className="relative z-10">{item}</span>
                          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#A34A28] to-[#F58B54] group-hover:w-full transition-all duration-500 group-hover:delay-0"></span>
                          <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#A34A28] to-[#F58B54] opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"></span>
                        </a>
                      );
                    })}
                    
                    <button
                      onClick={toggleTheme}
                      className={`p-3 rounded-xl ${cardBg} border ${cardBorder} hover:border-[#F58B54] transition-all duration-500 hover:scale-110 hover:rotate-12`}
                      aria-label="Toggle theme"
                    >
                      {isDarkMode ? (
                        <ContactIcon type="sun" size={22} color={accentSecondary} />
                      ) : (
                        <ContactIcon type="moon" size={22} color={accentPrimary} />
                      )}
                    </button>
                  </div>

                  <div className="md:hidden flex items-center gap-4">
                    <button
                      onClick={toggleTheme}
                      className={`p-2 rounded-lg ${cardBg} border ${cardBorder} transition-all duration-300 hover:scale-110`}
                      aria-label="Toggle theme"
                    >
                      {isDarkMode ? (
                        <ContactIcon type="sun" size={20} color={accentSecondary} />
                      ) : (
                        <ContactIcon type="moon" size={20} color={accentPrimary} />
                      )}
                    </button>
                    
                    <button 
                      style={{color: accentSecondary}}
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      aria-label="Toggle menu"
                      className="transition-all duration-500 hover:scale-110 hover:rotate-90"
                    >
                      {isMenuOpen ? <ContactIcon type="x" size={26} color={accentSecondary} /> : <ContactIcon type="menu" size={26} color={accentSecondary} />}
                    </button>
                  </div>
                </div>

                {isMenuOpen && (
                  <div className="md:hidden mt-4 pb-4">
                    {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                      <a 
                        key={item}
                        href={`#${item.toLowerCase()}`} 
                        className={`block ${textSecondary} hover:text-[#F58B54] transition-all duration-300 py-3 px-2 rounded-lg hover:bg-gradient-to-r hover:from-[#211717] hover:to-[#2a1f1f]`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-1 h-1 rounded-full bg-[#F58B54] opacity-0 group-hover:opacity-100"></div>
                          {item}
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Hero Section */}
            <section 
              id="home" 
              ref={el => sectionRefs.current.home = el}
              className="min-h-screen flex items-center px-6 pt-20 relative overflow-hidden section-entrance"
            >
              <div className="absolute inset-0 bg-pattern opacity-30"></div>
              <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                    <p 
                      className="text-sm uppercase tracking-widest mb-4 text-reveal font-semibold"
                      style={{animationDelay: '0.1s', color: accentSecondary}}
                    >
                      HELLO!
                    </p>
                    <h2 
                      className="text-6xl md:text-7xl font-bold mb-6 text-reveal leading-tight"
                      style={{animationDelay: '0.2s'}}
                    >
                      I'm <span className="gradient-text">Wissal</span>
                    </h2>
                    <p 
                      className={`text-3xl font-light mb-8 text-reveal`}
                      style={{animationDelay: '0.3s', color: accentSecondary}}
                    >
                      Mobile Developer
                    </p>
                    <p 
                      className={`${textSecondary} leading-relaxed mb-10 max-w-lg text-lg text-reveal`}
                      style={{animationDelay: '0.4s'}}
                    >
                      Passionate about creating beautiful and functional mobile applications. 
                      Specialized in Kotlin Native and Flutter development with a focus on 
                      user experience and clean code.
                    </p>
                    <div className="flex gap-5 text-reveal" style={{animationDelay: '0.5s'}}>
                      <button 
                        className="px-10 py-4 font-medium rounded-xl transition-all duration-500 hover:scale-105 pulse-animation"
                        style={{
                          background: `linear-gradient(135deg, ${accentPrimary}, ${accentSecondary})`,
                          color: '#DFDDC7',
                          boxShadow: '0 10px 30px rgba(163, 74, 40, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'scale(1.05) translateY(-2px)';
                          e.target.style.boxShadow = '0 15px 40px rgba(163, 74, 40, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'scale(1) translateY(0)';
                          e.target.style.boxShadow = '0 10px 30px rgba(163, 74, 40, 0.3)';
                        }}
                      >
                        <a href="WISSAL_HAMMAD_CV.pdf" download>HIRE ME</a>
                      </button>
                      
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full blur-xl opacity-30 animate-pulse" style={{backgroundColor: accentSecondary}}></div>
                      <div className="w-96 h-96 rounded-full border-4 overflow-hidden float-animation relative z-10"
                           style={{
                             borderColor: accentSecondary,
                             borderStyle: 'double',
                             borderWidth: '8px'
                           }}>
                        <img 
                          src="./images/personalPicture-noBg.png" 
                          alt="Hammad Wissal" 
                          className="w-full h-full object-cover transition-all duration-700 hover:scale-110" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section 
              id="about" 
              ref={el => sectionRefs.current.about = el}
              className={`min-h-screen flex items-center px-6 py-24 ${bgSecondary} transition-all duration-700 section-entrance relative overflow-hidden`}
            >
              <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div className="flex justify-center order-2 md:order-1">
                    <div className="relative group">
                      <div className="absolute -inset-4 rounded-2xl blur-xl transition-all duration-700 group-hover:blur-2xl group-hover:-inset-6" style={{backgroundColor: accentSecondary, opacity: 0.3}}></div>
                      <div className="w-96 h-96 rounded-xl border-4 overflow-hidden transition-all duration-700 group-hover:scale-105 group-hover:rotate-2 relative z-10"
                           style={{
                             borderColor: accentPrimary,
                             boxShadow: '0 20px 60px rgba(163, 74, 40, 0.2)'
                           }}>
                        <img 
                          src="./images/personalPicture-noBg.png" 
                          alt="Hammad Wissal" 
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                        />
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-5xl font-bold mb-10 gradient-text">About Me</h3>
                    <p className={`${textSecondary} leading-relaxed mb-8 text-lg`}>
                      I'm a mobile developer with a passion for creating elegant solutions 
                      to complex problems. My work combines technical expertise with a keen 
                      eye for design and user experience.
                    </p>
                    <div className="space-y-6 mb-10">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="transition-all duration-500 hover:scale-105 hover:-translate-y-1 p-4 rounded-xl" style={{backgroundColor: isDarkMode ? '#2a1f1f' : '#f5f4e9'}}>
                          <p className="text-sm mb-2" style={{color: accentSecondary}}>Name:</p>
                          <p className={`${textPrimary} font-medium`}>Hammad Wissal</p>
                        </div>
                        <div className="transition-all duration-500 hover:scale-105 hover:-translate-y-1 p-4 rounded-xl" style={{backgroundColor: isDarkMode ? '#2a1f1f' : '#f5f4e9'}}>
                          <p className="text-sm mb-2" style={{color: accentSecondary}}>Date of birth:</p>
                          <p className={`${textPrimary} font-medium`}>January 13, 2005</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="transition-all duration-500 hover:scale-105 hover:-translate-y-1 p-4 rounded-xl" style={{backgroundColor: isDarkMode ? '#2a1f1f' : '#f5f4e9'}}>
                          <p className="text-sm mb-2" style={{color: accentSecondary}}>Email:</p>
                          <p className={`${textPrimary} font-medium`}>wissalhammad@gmail.com</p>
                        </div>
                        <div className="transition-all duration-500 hover:scale-105 hover:-translate-y-1 p-4 rounded-xl" style={{backgroundColor: isDarkMode ? '#2a1f1f' : '#f5f4e9'}}>
                          <p className="text-sm mb-2" style={{color: accentSecondary}}>Phone:</p>
                          <p className={`${textPrimary} font-medium`}>+212-644-706-790</p>
                        </div>
                      </div>
                    </div>
                    <button 
                      className="px-10 py-4 font-medium rounded-xl transition-all duration-500 hover:scale-105 pulse-animation"
                      style={{
                        background: `linear-gradient(135deg, ${accentPrimary}, ${accentSecondary})`,
                        color: '#DFDDC7',
                        boxShadow: '0 10px 30px rgba(163, 74, 40, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.05) translateY(-2px)';
                        e.target.style.boxShadow = '0 15px 40px rgba(163, 74, 40, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1) translateY(0)';
                        e.target.style.boxShadow = '0 10px 30px rgba(163, 74, 40, 0.3)';
                      }}
                    >
                      <a href="WISSAL_HAMMAD_CV.pdf" download> DOWNLOAD CV</a>
                    </button > 
                  </div>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section 
              id="skills" 
              ref={el => sectionRefs.current.skills = el}
              className="py-24 px-6 section-entrance relative overflow-hidden"
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
                <div className="absolute top-0 left-0 w-32 h-32 rounded-full blur-3xl opacity-10" style={{backgroundColor: accentSecondary}}></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-10" style={{backgroundColor: accentPrimary}}></div>
              </div>
              
              <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                  <h3 className="text-5xl font-bold mb-6 gradient-text">My Skills</h3>
                  <p className={`${textSecondary} max-w-2xl mx-auto text-lg`}>
                    Specialized in mobile development with expertise in cross-platform frameworks 
                    and modern development practices.
                  </p>
                </div>
                
                {/* Skill Categories */}
                        
                        
                        {/* Enhanced Skill Bars */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                          {skills.map((skill, index) => (
                          <SkillBar 
                            key={index}
                            skill={skill.name}
                            level={skill.level}
                            index={index}
                            isDarkMode={isDarkMode}
                          />
                          ))}
                        </div>
                      
                        </div>
                      </section>

                      {/* Projects Section */}
                      <section 
                        id="projects" 
                        ref={el => sectionRefs.current.projects = el}
                        className={`py-24 px-6 ${bgSecondary} transition-all duration-700 section-entrance relative overflow-hidden`}
                      >
                        <div className="max-w-7xl mx-auto relative z-10">
                        <div className="text-center mb-20">
                          <h3 className="text-5xl font-bold mb-6 gradient-text">My Projects</h3>
                          <p className={textSecondary + ' text-lg'}>
                          Recent work showcasing mobile and web development projects
                          </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {projects.map((project, index) => {        const isImg = /\.(png|jpe?g|gif|svg)$/i.test(project.image);
                    const bgClass = isImg ? 'bg-cover bg-center' : `bg-gradient-to-br ${project.image}`;

                    return (
                      <div 
                        key={index}
                        className={`rounded-2xl overflow-hidden border transition-all duration-500 card-hover group relative`}
                        style={{
                          backgroundColor: isDarkMode ? '#2a1f1f' : '#ffffff',
                          borderColor: isDarkMode ? '#3a2a2a' : '#e1dfcc',
                          animationDelay: `${index * 0.1}s`
                        }}
                      >
                        <div 
                          className="absolute inset-0 rounded-2xl"
                          style={{
                            background: `linear-gradient(45deg, transparent, ${accentSecondary}20, transparent)`,
                            opacity: 0,
                            transition: 'opacity 0.5s ease'
                          }}
                        ></div>
                        
                        <div 
                          className={`h-56 relative overflow-hidden ${bgClass} group-hover:scale-110 transition-all duration-700`}
                          style={isImg ? { backgroundImage: `url(${project.image})` } : undefined}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-[#211717]/80 via-[#211717]/40 to-transparent transition-all duration-500 group-hover:opacity-90"></div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                            <a 
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-5 rounded-full transition-all duration-500 hover:scale-110 hover:rotate-12"
                              style={{backgroundColor: accentSecondary}}
                            >
                              {project.type === 'github' ? (
                                <ContactIcon type="github2" size={26} color="#211717" />
                              ) : (
                                <ContactIcon type="external-link" size={26} color="#211717" />
                              )}
                            </a>
                          </div>
                        </div>
                        
                        <div className="p-7 relative z-10">
                          <h4 className={`text-2xl font-bold mb-4 ${textPrimary} group-hover:text-[${accentSecondary}] transition-all duration-300`}
                              style={{color: 'inherit'}}
                              onMouseEnter={(e) => e.target.style.color = accentSecondary}
                              onMouseLeave={(e) => e.target.style.color = isDarkMode ? '#DFDDC7' : '#211717'}>
                            {project.title}
                          </h4>
                          <p className={`${textSecondary} leading-relaxed mb-6`}>
                            {project.description}
                          </p>
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 font-semibold transition-all duration-300 text-sm hover:gap-4 group/link"
                            style={{color: accentSecondary}}
                            onMouseEnter={(e) => {
                              e.target.style.color = accentPrimary;
                              e.target.style.gap = '16px';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.color = accentSecondary;
                              e.target.style.gap = '12px';
                            }}
                          >
                            {project.type === 'github' ? 'View on GitHub' : 'Visit Website'}
                            <ContactIcon type="arrow-up-right" size={18} color="currentColor" />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Contact Section - FIXED ICONS */}
            <section 
              id="contact" 
              ref={el => sectionRefs.current.contact = el}
              className="py-24 px-6 section-entrance relative overflow-hidden"
            >
              <div className="max-w-5xl mx-auto text-center relative z-10">
                <h3 className="text-5xl font-bold mb-8 gradient-text">Get In Touch</h3>
                <p className={`${textSecondary} mb-16 text-xl max-w-3xl mx-auto`}>
                  I'm always interested in hearing about new projects and opportunities.
                </p>
                
                <div className="flex justify-center gap-8 mb-16">
                  {[
                    { href: 'mailto:wissalhammad@gmail.com', icon: 'mail', label: 'Email' },
                    { href: 'https://www.linkedin.com/posts/wissal-hammad-98b72132a_android-kotlin-googlemaps-activity-7401550700029362176-a9lU?utm_source=share&utm_medium=member_android&rcm=ACoAAFMLYjsB33yycgTVV3h1hSq_oQxNfkKQ9b8', icon: 'linkedin', label: 'LinkedIn' },
                    { href: 'https://github.com/HAMMADWISSAL', icon: 'github', label: 'GitHub' }
                  ].map((item, index) => (
                    <a 
                      key={index}
                      href={item.href}
                      target={item.icon !== 'mail' ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className={`p-6 rounded-2xl transition-all duration-500 hover:scale-110 group flex flex-col items-center justify-center`}
                      style={{
                        backgroundColor: isDarkMode ? '#2a1f1f' : '#ffffff',
                        border: `2px solid ${isDarkMode ? '#3a2a2a' : '#e1dfcc'}`,
                        width: '100px',
                        height: '100px',
                        animationDelay: `${index * 0.2}s`
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = accentSecondary;
                        e.target.style.borderColor = accentSecondary;
                        e.target.style.transform = 'scale(1.1) rotate(5deg)';
                        e.target.style.boxShadow = `0 20px 40px ${accentSecondary}40`;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = isDarkMode ? '#2a1f1f' : '#ffffff';
                        e.target.style.borderColor = isDarkMode ? '#3a2a2a' : '#e1dfcc';
                        e.target.style.transform = 'scale(1) rotate(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      <ContactIcon 
                        type={item.icon} 
                        size={32} 
                        color={accentSecondary}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className={`py-10 px-6 border-t ${borderColor} ${footerBg} transition-all duration-700`}>
              <div className={`max-w-7xl mx-auto text-center ${isDarkMode ? 'text-[#c5c3b0]' : 'text-[#5a4a4a]'}`}>
                <p className="transition-all duration-500 hover:text-[#F58B54] text-lg">
                  © 2026 All rights reserved. Made by Wissal
                </p>
              </div>
            </footer>
          </div>
        );
      }

      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<Portfolio />);
