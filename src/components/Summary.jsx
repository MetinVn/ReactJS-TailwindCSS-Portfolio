import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
const Summary = () => {
  const [tooltip, setTooltip] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: [0.5, 0.7, 0.8],
  });

  return (
    <motion.div
      onTouchStart={() => setTooltip(false)}
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
      transition={{ duration: 0.5 }}
      className="my-summary-container p-4 md:p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#9966CC]">
        Welcome to my portfolio!
      </h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-sm sm:text-lg md:text-xl mb-4">
        I am a passionate software developer with a love for creating engaging
        and user-friendly web applications.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-sm sm:text-lg md:text-xl mb-4">
        My journey into software development began at the age of{" "}
        <span
          onTouchStart={() => setTooltip(true)}
          onClick={() => setTooltip(true)}
          className="text-[#9966CC] cursor-pointer relative">
          20{" "}
          {tooltip && (
            <span
              onMouseLeave={() => setTooltip(false)}
              className="absolute tracking-tighter md:tracking-normal whitespace-nowrap text-xs sm:text-sm md:text-lg -top-2 -translate-x-1/2 border bg-white rounded-full border-[#9966CC] text-[#9966CC] p-2 z-10 duration-300">
              I'm currently 22 y.o
            </span>
          )}
        </span>
        with a strong foundation in frontend technologies like React and Redux,
        allowing me to craft interactive and responsive user interfaces.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-sm sm:text-lg md:text-xl mb-4">
        I also excel in backend development, utilizing frameworks and libraries
        like Spring Boot and NodeJS to build robust and scalable applications.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-sm sm:text-lg md:text-xl mb-4">
        Explore my projects below to see how I bring ideas to life through code.
      </motion.p>
    </motion.div>
  );
};

export default Summary;
