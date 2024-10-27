import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLaptopCode, FaTools, FaCode } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    description: "Building responsive and interactive web applications with modern frontend technologies.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Backend Basics",
    description: "Creating foundational server-side functionality using Node.js and Express for simple APIs.",
  },
];

const skills = ["JavaScript", "React", "Redux", "Node.js", "CSS", "HTML", "Git"];

const experience = [
  "Frontend web development with a focus on React",
  "Working knowledge of RESTful API integration",
  "Contributions to small team projects and personal projects",
];

const tools = ["VSCode", "Git", "Webpack", "Firebase"];

const Summary = () => {
  const { ref: introRef, inView: introInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: experienceRef, inView: experienceInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: toolsRef, inView: toolsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const sections = [
    {
      ref: skillsRef,
      inView: skillsInView,
      title: "Skills",
      color: "text-yellow-500",
      items: skills,
    },
    {
      ref: experienceRef,
      inView: experienceInView,
      title: "Experience",
      color: "text-red-500",
      icon: <FaLaptopCode className="mr-2" />,
      items: experience,
    },
    {
      ref: toolsRef,
      inView: toolsInView,
      title: "Tools",
      color: "text-green-500",
      icon: <FaTools className="mr-2" />,
      items: tools,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-2">
      <motion.div
        ref={introRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: introInView ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-6xl">
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: introInView ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:pr-[200px] text-start">
            <h1 className="text-4xl font-bold text-blue-500 mb-4">About Me</h1>
            <p className="text-lg text-gray-400">
              I’m a frontend developer with a passion for crafting visually appealing and user-focused web applications.
              Starting with React, I’ve built a strong foundation in frontend technologies, while also exploring backend
              essentials like Node.js for basic API functionality. Check out my projects below to see how I bring ideas
              to life through code.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col items-center">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              ref={section.ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: section.inView ? 1 : 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: index * 0.6,
              }}
              className="w-full mb-10 flex flex-col items-start">
              <h2 className={`text-3xl font-bold ${section.color} mb-4 flex items-center`}>
                {section.icon && section.icon}
                {section.title}
              </h2>
              <ul className="flex flex-wrap space-x-4 text-gray-400">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-lg hover:text-white duration-200">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          ref={servicesRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: servicesInView ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full mb-10">
          <h1 className="text-4xl font-bold text-start mb-10 text-blue-500">My Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center p-5 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: servicesInView ? 1 : 0 }}
                transition={{
                  duration: 0.1,
                  ease: "easeInOut",
                }}
                whileHover={{
                  boxShadow: "0 4px 8px rgb(255, 255, 255)",
                }}>
                <div className="text-4xl mb-4 text-yellow-500">{service.icon}</div>
                <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                <p className="text-center text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Summary;
