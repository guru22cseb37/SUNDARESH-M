"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";

const storyChapters = [
  {
    chapter: "01",
    title: "The Genesis",
    subtitle: "Where Logic Meets Imagination",
    content: "My journey didn't start with just writing syntax; it began with a relentless curiosity to decode the digital world. During my engineering studies, I discovered that algorithms were more than just mathematics—they were the invisible architecture powering modern magic. It was here I learned to translate complex logic into seamless digital experiences.",
    color: "#00d4ff",
  },
  {
    chapter: "02",
    title: "The Architect",
    subtitle: "Forging Scalable Ecosystems",
    content: "As my skills evolved, so did my ambition. I realized that true engineering lies at the intersection of robust backend architecture and breathtaking frontend aesthetics. Immersed in production environments, I began sculpting full-stack solutions using React and Node.js—transforming abstract business bottlenecks into tangible, high-performance web applications.",
    color: "#7b2ff7",
  },
  {
    chapter: "03",
    title: "The Frontier",
    subtitle: "Pioneering Intelligent Systems",
    content: "Today, my focus is locked onto the bleeding edge of technology. By fusing Artificial Intelligence, NLP, and Web3 architectures into platforms like HireSight, I am moving beyond traditional development. I am not just building software for today; I am engineering intelligent, autonomous, and hyper-scalable systems for tomorrow.",
    color: "#f72585",
  }
];

function ChapterBlock({ chapter, index }: { chapter: typeof storyChapters[0], index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "center 40%"]
  });

  const isEven = index % 2 !== 0;

  // Parallax and fade effects
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <motion.div 
      ref={containerRef} 
      style={{ opacity, y, scale }}
      className={`relative w-full flex flex-col md:flex-row items-center gap-10 md:gap-20 py-20 ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Chapter Number - Massive background element */}
      <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? '-right-10' : '-left-10'} pointer-events-none opacity-[0.03] select-none mix-blend-overlay hidden md:block`}>
        <span className="font-display font-black text-[25rem] leading-none" style={{ color: chapter.color }}>
          {chapter.chapter}
        </span>
      </div>

      {/* Visual Abstract Node */}
      <div className="w-full md:w-1/3 flex justify-center relative z-10">
        <motion.div 
          className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center group"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"
               style={{ background: `radial-gradient(circle, ${chapter.color}, transparent 70%)` }} />
          
          {/* Glass Orb */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full glass-card border flex items-center justify-center relative overflow-hidden backdrop-blur-md"
               style={{ borderColor: `${chapter.color}40`, boxShadow: `inset 0 0 40px ${chapter.color}20, 0 10px 40px rgba(0,0,0,0.5)` }}>
            <span className="font-display font-black text-4xl sm:text-5xl tracking-tighter" style={{ color: chapter.color }}>
              {chapter.chapter}
            </span>
            {/* Inner dynamic ring */}
            <div className="absolute inset-0 border-[4px] rounded-full border-t-transparent animate-spin-slow opacity-30"
                 style={{ borderColor: chapter.color, borderTopColor: 'transparent' }} />
          </div>
          
          {/* Decorative Orbital Dots */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-white/10"
          >
            <div className="w-3 h-3 rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-[0_0_10px_#fff]" style={{ background: chapter.color }} />
          </motion.div>
        </motion.div>
      </div>

      {/* Narrative Content */}
      <div className={`w-full md:w-2/3 relative z-10 flex flex-col ${isEven ? 'md:items-end md:text-right' : 'items-start text-left'}`}>
        <div className="inline-block px-4 py-1.5 rounded-full mb-6 glass border"
             style={{ borderColor: `${chapter.color}30`, background: `${chapter.color}10` }}>
          <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: chapter.color }}>
            {chapter.subtitle}
          </span>
        </div>
        
        <h3 className="font-display font-black text-5xl sm:text-6xl text-white mb-6 tracking-tight drop-shadow-2xl">
          {chapter.title}
        </h3>
        
        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-light">
          {chapter.content}
        </p>

        {/* Decorative divider */}
        <div className={`mt-8 w-24 h-1 rounded-full ${isEven ? 'ml-auto' : ''}`}
             style={{ background: `linear-gradient(${isEven ? '-90deg' : '90deg'}, ${chapter.color}, transparent)` }} />
      </div>
    </motion.div>
  );
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const beamHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={containerRef}>
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-dark-800 via-dark-900 to-dark-950" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-aurora-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-aurora-blue/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Central Scroll Beam (Visible on desktop) */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] hidden md:block">
        <div className="w-full h-full bg-white/5" />
        <motion.div 
          className="absolute top-0 w-full bg-gradient-to-b from-transparent via-aurora-blue to-aurora-pink drop-shadow-[0_0_10px_rgba(0,212,255,0.8)]"
          style={{ height: beamHeight }}
        />
      </div>

      <div className="section-container relative z-10 max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <div className="flex justify-center mb-6">
            <div className="section-badge border-white/10 text-white/70 bg-white/5 backdrop-blur-md">
              <HiSparkles size={12} className="inline mr-2 text-aurora-purple" /> The Narrative
            </div>
          </div>
          <h2 className="section-title text-white mb-8" style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>
            The Story Behind the <span className="gradient-text">Code</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            Every great software solution starts with a problem. Here is the evolution of a developer driven by logic, aesthetics, and the relentless pursuit of perfection.
          </p>
        </motion.div>

        {/* Narrative Chapters */}
        <div className="flex flex-col relative">
          {storyChapters.map((chapter, index) => (
            <ChapterBlock key={chapter.chapter} chapter={chapter} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
