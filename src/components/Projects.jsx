import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ProjectItems from "./ProjectItems";
import { projects } from "../data/ProjectsData.jsx";
import Summary from "./Summary";

const Projects = () => {
  const [visibleItems, setVisibleItems] = useState({});

  const itemsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleItems((prevVisibleItems) => ({
            ...prevVisibleItems,
            [entry.target.dataset.index]: true,
          }));
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    itemsRef.current.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="w-full h-2 bg-gradient-to-b from-black/30 to-white"></div>
      <div className="w-full">
        <div className="max-w-[1340px] mx-auto p-4 py-16">
          <Summary />
          <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-[#9966CC]">
              Projects
            </h1>
            <div className="grid grid-cols-1 gap-5 rounded-xl">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    visibleItems[index]
                      ? { opacity: 1, y: 0, transition: { duration: 1 } }
                      : {}
                  }
                  ref={(ref) => (itemsRef.current[index] = ref)}
                  data-index={index}>
                  <ProjectItems {...project} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
