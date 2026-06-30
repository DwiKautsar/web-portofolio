"use client";

import { Briefcase, ArrowLeft, Calendar, MapPin, Building2, ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

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

export default function ExperiencePage() {
  return (
    <div className="space-y-12 pb-20">
      
      {/* Header Section */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.div variants={fadeUpVariants}>
          <Link href="/#experience" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 dark:bg-slate-800/50 dark:hover:bg-slate-700/50 transition-colors font-medium text-sm backdrop-blur-md border border-white/20">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </motion.div>
        
        <motion.h1 variants={fadeUpVariants} className="text-4xl md:text-5xl font-bold tracking-tight flex items-center gap-4">
          <span className="p-3 rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
            <Briefcase size={32} />
          </span>
          Detailed Experience
        </motion.h1>
        
        <motion.p variants={fadeUpVariants} className="text-lg text-[var(--text-muted)] max-w-3xl leading-relaxed">
          A comprehensive look at my professional journey, academic contributions, and organizational leadership roles.
        </motion.p>
      </motion.div>

      {/* Timeline Container */}
      <motion.div 
        className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500/30 before:to-transparent"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        
        {/* Experience 1: Assistant Lecturer */}
        <motion.div variants={fadeUpVariants} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[var(--bg-base)] bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 overflow-hidden p-1.5">
            <img src="/logos/upi.svg" alt="UPI Logo" className="w-full h-full object-contain" />
          </div>
          
          {/* Card */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel glass-panel-hoverable p-6 md:p-8 relative">
             <div className="flex flex-col gap-1 mb-4">
               <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">Assistant Lecturer</h3>
               <p className="font-semibold text-lg">Universitas Pendidikan Indonesia</p>
               <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-sm font-medium text-[var(--text-muted)]">
                 <span className="flex items-center gap-1"><Calendar size={14} /> Feb 2026 - Present</span>
                 <span className="flex items-center gap-1"><MapPin size={14} /> Bandung, Indonesia</span>
                 <span className="px-2 py-0.5 rounded-md bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs">Part-time</span>
               </div>
             </div>
             
             <div className="space-y-4 text-[var(--text-muted)] text-sm md:text-base">
               <div>
                 <h4 className="font-bold text-[var(--text-main)] mb-1">Data Structures & Algorithms:</h4>
                 <ul className="list-disc list-outside ml-5 space-y-1">
                   <li>Facilitated practical laboratory sessions and mentored students in understanding complex data structures (Trees, Graphs, Hash Tables) and algorithmic problem-solving.</li>
                   <li>Evaluated coding assignments and provided constructive feedback to ensure code efficiency and best practices using programming languages C++.</li>
                   <li>Assisted students in debugging and optimizing their logic for complex technical problems.</li>
                 </ul>
               </div>
               <div>
                 <h4 className="font-bold text-[var(--text-main)] mb-1">Design Thinking:</h4>
                 <ul className="list-disc list-outside ml-5 space-y-1">
                   <li>Guided students through the 5 stages of the Design Thinking process (Empathize, Define, Ideate, Prototype, Test) to solve real-world user problems.</li>
                   <li>Mentored teams during the prototyping phase using tools like Figma, fostering a strong foundation in UI/UX principles and user-centered design.</li>
                   <li>Facilitated brainstorming sessions and evaluated final project pitches.</li>
                 </ul>
               </div>
             </div>
          </div>
        </motion.div>

        {/* Experience 2: HIMARPL */}
        <motion.div variants={fadeUpVariants} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[var(--bg-base)] bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 overflow-hidden p-1.5">
            <img src="/logos/himarpl.svg" alt="HIMARPL Logo" className="w-full h-full object-contain" />
          </div>
          
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel glass-panel-hoverable p-6 md:p-8 relative">
             <div className="flex flex-col gap-1 mb-5 border-b border-white/10 pb-4">
               <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">HIMARPL-UPI</h3>
               <p className="font-semibold text-lg">Himpunan Mahasiswa Rekayasa Perangkat Lunak</p>
               <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-sm font-medium text-[var(--text-muted)]">
                 <span className="flex items-center gap-1"><MapPin size={14} /> Bandung, Indonesia</span>
               </div>
             </div>
             
             <div className="space-y-4 text-[var(--text-muted)] text-sm md:text-base relative before:absolute before:inset-0 before:ml-[5px] before:h-full before:w-[2px] before:bg-white/10 dark:before:bg-white/5">
                {[
                  { role: "Head of Organizational Resource Development Dept.", date: "Jan 2026 - Present" },
                  { role: "Staff of Organizational Resource Development Dept.", date: "Feb 2025 - Dec 2025" },
                  { role: "Head of Medical Division (Arak Arakan 2025)", date: "May 2025 - Oct 2025" },
                  { role: "Head of Event Division (RPL Goes To School 2025)", date: "Jul 2025 - Sep 2025" },
                  { role: "Head of Event Division (Studi Banding HIMARPL X HIMADIRA)", date: "May 2025 - Sep 2025" },
                  { role: "Head of Creative & Media (Kunjungan Industri RPL 2025)", date: "Jul 2025 - Aug 2025" },
                  { role: "Project Officer (One Day With HIMARPL 2025)", date: "Jun 2025 - Aug 2025" },
                  { role: "Head of F&B Division (Dies Natalis RPL ke-6)", date: "May 2025 - Jun 2025" },
                  { role: "Head of F&B Division (MAKRAB RPL 2025)", date: "Mar 2025 - Apr 2025" },
                ].map((item, i) => (
                  <div key={i} className="relative pl-6">
                    <div className="absolute left-[1px] top-2 w-2 h-2 rounded-full bg-blue-500"></div>
                    <h4 className="font-bold text-[var(--text-main)]">{item.role}</h4>
                    <p className="text-xs mt-0.5">{item.date}</p>
                  </div>
                ))}
             </div>
          </div>
        </motion.div>

        {/* Experience 3: Journalist */}
        <motion.div variants={fadeUpVariants} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[var(--bg-base)] bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 overflow-hidden p-1.5">
            <img src="/logos/perslima.svg" alt="PERSLIMA Logo" className="w-full h-full object-contain" />
          </div>
          
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel glass-panel-hoverable p-6 md:p-8 relative">
             <div className="flex flex-col gap-1 mb-4">
               <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">Journalist</h3>
               <p className="font-semibold text-lg">PERSLIMA UPI</p>
               <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-sm font-medium text-[var(--text-muted)]">
                 <span className="flex items-center gap-1"><Calendar size={14} /> Feb 2025 - Present</span>
                 <span className="flex items-center gap-1"><MapPin size={14} /> Bandung, Indonesia</span>
               </div>
             </div>
             
             <div className="space-y-4 text-[var(--text-muted)] text-sm md:text-base">
               <p>
                 Serving as an active reporter for the campus press, covering a wide range of topics from university affairs to broader political landscapes. This role has significantly honed my research, critical thinking, and communication skills - traits that strongly complement my technical background in Software Engineering.
               </p>
               <div>
                 <h4 className="font-bold text-[var(--text-main)] mb-1 mt-3">Key Responsibilities & Contributions:</h4>
                 <ul className="list-disc list-outside ml-5 space-y-2 mt-2">
                   <li><strong className="text-[var(--text-main)]">Political & Campus Affairs:</strong> Investigated and reported on dynamic university policies, student aspirations, and local/national political issues, ensuring objective and well-researched information delivery.</li>
                   <li><strong className="text-[var(--text-main)]">Dynamic Reporting (Breaking & Feature News):</strong> Spearheaded both incidental coverage (breaking news) for fast-paced events and planned/in-depth feature stories, demonstrating adaptability in dynamic environments.</li>
                   <li><strong className="text-[var(--text-main)]">Digital Journalism:</strong> Crafted engaging photojournalism and social media news captions (berita takarir) to boost reader engagement and deliver concise, impactful information to the digital audience.</li>
                   <li><strong className="text-[var(--text-main)]">Information Synthesis:</strong> Conducted interviews and synthesized complex educational and political issues into accessible, high-quality articles.</li>
                 </ul>
               </div>
             </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
