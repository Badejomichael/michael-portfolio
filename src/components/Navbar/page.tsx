"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";

import Image from 'next/image';
import BrandLogo from '@/assests/brand-logo.jpg'

const navbarVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const sections = ["#about", "#projects", "#services", "#contact"];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);

      // Update active section based on scroll position
      let currentSection = "";
      sections.forEach((section) => {
        const el = document.querySelector(section);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 100) currentSection = section;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <motion.header
        className={clsx(
          "fixed top-0 left-0 z-50 w-full bg-black backdrop-blur border-b border-gray-800 transition-shadow duration-300",
          {
            "shadow-lg bg-black/90": scrolled,
          }
        )}
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand */}
          <Link
            href="#hero"
            className="text-xl font-bold text-[#FFD700] flex items-center gap-1"
            onClick={closeSidebar}
          >
            <Image
            src={BrandLogo}
            alt="Emperor Logo"
            className="brand-logo"
            width={35}
            height={35}
        />
            
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-[#FFD700] hover:text-[#FFD966] transition-colors",
                  {
                    "border-b-2 font-bold":
                      activeSection === link.href,
                  }
                )}
                onClick={closeSidebar}
              >
                {link.label}
              </Link>
            ))}

           
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden flex items-center gap-4">

            {/* Hamburger */}
            <button
              onClick={toggleSidebar}
              aria-label="Toggle Menu"
              className="text-[#FFD700] hover:text-[#FFD966] transition-colors"
            >
              {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Sidebar Menu for Mobile */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-64 bg-black z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          {
            "translate-x-0": isSidebarOpen,
            "translate-x-full": !isSidebarOpen,
          }
        )}
      >
        <div className="px-6 py-4 flex flex-col gap-6 mt-20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeSidebar}
              className={clsx(
                "text-lg text-[#FFD700] hover:text-[#FFD966] transition-colors",
                {
                  "border-b-2 font-bold":
                    activeSection === link.href,
                }
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay (click to close sidebar) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur md:hidden"
          onClick={closeSidebar}
        />
      )}
    </>
  );
};

export default Navbar;