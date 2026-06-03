"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";

const WHATSAPP_NUMBER = "917604839043";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Sundaresh! 👋 I came across your portfolio and I'd love to connect. Let's talk!"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-12 mt-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-aurora-purple/10 via-dark-900 to-dark-900" />
      
      {/* Aurora glow top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-aurora-blue via-aurora-purple to-transparent shadow-[0_0_15px_rgba(123,47,247,0.5)]" />

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-aurora-blue via-aurora-purple to-aurora-pink flex items-center justify-center text-lg font-black font-display text-white shadow-[0_0_20px_rgba(123,47,247,0.3)]">
              SM
            </div>
            <span className="font-display font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              Sundaresh M
            </span>
          </motion.div>

          {/* Quote */}
          <p className="text-slate-400 text-center font-mono text-sm max-w-md px-4">
            &ldquo;Building intelligent, scalable, and beautifully crafted digital experiences.&rdquo;
          </p>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {[
              { icon: IoLogoWhatsapp, href: WHATSAPP_URL, label: "WhatsApp", color: "#25d366" },
              { icon: FiGithub, href: "https://github.com/056Sundaresh", label: "GitHub", color: "#ffffff" },
              { icon: FiLinkedin, href: "https://linkedin.com/in/sundaresh-m", label: "LinkedIn", color: "#0a66c2" },
              { icon: FiMail, href: "mailto:sundaresh017@gmail.com", label: "Email", color: "#00d4ff" },
            ].map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 relative group overflow-hidden"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
                whileHover={{ y: -4, scale: 1.05, borderColor: `${color}40`, boxShadow: `0 10px 20px ${color}20, inset 0 0 10px ${color}10` }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Icon size={20} className="relative z-10 text-slate-400 group-hover:text-white transition-colors" style={{ filter: `drop-shadow(0 0 5px ${color})` }} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-slate-500 text-xs font-mono mt-4">
            <div className="flex items-center gap-1.5">
              © {currentYear} Crafted with 
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <FiHeart className="text-aurora-pink" size={14} fill="currentColor" />
              </motion.div>
              {" "}by <span className="text-white font-semibold ml-1 tracking-wider">Sundaresh M</span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <div>All rights reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
