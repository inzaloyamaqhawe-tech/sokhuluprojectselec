const { useEffect, useState } = React;

const PAGES = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const SERVICES = [
  'Residential electrical installations',
  'Commercial electrical installations',
  'Electrical maintenance and repairs',
  'Lighting installation and upgrades',
  'Fault finding and system diagnostics',
  'Electrical infrastructure support',
];

const TARGET_MARKET = [
  'Homeowners',
  'Construction companies',
  'Small businesses',
  'Property developers',
  'Community infrastructure projects',
];

const EQUIPMENT = [
  'Electrical testing tools',
  'Power drills and tool kits',
  'Ladders and safety equipment',
];

const PROJECTS = [
  {
    title: 'Industrial Distribution Upgrade',
    copy: 'Panel optimization, protected circuits, and load balancing for factory environments.',
    img: 'https://source.unsplash.com/1600x1000/?electrical,transformer,substation',
  },
  {
    title: 'Commercial Lighting Retrofit',
    copy: 'Energy-efficient lighting installation for office and retail properties.',
    img: 'https://source.unsplash.com/1600x1000/?traffic-light,street-light,city-night',
  },
  {
    title: 'Residential Smart Power Setup',
    copy: 'Modern home rewiring, safety upgrades, and backup power routing.',
    img: 'https://source.unsplash.com/1600x1000/?smart-home,phone,light-switch',
  },
  {
    title: 'Community Infrastructure Support',
    copy: 'Street and facility power support for local development initiatives.',
    img: 'https://source.unsplash.com/1600x1000/?electricity,meter,installation',
  },
  {
    title: 'Fault Diagnostics Program',
    copy: 'Rapid fault finding and corrective planning for recurring downtime.',
    img: 'https://source.unsplash.com/1600x1000/?electrical,panel,maintenance,toolbox',
  },
  {
    title: 'Multi-Site Maintenance Contract',
    copy: 'Scheduled preventive maintenance for businesses operating across locations.',
    img: 'https://source.unsplash.com/1600x1000/?network,operations,map,monitoring',
  },
];

function onLogoError(event) {
  const img = event.currentTarget;
  if (img.dataset.fallbackApplied === '1') {
    return;
  }
  img.dataset.fallbackApplied = '1';
  img.src = './brand-mark.svg';
}

function onProjectImageError(event) {
  const img = event.currentTarget;
  if (img.dataset.fallbackApplied === '1') {
    return;
  }
  img.dataset.fallbackApplied = '1';
  img.src = './project-fallback.svg';
}

function SectionHome() {
  return (
    <section id="home" className="section-anchor">
      <section className="hero">
        <article className="hero-copy panel">
          <p className="kicker">Electrical Project Specialists</p>
          <h2>Reliable Electrical Solutions for Homes, Businesses, and Industries</h2>
          <p className="lead">
            Sokhulu & Parters Projects Pty delivers safe, professional, and scalable electrical
            services designed to support growth, uptime, and long-term infrastructure reliability.
          </p>
          <p className="slogan">Powering Communities. Lighting the Future.</p>
          <div className="stats">
            <span className="stat">Residential</span>
            <span className="stat">Commercial</span>
            <span className="stat">Industrial</span>
            <span className="stat">Community Projects</span>
          </div>
        </article>
        <aside className="hero-media panel">
          <img
            src="https://source.unsplash.com/1800x1100/?circuit-breaker,electrical-panel"
            alt="Electrical systems engineering visual"
            loading="eager"
            onError={onProjectImageError}
          />
        </aside>
      </section>

    </section>
  );
}

function SectionAbout() {
  return (
    <section id="about" className="panel card section-anchor">
      <h2 className="page-title">About Us</h2>
      <div className="grid-2">
        <article>
          <h3>Business Overview</h3>
          <p>
            Sokhulu & Parters Projects Pty is focused on electrical installations, maintenance,
            and infrastructure support for residential, commercial, and community projects. The business is
            built to deliver dependable work while contributing to employment and community development.
          </p>
        </article>
        <article>
          <h3>Mission</h3>
          <p>
            We provide high-quality electrical solutions that safely power homes, businesses, and communities
            while maintaining professional standards and customer satisfaction.
          </p>
          <div className="mission-lines">
            <p><strong>Vision:</strong> To be a trusted and recognized electrical projects provider known for innovation, reliability, and technical excellence.</p>
            <p><strong>Conclusion:</strong> Sokhulu & Parters Projects Pty is committed to dependable delivery that supports local development and long-term growth.</p>
          </div>
        </article>
      </div>
    </section>
  );
}

function SectionProjects() {
  return (
    <section id="projects" className="panel card section-anchor">
      <h2 className="page-title">Projects</h2>
      <p style={{ color: 'var(--muted)', marginBottom: 12 }}>
        Project visuals below represent typical electrical project outcomes and environments.
      </p>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <article key={project.title} className="project">
            <img src={project.img} alt={project.title} loading="lazy" onError={onProjectImageError} />
            <div className="project-body">
              <p className="project-title">{project.title}</p>
              <p className="project-copy">{project.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SectionContact() {
  const [name, setName] = useState('');
  const [projectType, setProjectType] = useState('');
  const [details, setDetails] = useState('');

  const buildWhatsAppHref = () => {
    const safeName = name.trim() || 'Client';
    const safeType = projectType.trim() || 'Electrical project';
    const safeDetails = details.trim() || 'Please contact me with available service options.';
    const msg = [
      `Hello Sokhulu & Parters Projects Pty,`,
      `My name is ${safeName}.`,
      `Project type: ${safeType}.`,
      `Details: ${safeDetails}`,
    ].join('\n');
    return `https://wa.me/27637877418?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="contact" className="panel card section-anchor">
      <h2 className="page-title">Contact Us</h2>
      <div className="contact-wrap">
        <article className="contact-lines">
          <div className="contact-line">
            <strong>Phone / WhatsApp</strong>
            <p className="contact-owner">Mthiyane Sandiso Akhona (Owner)</p>
            <p><a href="tel:+27637877418">+27 63 787 7418</a></p>
          </div>
          <div className="contact-line">
            <strong>Email</strong>
            <p><a href="mailto:sokhulupartnerselec@gmail.com">sokhulupartnerselec@gmail.com</a></p>
          </div>
        </article>

        <form className="form" onSubmit={(event) => { event.preventDefault(); window.open(buildWhatsAppHref(), '_blank'); }}>
          <div className="field">
            <label htmlFor="name">Your Name</label>
            <input id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Full name" />
          </div>
          <div className="field">
            <label htmlFor="type">Project Type</label>
            <input id="type" value={projectType} onChange={(event) => setProjectType(event.target.value)} placeholder="Residential / Commercial / Industrial" />
          </div>
          <div className="field">
            <label htmlFor="details">Project Details</label>
            <textarea id="details" value={details} onChange={(event) => setDetails(event.target.value)} placeholder="Tell us what you need" />
          </div>
          <button type="submit" className="btn btn-primary">Send Request on WhatsApp</button>
        </form>
      </div>
    </section>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const ids = PAGES.map((p) => p.id);

    const updateActive = () => {
      const offset = 140;
      let current = 'home';
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) {
          return;
        }
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    return () => window.removeEventListener('scroll', updateActive);
  }, []);

  return (
    <div className="shell">
      <header className="topbar">
        <div className="brand">
          <img className="logo-image" src="./sokhulu&partnerslogo.jpeg" alt="Sokhulu & Parters Projects Pty logo" loading="eager" onError={onLogoError} />
          <div>
            <h1>Sokhulu & Parters Projects Pty</h1>
            <p>Powering Communities. Lighting the Future.</p>
          </div>
        </div>
        <div className="quick-actions">
          <a className="btn btn-ghost" href="mailto:sokhulupartnerselec@gmail.com">Email</a>
          <a className="btn btn-primary" href="https://wa.me/27637877418" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </header>

      <nav className="nav" aria-label="Main navigation">
        {PAGES.map((item) => (
          <a
            key={item.id}
            className={`nav-btn ${activeSection === item.id ? 'active' : ''}`}
            href={`#${item.id}`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <SectionHome />
      <SectionAbout />
      <SectionProjects />
      <SectionContact />

      <footer className="footer">
        <p>Sokhulu & Parters Projects Pty</p>
        <p className="powered">
          Powered By: <a href="https://wa.me/27784106366?text=Hi%20Inzalo%20Yamaqhawe%20Technologies%2C%20I%20need%20your%20digital%20services." target="_blank" rel="noreferrer">Inzalo Yamaqhawe Technologies</a>
        </p>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
