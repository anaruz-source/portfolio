import React, { useState } from 'react';
import data from './data.json';
import './index.css';

import logo from './assets/logo.png';

function App() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="container animate-entry">
      {/* Navigation (Hidden on Print) */}
      <nav className="glass-panel" style={{ padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6rem', marginTop: '2rem', position: 'sticky', top: '20px', zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src={logo} alt="Anaruz Logo" style={{ height: '40px', filter: 'drop-shadow(0 0 5px rgba(108, 92, 231, 0.5))' }} />
          <h3 style={{ margin: 0, fontWeight: 900 }}>{data.profile.name}</h3>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a href="#experience" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>Experience</a>
          <a href="#projects" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>Projects</a>
          <a href="#contact" className="glass-button" style={{ padding: '0.5rem 1rem', textDecoration: 'none' }}>Hire Me</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="glass-panel" style={{ padding: '3rem', maxWidth: '800px', borderLeft: '4px solid var(--accent-color)' }}>
          <small className="text-accent" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>{data.profile.status}</small>
          <h1 style={{ fontSize: '3.5rem', marginTop: '1rem' }}>{data.profile.headline}</h1>

          {/* Web Bio */}
          <p className="web-only" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem' }}>
            {data.profile.bio}
          </p>

          {/* Resume Bio & Contact (Print Only) */}
          <div className="print-only" style={{ display: 'none', marginBottom: '1rem' }}>
            <p>{data.profile.location} | {data.socials.email_user}@{data.socials.email_domain}</p>
            <p>{data.socials.linkedin} | {data.socials.github}</p>
            <p style={{ marginTop: '1rem' }}>{data.profile.bio}</p>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="glass-button" onClick={() => window.print()}>Print Resume / PDF</button>
            <a href="#contact" className="glass-button" style={{ background: 'transparent', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>Contact Me</a>
          </div>
        </div>
      </header>

      {/* Experience Timeline - MOVED FIRST */}
      <section id="experience" style={{ marginBottom: '6rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Professional <span className="text-accent">Experience</span></h2>
        <div style={{ display: 'grid', gap: '2rem' }}>
          {data.experience.map((exp, index) => (
            <div key={index} className="glass-panel card" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div style={{ minWidth: '150px', color: 'var(--text-secondary)', fontWeight: 'bold', fontSize: '0.9rem', paddingTop: '0.2rem' }}>
                {exp.period}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.4rem' }}>{exp.role}</h3>
                <div style={{ color: 'var(--accent-color)', marginBottom: '1rem', fontWeight: 'bold' }}>{exp.company}</div>
                <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'rgba(255,255,255,0.7)' }}>{exp.description}</p>
                <ul style={{ paddingLeft: '1rem', color: 'var(--text-secondary)' }}>
                  {exp.achievements.map((ach, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem' }}>{ach}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section - MOVED SECOND */}
      <section id="projects" style={{ marginBottom: '6rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Select <span className="text-accent">Projects</span></h2>
        <div className="grid grid-cols-2">
          {data.projects.map((project) => (
            <div key={project.id} className="glass-panel card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ background: 'rgba(108, 92, 231, 0.2)', color: '#a29bfe', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{project.category}</span>
              </div>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.4rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1, lineHeight: '1.6' }}>{project.description}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                {project.tech.map((t) => (
                  <span key={t} style={{ fontSize: '0.8rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', padding: '0.3rem 0.6rem', borderRadius: '4px' }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Arsenal - MOVED THIRD */}
      <section id="skills" style={{ marginBottom: '6rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Technical <span className="text-accent">Arsenal</span></h2>
        <div className="grid grid-cols-2">
          {Object.entries(data.skills).map(([category, skills]) => (
            <div key={category} className="glass-panel card skill-category">
              <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)' }}>{category}</h3>
              <div className="skill-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.map((skill) => (
                  <span key={skill} className="skill-item" style={{
                    background: 'rgba(255,255,255,0.05)',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certs */}
      <section id="education" style={{ marginBottom: '6rem' }}>
        <div className="grid grid-cols-2">
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Education</h2>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {data.education.map((edu, idx) => (
                <div key={idx} className="glass-panel card">
                  <h3 style={{ margin: '0 0 0.5rem 0' }}>{edu.degree}</h3>
                  <div style={{ color: 'var(--text-secondary)' }}>{edu.institution}, {edu.year}</div>
                  <small style={{ display: 'block', marginTop: '0.5rem', color: 'rgba(255,255,255,0.5)' }}>{edu.details}</small>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Certifications</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {data.certifications.map((cert, idx) => (
                <div key={idx} className="glass-panel" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: '600' }}>{cert.name}</span>
                  <span style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{cert.issuer} {cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Direct <span className="text-accent">Contact</span></h2>
        <div className="glass-panel card" style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem' }}>
          <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
            Open for opportunities in Data Science, Cloud Engineering, and Custom Development.
          </p>
          <form onSubmit={(e) => {
            e.preventDefault();
            const subject = e.target.subject.value;
            const body = e.target.message.value;
            const user = data.socials.email_user;
            const domain = data.socials.email_domain;
            const mailtoLink = `mailto:${user}@${domain}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
          }}>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <input
                name="subject"
                placeholder="Subject"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--glass-border)',
                  padding: '1.2rem',
                  borderRadius: '8px',
                  color: 'white',
                  width: '100%',
                  boxSizing: 'border-box',
                  fontSize: '1rem'
                }}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--glass-border)',
                  padding: '1.2rem',
                  borderRadius: '8px',
                  color: 'white',
                  width: '100%',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box',
                  fontSize: '1rem'
                }}
                required
              ></textarea>
              <button type="submit" className="glass-button" style={{ width: '100%', fontSize: '1.1rem' }}>
                Send Secure Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-panel" style={{ padding: '2rem', textAlign: 'center', marginTop: '4rem' }}>
        <p style={{ color: 'var(--text-secondary)' }}>&copy; 2025 {data.profile.name}.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
          <a href={`https://${data.socials.github}`} target="_blank" rel="noreferrer" style={{ color: 'white' }}>GitHub</a>
          <a href={`https://${data.socials.linkedin}`} target="_blank" rel="noreferrer" style={{ color: 'white' }}>LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
