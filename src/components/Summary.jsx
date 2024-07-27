import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaLaptopCode,
  FaTools,
  FaCode,
  FaMobileAlt,
  FaCloud,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "Building responsive and performant web applications using modern technologies.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description:
      "Creating intuitive and powerful mobile applications for both Android and iOS platforms.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Services",
    description:
      "Providing scalable cloud solutions for your business needs, including deployment and management.",
  },
];

const skills = [
  "JavaScript",
  "React",
  "Redux",
  "Node.js",
  "CSS",
  "HTML",
  "Java",
  "C++",
];

const experience = [
  "5+ years in web development",
  "3+ years in mobile app development",
  "Experience with cloud deployments",
  "Contributed to open-source projects",
];

const tools = [
  "VSCode",
  "Git",
  "Webpack",
  "Docker",
  "AWS",
  "Heroku",
  "Firebase",
];

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
        {/* Introduction Section */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: introInView ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:pr-[200px] text-start">
            <h1 className="text-4xl font-bold text-blue-500 mb-4">About Me</h1>
            <p className="text-lg text-gray-400">
              I am a passionate software developer with a love for creating
              engaging and user-friendly web applications. My journey into
              software development began at the age of 20 with a strong
              foundation in frontend technologies like React and Redux, allowing
              me to craft interactive and responsive user interfaces. I also
              excel in backend development, utilizing frameworks and libraries
              like Spring Boot and NodeJS to build robust and scalable
              applications. Explore my projects below to see how I bring ideas
              to life through code.
            </p>
          </motion.div>
        </div>

        {/* Overall Skills Section */}
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
              <h2
                className={`text-3xl font-bold ${section.color} mb-4 flex items-center`}>
                {section.icon && section.icon}
                {section.title}
              </h2>
              <ul className="flex flex-wrap space-x-4 text-gray-400">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-lg hover:text-white duration-200">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Services Section */}
        <motion.div
          ref={servicesRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: servicesInView ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full mb-10">
          <h1 className="text-4xl font-bold text-start mb-10 text-blue-500">
            My Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <div className="text-4xl mb-4 text-yellow-500">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                <p className="text-center text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Summary;
