"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiAward, FiExternalLink, FiCheckCircle } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const certs = [
  {
    id: "CERT-01",
    title: "Java Full Stack Web Developer",
    issuer: "Wipro TalentNext",
    date: "August 2023",
    color: "#00d4ff",
    link: "#",
    badge: "Full Stack",
    skills: ["Java", "Spring Boot", "React", "MySQL"]
  },
  {
    id: "CERT-02",
    title: "SQL",
    issuer: "HackerRank",
    date: "September 2023",
    color: "#7b2ff7",
    link: "#",
    badge: "Database",
    skills: ["Queries", "Joins", "Optimization"]
  },
  {
    id: "CERT-03",
    title: "JavaScript",
    issuer: "HackerRank",
    date: "October 2023",
    color: "#f7df1e",
    link: "#",
    badge: "Frontend",
    skills: ["ES6+", "DOM", "Async/Await"]
  },
  {
    id: "CERT-04",
    title: "Java",
    issuer: "HackerRank",
    date: "November 2023",
    color: "#ed8b00",
    link: "#",
    badge: "Backend",
    skills: ["OOP", "Data Structures", "Algorithms"]
  },
];

function CertTicket({ cert, index }: { cert: typeof certs[0]; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (y - 0.5) * 10, y: -(x - 0.5) * 10 });
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.3 }}
      className="relative"
    >
      <div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
        className="glass-card rounded-[2rem] overflow-hidden flex flex-col md:flex-row relative group"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: hovered ? "transform 0.1s linear" : "transform 0.6s ease",
          borderColor: hovered ? `${cert.color}40` : "rgba(255,255,255,0.05)",
          boxShadow: hovered ? `0 20px 40px rgba(0,0,0,0.4), 0 0 20px ${cert.color}15` : undefined
        }}
      >
        {/* Ambient background glow inside ticket */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(circle at right, ${cert.color}15 0%, transparent 60%)` }}
        />

        {/* Main Body */}
        <div className="p-8 flex-1 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
              style={{ background: `linear-gradient(135deg, ${cert.color}20, ${cert.color}05)`, border: `1px solid ${cert.color}40` }}>
              <FiAward size={20} style={{ color: cert.color }} />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest font-mono px-2 py-0.5 rounded-full mb-1 inline-block"
                style={{ color: cert.color, border: `1px solid ${cert.color}30`, background: `${cert.color}10` }}>
                {cert.badge}
              </span>
              <p className="text-slate-500 text-xs font-mono">{cert.id}</p>
            </div>
          </div>

          <h3 className="font-display font-bold text-white text-2xl mb-2 transition-colors duration-300"
              style={{ textShadow: hovered ? `0 0 20px ${cert.color}40` : 'none' }}>
            {cert.title}
          </h3>
          <div className="text-slate-400 text-sm mb-6 flex items-center gap-2">
            <FiCheckCircle style={{ color: cert.color }} size={14} /> Issued by <span className="text-white font-medium">{cert.issuer}</span>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2">
            {cert.skills.map(skill => (
              <span key={skill} className="px-3 py-1 rounded-lg text-xs font-mono text-slate-300 glass"
                    style={{ border: "1px solid rgba(255,255,255,0.05)" }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Ticket Perforation line (hidden on small screens, shown as dashed line) */}
        <div className="hidden md:flex flex-col justify-between items-center w-8 relative z-10 before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:border-l-2 before:border-dashed before:border-white/10">
          <div className="w-6 h-6 rounded-full bg-dark-900 absolute -top-3 left-1/2 -translate-x-1/2 shadow-inner" />
          <div className="w-6 h-6 rounded-full bg-dark-900 absolute -bottom-3 left-1/2 -translate-x-1/2 shadow-inner" />
        </div>

        {/* Right Stub */}
        <div className="p-8 md:w-48 flex flex-col justify-between relative z-10 md:bg-white/[0.01] border-t md:border-t-0 md:border-l border-white/5">
          <div>
            <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Date</p>
            <p className="text-white font-medium text-sm">{cert.date}</p>
          </div>
          
          <div className="mt-6 md:mt-0 flex justify-between md:flex-col items-center md:items-end gap-4">
            {/* Fake Barcode */}
            <div className="flex gap-1 h-8 opacity-20">
              {[1, 3, 2, 4, 1, 1, 3, 2, 1, 4, 2].map((w, i) => (
                <div key={i} className="bg-white h-full" style={{ width: `${w}px` }} />
              ))}
            </div>
            
            <a href={cert.link} target="_blank" rel="noopener noreferrer"
               className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white transition-all hover:scale-110"
               style={{ background: `linear-gradient(135deg, ${cert.color}, ${cert.color}88)`, boxShadow: `0 4px 15px ${cert.color}40` }}>
              <FiExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" className="py-32 relative">
      <div className="absolute inset-0 bg-dark-900 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 bg-aurora-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-4">
            <div className="section-badge border-aurora-purple/30 text-aurora-purple bg-aurora-purple/10">
              <FiAward className="inline mr-1" /> Qualifications
            </div>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="section-title text-white mb-5">
            Licenses & <span className="gradient-text">Certifications</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-400 max-w-xl mx-auto text-lg">
            A verified track record of continuous learning, styled as digital credentials.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certs.map((cert, i) => (
            <CertTicket key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
