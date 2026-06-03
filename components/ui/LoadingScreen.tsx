"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const codeLines = [
  "$ initializing portfolio...",
  "$ loading React components...",
  "$ connecting to Node.js backend...",
  "$ running AI algorithms...",
  "$ building digital experience...",
  "✓ build complete in 2.4s",
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const totalDuration = 2800;
    const lineInterval = totalDuration / codeLines.length;

    const lineTimer = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev >= codeLines.length - 1) {
          clearInterval(lineTimer);
          return prev;
        }
        return prev + 1;
      });
    }, lineInterval);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setDone(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return prev + 1.5;
      });
    }, totalDuration / 100);

    return () => {
      clearInterval(lineTimer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <div className="text-4xl font-display font-bold gradient-text mb-2">
              SM
            </div>
            <div className="text-xs font-mono text-slate-500 tracking-widest uppercase">
              Sundaresh M Portfolio
            </div>
          </motion.div>

          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-dark rounded-2xl p-6 w-[380px] mb-8"
          >
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="text-xs font-mono text-slate-500 ml-2">terminal</span>
            </div>
            <div className="space-y-1.5 min-h-[140px]">
              {codeLines.slice(0, currentLine + 1).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`font-mono text-sm ${
                    i === currentLine
                      ? line.startsWith("✓")
                        ? "text-aurora-green"
                        : "text-aurora-blue"
                      : "text-slate-500"
                  }`}
                >
                  {line}
                  {i === currentLine && !line.startsWith("✓") && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.7, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-aurora-blue ml-1 align-middle"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-[380px]"
          >
            <div className="flex justify-between text-xs font-mono text-slate-500 mb-2">
              <span>Compiling...</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="loading-bar">
              <motion.div
                className="loading-bar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
