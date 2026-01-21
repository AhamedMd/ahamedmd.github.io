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
  ArrowRight,
  Code,
  Layers,
  Zap
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
        "Finding solutions to necessities for robotic applications based on ROS2, ensuring robust communication and modularity across complex humanoid systems.",
        "Implementing Visual-SLAM in humanoid robots for precise localization in dynamic environments, utilizing state-of-the-art sensor fusion techniques.",
        "Constructing Semantic Maps to enable high-level, natural language-based vocal commanding, bridging the gap between perception and human intent.",
        "Programming new Nav2 controllers based on Deep Reinforcement Learning to optimize computational load and improve social-awareness during navigation.",
        "Training and programming deep neural networks for advanced perception tasks including object detection and human pose estimation."
      ]
    },
    {
      lab: "Alten Labs",
      role: "Research Intern",
      period: "Feb 2024 - Aug 2024",
      focus: "Industry 5.0 Fleet Management",
      details: [
        "Conducted final year research on robot fleet management for Industry 5.0 environments using ROS2 and Gazebo simulations.",
        "Simulated warehouse environments with multiple coordinated robots to optimize fabrication lines and minimize idle time.",
        "Analyzed and compared task allocation algorithms to optimally manage robotic fleets in highly dynamic logistics scenarios.",
        "Researched optimal path planning and control algorithms for multi-robot navigation in constrained spaces."
      ]
    },
    {
      lab: "Deltacad",
      role: "Engineering Assistant Intern",
      period: "Sep 2023 - Feb 2024",
      focus: "Computer Vision & Deep Learning",
      details: [
        "Developed a full-stack defect detection prototype featuring a C# GUI and backend detection algorithms in C++ and Python.",
        "Engineered object segmentation and normalization algorithms to standardize input images, creating a robust dataset for model training.",
        "Significantly enhanced the performance of Deep Neural Network (DNN) models through advanced data augmentation and preprocessing."
      ]
    }
  ];

  const publication = {
    title: "OpenSocint: A Multi-modal Training Environment for Human-Aware Social Navigation",
    authors: ["Victor Sanchez", "Chris Reinke", "Ahamed Mohamed", "Xavier Alameda-Pineda"],
    publisher: "ArXiv / Research Report",
    year: "2026",
    abstract: "In this paper, we introduce OpenSocint, an open-source software package providing a simulator for multi-modal social interactions and a modular architecture to train social agents. Our framework allows for exploring the use of different perceptual features, their encoding and fusion, as well as the use of different agents via an experimental protocol based on the task of social navigation."
  };

  const skills = {
    programming: ["Python", "C/C++", "MATLAB", "C#", "Linux Shell"],
    robotics: ["ROS / ROS2", "Nav2", "Visual SLAM", "Deep RL", "Gazebo", "Robotarium"],
    technologies: ["Docker", "Git/SVN", "Linux (Ubuntu)", "Arduino", "RaspberryPi", "OpenCV"],
    languages: ["Tamil (Native)", "English (C2)", "French (C1)", "Spanish (A2)"]
  };

  return (
    <div className="min-h-screen w-full bg-[#fdfdfd] text-slate-900 font-serif selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden">
      {/* Dynamic Header / Navigation - User Approved Styling */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-slate-100 z-50">
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
            {['Research', 'Skills', 'Education', 'Publications'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-sky-600 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full font-sans text-[10px] font-black uppercase tracking-widest hover:bg-sky-600 transition-all active:scale-95 shadow-lg shadow-slate-200">
            Download CV
          </button>
        </div>
      </nav>

      {/* Hero Section - Filling the Viewport */}
      <section className="pt-48 pb-24 px-6 border-b border-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-1000">
              <div className="inline-flex items-center space-x-3 bg-sky-50 text-sky-700 px-5 py-2 rounded-full border border-sky-100">
                <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></div>
                <span className="font-sans text-[11px] font-black uppercase tracking-[0.2em]">Inria Research Engineer // PhD Applicant</span>
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black text-slate-900 leading-[0.85] tracking-tighter">
                Perceiving <span className="text-sky-600 italic">Human</span> Context.
              </h1>
              <p className="text-2xl md:text-3xl text-slate-500 font-sans font-light leading-relaxed max-w-3xl italic">
                Bridging the gap between autonomous machine perception and human social intelligence through <span className="text-slate-900 font-medium">Visual SLAM</span> and <span className="text-slate-900 font-medium">Deep Reinforcement Learning</span>.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {profile.interests.map(interest => (
                  <span key={interest} className="font-sans text-xs font-bold uppercase tracking-widest bg-white px-5 py-2.5 rounded-xl text-slate-500 border border-slate-100 shadow-sm hover:border-sky-200 transition-colors cursor-default">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="absolute -inset-16 bg-sky-100 rounded-full blur-[120px] opacity-30"></div>
              <div className="relative bg-white border border-slate-200 p-12 rounded-[4rem] shadow-2xl space-y-10 font-sans transform rotate-1">
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shadow-inner">
                    <Globe className="text-sky-600" size={28} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Affiliation</span>
                    <span className="text-sm font-bold text-slate-800">{profile.institution}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shadow-inner">
                    <Mail className="text-sky-600" size={28} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Email</span>
                    <span className="text-sm font-bold text-slate-800 break-all">{profile.email}</span>
                  </div>
                </div>
                <div className="h-px bg-slate-100 mx-[-3rem]"></div>
                <div className="grid grid-cols-2 gap-5">
                  <SocialCard icon={Linkedin} label="LinkedIn" />
                  <SocialCard icon={Github} label="GitHub" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid - New Content Section */}
      <section id="skills" className="py-24 px-6 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Technical Core" subtitle="Expertise & Tools" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillBlock icon={Code} title="Languages" items={skills.programming} color="sky" />
            <SkillBlock icon={Cpu} title="Robotics" items={skills.robotics} color="indigo" />
            <SkillBlock icon={Layers} title="Infrastructure" items={skills.technologies} color="slate" />
            <SkillBlock icon={Globe} title="Languages" items={skills.languages} color="amber" />
          </div>
        </div>
      </section>

      {/* Main Experience Flow */}
      <main className="max-w-7xl mx-auto px-6 py-24 space-y-32">

        {/* Research Timeline */}
        <section id="research">
          <SectionHeader title="Research History" subtitle="Operational & Academic Flow" />
          <div className="space-y-20">
            {researchExp.map((exp, idx) => (
              <div key={idx} className="group grid md:grid-cols-[300px_1fr] gap-12 items-start">
                <div className="sticky top-32">
                  <span className="text-sky-600 font-sans font-black text-sm block mb-2 uppercase tracking-widest">{exp.period}</span>
                  <p className="text-3xl font-bold leading-tight text-slate-800">{exp.lab}</p>
                  <p className="text-slate-400 font-sans text-xs font-bold uppercase tracking-[0.2em] mt-3">{exp.role}</p>
                  <div className="mt-6 hidden md:block">
                    <div className="w-12 h-1 bg-sky-100 rounded-full group-hover:w-24 group-hover:bg-sky-400 transition-all duration-700"></div>
                  </div>
                </div>
                <div className="bg-white border border-slate-100 p-10 md:p-14 rounded-[3rem] shadow-sm group-hover:shadow-2xl transition-all duration-700 group-hover:border-sky-200 relative overflow-hidden">
                  <div className="flex items-center space-x-3 mb-8">
                    <Terminal size={20} className="text-sky-500" />
                    <span className="font-sans text-xs font-black uppercase tracking-[0.3em] text-slate-300 italic">Domain: {exp.focus}</span>
                  </div>
                  <ul className="space-y-8">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-xl text-slate-600 leading-relaxed group/item">
                        <ArrowRight size={22} className="text-sky-300 mr-5 mt-2 shrink-0 transition-transform group-hover/item:translate-x-2 group-hover/item:text-sky-500" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                    <Layers size={120} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Major Publication */}
        <section id="publications">
          <SectionHeader title="Scientific Impact" subtitle="Publications & Release" />
          <div className="bg-slate-900 text-white rounded-[4rem] p-10 md:p-24 relative overflow-hidden group shadow-3xl">
            <div className="relative z-10 flex flex-col xl:flex-row gap-20 items-center">
              <div className="space-y-10 flex-grow">
                <div className="flex items-center space-x-5">
                  <span className="bg-sky-600 text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-sky-500/20">{publication.publisher}</span>
                  <span className="text-slate-600 font-sans text-xs font-black uppercase tracking-[0.4em]">{publication.year}</span>
                </div>
                <h3 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-[1] group-hover:text-sky-400 transition-colors duration-500">
                  {publication.title}
                </h3>
                <div className="font-sans text-base text-slate-400 flex flex-wrap gap-6 items-center">
                  {publication.authors.map((author, i) => (
                    <span key={i} className={author === "Ahamed Mohamed" ? "text-white font-black underline decoration-sky-500 decoration-4 underline-offset-8" : "opacity-50"}>
                      {author}{i < publication.authors.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </div>
                <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 shadow-inner">
                  <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light italic text-justify">
                    "{publication.abstract}"
                  </p>
                </div>
                <button className="flex items-center space-x-4 text-sky-400 font-sans text-xs font-black uppercase tracking-[0.4em] hover:text-white transition-all group/btn">
                  <span>Explore Open Source Code</span>
                  <div className="bg-sky-500/10 p-2 rounded-lg group-hover/btn:bg-sky-500 group-hover/btn:text-white transition-colors">
                    <ExternalLink size={18} />
                  </div>
                </button>
              </div>
              <div className="w-full max-w-[340px] aspect-[3/4.5] bg-gradient-to-br from-white/10 to-transparent rounded-3xl flex flex-col items-center justify-center border border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-1000 relative">
                <div className="absolute inset-0 bg-sky-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <BookOpen size={80} className="text-white/10 mb-6" />
                <span className="text-[10px] uppercase font-black tracking-[0.6em] text-white/20">Official Manuscript</span>
              </div>
            </div>
            <div className="absolute bottom-[-100px] left-[-100px] p-4 opacity-[0.03] rotate-45">
              <FileText size={600} />
            </div>
          </div>
        </section>

        {/* Education & Mentorship Section */}
        <div id="education" className="grid lg:grid-cols-2 gap-24 py-12">
          <section className="space-y-16">
            <SectionHeader title="Academic Path" subtitle="Credentials" />
            <div className="space-y-16">
              <div className="relative pl-14 before:absolute before:left-0 before:top-5 before:bottom-0 before:w-1 before:bg-slate-100 group">
                <div className="absolute left-[-8px] top-5 w-5 h-5 rounded-full bg-white border-4 border-sky-600 shadow-2xl transition-transform group-hover:scale-125"></div>
                <h4 className="text-4xl font-black italic mb-3 text-slate-800">Computer Science Engineering</h4>
                <p className="text-xl font-sans text-slate-500 mb-3">UTC Compiègne // French Engineering Degree</p>
                <p className="font-sans text-xs font-black text-slate-400 uppercase tracking-[0.4em] mb-8">Graduating 2025</p>
                <div className="flex flex-wrap gap-3">
                  {['Intelligent Vehicles', 'Perception & Fusion', 'Control Algorithms'].map(tag => (
                    <span key={tag} className="text-xs font-sans font-bold text-slate-500 bg-slate-50 border border-slate-100 px-4 py-1.5 rounded-full uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="pl-14 opacity-40 grayscale">
                <h4 className="text-2xl font-bold italic mb-1">Baccalaureat Générale</h4>
                <p className="text-lg font-sans text-slate-500">Lycée Marie Curie // 2017 - 2019</p>
              </div>
            </div>
          </section>

          <section className="space-y-16">
            <SectionHeader title="Leadership" subtitle="Mentorship" />
            <div className="bg-gradient-to-br from-sky-600 to-sky-700 rounded-[3.5rem] p-12 md:p-16 text-white shadow-3xl relative overflow-hidden group">
              <div className="relative z-10">
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-10 shadow-lg">
                  <Users size={32} />
                </div>
                <h4 className="text-3xl font-black italic mb-6 leading-tight">Robotic Pose Estimation Supervision</h4>
                <p className="text-xl text-sky-50 font-sans font-light leading-relaxed mb-10 opacity-90">
                  Spearheaded technical mentorship for graduate-level research on <span className="text-white font-medium underline decoration-sky-300 underline-offset-4">DNN GPU footprint reduction</span>.
                </p>
                <div className="bg-black/20 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-inner">
                  <div className="flex items-center space-x-3 mb-3">
                    <Zap size={18} className="text-sky-300" />
                    <span className="block text-[11px] font-black text-sky-300 uppercase tracking-[0.3em]">Key Result</span>
                  </div>
                  <p className="text-lg font-sans italic leading-relaxed">"Optimized pose estimation pipeline, achieving a 50% GPU load reduction while maintaining real-time throughput."</p>
                </div>
              </div>
              <Cpu size={180} className="absolute -bottom-16 -right-16 opacity-10 group-hover:rotate-45 transition-transform duration-1000" />
            </div>
          </section>
        </div>

        {/* References Footer */}
        <section id="references" className="pt-16 pb-32">
          <SectionHeader title="References" subtitle="Inria & University" />
          <div className="grid md:grid-cols-2 gap-10">
            <RefCard name="Xavier Alameda-Pineda" title="Research Director" org="Inria Grenoble // RobotLearn" email="xavier.alameda-pineda@inria.fr" />
            <RefCard name="Lounis Adouane" title="Professor" org="UTC Compiègne // Heudiasyc" email="lounis.adouane@hds.utc.fr" />
          </div>
        </section>

        <footer className="pt-32 pb-16 text-center border-t border-slate-50">
          <div className="w-24 h-px bg-slate-200 mx-auto mb-14"></div>
          <p className="text-xs font-sans font-black uppercase tracking-[0.8em] text-slate-300">
            Ahamed Mohamed // Research Protocol // 2026
          </p>
          <div className="mt-12 flex justify-center space-x-12 opacity-30">
            <span className="text-xs font-black uppercase tracking-widest">ROS2</span>
            <span className="text-xs font-black uppercase tracking-widest">Visual SLAM</span>
            <span className="text-xs font-black uppercase tracking-widest">PyTorch</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="space-y-3 mb-20 animate-in fade-in slide-in-from-left-4 duration-700">
    <div className="flex items-center space-x-3">
      <div className="w-8 h-0.5 bg-sky-600 rounded-full"></div>
      <span className="text-[11px] font-sans font-black text-sky-600 uppercase tracking-[0.5em]">{subtitle}</span>
    </div>
    <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase text-slate-900">{title}</h2>
  </div>
);

const SkillBlock = ({ icon: Icon, title, items, color }) => {
  const colors = {
    sky: "bg-sky-50 text-sky-600 border-sky-100",
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
    slate: "bg-slate-50 text-slate-600 border-slate-100",
    amber: "bg-amber-50 text-amber-600 border-amber-100"
  };

  return (
    <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-sky-100 transition-all group">
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border transition-colors ${colors[color]} group-hover:bg-sky-600 group-hover:text-white`}>
        <Icon size={24} />
      </div>
      <h4 className="font-bold text-xl mb-4 text-slate-800 tracking-tight italic">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map(item => (
          <span key={item} className="text-[10px] font-sans font-black uppercase tracking-widest text-slate-400 bg-slate-50/50 px-2 py-1 rounded">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const SocialCard = ({ icon: Icon, label }) => (
  <button className="flex items-center justify-center space-x-3 py-4 bg-white hover:bg-slate-900 hover:text-white transition-all rounded-2xl border border-slate-100 group shadow-sm active:scale-95">
    <Icon size={18} />
    <span className="text-[11px] font-black uppercase tracking-widest">{label}</span>
  </button>
);

const StatBox = ({ number, label }) => (
  <div className="text-center md:text-left p-6 md:p-0">
    <div className="text-5xl font-black text-slate-900 leading-none mb-3 tracking-tighter">{number}</div>
    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{label}</div>
  </div>
);

const RefCard = ({ name, title, org, email }) => (
  <div className="flex items-center space-x-8 bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group border-l-4 hover:border-l-sky-600">
    <div className="bg-slate-50 p-5 rounded-2xl text-slate-300 group-hover:bg-sky-50 group-hover:text-sky-400 transition-colors shadow-inner">
      <Quote size={28} />
    </div>
    <div className="space-y-2">
      <h4 className="text-2xl font-bold italic text-slate-900">{name}</h4>
      <p className="text-[11px] font-sans text-slate-400 font-black uppercase tracking-widest leading-tight">
        {title} <br /> <span className="text-sky-600 font-bold">{org}</span>
      </p>
      <a href={`mailto:${email}`} className="flex items-center text-slate-400 hover:text-sky-600 transition-colors font-sans text-xs pt-2">
        <Mail size={14} className="mr-2" /> {email}
      </a>
    </div>
  </div>
);

export default App;