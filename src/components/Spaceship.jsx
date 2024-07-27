import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import spaceshipImg from "../spaceship/destroyer.png";
import healthimg from "../spaceship/health.png";
import FireEffect from "./FireEffect";
import useInView from "../hook/useInView";

const Spaceship = () => {
  const [flameVisible, setFlameVisible] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const [showLandingArea, setShowLandingArea] = useState(true);

  const isHomeInView = useInView("home");
  const isSummaryInView = useInView("summary");
  const isProjectsInView = useInView("projects");
  const isContactInView = useInView("contact");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolledUp = currentScrollY < (window.lastScrollY || 0);

      if (scrolledUp) {
        setFlameVisible(true);
        setIsBouncing(true);
        setShowLandingArea(false);
      } else {
        setFlameVisible(false);
        setIsBouncing(false);
        setShowLandingArea(true);
      }
      window.lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomeInView, isSummaryInView, isProjectsInView, isContactInView]);

  return (
    <div className="fixed bottom-[35%] right-[50px] hidden sm:flex transform -translate-y-1/2 items-center z-[99]">
      <motion.div
        className="relative w-32 h-32"
        initial={{ opacity: 1 }}
        animate={isBouncing ? { y: [3, -10, 3] } : { y: [0, 0, 10] }}
        transition={{ duration: 1, repeat: isBouncing ? Infinity : 0 }}>
        <motion.img
          key="landingArea"
          src={healthimg}
          alt="Landing Area"
          className="absolute bottom-[-60px] left-0 w-32 h-32 object-cover"
          initial={{ opacity: 0, y: 20, rotateX: -60 }}
          animate={{
            opacity: showLandingArea ? 1 : 0,
            y: showLandingArea ? 0 : 20,
            rotateX: -70,
          }}
          transition={{ duration: 1 }}
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform",
            zIndex: -1,
          }}
        />
        <img
          src={spaceshipImg}
          alt="Spaceship"
          className="w-full h-full object-contain rotate-[-90deg]"
          style={{
            zIndex: 10,
          }}
        />

        <FireEffect visible={flameVisible} />
      </motion.div>
    </div>
  );
};

export default Spaceship;
