const { useState, useEffect, useRef } = React;

function PhoneStatusBar() {
  return (
    <div className="phone-status-bar">
      <div className="phone-status-left">
        <span className="phone-status-time">9:41</span>
      </div>
      <div className="phone-dynamic-island">
        <span className="phone-dynamic-island-camera" aria-hidden="true" />
      </div>
      <div className="phone-status-right">
        <svg className="phone-status-icon phone-status-signal" viewBox="0 0 16 10" fill="currentColor" aria-hidden="true">
          <rect x="0" y="6.2" width="2.2" height="3.8" rx="0.4" />
          <rect x="4" y="4.4" width="2.2" height="5.6" rx="0.4" />
          <rect x="8" y="2.6" width="2.2" height="7.4" rx="0.4" />
          <rect x="12" y="0.8" width="2.2" height="9.2" rx="0.4" />
        </svg>
        <svg className="phone-status-icon phone-status-wifi" viewBox="0 0 14 9" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" aria-hidden="true">
          <path d="M3 3.2 a 4 4 0 0 1 8 0" />
          <path d="M4.6 4.8 a 2.4 2.4 0 0 1 4.8 0" />
          <path d="M6.2 6.2 a 1 1 0 0 1 1.6 0" />
          <circle cx="7" cy="7.6" r="0.5" fill="currentColor" />
        </svg>
        <svg className="phone-status-icon phone-status-battery" viewBox="0 0 22 10" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
          <rect x="0.5" y="1.2" width="16" height="7.6" rx="1.5" fill="none" />
          <rect x="1.5" y="2.2" width="13" height="5.6" rx="0.8" fill="currentColor" />
          <rect x="16.5" y="2.8" width="1.2" height="4.4" rx="0.3" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

function HeaderLogo() {
  return (
    <div className="header-logo-wrap">
      <img src="/logo.png" alt="Speakease" className="header-logo-img" />
    </div>
  );
}

function App() {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [activeScreen, setActiveScreen] = useState(0);
  const sectionRefs = useRef([]);
  const featuresRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setHeaderScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveScreen((s) => (s + 1) % 5), 3200);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    if (featuresRef.current) observer.observe(featuresRef.current);
    return () => observer.disconnect();
  }, []);

  const screenSections = [
    {
      id: 'home',
      title: "Today's plan",
      copy: "Get a personalized daily plan: warm-up phrases, lessons with audio, conversation role-plays, and quick quizzes. Track your progress with streaks and see your plan complete in real time.",
      screenshot: '/assets/screens/home.png',
      mockup: (
        <div className="mockup-home app-content">
          <div className="hero-logo-wrap" style={{ marginBottom: 10 }}>
            <img src="/logo.png" alt="Speakease" style={{ height: 56, width: 'auto' }} />
          </div>
          <div className="mockup-greeting">Hi Zara, ready to learn?</div>
          <div className="mockup-sub">Your AI tutor prepared a focused plan today.</div>
          <div className="mockup-plan-label">Today's plan · 1/4 complete</div>
          <div className="mockup-plan-item" style={{ background: 'rgba(34,172,172,0.15)' }} />
          <div className="mockup-plan-item active" />
          <div className="mockup-plan-item" />
          <div className="mockup-plan-item" />
          <div className="mockup-stats">
            <div className="mockup-stat" />
            <div className="mockup-stat" />
          </div>
        </div>
      ),
    },
    {
      id: 'learn',
      title: 'Lessons with audio',
      copy: 'Practice real-world phrases with native-style audio. Ordering coffee, airport phrases, greetings, small talk – each lesson includes pronunciation tips, vocabulary, and a prompter that highlights lines as they play.',
      screenshot: '/assets/screens/learn.png',
      mockup: (
        <div className="mockup-learn app-content">
          <div className="mockup-section-label">Suggested lessons</div>
          <div className="mockup-lesson" />
          <div className="mockup-lesson" />
          <div className="mockup-lesson" />
        </div>
      ),
    },
    {
      id: 'practice',
      title: 'AI tutor chat',
      copy: 'Chat with your AI language coach anytime. Role-play scenarios, get feedback on your phrasing, and practice conversation in a low-pressure environment. Quick prompts help you start or deepen the conversation.',
      screenshot: '/assets/screens/practice.png',
      mockup: (
        <div className="mockup-practice app-content">
          <div className="mockup-chat-title">Practice with your AI tutor</div>
          <div className="mockup-bubble ai">Try a role-play or ask for tips!</div>
          <div className="mockup-bubble user">Let's practice ordering at a cafe.</div>
          <div className="mockup-bubble ai">Great! Start with: "I'd like a latte, please."</div>
          <div className="mockup-input" />
        </div>
      ),
    },
    {
      id: 'progress',
      title: 'Track your progress',
      copy: 'See your weekly minutes, streaks, and achievements. Badges reward consistency and milestones. Set daily and weekly goals to stay motivated and build a lasting learning habit.',
      screenshot: '/assets/screens/progress.png',
      mockup: (
        <div className="mockup-progress app-content">
          <div className="mockup-label">This week</div>
          <div className="mockup-bar">
            <div className="mockup-bar-fill" />
          </div>
          <div className="mockup-label">Recent badges</div>
          <div className="mockup-badges">
            <span className="mockup-badge">7-day streak</span>
            <span className="mockup-badge">Pronunciation star</span>
          </div>
        </div>
      ),
    },
    {
      id: 'profile',
      title: 'Profile & settings',
      copy: 'Adjust learning goals, speech feedback, notifications, and privacy. Manage your account and preferences so the app adapts to how you learn best.',
      screenshot: '/assets/screens/profile.png',
      mockup: (
        <div className="mockup-profile app-content">
          <div className="mockup-avatar">Z</div>
          <div className="mockup-name">Zara Ahmed</div>
          <div className="mockup-email">zara@speakease.ai</div>
          <div className="mockup-row" />
          <div className="mockup-row" />
          <div className="mockup-row" />
        </div>
      ),
    },
  ];

  return (
    <>
      <header className={`landing-header ${headerScrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <HeaderLogo />
          <a href="/app.apk" className="cta-header" download="SpeakEase.apk">
            Download App
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-bg-blur hero-bg-blur-1" aria-hidden="true" />
        <div className="hero-bg-blur hero-bg-blur-2" aria-hidden="true" />
        <div className="hero-inner">
          <div>
            <div className="hero-brand">
              <div className="hero-badge">
                <span className="hero-badge-emoji">🎯</span>
                AI-powered learning
              </div>
              <div className="hero-logo-wrap">
                <img src="/logo.png" alt="Speakease" className="hero-logo-img" />
              </div>
            </div>
            <h1 className="hero-title">
              Master a new language with <span className="accent">your AI coach.</span>
            </h1>
            <p className="hero-sub">
              Lessons, role-plays, pronunciation tips, and conversation practice – all in one app.
            </p>
            <div className="hero-stats">
              <span className="hero-stat">
                <span className="hero-stat-icon">🎧</span>
                Audio lessons
              </span>
              <span className="hero-stat">
                <span className="hero-stat-icon">💬</span>
                AI tutor chat
              </span>
              <span className="hero-stat">
                <span className="hero-stat-icon">🔥</span>
                Streaks & progress
              </span>
            </div>
            <div className="hero-buttons">
              <a href="/app.apk" className="btn btn-primary" download="SpeakEase.apk">
                Download APK
              </a>
              <a href="#screens" className="btn btn-secondary">See app screens</a>
            </div>
          </div>
          <div className="phone-wrap">
            <div className="phone-frame iphone-mockup">
              <div className="phone-screen">
                <PhoneStatusBar />
                <div className="phone-hero-body">
                  {screenSections.map((section, i) => (
                    <div key={section.id} className={`screen-slide ${i === activeScreen ? 'active' : i < activeScreen ? 'prev' : ''}`}>
                      <div className="screen-shot-wrap">
                        <img
                          src={section.screenshot}
                          alt={section.title}
                          className="screen-shot-img"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            const fallback = e.target.nextElementSibling;
                            if (fallback) fallback.style.display = 'block';
                          }}
                        />
                        <div className="screen-shot-fallback" style={{ display: 'none' }}>{section.mockup}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="phone-home-indicator" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="banner-strip">
        <div className="banner-strip-inner">
          <span className="banner-item"><span className="banner-item-icon">🎧</span> Audio lessons</span>
          <span className="banner-item"><span className="banner-item-icon">💬</span> AI tutor chat</span>
          <span className="banner-item"><span className="banner-item-icon">🗣️</span> Pronunciation tips</span>
          <span className="banner-item"><span className="banner-item-icon">🏆</span> Streaks & badges</span>
        </div>
      </section>

      <section className="features-section" ref={featuresRef}>
        <div className="features-inner">
          <div className="feature-card">
            <div className="feature-card-icon">📚</div>
            <h4>Daily plans</h4>
            <p>Personalized warm-ups, lessons, role-plays, and quizzes – all in one flow.</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon">🤖</div>
            <h4>AI coach</h4>
            <p>Practice conversations with an AI tutor that adapts to your level and goals.</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon">📈</div>
            <h4>Track growth</h4>
            <p>Streaks, badges, and insights keep you motivated and show your progress.</p>
          </div>
        </div>
      </section>

      <section id="screens" className="screens-intro">
        <h2 className="section-title">App screens</h2>
        <p className="section-sub">See how SpeakEase helps you learn – daily plans, lessons, practice, and progress.</p>
      </section>

      {screenSections.map((section, i) => (
        <div
          key={section.id}
          className="screen-section"
          ref={(el) => (sectionRefs.current[i] = el)}
        >
          <div className="screen-mockup-wrap">
            <div className="phone-frame iphone-mockup">
              <div className="phone-screen">
                <PhoneStatusBar />
                <div className="screen-shot-wrap">
                  <img
                    src={section.screenshot}
                    alt={section.title}
                    className="screen-shot-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = e.target.nextElementSibling;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <div className="screen-shot-fallback" style={{ display: 'none' }}>{section.mockup}</div>
                </div>
                <div className="phone-home-indicator" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="screen-copy">
            <span className="section-num">0{i + 1}</span>
            <h3>{section.title}</h3>
            <p>{section.copy}</p>
          </div>
        </div>
      ))}

      <section className="cta-section">
        <h2 className="section-title">Ready to speak with confidence?</h2>
        <p className="section-sub">
          Download SpeakEase and start your language journey with an AI coach by your side.
        </p>
        <a href="/app.apk" className="btn btn-primary" download="SpeakEase.apk">
          Download APK for Android
        </a>
      </section>

      <footer className="footer">
        <img src="/logo.png" alt="Speakease" className="footer-logo-img" />
        <p>AI-powered language learning</p>
        <div className="footer-links">
          <a href="/app.apk" download="SpeakEase.apk">Download APK</a>
        </div>
      </footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
