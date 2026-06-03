"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiStar, FiGitBranch, FiCode } from "react-icons/fi";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const GITHUB_USERNAME = "056Sundaresh";

const stats = [
  { icon: FiGithub, label: "Repositories", value: "12+", color: "#00d4ff" },
  { icon: FiStar, label: "Stars Earned", value: "8+", color: "#fbbf24" },
  { icon: FiGitBranch, label: "Contributions", value: "200+", color: "#7b2ff7" },
  { icon: FiCode, label: "Languages", value: "6+", color: "#00ff94" },
];

const languages = [
  { name: "JavaScript", percent: 42, color: "#f7df1e" },
  { name: "TypeScript", percent: 18, color: "#3178c6" },
  { name: "Java", percent: 15, color: "#ed8b00" },
  { name: "HTML/CSS", percent: 14, color: "#e34f26" },
  { name: "Python", percent: 7, color: "#3776ab" },
  { name: "Other", percent: 4, color: "#6b7280" },
];

// Simulated contribution data
const generateContribData = () => {
  const weeks = 26;
  const days = 7;
  return Array.from({ length: weeks }, (_, w) =>
    Array.from({ length: days }, (_, d) => ({
      count: Math.random() < 0.6 ? Math.floor(Math.random() * 8) : 0,
    }))
  );
};

const contribData = generateContribData();

function ContribCell({ count, delay }: { count: number; delay: number }) {
  const opacity = count === 0 ? 0.03 : count < 2 ? 0.25 : count < 4 ? 0.5 : count < 6 ? 0.75 : 1;
  const isZero = count === 0;

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.2, delay }}
      className={`w-[14px] h-[14px] rounded-sm transition-all duration-300 ${!isZero && 'hover:scale-150 hover:z-10'}`}
      style={{
        background: isZero ? "rgba(255,255,255,0.05)" : `rgba(0,212,255,${opacity})`,
        boxShadow: count > 4 ? `0 0 10px rgba(0,212,255,0.6)` : "none",
        border: isZero ? "1px solid rgba(255,255,255,0.02)" : "1px solid rgba(0,212,255,0.2)",
      }}
      title={`${count} contributions`}
    />
  );
}

export default function GitHub() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="github" className="py-32 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 bg-aurora-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-4">
            <div className="section-badge border-aurora-blue/30 text-aurora-blue bg-aurora-blue/10">
              <FiGithub className="inline mr-1" /> Open Source
            </div>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="section-title text-white mb-4">
            GitHub <span className="gradient-text">Activity</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-400 max-w-xl mx-auto text-lg">
            Consistency in code is consistency in character. My contribution landscape.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-[2rem] p-6 text-center spotlight group"
            >
              <div className="w-14 h-14 rounded-full mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                   style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}30` }}>
                <stat.icon size={24} style={{ color: stat.color }} />
              </div>
              <div className="text-3xl font-display font-black mb-1" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-mono tracking-widest uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Graph & Languages */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Contribution graph */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-card rounded-[2.5rem] p-8 md:p-10 spotlight"
            style={{ borderColor: "rgba(0,212,255,0.15)" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <div>
                <h3 className="font-display font-bold text-white text-xl">Contribution Graph</h3>
                <p className="text-slate-500 text-sm mt-1">Last 6 months of activity</p>
              </div>
              <span className="text-xs font-mono text-aurora-blue bg-aurora-blue/10 px-4 py-2 rounded-full border border-aurora-blue/20 flex-shrink-0">
                200+ total contributions
              </span>
            </div>
            
            <div className="overflow-x-auto pb-4 hide-scrollbar">
              <div className="flex gap-2 min-w-max">
                {contribData.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-2">
                    {week.map((day, di) => (
                      <ContribCell key={di} count={day.count} delay={wi * 0.015 + di * 0.01} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-end gap-3 mt-6 text-xs text-slate-500 font-mono">
              <span>Less</span>
              {[0.03, 0.25, 0.5, 0.75, 1].map((op, i) => (
                <div key={i} className="w-3.5 h-3.5 rounded-sm"
                     style={{ background: i === 0 ? "rgba(255,255,255,0.05)" : `rgba(0,212,255,${op})`, border: i === 0 ? "1px solid rgba(255,255,255,0.05)" : "none" }} />
              ))}
              <span>More</span>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[2.5rem] p-8 md:p-10 flex flex-col"
          >
            <h3 className="font-display font-bold text-white text-xl mb-1">Languages</h3>
            <p className="text-slate-500 text-sm mb-8">Most used in repositories</p>
            
            <div className="space-y-5 flex-1">
              {languages.map((lang, i) => (
                <div key={lang.name} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    <div className="w-3 h-3 rounded-full" style={{ background: lang.color, boxShadow: `0 0 10px ${lang.color}` }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-200 font-semibold">{lang.name}</span>
                      <span className="font-mono text-slate-400">{lang.percent}%</span>
                    </div>
                    <div className="h-1.5 bg-dark-800 rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 + 0.4, ease: "easeOut" }}
                        className="h-full rounded-full relative"
                        style={{ background: lang.color }}
                      >
                        <div className="absolute inset-0 bg-white/30 w-full h-full" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <motion.a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 btn-primary w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm text-white"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiGithub size={18} />
              Follow on GitHub
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
