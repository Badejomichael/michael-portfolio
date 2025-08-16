"use client";

import Image from "next/image";
import MyAvatar from "@/assests/my-avatar.jpg";
import { motion, Variants } from "framer-motion";

const fadeUp : Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const slideIn = (direction: "left" | "right", delay: number) : Variants => ({
  hidden: { opacity: 0, x: direction === "left" ? -40 : 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

const AboutMe: React.FC = () => {
  return (
    <motion.section
      className="w-full px-6 md:px-16 bg-black text-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left text-yellow-400"
        variants={fadeUp}
        custom={0.1}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text */}
        <motion.div
          className="flex-1"
          variants={slideIn("left", 0.3)}
        >
          <p className="text-lg leading-relaxed mb-4 text-gray-400">
            I'm <span className="text-yellow-400 font-bold">Michael</span> — a frontend-focused developer passionate about building clean, responsive user interfaces and modern dashboards.
          </p>
          <p className="text-lg leading-relaxed text-gray-400">
            From crafting Web3 products to launching fast, scalable MVPs, I enjoy turning ideas into elegant digital experiences.
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="flex-1 w-full h-70 bg-gray-800 rounded-lg shadow-md"
          variants={slideIn("right", 0.5)}
        >
          <Image
            src={MyAvatar}
            alt="About illustration"
            className="w-full h-full object-cover md:h-100 rounded-lg"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;