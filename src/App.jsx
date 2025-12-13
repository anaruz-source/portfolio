import React, { useState } from 'react';
import data from './data.json';
import './index.css';

import logo from './assets/logo.png';

function App() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 animate-entry">
      {/* Navigation (Hidden on Print) */}
      <nav className="glass-panel px-8 py-4 flex flex-col md:flex-row justify-between items-center mb-16 mt-4 sticky top-5 z-50 print:hidden">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <img src={logo} alt="Anaruz Logo" className="h-10 drop-shadow-[0_0_5px_rgba(108,92,231,0.5)]" />
          <h3 className="m-0 font-black text-xl tracking-tight">{data.profile.name}</h3>
        </div>
        <div className="flex gap-6 items-center">
          <a href="#experience" className="text-slate-200 hover:text-white transition-colors font-medium decoration-0">Experience</a>
          <a href="#projects" className="text-slate-200 hover:text-white transition-colors font-medium decoration-0">Projects</a>
          <a href="#contact" className="glass-button text-sm py-2 px-5">Hire Me</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="mb-24 print:mb-8 print:p-0">
        <div className="glass-panel p-10 max-w-3xl border-l-4 border-l-purple-500 print:border-none print:shadow-none print:bg-none print:p-0">
          <small className="text-accent-gradient uppercase tracking-[0.15em] font-bold text-sm block mb-2">{data.profile.status}</small>
          <h1 className="text-5xl md:text-6xl font-display font-bold mt-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent print:text-black print:text-4xl">
            {data.profile.headline}
          </h1>

          {/* Web Bio */}
          <p className="text-lg text-slate-400 leading-relaxed mb-8 mt-6 print:hidden">
            {data.profile.bio}
          </p>

          {/* Resume Bio & Contact (Print Only) */}
          <div className="hidden print:block mb-4 text-slate-800">
            <p className="mb-1">{data.profile.location} | {data.socials.email_user}@{data.socials.email_domain}</p>
            <p className="mb-4">{data.socials.linkedin.replace('linkedin.com/in/', 'in/')} | {data.socials.github.replace('github.com/', 'github/')}</p>
            <p className="border-t border-slate-300 pt-4 mt-4 text-sm leading-relaxed">{data.profile.bio}</p>
          </div>

          <div className="flex gap-4 print:hidden">
            <button className="glass-button" onClick={() => window.print()}>Print Resume / PDF</button>
            <a href="#contact" className="glass-button bg-transparent border-white/20 hover:bg-white/5">Contact Me</a>
          </div>
        </div>
      </header>

      {/* Experience Timeline */}
      <section id="experience" className="mb-24 print:mb-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 print:text-2xl print:border-b-2 print:border-slate-800 print:pb-2 print:mb-6">
          Professional <span className="text-accent-gradient print:text-black">Experience</span>
        </h2>
        <div className="grid gap-8 print:gap-6">
          {data.experience.map((exp, index) => (
            <div key={index} className="glass-panel p-8 flex flex-col md:flex-row gap-8 items-start hover:border-purple-500/30 transition-colors print:shadow-none print:bg-none print:p-0 print:border-none print:block">
              <div className="min-w-[150px] text-slate-400 font-bold text-sm pt-1 print:text-slate-600 print:mb-1">
                {exp.period}
              </div>
              <div className="flex-1">
                <h3 className="m-0 text-2xl font-bold mb-1 print:text-xl print:text-black">{exp.role}</h3>
                <div className="text-purple-400 font-bold mb-4 print:text-slate-700 print:mb-2">{exp.company}</div>
                <p className="italic mb-4 text-slate-300/80 print:text-slate-800">{exp.description}</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-400 print:text-slate-800 print:pl-4">
                  {exp.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-24 print:break-before-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 print:text-2xl print:border-b-2 print:border-slate-800 print:pb-2 print:mb-6">
          Select <span className="text-accent-gradient print:text-black">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:block">
          {data.projects.map((project) => (
            <div key={project.id} className="glass-panel p-8 flex flex-col hover:-translate-y-1 transition-transform print:shadow-none print:bg-none print:p-0 print:border-none print:mb-6 print:block">
              <div className="mb-4">
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded text-xs uppercase tracking-wider font-semibold border border-purple-500/30 print:bg-slate-100 print:text-slate-700 print:border-slate-300">
                  {project.category}
                </span>
              </div>
              <h3 className="m-0 text-2xl font-bold mb-3 print:text-xl print:text-black">{project.title}</h3>
              <p className="text-slate-400 mb-6 flex-grow leading-relaxed print:text-slate-800">{project.description}</p>
              <div className="flex gap-2 flex-wrap mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs border border-white/10 bg-white/5 px-2 py-1 rounded text-slate-300 print:border-slate-300 print:bg-slate-100 print:text-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Arsenal */}
      <section id="skills" className="mb-24 print:mb-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 print:text-2xl print:border-b-2 print:border-slate-800 print:pb-2 print:mb-6">
          Technical <span className="text-accent-gradient print:text-black">Arsenal</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:gap-4">
          {Object.entries(data.skills).map(([category, skills]) => (
            <div key={category} className="glass-panel p-8 print:shadow-none print:bg-none print:p-0 print:border-none">
              <h3 className="mb-4 text-purple-400 text-xl font-bold print:text-black print:text-lg print:mb-2">{category}</h3>
              <div className="flex flex-wrap gap-2 print:gap-1">
                {skills.map((skill) => (
                  <span key={skill} className="bg-white/5 py-1.5 px-3.5 rounded-full text-sm border border-white/10 text-slate-200 print:text-slate-800 print:border-none print:p-0 print:bg-transparent print:after:content-[',_'] print:last:after:content-none">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certs */}
      <section id="education" className="mb-24 print:mb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 print:block">
          <div className="print:mb-6">
            <h2 className="text-3xl font-display font-bold mb-8 print:text-2xl print:border-b-2 print:border-slate-800 print:pb-2 print:mb-4">Education</h2>
            <div className="grid gap-6 print:gap-4">
              {data.education.map((edu, idx) => (
                <div key={idx} className="glass-panel p-6 print:shadow-none print:bg-none print:p-0 print:border-none">
                  <h3 className="m-0 text-xl font-bold print:text-lg">{edu.degree}</h3>
                  <div className="text-slate-400 mt-1 print:text-slate-700">{edu.institution}, {edu.year}</div>
                  <small className="block mt-2 text-slate-500 print:text-slate-600">{edu.details}</small>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold mb-8 print:text-2xl print:border-b-2 print:border-slate-800 print:pb-2 print:mb-4">Certifications</h2>
            <div className="grid gap-4 print:gap-2">
              {data.certifications.map((cert, idx) => (
                <div key={idx} className="glass-panel p-4 flex justify-between items-center print:shadow-none print:bg-none print:p-0 print:border-none print:block">
                  <span className="font-semibold print:text-black">{cert.name}</span>
                  <span className="text-xs bg-white/10 px-2 py-1 rounded text-slate-300 print:bg-transparent print:text-slate-600 print:pl-2">
                    {cert.issuer} {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-16 print:hidden">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center">
          Direct <span className="text-accent-gradient">Contact</span>
        </h2>
        <div className="glass-panel p-12 max-w-2xl mx-auto">
          <p className="mb-8 text-slate-400 text-center text-lg">
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
            <div className="grid gap-6">
              <input
                name="subject"
                placeholder="Subject"
                className="bg-white/5 border border-white/10 p-4 rounded-lg text-white w-full focus:outline-none focus:border-purple-500 transition-colors"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                className="bg-white/5 border border-white/10 p-4 rounded-lg text-white w-full font-body focus:outline-none focus:border-purple-500 transition-colors"
                required
              ></textarea>
              <button type="submit" className="glass-button w-full text-lg shadow-lg shadow-purple-900/20">
                Send Secure Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-panel p-8 text-center mt-16 print:hidden">
        <p className="text-slate-500">&copy; 2025 {data.profile.name}.</p>
        <div className="flex justify-center gap-8 mt-4">
          <a href={`https://${data.socials.github}`} target="_blank" rel="noreferrer" className="text-white hover:text-purple-400 transition-colors">GitHub</a>
          <a href={`https://${data.socials.linkedin}`} target="_blank" rel="noreferrer" className="text-white hover:text-blue-400 transition-colors">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
