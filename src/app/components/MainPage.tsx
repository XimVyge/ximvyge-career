import "./MainPage.css";

const metrics = [
  { value: "50M+", label: "Registered users supported" },
  { value: "1M+", label: "Approx. requests/day" },
  { value: "97%", label: "P95 latency reduction" },
  { value: "3+", label: "Years engineering experience" },
];

const strengths = [
  "Distributed Systems",
  "Event-Driven Architecture",
  "Java 21",
  "Spring Boot 3",
  "AWS SQS/SNS",
  "Docker",
  "PostgreSQL",
  "Performance Engineering",
];

const experience = [
  {
    company: "Maya Philippines Inc.",
    role: "Software Engineer",
    period: "Apr 2025 – Present",
    summary:
      "Backend engineer for a high-scale financial platform serving over 50 million registered users.",
    bullets: [
      "Own multiple production microservices across development, deployment, maintenance, and incident resolution.",
      "Designed REST APIs and asynchronous integrations using Amazon SNS and SQS.",
      "Spearheaded a major backend refactor reducing API P95 latency from ~15s to <500ms.",
      "Support services handling roughly one million requests per day.",
      "Lead sprint planning, review pull requests, and mentor newly hired engineers.",
    ],
    stack: ["Java 21", "Spring Boot 3", "PostgreSQL", "Docker", "AWS", "SQS", "SNS"],
  },
  {
    company: "Monstarlab Philippines",
    role: "Full Stack Developer",
    period: "Aug 2023 – Apr 2025",
    summary:
      "Built enterprise web platforms for international clients across maritime, government-linked, HR, and document workflows.",
    bullets: [
      "Developed backend services and frontend features using Java, Spring Boot, React, and TypeScript.",
      "Collaborated with clients and stakeholders to translate business requirements into maintainable software solutions.",
      "Supported production systems, delivered feature enhancements, and resolved application issues across the SDLC.",
    ],
    stack: ["Java", "Spring Boot", "React", "TypeScript", "REST APIs"],
  },
  {
    company: "Freelance + Early Experience",
    role: "Full Stack Developer / Intern",
    period: "2022 – 2023",
    summary:
      "Delivered custom web applications, gathered requirements, implemented features, and supported deployed systems.",
    bullets: [
      "Built client-facing web applications and participated in troubleshooting, testing, and production fixes.",
    ],
    stack: ["JavaScript", "React", "Node.js", "SQL"],
  },
];

const capabilities = [
  {
    title: "Backend Engineering",
    text: "Java, Spring Boot, REST APIs, microservices, API design, production ownership, and maintainable service boundaries.",
  },
  {
    title: "Distributed Systems",
    text: "Event-driven workflows, asynchronous integrations, service decoupling, and high-throughput production systems.",
  },
  {
    title: "Cloud & DevOps",
    text: "AWS EC2, S3, SNS, SQS, Docker, GitHub Actions, GitLab Pipelines, and operational support practices.",
  },
  {
    title: "Performance Engineering",
    text: "Latency analysis, service refactoring, production issue investigation, and measurable responsiveness improvements.",
  },
];

const caseStudies = [
  {
    title: "Financial Platform Performance Refactor",
    problem: "Production API latency was reaching ~15 seconds at P95.",
    outcome: "Reduced P95 latency to under 500ms through a major backend refactor.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Performance"],
  },
  {
    title: "Event-Driven Microservice Integrations",
    problem: "Services needed more decoupled asynchronous communication patterns.",
    outcome: "Designed and implemented SNS/SQS-based event flows across production services.",
    tags: ["AWS SNS", "AWS SQS", "Microservices", "Architecture"],
  },
  {
    title: "Enterprise Document & HR Platforms",
    problem: "Clients needed reliable web platforms for structured workflows and business operations.",
    outcome: "Delivered full-stack features and supported production enterprise applications.",
    tags: ["Spring Boot", "React", "REST APIs", "Enterprise"],
  },
];

const learning = ["Apache Kafka", "RabbitMQ", "Kubernetes", "Spring Boot 4", "Java 25"];

const MainPage = () => {
  return (
    <main className="site-shell">
      <nav className="nav-bar">
        <a href="#home" className="brand">XV</a>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#engineering">Engineering</a>
          <a href="#cases">Case Studies</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero section-grid">
        <div className="hero-copy">
          <p className="eyebrow">Backend Software Engineer</p>
          <h1>Designing reliable backend systems for products serving millions.</h1>
          <p className="hero-text">
            I build cloud-native backend services, event-driven integrations, and production microservices with a focus on reliability, scalability, and performance.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="mailto:ximvyge@gmail.com">Contact Me</a>
            <a className="secondary-action" href="https://linkedin.com/in/xim-narciso" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="secondary-action" href="https://github.com/XimVyge" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <aside className="hero-card">
          <div className="profile-frame">
            <img src="/images/profile.png" alt="Xim Vyge Narciso" />
          </div>
          <h2>Xim Vyge Narciso</h2>
          <p>Distributed Systems • Event-Driven Architecture • Java • Spring Boot • AWS</p>
        </aside>
      </section>

      <section className="metrics-grid" aria-label="Engineering metrics">
        {metrics.map((metric) => (
          <div className="metric-card" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Positioning</p>
          <h2>Backend engineer with production-scale ownership.</h2>
        </div>
        <div className="pill-grid">
          {strengths.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Engineering work across financial systems, enterprise platforms, and client-facing applications.</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="experience-card" key={item.company}>
              <div className="experience-header">
                <div>
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                </div>
                <span>{item.period}</span>
              </div>
              <p className="experience-summary">{item.summary}</p>
              <ul>
                {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
              <div className="tag-row">
                {item.stack.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="engineering" className="section">
        <div className="section-heading">
          <p className="eyebrow">Engineering</p>
          <h2>Core capabilities</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="cases" className="section">
        <div className="section-heading">
          <p className="eyebrow">Case Studies</p>
          <h2>Selected engineering problems</h2>
        </div>
        <div className="case-grid">
          {caseStudies.map((item) => (
            <article className="case-card" key={item.title}>
              <h3>{item.title}</h3>
              <p><strong>Problem:</strong> {item.problem}</p>
              <p><strong>Outcome:</strong> {item.outcome}</p>
              <div className="tag-row">
                {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Now expanding</p>
          <h2>Building toward backend platform engineering.</h2>
          <p>
            I am actively deepening my experience in message brokers, orchestration, and platform-oriented backend architecture while continuing to work with modern Java and Spring ecosystems.
          </p>
        </div>
        <div className="learning-list">
          {learning.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <p className="eyebrow">Open to</p>
        <h2>Remote backend engineering opportunities now, with long-term interest in Switzerland or Germany.</h2>
        <p>
          Best fit: Java/Spring backend roles, distributed systems, fintech, cloud-native services, and platform engineering teams.
        </p>
        <div className="hero-actions centered-actions">
          <a className="primary-action" href="mailto:ximvyge@gmail.com">ximvyge@gmail.com</a>
          <a className="secondary-action" href="https://ximvyge.vercel.app" target="_blank" rel="noreferrer">Portfolio</a>
        </div>
      </section>
    </main>
  );
};

export default MainPage;
