"use client";

import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";

import ChefSecretImage from "@/assests/chef-secret.jpg";
import GamingHubImage from "@/assests/gaming-hub.jpg";
import WeatherWebAppImage from "@/assests/weather-web.jpg";
import Image, { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";

type Project = {
  title: string;
  description: string;
  techStack: React.ReactElement[];
  image: string | StaticImageData;
  liveUrl: string;
  repoUrl: string;
};

const projects: Project[] = [
  {
    title: "Chef Secret",
    description:
      "A recipe discovery site built with HTML, CSS, JavaScript, and Bootstrap using a public food API.",
    techStack: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <SiBootstrap />],
    image: ChefSecretImage,
    liveUrl: "https://mikelchef-secret.netlify.app",
    repoUrl: "https://github.com/Badejomichael/chef-secret",
  },
  {
    title: "Mikel’s Gaming Hub",
    description:
      "A gaming news portal for reviews, release dates, and genre-based discovery — built using HTML, CSS, JS and gaming APIs.",
    techStack: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    image: GamingHubImage,
    liveUrl: "https://mikel-gaming-hub.netlify.app",
    repoUrl: "https://github.com/Badejomichael/gaming-hub.git",
  },
  {
    title: "Weather Web App",
    description:
      "A responsive weather dashboard built in React using live weather APIs. Shows real-time conditions for any location.",
    techStack: [<FaReact />, <FaJs />],
    image: WeatherWebAppImage,
    liveUrl: "https://mikel-weather-web-app.netlify.app",
    repoUrl: "https://github.com/Badejomichael/weather-webapp.git",
  },
];

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

const Projects: React.FC = () => {
  return (
    <motion.section
      className="w-full px-6 mt-30 md:px-16 md:mt-60 bg-black text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-left text-yellow-400"
        variants={fadeUp}
        custom={0.1}
      >
        Projects
      </motion.h2>

      {/* Project Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-neutral-900 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
            variants={fadeUp}
            custom={0.2 + index * 0.15} // stagger delay
          >
            {/* Image */}
            <Image
              src={project.image}
              alt={`${project.title} Screenshot`}
              className="w-full h-48 object-cover"
              width={600}
              height={300}
            />

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              {/* Tech stack icons */}
              <div className="flex gap-3 text-2xl text-yellow-400 mb-4">
                {project.techStack.map((icon, idx) => (
                  <span key={`${project.title}-icon-${idx}`}>{icon}</span>
                ))}

              </div>

              {/* Links */}
              <div className="mt-2 flex justify-between items-center">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-400 hover:underline"
                >
                  View Project <FaExternalLinkAlt size={14} />
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:underline"
                >
                  GitHub Repo <FaGithub size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;