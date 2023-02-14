import React from 'react';
import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, info, link }) => {
  const overlayStyles =
    'absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue';
  const projectTitle = title.split(' ').join('-').toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{info}</p>
        <a
          className="mt-5 text-blue"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          Learn More
        </a>
      </div>

      <img
        src={`../assets/${projectTitle}.png`}
        alt={projectTitle}
        className="w-full h-full"
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="pt-48 pb-48" id="projects">
      {/* Headings */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3 " />
          </div>
        </div>
        <p className="mt-10 mb-10">List of projects I've completed</p>
      </motion.div>
      {/* Projects */}
      <div className="flex justify-center"></div>
      <motion.div
        className="sm:grid sm:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
      >
        {/* Row 1 */}
        <div className="flex justify-center text-center items-center p-10 bg-red w-auto text-2xl font-playfair font-semibold">
          Creative Web Applications
        </div>
        <Project
          title="Project 1"
          info="Cryptocurrency Statistics and News"
          link="https://serrantcrypto.netlify.app/"
        />
        <Project
          title="Project 2"
          info="Digital Dash Network Management Site"
          link="https://gitlab.com/gjkk/amazing-project"
        />

        {/* Row 2 */}
        <Project
          title="Project 3"
          info="Conference aggregator"
          link="https://gitlab.com/GTech_/fearless-front-end-gs"
        />
        <Project
          title="Project 4"
          info="Hulu Clone"
          link="https://gitlab.com/GTech_/hulu-clone"
        />
        <Project
          title="Project 5"
          info="Car Dealership management app"
          link="https://gitlab.com/GTech_/car-management"
        />

        {/* Row 3 */}
        <Project title="Project 6" info="Starbucks Clone" />
        <Project
          title="Project 7"
          info="React Calculator"
          link="https://gitlab.com/GTech_/react-calculator"
        />
        <div className="flex justify-center text-center items-center p-10 bg-blue w-auto text-2xl font-playfair font-semibold">
          Innovative Ideas
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
