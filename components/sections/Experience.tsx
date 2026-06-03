"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const achievements = [
  { icon: "🎨", title: "UI Architecture", description: "Led UI restructuring resulting in a 40% performance boost and responsive enhancements." },
  { icon: "⚡", title: "API Optimization", description: "Streamlined REST integrations, significantly reducing latency and data payload." },
  { icon: "🧩", title: "Component Library", description: "Architected a scalable, reusable React component ecosystem for cross-team use." },
  { icon: "🔧", title: "Code Quality", description: "Enforced rigorous maintainability standards and comprehensive technical documentation." },
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (y - 0.5) * 8, y: -(x - 0.5) * 8 });
    setSpotlight({ x: x * 100, y: y * 100 });
  }, []);

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-dark-900 pointer-events-none">
        <div className="absolute -left-64 top-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(0,212,255,0.06)_0%,_transparent_70%)] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute -right-64 bottom-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(123,47,247,0.05)_0%,_transparent_70%)] animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-4">
            <div className="section-badge border-aurora-blue/30 text-aurora-blue bg-aurora-blue/10">
              <HiSparkles size={12} className="inline mr-1" /> Work History
            </div>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="section-title text-white mb-5">
            Professional <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-400 max-w-xl mx-auto text-lg">
            Where I&apos;ve applied my skills to solve real-world problems and deliver business value.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div
            ref={cardRef}
            onMouseMove={onMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
            className="glass-card rounded-[2rem] overflow-hidden"
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: hovered ? "transform 0.1s linear" : "transform 0.6s ease",
              boxShadow: hovered ? "0 25px 60px rgba(0,212,255,0.15), inset 0 1px 0 rgba(255,255,255,0.1)" : "0 10px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
              borderColor: hovered ? "rgba(0,212,255,0.3)" : "rgba(255,255,255,0.08)"
            }}
          >
            {/* Spotlight */}
            <div
              className="absolute inset-0 pointer-events-none rounded-[2rem] z-10"
              style={{
                background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(0,212,255,0.1) 0%, transparent 50%)`,
                opacity: hovered ? 1 : 0,
                transition: "opacity 0.3s",
              }}
            />

            {/* Header */}
            <div className="relative p-10 pb-12 overflow-hidden border-b border-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-aurora-blue/10 via-aurora-purple/5 to-transparent" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-aurora-blue/20 to-aurora-purple/20 blur-[80px]" />
              
              <div className="relative z-20 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-aurora-blue to-aurora-purple flex items-center justify-center shadow-lg relative group">
                    <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-3xl font-display font-black text-white">F</span>
                  </div>
                  <div>
                    <h3 className="font-display font-black text-2xl text-white tracking-tight mb-1">
                      Futurik Technologies
                    </h3>
                    <div className="flex items-center gap-2">
                      <FiBriefcase className="text-aurora-green" size={14} />
                      <span className="text-aurora-green font-mono text-sm font-semibold tracking-wide">
                        Full Stack Developer Intern
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 md:items-end">
                  <div className="flex items-center gap-2 text-slate-300 font-mono text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                    <FiCalendar className="text-aurora-blue" /> June 2024 – July 2024
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 font-mono text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                    <FiMapPin className="text-aurora-pink" /> Tamil Nadu, India
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-10 relative z-20 bg-gradient-to-b from-white/[0.02] to-transparent">
              <h4 className="font-display font-bold text-white text-lg mb-6">
                Impact & Achievements
              </h4>
              <div className="grid md:grid-cols-2 gap-5 mb-8">
                {achievements.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-aurora-blue/30 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-aurora-blue/10 border border-aurora-blue/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold text-sm mb-1">{item.title}</h5>
                      <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="pt-6 border-t border-white/5">
                <p className="text-xs font-mono text-slate-500 mb-3 uppercase tracking-widest">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Node.js", "Express.js", "REST APIs", "MongoDB", "Git", "Agile"].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium"
                      style={{ background: "rgba(0,212,255,0.08)", color: "#00d4ff", border: "1px solid rgba(0,212,255,0.2)" }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
