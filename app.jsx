const { useEffect, useState } = React;

const PAGES = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
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
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Commercial Lighting Retrofit',
    copy: 'Energy-efficient lighting installation for office and retail properties.',
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Residential Smart Power Setup',
    copy: 'Modern home rewiring, safety upgrades, and backup power routing.',
    img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Community Infrastructure Support',
    copy: 'Street and facility power support for local development initiatives.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Fault Diagnostics Program',
    copy: 'Rapid fault finding and corrective planning for recurring downtime.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Multi-Site Maintenance Contract',
    copy: 'Scheduled preventive maintenance for businesses operating across locations.',
    img: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80',
  },
];

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
          <h2>Reliable Electrical Solutions for Homes, Businesses, and Industry</h2>
          <p className="lead">
            Sokhulu & Partners Electrical Project Pty delivers safe, professional, and scalable electrical
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
            src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Electrical engineer at work"
            loading="eager"
          />
        </aside>
      </section>

      <section className="grid-3" style={{ marginTop: 12 }}>
        <article className="panel card">
          <h3>Owner</h3>
          <p>Mthiyane Sandiso Akhona</p>
        </article>
        <article className="panel card">
          <h3>Company</h3>
          <p>Sokhulu & Partners Electrical Project Pty</p>
        </article>
        <article className="panel card">
          <h3>Contact</h3>
          <p>+27 63 787 7418</p>
        </article>
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
            Sokhulu & Partners Electrical Project Pty is focused on electrical installations, maintenance,
            and infrastructure support for residential, commercial, and community projects. The business is
            built to deliver dependable work while contributing to employment and community development.
          </p>
        </article>
        <article>
          <h3>Mission</h3>
          <p>
            To provide high-quality electrical solutions that safely power homes, businesses, and communities
            while maintaining professional standards and customer satisfaction.
          </p>
        </article>
      </div>
      <div className="grid-2" style={{ marginTop: 12 }}>
        <article>
          <h3>Vision</h3>
          <p>
            To become a trusted and recognized electrical services provider known for innovation, reliability,
            and excellence in powering the future.
          </p>
        </article>
        <article>
          <h3>Conclusion</h3>
          <p>
            Sokhulu & Partners Electrical Project Pty is committed to reliable electrical delivery and meaningful
            contribution to economic growth within communities.
          </p>
        </article>
      </div>
    </section>
  );
}

function SectionServices() {
  return (
    <section id="services" className="panel card section-anchor">
      <h2 className="page-title">Services</h2>
      <div className="service-grid">
        {SERVICES.map((service) => (
          <article key={service} className="service-card">
            <h4>{service}</h4>
            <p>Planned, executed, and quality-checked with safety compliance in mind.</p>
          </article>
        ))}
      </div>

      <div className="grid-2" style={{ marginTop: 14 }}>
        <article className="panel card">
          <h3>Target Market</h3>
          <ul className="list">
            {TARGET_MARKET.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
        <article className="panel card">
          <h3>Electrical Equipment</h3>
          <ul className="list">
            {EQUIPMENT.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <div className="badges">
            <span className="badge ok">Safety Focused</span>
            <span className="badge warn">Quality Assurance</span>
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
      `Hello Sokhulu & Partners,`,
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
            <p><a href="tel:+27637877418">+27 63 787 7418</a></p>
          </div>
          <div className="contact-line">
            <strong>Email</strong>
            <p><a href="mailto:sokhulupartnerselec@gmail.com">sokhulupartnerselec@gmail.com</a></p>
          </div>
          <div className="contact-line">
            <strong>Company</strong>
            <p>Sokhulu & Partners Electrical Project Pty</p>
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
          <img className="logo-image" src="./sokhulu&partnerslogo.jpeg" alt="Sokhulu & Partners logo" loading="eager" />
          <div>
            <h1>Sokhulu & Partners Electrical Project Pty</h1>
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
      <SectionServices />
      <SectionProjects />
      <SectionContact />

      <footer className="footer">
        <p>Sokhulu & Partners Electrical Project Pty</p>
        <p className="powered">
          Powered By: <a href="https://wa.me/27784106366?text=Hi%20Inzalo%20Yamaqhawe%20Technologies%2C%20I%20need%20your%20digital%20services." target="_blank" rel="noreferrer">Inzalo Yamaqhawe Technologies</a>
        </p>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
