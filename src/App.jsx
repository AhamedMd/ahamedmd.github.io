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
  const [activeTab, setActiveTab] = useState('research');

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
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-serif selection:bg-sky-100 selection:text-sky-900">
      {/* Top Academic Navigation */}
      <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50 py-4">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="bg-slate-900 text-white p-1.5 rounded-sm">
              <GraduationCap size={20} />
            </div>
            <span className="font-bold tracking-tight text-lg">A.S. Mohamed</span>
          </div>
          <div className="flex items-center space-x-6 text-sm font-sans font-medium uppercase tracking-wider text-slate-500">
            {['Research', 'Education', 'Publications', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-sky-600 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Header / Intro */}
        <section id="header" className="mb-20">
          <div className="grid md:grid-cols-[1fr_300px] gap-12 items-start">
            <div>
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-[1.1]">
                Advancing <span className="text-sky-600">Human-Robot</span> Interaction through Social Perception.
              </h1>
              <div className="flex flex-wrap gap-2 mb-8">
                {profile.interests.map(interest => (
                  <span key={interest} className="font-sans text-[11px] font-bold uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full text-slate-600 border border-slate-200">
                    {interest}
                  </span>
                ))}
              </div>
              <p className="text-xl text-slate-600 leading-relaxed font-sans font-light max-w-2xl">
                I am a Research Engineer at <span className="font-medium text-slate-900 underline decoration-sky-500 underline-offset-4">Inria Grenoble</span>, focusing on the intersection of deep learning and humanoid navigation. My goal is to develop robotic systems that perceive and interact with human environments naturally and safely.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm space-y-6 font-sans">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Current Affiliation</span>
                <p className="text-sm font-bold text-slate-900">{profile.institution}</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Education</span>
                <p className="text-sm font-bold text-slate-900">{profile.education}</p>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <a href="#" className="text-slate-400 hover:text-sky-600 transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-sky-600 transition-colors"><Github size={20} /></a>
                <a href={`mailto:${profile.email}`} className="text-slate-400 hover:text-sky-600 transition-colors"><Mail size={20} /></a>
              </div>
              <button className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg text-xs uppercase tracking-widest hover:bg-sky-700 transition-colors flex items-center justify-center">
                <FileText size={16} className="mr-2" /> View CV (PDF)
              </button>
            </div>
          </div>
        </section>

        {/* Research Experience (PhD recruiters look here first) */}
        <section id="research" className="py-16 border-t border-slate-200">
          <div className="flex items-center space-x-4 mb-12">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 flex-shrink-0">Research Experience</h2>
            <div className="h-px bg-slate-200 w-full"></div>
          </div>

          <div className="space-y-16">
            {researchExp.map((exp, idx) => (
              <div key={idx} className="grid md:grid-cols-[200px_1fr] gap-8">
                <div className="font-sans">
                  <span className="text-sky-600 font-bold text-sm block mb-1">{exp.period}</span>
                  <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">{exp.lab}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                  <p className="text-slate-500 font-sans italic mb-4">Core Focus: {exp.focus}</p>
                  <ul className="space-y-3 font-sans text-slate-700 leading-relaxed">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight size={16} className="text-sky-500 mr-2 mt-1 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Publications (The "Golden" Section) */}
        <section id="publications" className="py-16 border-t border-slate-200">
          <div className="flex items-center space-x-4 mb-12">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 flex-shrink-0">Selected Publications</h2>
            <div className="h-px bg-slate-200 w-full"></div>
          </div>

          <div className="bg-white border border-slate-200 p-10 rounded-2xl group hover:border-sky-300 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div className="flex-grow">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-sky-50 text-sky-700 text-[10px] font-black px-2 py-1 rounded uppercase">{publication.publisher}</span>
                  <span className="text-slate-300 font-sans text-xs">•</span>
                  <span className="text-slate-500 font-sans text-xs font-bold">{publication.year}</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-sky-900 transition-colors">
                  {publication.title}
                </h3>
                <div className="font-sans text-sm text-slate-600 mb-6 flex flex-wrap gap-x-4 gap-y-1">
                  {publication.authors.map((author, i) => (
                    <span key={i} className={author === "Ahamed Mohamed" ? "font-bold text-slate-900 underline decoration-sky-500" : ""}>
                      {author}{i < publication.authors.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </div>
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-sky-500 mb-6">
                  <p className="text-slate-600 text-sm font-sans italic leading-relaxed">
                    "{publication.abstract}"
                  </p>
                </div>
                <a href="#" className="inline-flex items-center text-sky-600 font-sans font-bold text-xs uppercase tracking-widest hover:text-sky-800 transition-colors group">
                  <Search size={14} className="mr-2" /> Read Full Paper
                  <ExternalLink size={12} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
              <div className="hidden lg:block">
                <div className="w-24 h-32 bg-slate-100 rounded border border-slate-200 flex items-center justify-center">
                  <BookOpen size={32} className="text-slate-300" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Academic Mentorship */}
        <section id="education" className="py-16 border-t border-slate-200 grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center space-x-4 mb-10">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 flex-shrink-0">Education</h2>
              <div className="h-px bg-slate-200 w-full"></div>
            </div>
            <div className="space-y-10">
              <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-slate-200">
                <div className="absolute left-[-4px] top-1 w-2 h-2 rounded-full bg-sky-500"></div>
                <h4 className="font-bold text-lg leading-tight mb-1">Computer Science Engineering Degree</h4>
                <p className="text-sm font-sans text-slate-600 mb-2">Université de Technologie Compiègne (UTC)</p>
                <p className="text-[10px] font-sans font-bold text-slate-400 uppercase tracking-widest">2019 — 2025 (Expected)</p>
                <p className="mt-4 text-xs font-sans text-slate-500 leading-relaxed italic">
                  Focus: Embedded Informatics & Autonomous Systems. Specialized in perception and multi-agent systems.
                </p>
              </div>
              <div className="relative pl-6 opacity-60">
                <h4 className="font-bold text-lg leading-tight mb-1 text-slate-400">Baccalaureat Générale</h4>
                <p className="text-sm font-sans text-slate-500">Lycée Marie Curie (EQF Level 4)</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-4 mb-10">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 flex-shrink-0">Mentorship</h2>
              <div className="h-px bg-slate-200 w-full"></div>
            </div>
            <div className="bg-sky-50 border border-sky-100 p-8 rounded-2xl">
              <div className="flex items-center space-x-3 text-sky-700 mb-4">
                <Users size={20} />
                <span className="font-sans font-bold text-xs uppercase tracking-widest">Technical Supervisor</span>
              </div>
              <h4 className="font-bold text-xl mb-3">Robotic Pose Estimation Research</h4>
              <p className="text-sm font-sans text-slate-600 leading-relaxed mb-6">
                Guided a Master 1 student through a full literature review to implementation.
              </p>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-[11px] font-sans font-bold text-sky-700 mb-1">RESULT:</p>
                <p className="text-xs font-sans text-slate-800">Optimized pipeline, reducing DNN GPU footprint by 50% while maintaining real-time performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Recommendations */}
        <section className="py-16 border-t border-slate-200">
          <div className="flex items-center space-x-4 mb-12">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 flex-shrink-0">Academic Recommendations</h2>
            <div className="h-px bg-slate-200 w-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {recommendations.map((rec, i) => (
              <div key={i} className="flex items-start space-x-6 bg-white border border-slate-100 p-8 rounded-xl">
                <div className="bg-slate-50 p-4 rounded-full text-slate-300">
                  <Quote size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{rec.name}</h4>
                  <p className="text-xs font-sans text-slate-500 font-bold uppercase tracking-wider mb-3 leading-tight">
                    {rec.title} <br /> {rec.org}
                  </p>
                  <a href={`mailto:${rec.email}`} className="text-sky-600 font-sans text-sm font-medium hover:underline flex items-center">
                    <Mail size={12} className="mr-2" /> {rec.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-24 pb-8 text-center border-t border-slate-100 mt-16 font-sans">
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.5em]">
            Ahamed Mohamed — Research Portfolio — 2026
          </p>
          <div className="mt-4 flex justify-center space-x-4 opacity-50">
            <span className="text-[10px] font-bold">SLAM</span>
            <span className="text-[10px] font-bold">ROS2</span>
            <span className="text-[10px] font-bold">AI</span>
            <span className="text-[10px] font-bold">SOCIAL ROBOTICS</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;