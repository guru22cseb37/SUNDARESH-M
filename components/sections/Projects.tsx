"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiExternalLink, FiGithub, FiCheckCircle, FiCpu, FiActivity } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

const projects = [
  {
    id: "01",
    title: "HireSight",
    subtitle: "AI Recruitment Ecosystem",
    description:
      "A next-generation recruitment platform that leverages Natural Language Processing to match candidates with 80% accuracy. Secured by blockchain credential verification, it eliminates hiring bias and significantly reduces time-to-hire.",
    tech: ["React.js", "Node.js", "NLP", "Blockchain", "MongoDB"],
    features: [
      "Semantic NLP candidate matching",
      "Blockchain-backed credentials",
      "Automated AI screening",
      "Interactive recruiter analytics",
    ],
    accentColor: "#00d4ff",
    secondaryColor: "#7b2ff7",
    badge: "AI × Web3",
    icon: FiCpu,
    liveUrl: "#",
    githubUrl: "https://github.com/056Sundaresh",
    // Visual Mockup specific data
    mockupType: "dashboard",
  },
  {
    id: "02",
    title: "HealTrack",
    subtitle: "Hospital Management System",
    description:
      "A comprehensive, JWT-secured healthcare management platform designed to streamline hospital operations. Features real-time push notifications, complete patient record management, and an intuitive doctor scheduling calendar.",
    tech: ["React.js", "Node.js", "MongoDB", "Socket.io", "JWT"],
    features: [
      "Real-time appointment booking",
      "Encrypted patient records",
      "Dynamic doctor scheduling",
      "Multi-role JWT auth access",
    ],
    accentColor: "#f72585",
    secondaryColor: "#7b2ff7",
    badge: "Full Stack",
    icon: FiActivity,
    liveUrl: "#",
    githubUrl: "https://github.com/056Sundaresh",
    mockupType: "analytics",
  },
];

function BrowserMockup({ project }: { project: typeof projects[0] }) {
  return (
    <div className="w-full h-full min-h-[300px] sm:min-h-[400px] rounded-2xl glass-card relative overflow-hidden flex flex-col"
         style={{ borderColor: `${project.accentColor}30`, boxShadow: `0 20px 60px rgba(0,0,0,0.4), inset 0 0 20px ${project.accentColor}10` }}>
      {/* Browser Header */}
      <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02]">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <div className="mx-auto px-4 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-slate-500 font-mono tracking-widest hidden sm:block">
          {project.title.toLowerCase()}.app
        </div>
      </div>
      
      {/* Browser Body - Abstract Representation */}
      <div className="flex-1 p-4 sm:p-6 flex gap-4 sm:gap-6 relative">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full blur-[80px] opacity-20 pointer-events-none"
             style={{ background: `linear-gradient(135deg, ${project.accentColor}, ${project.secondaryColor})` }} />
        
        {/* Sidebar */}
        <div className="w-16 sm:w-24 flex flex-col gap-3 z-10">
          <div className="w-full h-8 rounded-lg bg-white/10 mb-4" />
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="w-full h-4 rounded-md bg-white/5" />
          ))}
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col gap-4 z-10">
          {/* Header area */}
          <div className="flex gap-4">
            <div className="w-2/3 h-20 rounded-xl glass border border-white/5 p-4 flex flex-col justify-center gap-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-full" />
              <div className="w-1/2 h-4 bg-white/20 rounded-md" />
              <div className="w-1/3 h-6 rounded-md" style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }} />
            </div>
            <div className="w-1/3 h-20 rounded-xl glass border border-white/5 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full border-4 border-t-transparent animate-spin" style={{ borderColor: `${project.secondaryColor}40`, borderTopColor: project.secondaryColor }} />
            </div>
          </div>
          
          {/* Bottom Grid */}
          <div className="flex-1 rounded-xl glass border border-white/5 p-4 flex flex-col gap-3">
            <div className="w-32 h-3 bg-white/10 rounded-full mb-2" />
            {[80, 60, 90, 40].map((w, i) => (
              <div key={i} className="w-full flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-white/5 flex-shrink-0" />
                <div className="flex-1 h-2 bg-dark-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${w}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className="h-full rounded-full" 
                    style={{ background: project.accentColor }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectShowcase({ project, index }: { project: typeof projects[0], index: number }) {
  const isEven = index % 2 === 0;
  const Icon = project.icon;
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <motion.div ref={containerRef} style={{ opacity, y }} className="relative mb-32 last:mb-0">
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
        
        {/* Content Side */}
        <div className="w-full lg:w-1/2 relative z-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl font-display font-black text-transparent bg-clip-text"
                  style={{ WebkitTextStroke: `1px ${project.accentColor}40` }}>
              {project.id}
            </span>
            <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${project.accentColor}40, transparent)` }} />
          </div>
          
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                   style={{ background: `linear-gradient(135deg, ${project.accentColor}20, ${project.secondaryColor}10)`, border: `1px solid ${project.accentColor}40` }}>
                <Icon size={18} style={{ color: project.accentColor }} />
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full"
                    style={{ color: project.accentColor, background: `${project.accentColor}10`, border: `1px solid ${project.accentColor}30` }}>
                {project.badge}
              </span>
            </div>
            
            <h3 className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-lg font-medium" style={{ color: project.secondaryColor }}>
              {project.subtitle}
            </p>
          </div>

          <p className="text-slate-400 leading-relaxed mb-8 text-base">
            {project.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {project.features.map((f) => (
              <div key={f} className="flex items-start gap-2 text-sm text-slate-300">
                <FiCheckCircle size={14} className="flex-shrink-0 mt-0.5" style={{ color: project.accentColor }} />
                {f}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "#cbd5e1" }}>
                {t}
              </span>
            ))}
          </div>


        </div>

        {/* Visual Mockup Side */}
        <div className="w-full lg:w-1/2 relative group">
          <motion.div 
            whileHover={{ scale: 1.02, rotateY: isEven ? -5 : 5, rotateX: 2 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="perspective-1000"
          >
            <BrowserMockup project={project} />
          </motion.div>
          {/* Floating decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 animate-pulse hidden lg:block" style={{ animationDuration: '4s' }} />
          <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 rotate-12 hidden lg:block" />
        </div>

      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-aurora-blue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-aurora-purple/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <div className="flex justify-center mb-5">
            <div className="section-badge border-aurora-blue/30 text-aurora-blue bg-aurora-blue/10">
              <HiSparkles size={12} className="inline mr-1" /> Portfolio
            </div>
          </div>
          <h2 className="section-title text-white mb-6">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Real-world applications engineered with modern architectures, focusing on performance, scalability, and exceptional user experiences.
          </p>
        </motion.div>

        <div className="flex flex-col gap-10 max-w-7xl mx-auto">
          {projects.map((p, i) => <ProjectShowcase key={p.id} project={p} index={i} />)}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a
            href="https://github.com/056Sundaresh" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 glass-card px-8 py-4 rounded-2xl font-bold text-white border border-white/10 hover:border-aurora-blue/40 hover:bg-white/5 transition-all group"
          >
            <FiGithub size={20} className="group-hover:scale-110 transition-transform" />
            Explore More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
