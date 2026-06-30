import "./MainPage.css";

const highlights = [
  { value: "50M+", label: "registered users supported" },
  { value: "~1M", label: "requests handled per day" },
  { value: "15s → <500ms", label: "P95 latency improvement" },
];

const experience = [
  {
    company: "Maya Philippines Inc.",
    role: "Software Engineer",
    period: "Apr 2025 – Present",
    description:
      "Building and maintaining backend services for a high-scale financial platform used by millions of customers.",
    bullets: [
      "Own production microservices across development, deployment, maintenance, and incident resolution.",
      "Designed REST APIs and asynchronous integrations using Amazon SNS and SQS.",
      "Spearheaded a backend refactor that reduced API P95 latency from ~15s to under 500ms.",
      "Lead sprint planning, review pull requests, and help onboard new engineers.",
    ],
    stack: ["Java 21", "Spring Boot 3", "PostgreSQL", "Docker", "AWS", "SQS", "SNS"],
  },
  {
    company: "Monstarlab Philippines",
    role: "Full Stack Developer",
    period: "Aug 2023 – Apr 2025",
    description:
      "Delivered enterprise web platforms for international clients across maritime, government-linked, HR, and document workflows.",
    bullets: [
      "Developed backend services and frontend features using Java, Spring Boot, React, and TypeScript.",
      "Worked with stakeholders to translate business requirements into maintainable software solutions.",
      "Supported production systems, feature enhancements, and application issue resolution.",
    ],
    stack: ["Java", "Spring Boot", "React", "TypeScript", "REST APIs"],
  },
  {
    company: "Freelance + Early Experience",
    role: "Full Stack Developer / Intern",
    period: "2022 – 2023",
    description:
      "Built client-facing web applications, gathered requirements, implemented features, and supported deployed systems.",
    bullets: [
      "Developed custom web applications and assisted with testing, troubleshooting, and production fixes.",
    ],
    stack: ["JavaScript", "React", "Node.js", "SQL"],
  },
];

const capabilities = [
  {
    title: "Backend Engineering",
    items: ["Java", "Spring Boot", "REST APIs", "Microservices", "PostgreSQL"],
  },
  {
    title: "Architecture",
    items: ["Distributed Systems", "Event-Driven Architecture", "System Design", "Performance Optimization"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS EC2", "AWS S3", "AWS SQS", "AWS SNS", "Docker", "GitHub Actions", "GitLab CI/CD"],
  },
];

const projects = [
  {
    title: "Financial Platform Performance Refactor",
    body: "Led a backend refactor that reduced a production API's P95 latency from approximately 15 seconds to under 500 milliseconds.",
  },
  {
    title: "Event-Driven Service Integrations",
    body: "Designed asynchronous SNS/SQS event flows to decouple production services and support more reliable backend workflows.",
  },
  {
    title: "Enterprise Platforms",
    body: "Built and supported enterprise applications for document workflows, HR systems, and client-facing operations.",
  },
];

const MainPage = () => {
  return (
    <main className="page">
      <header className="site-header">
        <a href="#top" className="logo">XVN</a>
        <nav>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-content">
          <p className="label">Backend Software Engineer</p>
          <h1>Xim Vyge Narciso</h1>
          <p className="intro">
            I build reliable backend systems, REST APIs, and event-driven services for enterprise platforms. My current work focuses on Java, Spring Boot, AWS, Docker, PostgreSQL, and production-scale financial systems.
          </p>
          <div className="links">
            <a href="mailto:ximvyge@gmail.com">Email</a>
            <a href="https://linkedin.com/in/xim-narciso" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/XimVyge" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <div className="profile-card">
          <img src="/images/profile.png" alt="Xim Vyge Narciso" />
        </div>
      </section>

      <section className="highlights" aria-label="Career highlights">
        {highlights.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section id="experience" className="section">
        <div className="section-title">
          <p className="label">Experience</p>
          <h2>Production backend work across financial and enterprise systems.</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="job" key={item.company}>
              <div className="job-header">
                <div>
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                </div>
                <span>{item.period}</span>
              </div>
              <p className="job-description">{item.description}</p>
              <ul>
                {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
              <div className="tags">
                {item.stack.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-title">
          <p className="label">Skills</p>
          <h2>Technologies and engineering focus.</h2>
        </div>
        <div className="skills-grid">
          {capabilities.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tags">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section">
        <div className="section-title">
          <p className="label">Selected Work</p>
          <h2>Engineering problems I have worked on.</h2>
        </div>
        <div className="work-list">
          {projects.map((item) => (
            <article className="work-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="label">Contact</p>
        <h2>Open to remote backend and full-stack engineering roles.</h2>
        <p>
          Best fit: Java/Spring backend roles, fintech platforms, distributed systems, cloud-native services, and performance-focused engineering teams.
        </p>
        <div className="links centered">
          <a href="mailto:ximvyge@gmail.com">ximvyge@gmail.com</a>
          <a href="https://linkedin.com/in/xim-narciso" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>
    </main>
  );
};

export default MainPage;
