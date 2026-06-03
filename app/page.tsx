"use client";

import { useState } from "react";
import CustomCursor from "@/components/ui/CustomCursor";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import CodingJourney from "@/components/sections/CodingJourney";
import GitHub from "@/components/sections/GitHub";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <CustomCursor />
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      <div className={`transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        {/* Global aurora orbs */}
        <div className="aurora-orb orb-1" />
        <div className="aurora-orb orb-2" />
        <div className="aurora-orb orb-3" />

        <Navbar />

        <main className="relative z-10">
          <Hero />

          {/* Section separator */}
          <div className="section-separator" />
          <About />
          <div className="section-separator" />
          <Skills />
          <div className="section-separator" />
          <Experience />
          <div className="section-separator" />
          <Projects />
          <div className="section-separator" />
          <Certifications />
          <div className="section-separator" />
          <CodingJourney />
          <div className="section-separator" />
          <GitHub />
          <div className="section-separator" />
          <Contact />
        </main>

        <Footer />
      </div>

      <style jsx global>{`
        .section-separator {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg,
            transparent,
            rgba(255,255,255,0.04) 20%,
            rgba(255,255,255,0.06) 50%,
            rgba(255,255,255,0.04) 80%,
            transparent
          );
          margin: 0 auto;
          max-width: 1280px;
        }
      `}</style>
    </>
  );
}
