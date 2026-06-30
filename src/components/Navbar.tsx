"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { motion } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    document.body.style.overflow = "";
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const links = [
    { name: "About", href: "/#about", id: "about" },
    { name: "Experience", href: "/#experience", id: "experience" },
    { name: "Education", href: "/#education", id: "education" },
    { name: "Certifications", href: "/#certifications", id: "certifications" },
    { name: "Skills", href: "/#skills", id: "skills" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    // Auto-close when resizing to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    links.forEach((link) => {
      const element = document.querySelector(`#${link.id}`);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection(""); // Reset when at the very top (Home)
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <>
      {/* Navigasi utama */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-40 p-4 transition-all duration-300"
      >
        <div className="max-w-6xl mx-auto glass-panel px-6 py-3 flex items-center justify-between rounded-full">
          
          <div className="flex-1 flex justify-start items-center">
            <Link href="/" className="relative w-12 h-12 overflow-hidden flex items-center justify-center rounded-full hover:scale-105 transition-transform">
              <Image src="/logo.svg" alt="Logo" fill className="object-contain" />
            </Link>
          </div>
          
          <nav className="hidden md:flex justify-center items-center space-x-8">
            {links.map((link) => {
              const isActive = (pathname === "/" && activeSection === link.id) || (pathname === "/experience" && link.name === "Experience");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-all relative py-1 ${
                    isActive 
                      ? "text-blue-600 dark:text-blue-400" 
                      : "text-[var(--text-main)] hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 dark:bg-blue-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>
          
          <div className="hidden md:flex flex-1 justify-end items-center">
            <Link 
              href="/#contact" 
              className="px-5 py-2 text-sm font-medium rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-md shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5"
            >
              Contact Me
            </Link>
          </div>

          <div className="md:hidden flex flex-1 justify-end items-center">
            <button 
              onClick={() => setIsOpen(true)}
              className="p-2 text-[var(--text-main)] hover:text-blue-500 transition-colors focus:outline-none bg-transparent"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Overlay Sidebar */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Konten Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-[100dvh] w-64 z-50 md:hidden transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div 
          className="w-full h-full glass-panel flex flex-col p-6 pb-12 overflow-y-auto" 
          style={{ borderRadius: '24px 0 0 24px' }}
        >
          <div className="flex justify-end mb-8 relative z-10 flex-shrink-0">
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-[var(--text-main)] hover:text-red-500 transition-colors bg-slate-200 dark:bg-slate-800/50 rounded-full"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-6 flex-1 relative z-10 justify-center mt-4">
            {links.map((link) => {
              const isActive = (pathname === "/" && activeSection === link.id) || (pathname === "/experience" && link.name === "Experience");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleMobileLinkClick(e, link.href)}
                  className={`text-lg font-semibold transition-all border-b pb-4 relative flex items-center ${
                    isActive 
                      ? "text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400" 
                      : "text-[var(--text-main)] hover:text-blue-600 dark:hover:text-blue-400 border-slate-200 dark:border-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          
          <div className="mt-8 relative z-10 flex-shrink-0">
            <Link 
              href="/#contact" 
              onClick={(e) => handleMobileLinkClick(e, "/#contact")}
              className="block text-center w-full px-5 py-3 text-base font-bold rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-md shadow-blue-500/30"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
