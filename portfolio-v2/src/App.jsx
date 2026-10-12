import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Copy, Check,
  Terminal, Database, Cloud, Workflow, BrainCircuit, Layers3, Menu, X,
  ExternalLink, Code2, Cpu, Server, GraduationCap, MapPin, Sparkles
} from 'lucide-react';

const profile = {
  name: 'Pavan Subhash Parupudi',
  email: 'pavansubhashparupudi@gmail.com',
  github: 'https://github.com/Pavansubhash',
  linkedin: 'https://www.linkedin.com/',
  role: 'Backend Software Engineer',
};

const skills = [
  { title: 'Backend engineering', icon: Code2, items: ['Java', 'Spring Boot', 'Hibernate', 'REST APIs', 'Microservices', 'OOP', 'DSA'] },
  { title: 'Streaming & big data', icon: Database, items: ['Apache Kafka', 'Apache Spark', 'PySpark', 'Hive', 'HDFS', 'Amazon S3'] },
  { title: 'Cloud & distributed systems', icon: Cloud, items: ['AWS', 'GCP', 'Pub/Sub', 'Cloud Tasks', 'Cloud Scheduler', 'CI/CD'] },
  { title: 'Data stores', icon: Layers3, items: ['MySQL', 'SQL', 'MongoDB', 'BigQuery'] },
  { title: 'Tools & observability', icon: Terminal, items: ['Git', 'GitLab', 'Grafana', 'IntelliJ IDEA', 'Eclipse'] },
  { title: 'Agentic AI', icon: BrainCircuit, items: ['LLM orchestration', 'ReAct prompting', 'Chain-of-thought prompting', 'Multi-agent systems', 'Prompt engineering'] },
];

const experience = [
  {
    company: 'Uptycs India Pvt Ltd', role: 'Software Engineer · SE 1', location: 'Hyderabad, India', date: 'Sep 2026 — Present', current: true,
    summary: 'Building dependable, high-throughput data systems for security telemetry.',
    points: [
      'Work on real-time data processing using Java, Kafka, Spark, Hive, HDFS, Amazon S3 and AWS to ingest, process and store high-volume security events.',
      'Develop and maintain Amazon S3 ingestion workflows, strengthening pipeline reliability through failure handling and resilient processing.',
      'Migrated compaction and archival workflows from Apache Akka to Apache Pekko while maintaining compatibility across high-volume data pipelines.',
    ],
    stack: ['Java', 'Kafka', 'Spark', 'Hive', 'HDFS', 'S3', 'AWS', 'Apache Pekko'],
  },
  {
    company: 'Eshopbox Ecommerce Pvt Ltd', role: 'Software Development Engineer', location: 'Pune, India', date: 'May 2024 — Sep 2026',
    summary: 'Owned backend services across payments, payouts, merchant integrations and financial data pipelines.',
    points: [
      'Built scalable backend systems for financial workflows, supporting high-traffic client transactions with a focus on reliability and zero-downtime operations.',
      'Automated weekly, fortnightly and monthly payout lifecycles for ₹100+ crore in annual settlements; achieved 100% on-time settlements, reduced manual effort by 89% and cut reconciliation errors by 90%.',
      'Built order-level financial summary APIs for transparent fees, deductions and receivables, powering customer dashboards and historical transaction visibility.',
      'Engineered Amazon Seller Central OAuth integration with resilient token management and scheduled refresh jobs, achieving 99.9% uptime.',
      'Automated Myntra payout workflows with API integrations, retries and scheduled batch jobs for large-scale reconciliation.',
      'Built GST/PAN-based merchant KYC validation with Singy APIs and automated multi-brand invoicing through Zoho integrations.',
      'Implemented postpaid invoice collection through Razorpay, supporting UPI, cards and net banking.',
      'Optimized SQL/BigQuery ETL and bulk pipelines for 5M+ daily records and 100K+ transactions per batch, improving performance by 40%.',
      'Implemented event-driven payout processing with Google Cloud Pub/Sub and scheduled jobs for timely alerts, monitoring and fault tolerance.',
    ],
    stack: ['Java', 'Spring Boot', 'MySQL', 'BigQuery', 'GCP', 'Pub/Sub', 'Razorpay', 'Zoho'],
  },
  {
    company: 'Xalta Technologies', role: 'Associate Software Engineer', location: 'Pune, India', date: 'Jul 2023 — Oct 2023',
    summary: 'Automated workflows and connected business systems through APIs and document intelligence.',
    points: [
      'Built Salesforce–Jira integration pipelines using Automation Anywhere 360, Python and REST APIs, reducing manual intervention by 70%.',
      'Streamlined CRM and project-tracking data synchronization, reducing duplicate updates and data errors.',
      'Designed OCR-based extraction workflows for images and documents, with validation and error handling to improve accuracy and turnaround time.',
    ],
    stack: ['Python', 'REST APIs', 'Automation Anywhere', 'OCR', 'Salesforce', 'Jira'],
  },
];

const projects = [
  { number: '01', name: 'Payout orchestration', type: 'Payments · Distributed workflows', description: 'Automated payout lifecycles, reconciliations and settlement visibility across high-volume financial operations.', tags: ['Spring Boot', 'Pub/Sub', 'BigQuery'], metric: '₹100Cr+', metricLabel: 'annual settlements' },
  { number: '02', name: 'Real-time data pipelines', type: 'Streaming · Big data', description: 'Reliable ingestion and processing workflows for large-scale event data, with resilient failure handling and storage.', tags: ['Kafka', 'Spark', 'Amazon S3'], metric: '5M+', metricLabel: 'records / day' },
  { number: '03', name: 'Merchant integrations', type: 'APIs · Automation', description: 'Secure platform integrations for seller authentication, KYC verification, invoicing and payment collection.', tags: ['OAuth', 'REST APIs', 'Razorpay'], metric: '99.9%', metricLabel: 'integration uptime' },
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function SectionHeading({ eyebrow, title, index }) {
  return <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="section-heading">
    <div className="eyebrow"><span>{index}</span><span className="eyebrow-line" />{eyebrow}</div>
    <h2>{title}</h2>
  </motion.div>;
}

function App() {
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [expandedExperience, setExpandedExperience] = useState(1);
  const reduceMotion = useReducedMotion();
  const navItems = ['Home', 'About', 'Experience', 'Work', 'Skills', 'Contact'];

  const goTo = (item) => {
    setActive(item);
    setMenuOpen(false);
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return <div className="site-shell">
    <div className="grain" aria-hidden="true" />
    <header className="topbar">
      <a href="#home" className="brand" aria-label="Pavan home" onClick={() => setActive('Home')}><span className="brand-mark">P<span>.</span></span><span className="brand-name">PAVAN SUBHASH</span></a>
      <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
        {navItems.map((item, i) => <button key={item} className={active === item ? 'nav-item active' : 'nav-item'} onClick={() => goTo(item)}><span className="nav-num">0{i + 1}</span>{item}</button>)}
        <a className="resume-link" href={`mailto:${profile.email}?subject=Resume%20request`}>Let’s talk <ArrowUpRight size={15} /></a>
      </nav>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-grid">
          <div className="hero-copy">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="availability"><span className="status-dot" /> OPEN TO BUILDING WHAT'S NEXT <span className="availability-star">✳</span></motion.div>
            <motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }}>HELLO, I'M PAVAN —</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>I build systems<br />that <span className="serif-accent">scale</span> with<br /><span className="outline-word">purpose.</span></motion.h1>
            <motion.p className="hero-description" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}>Backend engineer focused on distributed systems, payment platforms and real-time data pipelines. I turn complex problems into dependable software.</motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
              <button className="button button-primary" onClick={() => goTo('Work')}>Explore my work <ArrowDownRight size={17} /></button>
              <button className="button button-quiet" onClick={() => goTo('Contact')}>Get in touch <ArrowUpRight size={16} /></button>
            </motion.div>
            <motion.div className="hero-socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={12} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={12} /></a>
              <button onClick={copyEmail}><Mail size={16} /> {copied ? 'Email copied' : 'Email'} {copied ? <Check size={12} /> : <Copy size={12} />}</button>
            </motion.div>
          </div>
          <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.94, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
            <div className="art-topline"><span>FIG. 001 / SYSTEMS THINKING</span><span>17° 23' N</span></div>
            <div className="orbital orbital-one" /><div className="orbital orbital-two" /><div className="orbital orbital-three" />
            <motion.div className="core-orb" animate={reduceMotion ? {} : { y: [0, -10, 0], rotate: [0, 4, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}><div className="core-inner"><Cpu size={42} strokeWidth={1.1} /><span>BUILD / ITERATE</span></div></motion.div>
            <span className="orbit-label label-a"><span className="orbit-label-icon"><Server size={15} /></span> DISTRIBUTED SYSTEMS</span>
            <span className="orbit-label label-b"><span className="orbit-label-icon"><Workflow size={15} /></span> EVENT STREAMS</span>
            <span className="orbit-label label-c"><span className="orbit-label-icon"><Database size={15} /></span> DATA AT SCALE</span>
            <div className="art-footer"><span>JAVA · CLOUD · DATA</span><span className="art-cross">＋</span><span>BUILT TO BE RELIABLE</span></div>
            <span className="art-index">PSP—2026</span>
          </motion.div>
        </div>
        <div className="hero-bottom"><span><span className="scroll-line" /> SCROLL TO EXPLORE</span><span>BASED IN HYDERABAD, INDIA <MapPin size={13} /></span></div>
      </section>

      <section className="marquee" aria-label="Areas of focus"><div className="marquee-track">{Array.from({ length: 2 }).map((_, i) => <div className="marquee-group" key={i}><span>BACKEND ENGINEERING</span><Sparkles size={16} /><span>DISTRIBUTED SYSTEMS</span><Sparkles size={16} /><span>DATA PIPELINES</span><Sparkles size={16} /><span>PAYMENT INFRASTRUCTURE</span><Sparkles size={16} /><span>CLOUD ARCHITECTURE</span><Sparkles size={16} /></div>)}</div></section>

      <section className="section-wrap about-section" id="about">
        <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Engineering the invisible<br /><span className="muted-title">things people rely on.</span></>} index="01" />
        <div className="about-grid">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="about-note"><span className="quote-mark">“</span><p>I enjoy solving the hard problems behind simple experiences — the systems that keep data moving, payments accurate and products dependable.</p><span className="note-signature">— Pavan</span></motion.div>
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="about-content"><p className="body-large">I'm a backend software engineer with <strong>2.11 years of experience</strong> building scalable services and data-intensive applications.</p><p>My work spans Java and Spring Boot services, event-driven architectures, payment and payout workflows, and real-time big-data processing. I care about thoughtful system design, observability, and software that stays maintainable as it grows.</p><div className="stat-grid"><div><strong>89<span>%</span></strong><small>LESS MANUAL PAYOUT WORK</small></div><div><strong>40<span>%</span></strong><small>FASTER DATA PIPELINES</small></div><div><strong>99.9<span>%</span></strong><small>INTEGRATION UPTIME</small></div></div></motion.div>
        </div>
      </section>

      <section className="section-wrap experience-section" id="experience">
        <SectionHeading eyebrow="THE JOURNEY SO FAR" title={<>Good work compounds.<br /><span className="muted-title">So does experience.</span></>} index="02" />
        <div className="experience-list">{experience.map((job, index) => <motion.article key={job.company} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }} className={expandedExperience === index ? 'experience-card expanded' : 'experience-card'}>
          <button className="experience-trigger" onClick={() => setExpandedExperience(expandedExperience === index ? -1 : index)} aria-expanded={expandedExperience === index}>
            <span className="experience-index">0{index + 1}</span><span className="experience-main"><span className="company-line">{job.company}{job.current && <span className="current-tag"><span className="status-dot" /> CURRENT</span>}</span><span className="role-line">{job.role} <span>·</span> {job.location}</span></span><span className="experience-date">{job.date}</span><span className="expand-symbol">{expandedExperience === index ? '−' : '+'}</span>
          </button>
          <AnimatePresence initial={false}>{expandedExperience === index && <motion.div className="experience-details" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}><div className="experience-detail-inner"><p className="job-summary">{job.summary}</p><ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul><div className="tag-row">{job.stack.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div></motion.div>}</AnimatePresence>
        </motion.article>)}</div>
      </section>

      <section className="section-wrap work-section" id="work">
        <SectionHeading eyebrow="SELECTED IMPACT" title={<>Systems built for<br /><span className="muted-title">real-world scale.</span></>} index="03" />
        <p className="section-intro">A few themes from the problems I've worked on — from moving money accurately to moving data reliably.</p>
        <div className="project-grid">{projects.map((project, index) => <motion.article key={project.number} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} whileHover={reduceMotion ? {} : { y: -7 }} className="project-card">
          <div className="project-top"><span>{project.number} / CASE STUDY</span><ArrowUpRight size={18} /></div>
          <div className={`project-visual visual-${index + 1}`}><div className="visual-grid" /><div className="visual-symbol">{index === 0 ? <Workflow size={48} strokeWidth={1} /> : index === 1 ? <Database size={48} strokeWidth={1} /> : <Layers3 size={48} strokeWidth={1} />}</div><span className="visual-caption">{index === 0 ? 'FLOW / 01' : index === 1 ? 'STREAM / 02' : 'CONNECT / 03'}</span></div>
          <p className="project-type">{project.type}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><div className="project-metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div><div className="tag-row">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
        </motion.article>)}</div>
        <p className="project-disclaimer">Selected work themes from professional experience. Proprietary implementation details are intentionally omitted.</p>
      </section>

      <section className="section-wrap skills-section" id="skills">
        <SectionHeading eyebrow="MY TOOLKIT" title={<>The right tool.<br /><span className="muted-title">The right reason.</span></>} index="04" />
        <p className="section-intro">A practical toolkit for designing, building and operating backend systems.</p>
        <div className="skills-grid">{skills.map((group, index) => { const Icon = group.icon; return <motion.div key={group.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} whileHover={reduceMotion ? {} : { y: -4 }} className="skill-card"><div className="skill-card-top"><span className="skill-icon"><Icon size={19} /></span><span className="skill-number">0{index + 1}</span></div><h3>{group.title}</h3><div className="tag-row">{group.items.map(item => <span className="tag" key={item}>{item}</span>)}</div></motion.div> })}</div>
      </section>

      <section className="section-wrap education-section">
        <SectionHeading eyebrow="THE FOUNDATIONS" title={<>Curiosity, backed<br /><span className="muted-title">by fundamentals.</span></>} index="05" />
        <div className="education-layout"><div className="education-list">
          <div className="education-item"><div className="education-icon"><GraduationCap size={20} /></div><div><h3>National Institute of Technology, Andhra Pradesh</h3><p>B.Tech · 2019 — 2023</p></div><strong>7.32/10</strong></div>
          <div className="education-item"><div className="education-icon"><GraduationCap size={20} /></div><div><h3>Bhashyam Junior College, Guntur</h3><p>Intermediate (12th) · 2017 — 2019</p></div><strong>9.46/10</strong></div>
          <div className="education-item"><div className="education-icon"><GraduationCap size={20} /></div><div><h3>Narayana Techno School, Kakinada</h3><p>Secondary School (10th) · 2016 — 2017</p></div><strong>9.20/10</strong></div>
        </div><div className="certification-box"><span className="eyebrow">CERTIFICATIONS</span><div className="cert-item"><span className="cert-dot" /><div><strong>The Joy of Computing using Python</strong><small>NPTEL</small></div></div><div className="cert-item"><span className="cert-dot" /><div><strong>Python for Everybody</strong><small>Coursera</small></div></div></div></div>
      </section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-inner">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="contact-copy"><div className="eyebrow"><span>06</span><span className="eyebrow-line" /> YOUR MOVE</div><h2>Have a good<br />problem? <span className="serif-accent">Let's talk.</span></h2><p>I'm always interested in thoughtful engineering, challenging backend problems and people who care about building things well.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={18} /></a><div className="contact-actions"><button className="button button-primary" onClick={copyEmail}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? 'Copied to clipboard' : 'Copy email address'}</button><a className="button button-quiet" href={profile.github} target="_blank" rel="noreferrer">Visit GitHub <ArrowUpRight size={16} /></a></div></motion.div>
        <motion.div className="contact-stamp" initial={{ opacity: 0, rotate: -18, scale: 0.8 }} whileInView={{ opacity: 1, rotate: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}><div className="stamp-ring"><span>LET'S BUILD SOMETHING MEANINGFUL · LET'S BUILD SOMETHING MEANINGFUL · </span></div><div className="stamp-center">P<span>.</span></div></motion.div>
      </div></section>
    </main>
    <footer className="footer"><a href="#home" className="brand"><span className="brand-mark">P<span>.</span></span><span className="brand-name">PAVAN SUBHASH</span></a><span className="footer-note">DESIGNED WITH INTENTION. BUILT TO LAST.</span><div className="footer-links"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17} /></a></div><span className="copyright">© {new Date().getFullYear()} PSP</span></footer>
  </div>;
}

export default App;