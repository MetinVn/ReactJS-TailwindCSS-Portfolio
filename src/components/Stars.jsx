import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles.css";

const generateRandomLeft = () => `${Math.random() * 100}vw`;
const generateRandomStartY = () => `${-Math.random() * 20}vh`;
const generateRandomXDisplacement = () => `${(Math.random() - 0.5) * 100}vw`;
const MAX_STARS = 10;

const Stars = () => {
  const [fallingStars, setFallingStars] = useState([]);
  useEffect(() => {
    const addFallingStar = () => {
      if (fallingStars.length >= MAX_STARS) {
        setFallingStars((prevStars) => {
          const [, ...remainingStars] = prevStars;
          return remainingStars;
        });
      }

      setFallingStars((prevStars) => [
        ...prevStars,
        {
          id: Date.now(),
          left: generateRandomLeft(),
          startY: generateRandomStartY(),
          xDisplacement: generateRandomXDisplacement(),
        },
      ]);
    };

    const interval = setInterval(addFallingStar, 7000);

    return () => clearInterval(interval);
  }, [fallingStars]);

  return (
    <div className="h-screen p-5 relative overflow-hidden">
      <div className="stars">
        {fallingStars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{ opacity: 0, y: star.startY }}
            animate={{
              opacity: [1, 0],
              y: "100vh",
              x: star.xDisplacement,
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              opacity: {
                duration: 5,
                ease: "easeInOut",
              },
            }}
            style={{
              left: star.left,
            }}
            onAnimationComplete={() => {
              setFallingStars((prevStars) =>
                prevStars.filter((s) => s.id !== star.id)
              );
            }}
          />
        ))}
        {Array.from({ length: 45 }).map((_, index) => (
          <div key={index} className={`star static-star-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Stars;
