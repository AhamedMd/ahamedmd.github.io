import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Award, 
  User, 
  Mail, 
  Phone,
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
  Globe,
  Users,
  Terminal,
  ArrowRight
} from 'lucide-react';

const App = () => {
  const profile = {
    name: "Ahamed Sazjaath MOHAMED",
    firstName: "Ahamed",
    lastName: "Mohamed",
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

  return (
    <div className="min-h-screen w-full bg-white text-slate-900 font-serif selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden">
      {/* Dynamic Header / Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-slate-100 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-sky-600 text-white p-2 rounded-lg rotate-3 shadow-lg shadow-sky-100">
              <GraduationCap size={22} />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-black text-lg tracking-tight uppercase leading-none">{profile.lastName}</span>
              <span className="font-sans text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Research Portfolio</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-10 text-[11px] font-sans font-black uppercase tracking-[0.2em] text-slate-500">
            {['Research', 'Education', 'Publications', 'References'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-sky-600 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full font-sans text-[10px] font-black uppercase tracking-widest hover:bg-sky-600 transition-all active:scale-95 shadow-lg shadow-slate-200">
            Get CV
          </button>
        </div>
      </nav>

      {/* Hero Section - Full Width Impact */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="inline-flex items-center space-x-2 bg-sky-50 text-sky-700 px-4 py-1.5 rounded-full border border-sky-100">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse"></div>
                <span className="font-sans text-[10px] font-black uppercase tracking-[0.2em]">Inria Researcher // Ph.D Candidate</span>
              </div>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter">
                Engineering <span className="text-sky-600 italic">Robotic</span> Autonomy.
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-sans font-light leading-relaxed max-w-2xl italic">
                Specializing in social navigation, visual SLAM, and deep reinforcement learning to bridge the gap between human environments and machine perception.
              </p>
              <div className="flex flex-wrap gap-3">
                {profile.interests.map(interest => (
                  <span key={interest} className="font-sans text-[11px] font-bold uppercase tracking-widest bg-slate-50 px-4 py-2 rounded-xl text-slate-600 border border-slate-200">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="absolute -inset-10 bg-sky-100 rounded-full blur-[100px] opacity-40"></div>
              <div className="relative bg-white border border-slate-200 p-10 rounded-[3rem] shadow-2xl space-y-8 font-sans">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center">
                    <Globe className="text-sky-600" size={24} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Base of Operations</span>
                    <span className="text-sm font-bold">{profile.location}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center">
                    <Mail className="text-sky-600" size={24} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Primary Contact</span>
                    <span className="text-sm font-bold truncate">{profile.email}</span>
                  </div>
                </div>
                <div className="h-px bg-slate-100"></div>
                <div className="grid grid-cols-2 gap-4">
                  <SocialCard icon={Linkedin} label="LinkedIn" />
                  <SocialCard icon={Github} label="GitHub" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter / Focus */}
      <div className="bg-slate-50 py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatBox number="01" label="ArXiv Publications" />
          <StatBox number="04+" label="Coding Languages" />
          <StatBox number="02" label="Research Labs" />
          <StatBox number="03" label="Autonomous Systems" />
        </div>
      </div>

      {/* Main Experience Flow */}
      <main className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        
        {/* Research Timeline */}
        <section id="research">
          <SectionHeader title="Research Operations" subtitle="Operational & Academic History" />
          <div className="space-y-16">
            {researchExp.map((exp, idx) => (
              <div key={idx} className="group grid md:grid-cols-[300px_1fr] gap-12 items-start">
                <div className="sticky top-32">
                  <span className="text-sky-600 font-sans font-black text-sm block mb-2 uppercase tracking-widest">{exp.period}</span>
                  <p className="text-2xl font-bold leading-tight">{exp.lab}</p>
                  <p className="text-slate-400 font-sans text-xs font-bold uppercase tracking-widest mt-2">{exp.role}</p>
                </div>
                <div className="bg-white border border-slate-100 p-8 md:p-12 rounded-[2.5rem] shadow-sm group-hover:shadow-xl transition-all duration-500 group-hover:border-sky-100">
                  <div className="flex items-center space-x-3 mb-6">
                    <Terminal size={18} className="text-sky-500" />
                    <span className="font-sans text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 italic">Project Core: {exp.focus}</span>
                  </div>
                  <ul className="space-y-6">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-lg text-slate-600 leading-relaxed group/item">
                        <ArrowRight size={20} className="text-sky-400 mr-4 mt-1.5 shrink-0 transition-transform group-hover/item:translate-x-1" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Major Publication */}
        <section id="publications">
          <SectionHeader title="Scholarly Contributions" subtitle="Peer-reviewed & Open Source" />
          <div className="bg-slate-900 text-white rounded-[3rem] p-8 md:p-20 relative overflow-hidden group shadow-2xl">
            <div className="relative z-10 flex flex-col xl:flex-row gap-16 items-center">
              <div className="space-y-8 flex-grow">
                <div className="flex items-center space-x-4">
                  <span className="bg-sky-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{publication.publisher}</span>
                  <span className="text-slate-500 font-sans text-sm font-bold uppercase tracking-[0.3em]">{publication.year}</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-none group-hover:text-sky-400 transition-colors">
                  {publication.title}
                </h3>
                <div className="font-sans text-sm text-slate-400 flex flex-wrap gap-4">
                  {publication.authors.map((author, i) => (
                    <span key={i} className={author === "Ahamed Mohamed" ? "text-white font-black underline decoration-sky-500 decoration-2 underline-offset-4" : "opacity-60"}>
                      {author}{i < publication.authors.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </div>
                <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                  <p className="text-lg text-slate-300 leading-relaxed font-light italic">
                    "{publication.abstract}"
                  </p>
                </div>
                <button className="flex items-center space-x-3 text-sky-400 font-sans text-xs font-black uppercase tracking-[0.3em] hover:text-white transition-colors group/btn">
                  <span>Explore Repository</span>
                  <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="w-full max-w-[300px] aspect-[3/4] bg-white/10 rounded-2xl flex flex-col items-center justify-center border border-white/10 shadow-inner group-hover:scale-105 transition-transform duration-700">
                 <BookOpen size={60} className="text-white/20 mb-4" />
                 <span className="text-[10px] uppercase font-black tracking-[0.5em] text-white/30">Academic Release</span>
              </div>
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-[0.02]">
              <FileText size={400} />
            </div>
          </div>
        </section>

        {/* Split Section: Education & Mentorship */}
        <div id="education" className="grid lg:grid-cols-2 gap-24">
          <section className="space-y-12">
            <SectionHeader title="Academic Path" subtitle="Credentials" />
            <div className="space-y-12">
              <div className="relative pl-12 before:absolute before:left-0 before:top-4 before:bottom-0 before:w-1 before:bg-slate-100 group">
                <div className="absolute left-[-6px] top-4 w-4 h-4 rounded-full bg-sky-600 border-4 border-white shadow-xl transition-transform group-hover:scale-125"></div>
                <h4 className="text-3xl font-black italic mb-2">Computer Science Engineering</h4>
                <p className="text-lg font-sans text-slate-500 mb-2">UTC Compiègne // EQF Level 7</p>
                <p className="font-sans text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">2019 — 2025</p>
                <div className="flex flex-wrap gap-2">
                  {['Autonomous Systems', 'Embedded Info', 'Intelligent Vehicles'].map(tag => (
                    <span key={tag} className="text-[10px] font-sans font-bold text-slate-400 border border-slate-200 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="pl-12 opacity-50">
                <h4 className="text-xl font-bold italic mb-1">Baccalaureat Générale</h4>
                <p className="text-sm font-sans text-slate-500">Lycée Marie Curie // 2017 - 2019</p>
              </div>
            </div>
          </section>

          <section className="space-y-12">
            <SectionHeader title="Mentorship" subtitle="Leadership" />
            <div className="bg-sky-600 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-8">
                  <Users size={24} />
                </div>
                <h4 className="text-2xl font-black italic mb-4 leading-tight">Robotic Pose Estimation Supervisor</h4>
                <p className="text-lg text-sky-100 font-sans font-light leading-relaxed mb-8 opacity-90">
                  Technical leadership for Master's level research focused on DNN optimization for real-world hardware deployment.
                </p>
                <div className="bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <span className="block text-[10px] font-black text-sky-200 uppercase tracking-widest mb-2">Quantified Impact</span>
                  <p className="text-sm font-sans italic">"Reduced DNN GPU footprint by 50% while sustaining real-time 30FPS throughput."</p>
                </div>
              </div>
              <Cpu size={120} className="absolute -bottom-10 -right-10 opacity-10 group-hover:rotate-12 transition-transform duration-1000" />
            </div>
          </section>
        </div>

        {/* References Footer */}
        <section id="references" className="pt-16">
          <SectionHeader title="References" subtitle="Inria & Academic" />
          <div className="grid md:grid-cols-2 gap-8">
            <RefCard name="Xavier Alameda-Pineda" title="Research Director" org="Inria Grenoble" />
            <RefCard name="Lounis Adouane" title="Professor" org="UTC Compiègne" />
          </div>
        </section>

        <footer className="pt-32 pb-12 text-center">
          <div className="w-16 h-px bg-slate-200 mx-auto mb-12"></div>
          <p className="text-[10px] font-sans font-black uppercase tracking-[0.8em] text-slate-300">
            Ahamed Mohamed // Research Protocol // 2026
          </p>
        </footer>
      </main>
    </div>
  );
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="space-y-1 mb-16">
    <span className="text-[10px] font-sans font-black text-sky-600 uppercase tracking-[0.4em]">{subtitle}</span>
    <h2 className="text-4xl md:text-5xl font-black tracking-tighter italic uppercase">{title}</h2>
  </div>
);

const SocialCard = ({ icon: Icon, label }) => (
  <button className="flex items-center justify-center space-x-2 py-3 bg-slate-50 hover:bg-sky-600 hover:text-white transition-all rounded-xl border border-slate-100 group">
    <Icon size={16} />
    <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
  </button>
);

const StatBox = ({ number, label }) => (
  <div className="text-center md:text-left">
    <div className="text-3xl font-black text-slate-900 leading-none mb-2">{number}</div>
    <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{label}</div>
  </div>
);

const RefCard = ({ name, title, org }) => (
  <div className="flex items-center space-x-6 bg-white border border-slate-100 p-8 rounded-3xl hover:border-sky-200 transition-colors shadow-sm">
    <div className="bg-slate-50 p-4 rounded-2xl text-slate-300">
      <Quote size={20} />
    </div>
    <div>
      <h4 className="text-xl font-bold italic mb-1">{name}</h4>
      <p className="text-[10px] font-sans font-black text-slate-500 uppercase tracking-widest leading-tight">
        {title} <br/> <span className="text-sky-600">{org}</span>
      </p>
    </div>
  </div>
);

export default App;