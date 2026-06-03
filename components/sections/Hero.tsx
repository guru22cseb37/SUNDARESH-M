"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

/**
 * Interactive Liquid Gradient Background
 */
function LiquidAurora() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none bg-dark-950">
      {/* Dynamic ambient gradient that follows mouse */}
      <motion.div
        className="absolute inset-0 opacity-40 transition-opacity duration-1000"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(123, 47, 247, 0.4) 0%, rgba(0, 212, 255, 0.1) 30%, transparent 60%)`
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
      />
      
      {/* Massive slow-moving animated orbs */}
      <motion.div 
        animate={{ 
          rotate: [0, 360], 
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full blur-[120px] mix-blend-screen opacity-30"
        style={{ background: "radial-gradient(circle, #00d4ff, transparent)" }}
      />
      <motion.div 
        animate={{ 
          rotate: [360, 0], 
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[150px] mix-blend-screen opacity-30"
        style={{ background: "radial-gradient(circle, #7b2ff7, transparent)" }}
      />
      
      {/* Grid overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)' }} />
    </div>
  );
}

/**
 * Main Hero Section - Ultra Premium Unique Layout
 */
export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Name staggered animation
  const name = "SUNDARESH";
  const nameVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.05 + 0.2,
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    })
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <LiquidAurora />

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-7xl px-6 mx-auto flex flex-col items-center">
        
        {/* Top Minimalist Tag */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="flex items-center gap-3 mb-8 sm:mb-12"
        >
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-aurora-blue/50" />
          <span className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-slate-400 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            Software Engineer
          </span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-aurora-blue/50" />
        </motion.div>

        {/* Centerpiece Name (Staggered 3D Reveal) */}
        <div className="flex overflow-hidden perspective-1000 mb-2">
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={nameVariants}
              initial="hidden"
              animate="visible"
              className="font-display font-black text-transparent bg-clip-text leading-none tracking-tighter"
              style={{ 
                fontSize: "clamp(4rem, 14vw, 12rem)",
                backgroundImage: "linear-gradient(180deg, #ffffff 0%, #a1a1aa 100%)",
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))"
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Floating Subtitle Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative mb-16"
        >
          <div className="absolute inset-0 bg-aurora-purple/20 blur-2xl rounded-full" />
          <h2 className="relative text-xl sm:text-3xl font-light text-slate-300 text-center max-w-2xl mx-auto leading-relaxed">
            Architecting intelligent digital experiences with <br className="hidden sm:block" />
            <span className="font-semibold text-white drop-shadow-[0_0_15px_rgba(0,212,255,0.8)]">React</span>, 
            <span className="font-semibold text-white drop-shadow-[0_0_15px_rgba(123,47,247,0.8)]"> Node.js</span> & 
            <span className="font-semibold text-white drop-shadow-[0_0_15px_rgba(247,37,133,0.8)]"> Applied AI</span>.
          </h2>
        </motion.div>

        {/* Asymmetrical Action Buttons & Floating Stats */}
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Left Side: Animated Spin Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2, duration: 0.8 }}
            className="hidden md:flex items-center justify-center relative w-32 h-32 group cursor-pointer"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
              <svg viewBox="0 0 100 100" className="w-full h-full text-slate-400 group-hover:text-aurora-blue transition-colors">
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                <text className="text-[11px] font-mono uppercase tracking-[0.2em] fill-current">
                  <textPath href="#circlePath" startOffset="0%">• view my work • view my work </textPath>
                </text>
              </svg>
            </motion.div>
            <div className="w-12 h-12 rounded-full glass-card border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <FiArrowDown className="text-white" />
            </div>
          </motion.div>

          {/* Center: Main CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.8 }}
            className="flex gap-4"
          >
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="relative group px-8 py-4 rounded-2xl overflow-hidden font-bold text-white shadow-[0_0_40px_rgba(123,47,247,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-pink group-hover:opacity-80 transition-opacity" />
              <div className="absolute inset-[1px] bg-dark-950 rounded-[15px] group-hover:bg-opacity-0 transition-all duration-300" />
              <span className="relative z-10 flex items-center gap-2 text-sm uppercase tracking-wider">
                Start a Project <HiSparkles />
              </span>
            </button>
          </motion.div>

          {/* Right Side: Floating Socials / Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.6, duration: 0.8 }}
            className="flex flex-row md:flex-col gap-4"
          >
            {[
              { label: "Github", icon: FiGithub, href: "https://github.com/056Sundaresh" },
              { label: "LinkedIn", icon: FiLinkedin, href: "https://linkedin.com/in/sundaresh-m" },
              { label: "Email", icon: FiMail, href: "mailto:sundaresh017@gmail.com" }
            ].map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-aurora-blue/50 transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] hover:-translate-y-1">
                <social.icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
