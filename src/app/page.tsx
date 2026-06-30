"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Briefcase, GraduationCap, Award, Code2, Link as LinkIcon, Mail, MessageCircle, ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

// Helper for scroll animations
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [isCertsExpanded, setIsCertsExpanded] = useState(false);

  const certificationsList = [
    { name: "Cyber Security Penetration Testing", issuer: "ID-Networkers (IDN.ID)", date: "Apr 2026", color: "text-red-500", bg: "bg-red-50 dark:bg-red-500/10", image: "/certificates/idnetowrkers.jpeg" },
    { name: "Introduction to Information Security Course", issuer: "Cyber Academy Indonesia", date: "Jul 2025", color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-500/10", image: "/certificates/cyberacademy.jpeg" },
    { name: "FREE CLASS - INTRO TO CYBER SECURITY", issuer: "Coding Studio", date: "Jul 2025", color: "text-teal-500", bg: "bg-teal-50 dark:bg-teal-500/10", image: "/certificates/codingStudio.jpeg" },
    { name: "Java for Object Oriented Programming", issuer: "Universitas Pendidikan Indonesia", date: "Des 2024", color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-500/10", image: "/certificates/javaUPI.jpeg" },
    { name: "Intro to Software Engineering", issuer: "RevoU", date: "Jul 2025", color: "text-yellow-500", bg: "bg-yellow-50 dark:bg-yellow-500/10", image: "/certificates/revoU.jpeg" },
    { name: "UI/UX 101: Learn by Designing in Figma", issuer: "HIMARPL-UPI", date: "Mei 2025", color: "text-pink-500", bg: "bg-pink-50 dark:bg-pink-500/10", image: "/certificates/uiuxhimarpl.jpeg" },
    { name: "Technoskill 1.0", issuer: "Ikatan Mahasiswa Elektro FTUI (IME FTUI)", date: "Jul 2025", color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-500/10", image: "/certificates/Technoskill.jpeg" },
    { name: "COMPFEST 17 COMPETITION CTF", issuer: "COMPFEST", date: "Des 2025", color: "text-slate-500", bg: "bg-slate-50 dark:bg-slate-500/10", image: "/certificates/compfest.jpeg" },
    { name: "CYBER MEETUP #10: Transfer Knowledge Cyber Security", issuer: "PT. Yukmari Project Indonesia", date: "Agu 2025", color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-500/10", image: "/certificates/yukmariproject.png" }
  ];

  // Desktop Skills (2 Rows)
  const desktopRow1 = [
    "Critical Thinking", "Analytical Skills", "Journalism", "Public Speaking",
    "Data Structures", "Algorithms", "C++", "Java", "Python"
  ];
  
  const desktopRow2 = [
    "Penetration Testing", "VAPT", "Red Team", "XSS", "SQL Injection",
    "UI/UX Design", "Figma", "HTML5", "CSS", "JavaScript"
  ];

  // Mobile Skills (3 Rows)
  const mobileRow1 = [
    "Critical Thinking", "Analytical Skills", "Journalism", "Public Speaking",
    "Data Structures", "Algorithms"
  ];
  const mobileRow2 = [
    "C++", "Java", "Python", "Penetration Testing", "VAPT", "Red Team", "XSS"
  ];
  const mobileRow3 = [
    "SQL Injection", "UI/UX Design", "Figma", "HTML5", "CSS", "JavaScript"
  ];

  return (
    <div className="space-y-24 pb-20">
      
      {/* Hero Section */}
      <section id="hero" className="min-h-[75vh] pt-12 md:pt-0 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <motion.div 
          className="flex-1 space-y-6 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeUpVariants} className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I&apos;m <span style={{ color: 'var(--brand-color)' }}>Dwi</span> Raysah<br />
            Anandifa <span style={{ color: 'var(--brand-color)' }}>Kautsar</span>
          </motion.h1>
          <motion.p variants={fadeUpVariants} className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl">
            Software Engineering Student @ UPI | Cybersecurity & Network Enthusiast | Building Secure & Scalable Systems
          </motion.p>
          <motion.div variants={fadeUpVariants} className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#contact" className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-lg shadow-blue-500/30">
              Get in Touch
            </a>
            <a href="#experience" className="px-6 py-3 rounded-full glass-panel glass-panel-hoverable font-medium transition-all">
              View Experience
            </a>
          </motion.div>
        </motion.div>
        
        {/* Creative Glassmorphism Profile Photo */}
        <motion.div 
          className="relative w-60 h-80 md:w-72 md:h-96 mx-auto md:mx-0 flex-shrink-0 mt-12 md:mt-0 group perspective-1000"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {/* Animated Glow Behind */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/40 to-cyan-500/40 blur-2xl rounded-3xl group-hover:opacity-80 transition-opacity duration-700 animate-pulse"></div>
          
          {/* Main Glassmorphism Portrait Frame */}
          <div className="!absolute inset-0 rounded-2xl glass-panel p-2.5 z-10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-1 group-hover:shadow-[0_20px_40px_rgba(37,99,235,0.3)] border border-white/20 dark:border-white/10 shadow-2xl bg-gradient-to-br from-white/20 to-white/5 dark:from-slate-700/50 dark:to-slate-800/50 backdrop-blur-xl">
             
             {/* The Photo */}
             <div className="w-full h-full relative rounded-xl overflow-hidden bg-[var(--bg-base)]">
               <img 
                 src="/profile_photo_new.png" 
                 alt="Dwi Raysah Anandifa Kautsar" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
               />
               
               {/* Overlay gradient for a premium look */}
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 pointer-events-none transition-opacity duration-500 group-hover:opacity-40"></div>
             </div>
          </div>

          <motion.div 
            className="!absolute -top-4 -right-4 p-3 rounded-xl glass-panel bg-white/90 dark:bg-slate-800/80 border border-slate-200 dark:border-white/20 shadow-xl backdrop-blur-md z-20"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Code2 className="text-blue-600 dark:text-cyan-400 w-6 h-6" />
          </motion.div>

          <motion.div 
            className="!absolute -bottom-4 -left-4 px-4 py-2.5 rounded-xl glass-panel bg-white/90 dark:bg-slate-800/80 border border-slate-200 dark:border-white/20 shadow-xl backdrop-blur-md z-20 flex items-center gap-2.5"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          >
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </div>
            <span className="text-sm font-bold text-[var(--text-main)]">Software Engineer</span>
          </motion.div>

        </motion.div>
      </section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="scroll-mt-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "0px 0px -40% 0px" }}
        variants={fadeUpVariants}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="p-2 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"><Code2 size={24} /></span>
          About Me
        </h2>
        <div className="glass-panel glass-panel-hoverable p-8 md:p-10 leading-relaxed text-[var(--text-muted)] text-lg">
          <p>
            Software Engineering student at UPI passionate about building secure and efficient systems at the intersection of Software Development, Cybersecurity, and Computer Networking. Proficient in Java, C++, Python, Laravel, and MySQL, with hands-on networking and security skills from TryHackMe, Cisco, and fundamental certifications. 
          </p>
          <div className={`mt-4 ${!isAboutExpanded ? 'hidden md:block' : 'block'}`}>
            <p>
              I focus on creating intuitive user experiences using Figma. Looking for collaboration or internship opportunities in software development, network infrastructure, or information security.
            </p>
          </div>
          <button 
            onClick={() => setIsAboutExpanded(!isAboutExpanded)}
            className="mt-4 font-semibold text-blue-600 dark:text-blue-400 md:hidden flex items-center gap-1 hover:underline"
          >
            {isAboutExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="experience" 
        className="scroll-mt-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "0px 0px -40% 0px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeUpVariants} className="text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="p-2 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"><Briefcase size={24} /></span>
          Experience
        </motion.h2>
        <div className="grid gap-6">
          {[
            {
              role: "Assistant Lecturer",
              org: "Universitas Pendidikan Indonesia",
              date: "Feb 2026 - Present",
              desc: "Facilitated practical laboratory sessions for Data Structures & Algorithms. Mentored students in algorithmic problem-solving using C++. Guided students through Design Thinking process and prototyping using Figma.",
              logo: "/logos/upi.svg"
            },
            {
              role: "Head of Organizational Resource Development",
              org: "HIMARPL UPI",
              date: "Jan 2026 - Present",
              desc: "Managed team development and organizational skills. Previously served as Staff, Head of Medical Division, Head of Event Division, and Project Officer for various impactful events.",
              logo: "/logos/himarpl.svg"
            },
            {
              role: "Journalist",
              org: "PERSLIMA UPI",
              date: "Feb 2025 - Present",
              desc: "Active reporter covering university affairs and political landscapes. Honed research, critical thinking, and communication skills. Spearheaded dynamic reporting and crafted engaging photojournalism.",
              logo: "/logos/perslima.svg"
            }
          ].map((exp, i) => (
            <motion.div key={i} variants={fadeUpVariants} className="glass-panel glass-panel-hoverable p-6 md:p-8 flex flex-col md:flex-row gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-100 flex flex-shrink-0 items-center justify-center border border-slate-200 dark:border-white/10 shadow-inner overflow-hidden p-2">
                <img src={exp.logo} alt={exp.org} className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{exp.org}</p>
                <p className="text-sm font-semibold text-[var(--text-muted)] mb-4 inline-block px-3 py-1 bg-slate-200/50 dark:bg-slate-900/40 rounded-full">{exp.date}</p>
                <p className="text-[var(--text-muted)] leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div variants={fadeUpVariants} className="mt-8 flex justify-center">
          <Link href="/experience" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50 dark:bg-slate-800/80 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-slate-700 transition-colors font-semibold shadow-sm border border-blue-200 dark:border-white/10">
            Read Full Experience Details <ChevronRight size={18} />
          </Link>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        id="education" 
        className="scroll-mt-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "0px 0px -40% 0px" }}
        variants={fadeUpVariants}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="p-2 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"><GraduationCap size={24} /></span>
          Education
        </h2>
        <div className="glass-panel glass-panel-hoverable p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
           <div className="w-24 h-24 rounded-full bg-white flex flex-shrink-0 items-center justify-center border-4 border-blue-100 dark:border-slate-700 shadow-md p-2 overflow-hidden">
               <img src="/logos/upi.svg" alt="Universitas Pendidikan Indonesia Logo" className="w-full h-full object-contain" />
           </div>
           <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold">Universitas Pendidikan Indonesia</h3>
              <p className="text-lg text-[var(--brand-color)] font-medium mt-1">Sarjana Komputer, Rekayasa Perangkat Lunak</p>
              <p className="text-sm text-[var(--text-muted)] mb-4 font-medium mt-2">Sep 2024 - Present</p>
              <div className="inline-block px-5 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-bold border border-blue-200 dark:border-blue-800">
                IPK: 3.90
              </div>
           </div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section 
        id="certifications" 
        className="scroll-mt-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "0px 0px -40% 0px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeUpVariants} className="text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="p-2 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"><Award size={24} /></span>
          Certifications
        </motion.h2>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
            display: flex;
            width: max-content;
          }
        `}</style>
        
        <div className="relative w-full overflow-hidden flex pt-4 pb-1 -mx-4 px-4 md:mx-0 md:px-0" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <div className="animate-marquee hover:[animation-play-state:paused] gap-6 px-3">
            {[...certificationsList, ...certificationsList].map((cert, i) => (
              <div key={i} className="glass-panel w-[320px] shrink-0 p-5 flex flex-col gap-4 transition-transform hover:-translate-y-2">
                <div className="relative w-full aspect-[1.4/1] rounded-lg overflow-hidden border border-white/20 dark:border-white/10 bg-black/5">
                  <Image src={cert.image} alt={cert.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-lg leading-tight mb-2 line-clamp-2" title={cert.name}>{cert.name}</h4>
                  <p className="text-sm font-medium text-[var(--brand-color)]">{cert.issuer}</p>
                  <p className="text-xs font-semibold text-[var(--text-muted)] mt-2">Diterbitkan {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
        <motion.section 
        id="skills" 
        className="scroll-mt-32 !mt-12 md:!mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "0px 0px -40% 0px" }}
        variants={fadeUpVariants}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="p-2 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"><LinkIcon size={24} /></span>
          Skills
        </h2>
        <div className="glass-panel py-10 overflow-hidden skills-container relative">
          
          {/* Overlay Gradients for smooth fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--bg-base)] to-transparent z-10 pointer-events-none opacity-80"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--bg-base)] to-transparent z-10 pointer-events-none opacity-80"></div>

          {/* Desktop View (2 Rows) */}
          <div className="hidden md:flex flex-col gap-6">
            <div className="flex w-max animate-marquee-left">
              {[...desktopRow1, ...desktopRow1].map((skill, i) => (
                <div key={`d1-${i}`} className="flex-shrink-0 px-6 py-3 mx-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800/50 font-bold text-sm shadow-sm text-[var(--text-main)] backdrop-blur-md">
                  {skill}
                </div>
              ))}
            </div>
            <div className="flex w-max animate-marquee-right">
              {[...desktopRow2, ...desktopRow2].map((skill, i) => (
                <div key={`d2-${i}`} className="flex-shrink-0 px-6 py-3 mx-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800/50 font-bold text-sm shadow-sm text-[var(--text-main)] backdrop-blur-md">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View (3 Rows) */}
          <div className="flex md:hidden flex-col gap-6">
            
            {/* Row 1 - Moving Left */}
            <div className="flex w-[200%] animate-marquee-left">
              {[...mobileRow1, ...mobileRow1, ...mobileRow1].map((skill, i) => (
                <div key={`m1-${i}`} className="flex-shrink-0 px-6 py-3 mx-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800/50 font-bold text-sm shadow-sm text-[var(--text-main)] backdrop-blur-md">
                  {skill}
                </div>
              ))}
            </div>

            {/* Row 2 - Moving Right */}
            <div className="flex w-[200%] animate-marquee-right">
              {[...mobileRow2, ...mobileRow2, ...mobileRow2].map((skill, i) => (
                <div key={`m2-${i}`} className="flex-shrink-0 px-6 py-3 mx-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800/50 font-bold text-sm shadow-sm text-[var(--text-main)] backdrop-blur-md">
                  {skill}
                </div>
              ))}
            </div>

            {/* Row 3 - Moving Left */}
            <div className="flex w-[200%] animate-marquee-left">
              {[...mobileRow3, ...mobileRow3, ...mobileRow3].map((skill, i) => (
                <div key={`m3-${i}`} className="flex-shrink-0 px-6 py-3 mx-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800/50 font-bold text-sm shadow-sm text-[var(--text-main)] backdrop-blur-md">
                  {skill}
                </div>
              ))}
            </div>

          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="scroll-mt-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariants}
      >
        <div className="glass-panel p-10 md:p-16 text-center relative overflow-hidden group">
           <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
           <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
           
           <div className="relative z-10">
             <h2 className="text-4xl md:text-5xl font-bold mb-6">Mari Berkoneksi!</h2>
             <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed">
               Apakah Anda memiliki peluang kolaborasi, proyek menarik, atau sekadar ingin berdiskusi? Jangan ragu untuk menghubungi saya melalui platform di bawah ini.
             </p>
             
             <div className="flex flex-wrap justify-center gap-4">
                <a href="https://www.linkedin.com/in/wikauts" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all hover:-translate-y-1.5 shadow-lg shadow-blue-600/30">
                  <LinkedinIcon size={22} /> LinkedIn
                </a>
                <a href="https://github.com/DwiKautsar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-medium transition-all hover:-translate-y-1.5 shadow-lg shadow-slate-900/30">
                  <GithubIcon size={22} /> GitHub
                </a>
                <a href="mailto:raysahdwi12@gmail.com" className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-red-500 hover:bg-red-600 text-white font-medium transition-all hover:-translate-y-1.5 shadow-lg shadow-red-500/30">
                  <Mail size={22} /> Gmail
                </a>
                <a href="https://wa.me/6285156468331" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-medium transition-all hover:-translate-y-1.5 shadow-lg shadow-green-500/30">
                  <MessageCircle size={22} /> WhatsApp
                </a>
             </div>
           </div>
        </div>
      </motion.section>

    </div>
  );
}
