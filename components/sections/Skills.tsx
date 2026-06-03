"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiJavascript, SiHtml5, SiGit, SiGithub,
  SiAndroidstudio, SiDotnet, SiVscodium, SiCss,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { fadeInUp, staggerContainer } from "@/utils/animations";

type Category = "All" | "Frontend" | "Backend" | "Database" | "Programming" | "Tools" | "Learning";

const categories: Category[] = ["All", "Frontend", "Backend", "Database", "Programming", "Tools", "Learning"];

const skills = [
  { name: "React.js", icon: SiReact, color: "#61dafb", category: "Frontend", level: 90 },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", category: "Frontend", level: 88 },
  { name: "HTML5", icon: SiHtml5, color: "#e34f26", category: "Frontend", level: 95 },
  { name: "CSS3", icon: SiCss, color: "#1572b6", category: "Frontend", level: 92 },
  { name: "Node.js", icon: SiNodedotjs, color: "#68a063", category: "Backend", level: 85 },
  { name: "Express.js", icon: SiExpress, color: "#ffffff", category: "Backend", level: 83 },
  { name: "REST APIs", icon: TbApi, color: "#00d4ff", category: "Backend", level: 87 },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248", category: "Database", level: 82 },
  { name: "MySQL", icon: SiMysql, color: "#4479a1", category: "Database", level: 78 },
  { name: "Java", icon: FaJava, color: "#ed8b00", category: "Programming", level: 80 },
  { name: "SQL", icon: FaDatabase, color: "#336791", category: "Programming", level: 82 },
  { name: "Git", icon: SiGit, color: "#f05032", category: "Tools", level: 88 },
  { name: "GitHub", icon: SiGithub, color: "#ffffff", category: "Tools", level: 90 },
  { name: "VS Code", icon: SiVscodium, color: "#007acc", category: "Tools", level: 95 },
  { name: "Android Studio", icon: SiAndroidstudio, color: "#3ddc84", category: "Tools", level: 65 },
  { name: ".NET", icon: SiDotnet, color: "#512bd4", category: "Learning", level: 30 },
];

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hovered, setHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="skill-card glass-card rounded-2xl p-6 flex flex-col items-center gap-4 cursor-default spotlight"
      style={{
        borderColor: hovered ? `${skill.color}50` : "rgba(255,255,255,0.08)",
        boxShadow: hovered ? `0 10px 40px ${skill.color}30, inset 0 0 20px ${skill.color}15` : undefined,
        background: hovered ? `linear-gradient(135deg, rgba(255,255,255,0.08) 0%, ${skill.color}10 100%)` : undefined,
      }}
    >
      {/* Icon with glow */}
      <motion.div
        animate={hovered ? { scale: 1.2, rotate: [0, -10, 10, 0] } : { scale: 1, rotate: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-16 h-16 rounded-2xl flex items-center justify-center relative"
      >
        <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 transition-opacity duration-300" 
          style={{ background: skill.color, opacity: hovered ? 0.4 : 0 }} />
        <div className="relative w-full h-full rounded-2xl flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}05)`,
            border: `1px solid ${skill.color}40`,
          }}>
          <Icon size={32} style={{ color: skill.color, filter: hovered ? `drop-shadow(0 0 8px ${skill.color})` : "none" }} />
        </div>
      </motion.div>

      {/* Name */}
      <div className="text-center w-full">
        <span className="text-sm font-display font-bold text-white tracking-wide block mb-2">
          {skill.name}
        </span>
        
        {/* Progress bar */}
        <div className="w-full h-1.5 bg-dark-700 rounded-full overflow-hidden mb-2 shadow-inner">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1.2, delay: index * 0.05 + 0.2, ease: "easeOut" }}
            className="h-full rounded-full relative"
            style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)` }}
          >
            <div className="absolute inset-0 bg-white/20 w-full h-full animate-pulse" />
          </motion.div>
        </div>
        <div className="flex justify-between w-full text-[10px] font-mono text-slate-500 uppercase tracking-wider">
          <span>Level</span>
          <span style={{ color: skill.color }}>{skill.level}%</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered = activeCategory === "All"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-aurora-blue/5 via-dark-900 to-dark-900 pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-4">
            <div className="section-badge border-aurora-teal/30 text-aurora-teal bg-aurora-teal/10">Technical Arsenal</div>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="section-title text-white mb-5">
            The Skill <span className="gradient-text-green">Universe</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-400 max-w-xl mx-auto text-lg">
            Technologies I command to craft scalable, high-performance digital experiences.
          </motion.p>
        </motion.div>

        {/* Enhanced Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 outline-none"
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(123,47,247,0.15))",
                    border: "1px solid rgba(0,212,255,0.4)",
                    boxShadow: "0 0 20px rgba(0,212,255,0.2)"
                  }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className={`relative z-10 ${activeCategory === cat ? "text-white text-shadow-sm" : "text-slate-400 hover:text-white"}`}>
                {cat}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filtered.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
