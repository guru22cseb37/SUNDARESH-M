"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiMail, FiPhone, FiLinkedin, FiGithub,
  FiSend, FiDownload, FiCalendar, FiMapPin,
} from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from "@/utils/animations";

const WHATSAPP_NUMBER = "917604839043"; // +91 7604839043
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Sundaresh! 👋 I came across your portfolio and I'd love to connect. Let's talk!"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const contactInfo = [
  {
    icon: FiPhone,
    label: "Phone",
    value: "+91 7604839043",
    href: "tel:+917604839043",
    color: "#00ff94",
  },
  {
    icon: IoLogoWhatsapp,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: WHATSAPP_URL,
    color: "#25d366",
  },
  {
    icon: FiMail,
    label: "Email",
    value: "sundaresh017@gmail.com",
    href: "mailto:sundaresh017@gmail.com",
    color: "#00d4ff",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sundaresh-m",
    href: "https://linkedin.com/in/sundaresh-m",
    color: "#0a66c2",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/sundaresh017",
    href: "https://github.com/sundaresh017",
    color: "#ffffff",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Madurai, Tamil Nadu",
    href: "#",
    color: "#f72585",
  },
];

type FormState = { name: string; email: string; subject: string; message: string };

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens Gmail/mail client directly — zero backend needed
    const subject = encodeURIComponent(form.subject || "Portfolio Contact");
    const body = encodeURIComponent(
      `Hi Sundaresh,\n\nName: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.open(`mailto:sundaresh017@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-32 relative">
      {/* Background glows */}
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/4 right-0 w-64 h-64 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(123,47,247,0.05) 0%, transparent 70%)" }}
      />

      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-4">
            <div className="section-badge">Get In Touch</div>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="section-title text-white mb-4">
            Let&apos;s{" "}
            <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-400 max-w-xl mx-auto">
            Have a project in mind, a role to fill, or just want to say hello?
            I&apos;d love to hear from you. I respond within 24 hours.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Left: Contact info */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Availability badge */}
            <div
              className="glass-card rounded-2xl p-5 flex items-center gap-3"
              style={{ borderColor: "rgba(0,255,148,0.2)" }}
            >
              <div className="relative flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-aurora-green" />
                <div
                  className="absolute inset-0 rounded-full bg-aurora-green animate-ping opacity-50"
                  style={{ background: "#00ff94" }}
                />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Available for Work</div>
                <div className="text-xs text-slate-400 font-mono">
                  Open to full-time &amp; internship roles
                </div>
              </div>
            </div>

            {/* Contact cards */}
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                className="glass-card rounded-2xl p-4 flex items-center gap-3 group spotlight"
                style={{ borderColor: `${info.color}20` }}
                id={`contact-${info.label.toLowerCase()}`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                  style={{
                    background: `${info.color}15`,
                    border: `1px solid ${info.color}30`,
                  }}
                >
                  <info.icon size={18} style={{ color: info.color }} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-slate-500 font-mono">{info.label}</div>
                  <div className="text-sm text-slate-200 font-medium truncate group-hover:text-white transition-colors">
                    {info.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 mt-2">
              {/* WhatsApp CTA */}
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="flex items-center justify-center gap-2.5 py-3.5 rounded-2xl font-semibold text-sm text-white relative overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, #25d366, #128c7e)",
                  boxShadow: "0 0 20px rgba(37,211,102,0.25)",
                }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 35px rgba(37,211,102,0.45)" }}
                whileTap={{ scale: 0.97 }}
                id="whatsapp-connect"
              >
                {/* Shimmer */}
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
                  }}
                />
                <IoLogoWhatsapp size={20} />
                Message on WhatsApp
              </motion.a>

              <motion.a
                href="https://calendly.com/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.9 }}
                className="flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold text-sm transition-all btn-secondary"
                id="schedule-meeting"
              >
                <FiCalendar size={16} />
                Schedule a Meeting
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.0 }}
                className="btn-primary flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold text-sm text-white"
                id="download-resume"
              >
                <FiDownload size={16} />
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <div
              className="glass-card rounded-3xl p-8 h-full"
              style={{ borderColor: "rgba(0,212,255,0.1)" }}
            >
              <h3 className="font-display font-semibold text-white text-xl mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-500 font-mono mb-6">
                Fills your email client — no account required.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="text-xs font-mono text-slate-400 mb-1.5 block">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl glass text-white placeholder-slate-500 text-sm outline-none transition-all"
                      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-xs font-mono text-slate-400 mb-1.5 block">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl glass text-white placeholder-slate-500 text-sm outline-none transition-all"
                      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="text-xs font-mono text-slate-400 mb-1.5 block">
                    Subject *
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Job Opportunity / Collaboration / Say Hello"
                    className="w-full px-4 py-3 rounded-xl glass text-white placeholder-slate-500 text-sm outline-none transition-all"
                    style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-xs font-mono text-slate-400 mb-1.5 block">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity or project..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl glass text-white placeholder-slate-500 text-sm outline-none resize-none transition-all"
                    style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold text-white"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  id="contact-submit"
                >
                  {sent ? (
                    <>✓ Opening your email app...</>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
