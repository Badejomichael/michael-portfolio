"use client";

import React from "react";
import { FiDownload } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import { motion, Variants } from "framer-motion";

const fadeUp : Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier
    },
  }),
};

const Hero: React.FC = () => {
  return (
    <motion.section
      className="w-full flex flex-col items-center justify-center text-center px-6 min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Name */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-4 text-[#FFD700]"
        variants={fadeUp}
        custom={0.1}
      >
        Michael
      </motion.h1>

      {/* Bio */}
      <motion.p
        className="text-lg md:text-xl max-w-2xl mb-8 text-gray-400"
        variants={fadeUp}
        custom={0.3}
      >
        I’m a frontend developer focused on building clean UIs, fast dashboards,
        and modern Web experiences — Web3 and beyond. Always shipping and
        scaling cool products.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        variants={fadeUp}
        custom={0.5}
      >
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 font-medium rounded transition border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black"
        >
          <FiDownload />
          Download Resume
        </a>

        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 font-medium rounded transition border-[#FFD700] bg-[#FFD700] hover:bg-[#FFD966] text-black"
        >
          <BsChatDots />
          Let’s Talk
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;