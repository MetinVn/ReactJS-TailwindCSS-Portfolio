import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import flameImages from "../data/AnimationImages";

const FireEffect = ({ visible }) => {
  const [flameIndex, setFlameIndex] = useState(0);

  useEffect(() => {
    if (visible) {
      const interval = setInterval(() => {
        setFlameIndex((prevIndex) => (prevIndex + 1) % flameImages.length);
      }, 100);

      return () => clearInterval(interval);
    }
  }, [visible]);

  return (
    <motion.div
      className="absolute bottom-[-35px] left-1/2 transform -translate-x-1/2"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.5 }}>
      {flameImages.length > 0 && (
        <img
          src={flameImages[flameIndex]}
          alt="Flame"
          className="w-16 h-16 object-contain rotate-180"
        />
      )}
    </motion.div>
  );
};

export default FireEffect;
