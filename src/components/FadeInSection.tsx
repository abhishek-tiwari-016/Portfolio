import { motion } from "framer-motion";
import React from "react";

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FadeInSection: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => {
  return (
    <motion.div
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;