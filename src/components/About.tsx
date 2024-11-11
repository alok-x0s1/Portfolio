"use client";

import React from "react";
import { motion } from "framer-motion";
import { orbitron } from "@/data/fonts";

const aboutVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <motion.div
      className="py-4 w-full flex flex-col gap-6 text-start text-base sm:text-lg tracking-wide leading-snug"
      variants={aboutVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className={`${orbitron.className} text-3xl sm:text-4xl font-semibold mb-6`}>
        About <span className="text-secondaryTextColor">me</span>
      </h2>

      <p className="text-base sm:text-lg">Hello there!👋</p>

      {/* Paragraphs with Slide and Scale Animation */}
      <motion.p
        className="text-base sm:text-lg"
        variants={scaleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        I&apos;m Alok Yadav, and my goal is to create exceptional,
        innovative web experiences that not only perform seamlessly but
        also leave a lasting impact. My journey as a developer has been
        a rewarding self-taught adventure driven by a deep-seated passion
        for technology.
      </motion.p>

      <motion.p
        className="text-base sm:text-lg"
        variants={scaleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        What distinguishes me is my dedication to ongoing learning.
        Whether it&apos;s through exploring online tutorials, consulting
        with mentors, or staying updated with the latest technologies,
        I&apos;m constantly seeking to expand my knowledge.
      </motion.p>

      <motion.p
        className="text-base sm:text-lg"
        variants={scaleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        But life isn&apos;t just about tech! When I&apos;m not coding,
        you might find me relaxing with a good book, writing blog posts,
        or diving into exciting video games. I also enjoy playing the
        guitar, finding joy and relaxation in music.
      </motion.p>
    </motion.div>
  );
};

export default About;
