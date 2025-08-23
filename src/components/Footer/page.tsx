"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const fadeUp : Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function FooterSection() {
  return (
    <motion.footer
      className="mt-10 md:mt-20 bg-black border-t border-neutral-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-yellow-500">Michael Badejo</h3>
            <p className="text-gray-400 text-sm">
              Crafting sleek, high-performance web experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 text-gray-400 text-xl">
            <a
              href="https://github.com/Badejomichael"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/michael-badejo-thedev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/emperormikel_?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-neutral-800 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Michael Badejo. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
}