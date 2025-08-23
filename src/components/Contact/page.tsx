"use client";

import { FaEnvelope, FaUser } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import toast from "react-hot-toast";
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

export default function ContactSection() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("access_key", "545e0a21-8bc2-41e0-b86e-8a98e60693d2"); // Replace with your key

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Message sent! I'll be in touch soon.");
      (e.target as HTMLFormElement).reset();
    } else {
      toast.error("Failed to send. Please try again.");
    }
  };

  return (
    <motion.section
      id="contact"
      className="mt-30 px-4 md:mt-40 sm:px-8 lg:px-16 bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-4 text-[#FFD700]"
          variants={fadeUp}
          custom={0.1}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-10"
          variants={fadeUp}
          custom={0.3}
        >
          Got an idea, collab, or role in mind? Let’s talk.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          variants={fadeUp}
          custom={0.5}
        >
          <div className="relative">
            <FaUser className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full pl-10 pr-4 py-3 bg-neutral-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-white"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full pl-10 pr-4 py-3 bg-neutral-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-white"
            />
          </div>

          <div className="relative">
            <MdOutlineMessage className="absolute top-4 left-3 text-xl text-gray-500" />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full pl-10 pr-4 py-3 bg-neutral-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full font-semibold py-3 px-6 rounded transition bg-[#FFD700] text-black hover:bg-[#FFD966] cursor-pointer"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
}