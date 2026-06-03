"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiCode, FiCpu, FiTerminal, FiDatabase } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

const journeySteps = [
  {
    year: "2022",
    title: "The Beginning",
    description: "Wrote my first lines of code in C/C++. Discovered the logic of algorithms and the power of computational thinking.",
    icon: FiTerminal,
    color: "#00d4ff",
  },
  {
    year: "2023",
    title: "Web Development",
    description: "Shifted focus to the web. Mastered HTML, CSS, and vanilla JavaScript. Built my first responsive layouts.",
    icon: FiCode,
    color: "#7b2ff7",
  },
  {
    year: "2024",
    title: "Full Stack Mastery",
    description: "Embraced React.js and Node.js. Architected scalable systems and integrated MongoDB databases. Completed an internship at Futurik Technologies.",
    icon: FiDatabase,
    color: "#f72585",
  },
  {
    year: "2025",
    title: "AI Integration",
    description: "Explored the intersection of web development and Artificial Intelligence. Built HireSight with NLP and blockchain.",
    icon: FiCpu,
    color: "#00ff94",
  },
];

export default function CodingJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Calculate the height of the glowing line based on scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="py-32 relative overflow-hidden" ref={containerRef}>
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="flex justify-center mb-4">
            <div className="section-badge border-aurora-pink/30 text-aurora-pink bg-aurora-pink/10">
              <HiSparkles size={12} className="inline mr-1" /> Evolution
            </div>
          </div>
          <h2 className="section-title text-white mb-5">
            My <span className="gradient-text-warm">Coding Journey</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            A chronological mapping of my growth from a curious student to a proficient software engineer.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline center line background */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 rounded-full" />
          
          {/* Timeline animated glowing line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 w-1 bg-gradient-to-b from-aurora-blue via-aurora-purple to-aurora-pink -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(123,47,247,0.5)]"
            style={{ height: lineHeight }}
          />

          <div className="space-y-16">
            {journeySteps.map((step, i) => {
              const isEven = i % 2 === 0;
              const Icon = step.icon;
              return (
                <div key={step.year} className={`relative flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""}`}>
                  
                  {/* Center Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-20 border-4 border-dark-900 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                       style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}88)` }}>
                    <Icon size={20} className="text-white" />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                    className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16"}`}
                  >
                    <div className="glass-card rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden"
                         style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                      {/* Hover glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute -inset-1 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                           style={{ background: step.color }} />

                      <div className="relative z-10">
                        <span className="text-4xl font-display font-black opacity-10 absolute -top-4 -right-2 select-none pointer-events-none"
                              style={{ color: step.color }}>
                          {step.year}
                        </span>
                        <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold mb-4"
                             style={{ color: step.color, background: `${step.color}15`, border: `1px solid ${step.color}30` }}>
                          {step.year}
                        </div>
                        <h3 className="text-2xl font-display font-bold text-white mb-3">
                          {step.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
