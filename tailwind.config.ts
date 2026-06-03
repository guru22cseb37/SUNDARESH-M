import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-fira-code)", "monospace"],
      },
      colors: {
        // Aurora palette
        aurora: {
          blue: "#00d4ff",
          purple: "#7b2ff7",
          pink: "#f72585",
          green: "#00ff94",
          teal: "#00b4d8",
        },
        // Dark theme surfaces
        dark: {
          900: "#030712",
          800: "#0a0f1e",
          700: "#0d1424",
          600: "#111827",
          500: "#1f2937",
          400: "#374151",
        },
        // Glass
        glass: {
          light: "rgba(255, 255, 255, 0.05)",
          medium: "rgba(255, 255, 255, 0.08)",
          heavy: "rgba(255, 255, 255, 0.12)",
        },
        // Neon accents
        neon: {
          blue: "#00d4ff",
          purple: "#a855f7",
          pink: "#ec4899",
          green: "#10b981",
          yellow: "#fbbf24",
        },
      },
      backgroundImage: {
        "aurora-1": "linear-gradient(135deg, #00d4ff22, #7b2ff722, #f7258522)",
        "aurora-2": "linear-gradient(135deg, #00ff9422, #00b4d822, #7b2ff722)",
        "hero-gradient":
          "radial-gradient(ellipse at top, #0d1424 0%, #030712 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        "neon-blue": "linear-gradient(135deg, #00d4ff, #7b2ff7)",
        "neon-pink": "linear-gradient(135deg, #f72585, #7b2ff7)",
        "neon-green": "linear-gradient(135deg, #00ff94, #00b4d8)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        shimmer: "shimmer 2.5s linear infinite",
        "aurora-shift": "aurora-shift 8s ease-in-out infinite alternate",
        "spin-slow": "spin 8s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
        "border-glow": "border-glow 3s linear infinite",
        typing: "typing 3.5s steps(40) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { boxShadow: "0 0 10px #00d4ff44, 0 0 20px #00d4ff22" },
          to: { boxShadow: "0 0 20px #00d4ff88, 0 0 40px #00d4ff44, 0 0 60px #00d4ff22" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "aurora-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 20px currentColor" },
          "50%": { opacity: "0.7", boxShadow: "0 0 40px currentColor" },
        },
        "slide-up": {
          from: { transform: "translateY(30px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "border-glow": {
          "0%, 100%": { borderColor: "#00d4ff" },
          "33%": { borderColor: "#7b2ff7" },
          "66%": { borderColor: "#f72585" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "neon-blue": "0 0 20px #00d4ff44, 0 0 40px #00d4ff22",
        "neon-purple": "0 0 20px #7b2ff744, 0 0 40px #7b2ff722",
        "neon-pink": "0 0 20px #f7258544, 0 0 40px #f7258522",
        "neon-green": "0 0 20px #00ff9444, 0 0 40px #00ff9422",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-hover": "0 16px 48px 0 rgba(0, 0, 0, 0.5)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
