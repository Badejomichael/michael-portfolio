"use client";

import { FaCode, FaCubes, FaRocket } from "react-icons/fa";
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

export default function ServicesSection() {
  return (
    <motion.section
      id="services"
      className="mt-30 px-4 md:mt-40 sm:px-8 lg:px-16 bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-400"
          variants={fadeUp}
          custom={0.1}
        >
          What I Do
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-12"
          variants={fadeUp}
          custom={0.3}
        >
          I help teams and startups turn product ideas into real digital experiences.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[{
            icon: <FaCode />,
            title: "UI Engineering",
            description:
              "I build clean, responsive, and interactive UIs using React, Tailwind, and modern best practices.",
          }, {
            icon: <FaCubes />,
            title: "Web3 Integration",
            description:
              "From wallet connections to contract interaction, I integrate smooth Web3 flows into real-world apps.",
          }, {
            icon: <FaRocket />,
            title: "Frontend Optimization",
            description:
              "I optimize websites for speed, SEO, and accessibility—ensuring smooth performance across all devices.",
          }].map(({ icon, title, description }, index) => (
            <motion.div
              key={index}
              className="bg-neutral-900 p-6 rounded-xl shadow hover:shadow-xl transition"
              variants={fadeUp}
              custom={0.5 + index * 0.15}
            >
              <div className="text-yellow-500 text-3xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">{title}</h3>
              <p className="text-gray-400">{description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12"
          variants={fadeUp}
          custom={0.95}
        >
          <a
            href="#contact"
            className="inline-block px-6 py-3 border-2 font-medium rounded transition border-[#FFD700] bg-[#FFD700] hover:bg-[#FFD966] text-black"
          >
            Let’s Build Something
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}