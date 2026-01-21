import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Award,
  User,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  Quote,
  FileText,
  Cpu,
  GraduationCap,
  Search,
  Linkedin,
  Github,
  Link as LinkIcon,
  Users
} from 'lucide-react';

const App = () => {
  const profile = {
    name: "Ahamed Sazjaath MOHAMED",
    title: "Robotics Research Engineer",
    institution: "Centre Inria Université Grenoble Alpes",
    location: "Grenoble, France",
    email: "ahamed.mohamed@inria.fr",
    interests: ["Human-Aware Social Navigation", "Visual SLAM", "Deep Reinforcement Learning", "Multi-Agent Systems"],
    education: "M.Sc. Computer Science Engineering (UTC)"
  };

  const researchExp = [
    {
      lab: "Inria - Team RobotLearn",
      role: "Research Engineer",
      period: "Oct 2024 - Present",
      focus: "Humanoid Social Navigation & SLAM",
      details: [
        "Implementing Visual-SLAM for precise localization on humanoid platforms.",
        "Developing Semantic Maps for high-level, natural language-based vocal commanding.",
        "Designing Nav2 controllers based on Deep Reinforcement Learning for social awareness.",
        "Training deep neural networks for advanced robotic perception in social environments."
      ]
    },
    {
      lab: "Alten Labs",
      role: "Research Intern",
      period: "Feb 2024 - Aug 2024",
      focus: "Industry 5.0 Fleet Management",
      details: [
        "Researched task allocation and path planning algorithms for multi-robot fleets.",
        "Simulated warehouse coordination in ROS2/Gazebo to optimize fabrication lines.",
        "Comparative analysis of decentralised vs. centralised control paradigms."
      ]
    }
  ];

  const publication = {
    title: "OpenSocint: A Multi-modal Training Environment for Human-Aware Social Navigation",
    authors: ["Victor Sanchez", "Chris Reinke", "Ahamed Mohamed", "Xavier Alameda-Pineda"],
    publisher: "ArXiv / Research Report",
    year: "2026",
    abstract: "An open-source software package providing a simulator for multi-modal social interactions and a modular architecture to train social agents. Explores perceptual features, encoding/fusion, and social navigation experimental protocols."
  };

  const recommendations = [
    {
      name: "Xavier Alameda-Pineda",
      title: "Research Director & Leader of RobotLearn",
      org: "Inria Grenoble",
      email: "xavier.alameda-pineda@inria.fr"
    },
    {
      name: "Lounis Adouane",
      title: "Professor",
      org: "Université de Technologie Compiègne",
      email: "lounis.adouane@hds.utc.fr"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-[#fafafa] text-slate-900 font-serif selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden">
      {/* Top Academic Navigation */}
      <nav className="sticky top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50 py-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="bg-slate-900 text-white p-1.5 rounded-sm shrink-0">
              <GraduationCap size={20} />
            </div>
            <span className="font-bold tracking-tight text-base sm:text-lg whitespace-nowrap">A.S. Mohamed</span>
          </div>
          <div className="hidden sm:flex items-center space-x-6 text-[10px] md:text-xs font-sans font-medium uppercase tracking-wider text-slate-500">
            {['Research', 'Education', 'Publications', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-sky-600 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-12 md:py-20">
        {/* Header / Intro */}
        <section id="header" className="mb-16 md:mb-24">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.15]">
                Advancing <span className="text-sky-600 italic">Human-Robot</span> Interaction through Social Perception.
              </h1>
              <div className="flex flex-wrap gap-2 mb-8">
                {profile.interests.map(interest => (
                  <span key={interest} className="font-sans text-[10px] md:text-[11px] font-bold uppercase tracking-widest bg-white px-3 py-1.5 rounded-md text-slate-600 border border-slate-200 shadow-sm">
                    {interest}
                  </span>
                ))}
              </div>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-sans font-light max-w-2xl">
                I am a Research Engineer at <span className="font-medium text-slate-900 underline decoration-sky-500 underline-offset-4 decoration-2">Inria Grenoble</span>, specializing in the intersection of deep learning and humanoid navigation. My work focuses on perception systems that allow robots to navigate human environments naturally.
              </p>
            </div>

            <div className="order-1 lg:order-2 bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm space-y-6 font-sans">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Current Affiliation</span>
                <p className="text-sm font-bold text-slate-900 leading-snug">{profile.institution}</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Education</span>
                <p className="text-sm font-bold text-slate-900">{profile.education}</p>
              </div>
              <div className="h-px bg-slate-100"></div>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-slate-400 hover:text-sky-600 transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-sky-600 transition-colors"><Github size={20} /></a>
                <a href={`mailto:${profile.email}`} className="text-slate-400 hover:text-sky-600 transition-colors"><Mail size={20} /></a>
              </div>
              <button className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl text-[11px] uppercase tracking-[0.2em] hover:bg-sky-700 transition-all shadow-lg shadow-slate-200 active:scale-95">
                <FileText size={14} className="inline mr-2 -mt-0.5" /> Download CV
              </button>
            </div>
          </div>
        </section>

        {/* Research Experience */}
        <section id="research" className="py-16 border-t border-slate-200">
          <div className="flex items-center space-x-4 mb-16">
            <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-slate-400 flex-shrink-0">Research Experience</h2>
            <div className="h-px bg-slate-200 w-full"></div>
          </div>

          <div className="space-y-20">
            {researchExp.map((exp, idx) => (
              <div key={idx} className="grid md:grid-cols-[200px_1fr] gap-x-12 gap-y-6">
                <div className="font-sans">
                  <span className="text-sky-600 font-bold text-sm block mb-1">{exp.period}</span>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed">{exp.lab}</p>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{exp.role}</h3>
                  <p className="text-slate-500 font-sans italic mb-6 border-l-2 border-sky-100 pl-4">Focus: {exp.focus}</p>
                  <ul className="space-y-4 font-sans text-slate-700 leading-relaxed text-sm md:text-base">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight size={18} className="text-sky-500 mr-3 mt-1 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Publication Highlight */}
        <section id="publications" className="py-16 border-t border-slate-200">
          <div className="flex items-center space-x-4 mb-12">
            <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-slate-400 flex-shrink-0">Selected Publications</h2>
            <div className="h-px bg-slate-200 w-full"></div>
          </div>

          <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-sky-200 transition-all">
            <div className="flex flex-col xl:flex-row justify-between items-start gap-10">
              <div className="flex-grow">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="bg-sky-50 text-sky-700 text-[10px] font-black px-2.5 py-1 rounded uppercase tracking-widest">{publication.publisher}</span>
                  <span className="text-slate-300 font-sans text-xs">•</span>
                  <span className="text-slate-500 font-sans text-xs font-bold uppercase tracking-widest">{publication.year}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  {publication.title}
                </h3>
                <div className="font-sans text-sm text-slate-600 mb-8 flex flex-wrap gap-x-6 gap-y-2 italic">
                  {publication.authors.map((author, i) => (
                    <span key={i} className={author === "Ahamed Mohamed" ? "font-black text-slate-900 not-italic border-b-2 border-sky-400" : ""}>
                      {author}{i < publication.authors.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </div>
                <div className="bg-slate-50 p-6 md:p-8 rounded-2xl mb-8">
                  <p className="text-slate-600 text-sm md:text-base font-sans italic leading-relaxed text-justify">
                    {publication.abstract}
                  </p>
                </div>
                <button className="inline-flex items-center text-sky-600 font-sans font-bold text-[11px] uppercase tracking-[0.2em] hover:text-sky-800 transition-colors group">
                  <Search size={16} className="mr-2" /> View Full Publication
                  <ExternalLink size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-all translate-x-[-4px] group-hover:translate-x-0" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Mentorship Section */}
        <section id="education" className="py-16 border-t border-slate-200 grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="flex items-center space-x-4">
              <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-slate-400 flex-shrink-0">Academic Background</h2>
              <div className="h-px bg-slate-200 w-full"></div>
            </div>
            <div className="space-y-10">
              <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-100">
                <div className="absolute left-[-3px] top-1.5 w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.5)]"></div>
                <h4 className="font-bold text-xl leading-tight mb-2">Computer Science Engineering Degree</h4>
                <p className="text-sm font-sans text-slate-600 mb-2 font-medium">Université de Technologie Compiègne (UTC)</p>
                <p className="text-[10px] font-sans font-bold text-slate-400 uppercase tracking-widest mb-4">Class of 2025</p>
                <div className="flex flex-wrap gap-2">
                  {['Intelligent Vehicles', 'Multi-Agent Systems', 'Embedded Info'].map(tag => (
                    <span key={tag} className="text-[9px] font-bold text-slate-400 border border-slate-200 px-2 py-0.5 rounded italic">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="relative pl-8 opacity-50">
                <h4 className="font-bold text-lg leading-tight mb-1">Baccalaureat Générale</h4>
                <p className="text-sm font-sans text-slate-500 italic">Lycée Marie Curie</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="flex items-center space-x-4">
              <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-slate-400 flex-shrink-0">Technical Mentorship</h2>
              <div className="h-px bg-slate-200 w-full"></div>
            </div>
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center space-x-3 text-sky-400 mb-6">
                  <Users size={20} />
                  <span className="font-sans font-black text-[10px] uppercase tracking-[0.3em]">Supervision</span>
                </div>
                <h4 className="font-bold text-xl mb-4 leading-tight">Robotic Pose Estimation Research</h4>
                <p className="text-sm font-sans text-slate-400 leading-relaxed mb-8 opacity-90">
                  Supervised a Master 1 student through a full research cycle: literature review to high-performance deployment.
                </p>
                <div className="inline-block px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-lg">
                  <p className="text-[10px] font-black text-sky-400 uppercase tracking-widest mb-1">Impact:</p>
                  <p className="text-xs font-sans text-sky-100 font-medium italic">Reduced DNN GPU footprint by 50% for real-time robotic hardware.</p>
                </div>
              </div>
              <Cpu className="absolute -bottom-6 -right-6 h-32 w-32 text-white opacity-[0.03] group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        </section>

        {/* Recommendations Section */}
        <section className="py-16 border-t border-slate-200">
          <div className="flex items-center space-x-4 mb-12">
            <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-slate-400 flex-shrink-0">Academic References</h2>
            <div className="h-px bg-slate-200 w-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {recommendations.map((rec, i) => (
              <div key={i} className="flex items-start space-x-6 bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-slate-50 p-4 rounded-xl text-slate-300">
                  <Quote size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-xl text-slate-900">{rec.name}</h4>
                  <p className="text-[10px] font-sans text-slate-500 font-black uppercase tracking-widest leading-tight">
                    {rec.title}
                  </p>
                  <p className="text-xs font-sans text-sky-600 font-bold mb-4">{rec.org}</p>
                  <a href={`mailto:${rec.email}`} className="inline-flex items-center text-slate-400 hover:text-sky-600 font-sans text-xs transition-colors">
                    <Mail size={12} className="mr-2" /> {rec.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-24 pb-12 text-center border-t border-slate-100 mt-20">
          <p className="text-[9px] font-black uppercase tracking-[0.6em] text-slate-300">
            Ahamed Mohamed — Research Portfolio — 2026
          </p>
          <div className="mt-8 flex justify-center space-x-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-[10px] font-bold text-slate-900">SLAM</span>
            <span className="text-[10px] font-bold text-slate-900">ROS2</span>
            <span className="text-[10px] font-bold text-slate-900">SOCIAL ROBOTICS</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;