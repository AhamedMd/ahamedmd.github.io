import React, { useState } from 'react';
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
  Zap,
  Eye,
  Download,
  Send,
  X
} from 'lucide-react';

const App = () => {
  const [isViewerVisible, setIsViewerVisible] = useState(false);

  // Safely resolve asset paths for GitHub Pages without causing compilation errors in older environments
  const getAssetPath = (path) => {
    let base = './';
    // This approach avoids direct access to import.meta to prevent build errors in non-ESM targets
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    return `${base}${cleanPath}`;
  };

  const profile = {
    name: "Ahamed Sazjaath MOHAMED",
    firstName: "Ahamed",
    lastName: "Mohamed",
    title: "Robotics Research Engineer",
    institution: "Centre Inria Université Grenoble Alpes",
    location: "Grenoble, France",
    email: "ahamed.mohamed@inria.fr",
    interests: ["Human-Aware Social Navigation", "Visual SLAM", "Deep Reinforcement Learning", "Multi-Agent Systems"],
    education: "M.Sc. Computer Science Engineering (UTC)",
    linkedin: "https://www.linkedin.com/in/ahamed-sazjaath-mohamed/",
    github: "https://github.com/ahamedsazjaath",
    cvPath: getAssetPath("mohamed_cv-1.pdf")
  };

  const researchExp = [
    {
      lab: "Inria - Team RobotLearn",
      role: "Research Engineer",
      period: "Oct 2024 - Present",
      focus: "Humanoid Social Navigation & SLAM",
      details: [
        "Developing robust software solutions for ROS2-based humanoid robotic platforms, optimizing inter-process communication and system modularity.",
        "Implementing state-of-the-art Visual-SLAM algorithms for precise localization in high-dynamic environments.",
        "Engineering Semantic Mapping pipelines to facilitate high-level vocal commanding and human-centric environmental understanding.",
        "Researching and deploying Deep Reinforcement Learning-based Nav2 controllers to optimize computational efficiency and social awareness.",
        "Designing and training deep neural networks for advanced robotic perception, including real-time human pose estimation."
      ]
    },
    {
      lab: "Alten Labs",
      role: "Research Intern",
      period: "Feb 2024 - Aug 2024",
      focus: "Industry 5.0 Fleet Management",
      details: [
        "Led a research project on decentralized robot fleet management within Industry 5.0 frameworks using ROS2 and Gazebo.",
        "Developed high-fidelity simulations for multi-robot coordination to optimize automated fabrication lines.",
        "Conducted a comparative analysis of task allocation and path planning algorithms to enhance logistics efficiency.",
        "Investigated leadership-based control architectures for leader-follower formation navigation."
      ]
    },
    {
      lab: "Deltacad",
      role: "Engineering Assistant Intern",
      period: "Sep 2023 - Feb 2024",
      focus: "Computer Vision & Deep Learning",
      details: [
        "Architected a full-stack defect detection application integrating a C# GUI with C++ and Python-based backend perception.",
        "Implemented advanced object segmentation and normalization pipelines to standardize visual data for high-accuracy training.",
        "Enhanced Deep Neural Network (DNN) performance through sophisticated data preprocessing and augmentation strategies."
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleViewCV = () => {
    setIsViewerVisible(true);
    setTimeout(() => scrollToSection('cv'), 150);
  };

  return (
    <div className="min-h-screen w-full bg-[#fdfdfd] text-slate-900 font-serif selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden text-left">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-slate-100 z-50">
        <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-sky-600 transition-colors relative group uppercase font-black"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:block text-slate-500 font-sans text-[10px] font-black uppercase tracking-widest hover:text-sky-600 transition-colors mr-4"
            >
              Contact
            </button>
            <a
              href={profile.cvPath}
              download="Ahamed_Mohamed_CV.pdf"
              className="bg-slate-900 text-white px-5 py-2.5 rounded-full font-sans text-[10px] font-black uppercase tracking-widest hover:bg-sky-600 transition-all active:scale-95 shadow-lg shadow-slate-200"
            >
              Download CV
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-24 px-6 border-b border-slate-50 w-full">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-1000">
              <div className="inline-flex items-center space-x-3 bg-sky-50 text-sky-700 px-5 py-2 rounded-full border border-sky-100">
                <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></div>
                <span className="font-sans text-[11px] font-black uppercase tracking-[0.2em]">Inria Research Engineer // Ph.D. Candidate</span>
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black text-slate-900 leading-[0.85] tracking-tighter text-left">
                Engineering <span className="text-sky-600 italic text-left">Autonomous</span> Systems.
              </h1>
              <p className="text-2xl md:text-3xl text-slate-600 font-sans font-light leading-relaxed max-w-4xl italic">
                Research Engineer at Inria with a specialization in autonomous systems and robotic perception. My work is focused on the integration of <span className="text-slate-900 font-medium">Visual SLAM</span> and <span className="text-slate-900 font-medium">Deep Reinforcement Learning</span> to enhance the navigational capabilities and social intelligence of complex humanoid platforms within human-centric environments.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {profile.interests.map(interest => (
                  <span key={interest} className="font-sans text-xs font-bold uppercase tracking-widest bg-white px-5 py-2.5 rounded-xl text-slate-500 border border-slate-100 shadow-sm">
                    {interest}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={handleViewCV}
                  className="flex items-center justify-center space-x-2 bg-slate-900 text-white px-8 py-5 rounded-2xl font-sans font-black text-xs uppercase tracking-[0.2em] hover:bg-sky-600 transition-all shadow-xl"
                >
                  <Eye size={18} />
                  <span>{isViewerVisible ? "CV Viewer Active" : "View Full CV"}</span>
                </button>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center justify-center space-x-2 bg-white text-slate-900 border border-slate-200 px-8 py-5 rounded-2xl font-sans font-black text-xs uppercase tracking-[0.2em] hover:border-sky-600 transition-all shadow-sm"
                >
                  <Mail size={18} />
                  <span>Contact Me</span>
                </a>
              </div>
            </div>

            <div className="hidden lg:block relative animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="absolute -inset-16 bg-sky-100 rounded-full blur-[120px] opacity-30"></div>
              <div className="relative bg-white border border-slate-200 p-12 rounded-[4rem] shadow-2xl space-y-10 font-sans transform rotate-1">
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center">
                    <Globe className="text-sky-600" size={28} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Affiliation</span>
                    <span className="text-sm font-bold text-slate-800 text-left">{profile.institution}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-sky-600">
                    <Mail size={28} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Email</span>
                    <span className="text-sm font-bold text-slate-800 break-all text-left">{profile.email}</span>
                  </div>
                </div>
                <div className="h-px bg-slate-100"></div>
                <div className="grid grid-cols-2 gap-5">
                  <SocialCard icon={Linkedin} label="LinkedIn" onClick={() => window.open(profile.linkedin, '_blank')} />
                  <SocialCard icon={Github} label="GitHub" onClick={() => window.open(profile.github, '_blank')} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1440px] mx-auto">
        {/* CV Viewer Section - Toggleable */}
        {isViewerVisible && (
          <section id="cv" className="py-24 px-6 bg-slate-50 border-y border-slate-100 rounded-[4rem] animate-in fade-in slide-in-from-top-8 duration-500">
            <div className="flex items-center justify-between mb-20 max-w-6xl mx-auto">
              <SectionHeader title="Curriculum Vitae" subtitle="Interactive Document" />
              <button
                onClick={() => setIsViewerVisible(false)}
                className="bg-white p-4 rounded-full text-slate-400 hover:text-rose-500 shadow-sm transition-colors border border-slate-100"
              >
                <X size={28} />
              </button>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-[3rem] shadow-2xl border border-slate-200">
                <div className="flex items-center justify-between mb-6 px-4 py-2 border-b border-slate-100">
                  <div className="flex items-center space-x-3">
                    <FileText className="text-sky-600" size={22} />
                    <span className="font-sans font-black text-[11px] uppercase tracking-widest text-slate-500">mohamed_cv-1.pdf</span>
                  </div>
                  <a href={profile.cvPath} download="Ahamed_Mohamed_CV.pdf" className="text-sky-600 hover:text-sky-800 transition-colors flex items-center space-x-2 font-sans font-black text-[11px] uppercase tracking-widest">
                    <Download size={16} />
                    <span>Download Copy</span>
                  </a>
                </div>
                <div className="aspect-[1/1.4] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-inner">
                  <iframe
                    src={profile.cvPath}
                    className="w-full h-full border-none"
                    title="CV Viewer"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Skills */}
        <section id="skills" className="py-24 px-6">
          <SectionHeader title="Technical Core" subtitle="Expertise & Tools" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillBlock icon={Code} title="Languages" items={skills.programming} color="sky" />
            <SkillBlock icon={Cpu} title="Robotics" items={skills.robotics} color="indigo" />
            <SkillBlock icon={Layers} title="Infrastructure" items={skills.technologies} color="slate" />
            <SkillBlock icon={Globe} title="Communication" items={skills.languages} color="amber" />
          </div>
        </section>

        {/* Experience Flow */}
        <section id="research" className="py-24 px-6">
          <SectionHeader title="Research History" subtitle="Operational Flow" />
          <div className="space-y-20">
            {researchExp.map((exp, idx) => (
              <div key={idx} className="group grid md:grid-cols-[300px_1fr] gap-12 items-start">
                <div className="sticky top-32">
                  <span className="text-sky-600 font-sans font-black text-sm block mb-2 uppercase tracking-widest">{exp.period}</span>
                  <p className="text-3xl font-bold leading-tight text-slate-800 italic">{exp.lab}</p>
                  <p className="text-slate-400 font-sans text-xs font-bold uppercase tracking-[0.2em] mt-3">{exp.role}</p>
                </div>
                <div className="bg-white border border-slate-100 p-10 md:p-14 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-700 text-left">
                  <div className="flex items-center space-x-3 mb-8">
                    <Terminal size={20} className="text-sky-500" />
                    <span className="font-sans text-xs font-black uppercase tracking-[0.3em] text-slate-300 italic">Domain: {exp.focus}</span>
                  </div>
                  <ul className="space-y-8">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-xl text-slate-600 leading-relaxed group/item text-left">
                        <ArrowRight size={22} className="text-sky-300 mr-5 mt-2 shrink-0 transition-transform group-hover/item:translate-x-2" />
                        <span className="text-left">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 px-6 bg-slate-50/50 rounded-[4rem]">
          <SectionHeader title="Academic Path" subtitle="Education" />
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all text-left">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-sky-50 p-4 rounded-2xl text-sky-600 shadow-inner">
                  <GraduationCap size={36} />
                </div>
                <span className="text-[11px] font-sans font-black text-slate-400 uppercase tracking-[0.2em]">2019 — 2025</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Computer Science Engineering Degree</h3>
              <p className="text-sky-600 font-sans font-bold text-sm mb-4 uppercase tracking-wider">Université de Technologie Compiègne (UTC)</p>
              <p className="text-slate-500 font-sans text-lg leading-relaxed mb-6 italic text-left">
                Engineering specialization in Embedded Informatics & Autonomous Systems. Research focus includes intelligent vehicle architectures, multi-agent robotic coordination, and multi-modal perception systems.
              </p>
              <div className="flex items-center space-x-2 text-[10px] font-sans font-black text-slate-400 uppercase tracking-widest">
                <Award size={14} className="text-sky-500" />
                <span>EQF Level 7 Accreditation</span>
              </div>
            </div>

            <div className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all text-left">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-slate-50 p-4 rounded-2xl text-slate-400">
                  <Award size={36} />
                </div>
                <span className="text-[11px] font-sans font-black text-slate-400 uppercase tracking-[0.2em]">2017 — 2019</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-800">Baccalaureat Générale</h3>
              <p className="text-slate-400 font-sans font-bold text-sm mb-4">Lycée Marie Curie</p>
              <p className="text-slate-500 font-sans text-lg leading-relaxed italic text-left opacity-75">
                Scientific stream with intensive curriculum in Mathematics and Physical Sciences.
              </p>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="py-24 px-6">
          <SectionHeader title="Scientific Impact" subtitle="Publications" />
          <div className="bg-slate-900 text-white rounded-[4rem] p-10 md:p-24 relative overflow-hidden group shadow-2xl">
            <div className="relative z-10 flex flex-col xl:flex-row gap-20 items-center">
              <div className="space-y-10 flex-grow text-left">
                <div className="flex items-center space-x-5">
                  <span className="bg-sky-600 text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-sky-500/20">{publication.publisher}</span>
                  <span className="text-slate-600 font-sans text-xs font-black uppercase tracking-[0.4em]">{publication.year}</span>
                </div>
                <h3 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-[1] text-left">
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
                  <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light italic text-left">
                    "{publication.abstract}"
                  </p>
                </div>
              </div>
              <div className="hidden xl:flex w-72 h-96 bg-white/5 border border-white/10 rounded-3xl items-center justify-center backdrop-blur-sm shadow-2xl">
                <BookOpen size={100} className="text-white/10" />
              </div>
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-[0.02] -rotate-12 translate-x-20 -translate-y-20">
              <FileText size={600} />
            </div>
          </div>
        </section>

        {/* Contact Me Section */}
        <section id="contact" className="py-24 px-6">
          <SectionHeader title="Collaborate" subtitle="Contact Me" />
          <div className="bg-white border border-slate-100 rounded-[4rem] p-12 md:p-20 shadow-xl relative overflow-hidden text-center group">
            <div className="relative z-10 max-w-2xl mx-auto space-y-10">
              <div className="bg-sky-50 w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto text-sky-600 shadow-inner transition-transform group-hover:rotate-6">
                <Send size={40} />
              </div>
              <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter">Initiate a research <br /><span className="text-sky-600">consultation</span>.</h3>
              <p className="text-xl text-slate-500 font-sans leading-relaxed italic">
                Open to discussions regarding doctoral research opportunities or collaboration in the field of robotics.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href={`mailto:${profile.email}`}
                  className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl font-sans font-black text-sm uppercase tracking-[0.2em] hover:bg-sky-600 transition-all shadow-xl flex items-center justify-center space-x-4 group/btn"
                >
                  <Mail size={20} className="group-hover/btn:scale-110" />
                  <span>Send Email</span>
                </a>
                <button
                  onClick={() => window.open(profile.linkedin, '_blank')}
                  className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-sans font-black text-sm uppercase tracking-[0.2em] hover:border-sky-600 transition-all flex items-center justify-center space-x-4 shadow-sm"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn Profile</span>
                </button>
              </div>
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] scale-150">
              <Globe size={400} />
            </div>
          </div>
        </section>

        {/* References */}
        <section id="references" className="py-24 px-6 border-t border-slate-50">
          <SectionHeader title="Scholarly References" subtitle="Recommendations" />
          <div className="grid md:grid-cols-2 gap-10">
            <RefCard
              name="Xavier Alameda-Pineda"
              title="Research Director // RobotLearn Leader"
              org="Inria Grenoble"
              email="xavier.alameda-pineda@inria.fr"
            />
            <RefCard
              name="Lounis Adouane"
              title="Professor // HDS UTC"
              org="Université de Technologie Compiègne"
              email="lounis.adounane@hds.utc.fr"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-32 pb-16 text-center border-t border-slate-50">
          <p className="text-xs font-sans font-black uppercase tracking-[0.8em] text-slate-300">
            Ahamed Mohamed // Research Protocol // {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  );
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="space-y-4 mb-20 text-left">
    <div className="flex items-center space-x-4">
      <div className="w-12 h-1 bg-sky-600 rounded-full shadow-sm shadow-sky-200"></div>
      <span className="text-[12px] font-sans font-black text-sky-600 uppercase tracking-[0.6em]">{subtitle}</span>
    </div>
    <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase text-slate-900 text-left">{title}</h2>
  </div>
);

const SkillBlock = ({ icon: Icon, title, items, color }) => {
  const colors = {
    sky: "bg-sky-50 text-sky-600 border-sky-100 shadow-sky-500/5",
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-100 shadow-indigo-500/5",
    slate: "bg-slate-50 text-slate-600 border-slate-100 shadow-slate-500/5",
    amber: "bg-amber-50 text-amber-600 border-amber-100 shadow-amber-500/5"
  };

  return (
    <div className="bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 text-left group">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border shadow-lg transition-transform group-hover:-translate-y-1 ${colors[color]}`}>
        <Icon size={28} />
      </div>
      <h4 className="font-bold text-2xl mb-6 text-slate-800 tracking-tight italic text-left">{title}</h4>
      <div className="flex flex-wrap gap-2 text-left">
        {items.map(item => (
          <span key={item} className="text-[10px] font-sans font-black uppercase tracking-widest text-slate-500 bg-slate-50/80 px-3 py-1.5 rounded-lg border border-slate-100/50">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const SocialCard = ({ icon: Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center space-x-3 py-5 bg-white hover:bg-slate-900 hover:text-white transition-all rounded-3xl border border-slate-100 shadow-sm w-full font-sans font-black text-[11px] uppercase tracking-widest"
  >
    <Icon size={20} />
    <span>{label}</span>
  </button>
);

const RefCard = ({ name, title, org, email }) => (
  <div className="flex items-center space-x-10 bg-white border border-slate-100 p-12 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 text-left group">
    <div className="bg-slate-50 p-6 rounded-[2rem] text-slate-300 shadow-inner group-hover:bg-sky-50 group-hover:text-sky-400 transition-colors">
      <Quote size={32} />
    </div>
    <div className="space-y-3 text-left">
      <h4 className="text-3xl font-bold italic text-slate-900 text-left leading-none">{name}</h4>
      <p className="text-[11px] font-sans text-slate-400 font-black uppercase tracking-[0.2em] text-left leading-tight">
        {title} <br /> <span className="text-sky-600 font-bold">{org}</span>
      </p>
      <a href={`mailto:${email}`} className="text-xs font-sans text-sky-500 font-bold hover:underline flex items-center mt-4 text-left group/mail">
        <Mail size={14} className="mr-2 group-hover/mail:scale-110 transition-transform" /> {email}
      </a>
    </div>
  </div>
);

export default App;