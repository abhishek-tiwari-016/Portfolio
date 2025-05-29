import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const Parallax: React.FC<{
  children: React.ReactNode;
  offset?: number;
}> = ({ children, offset = 50 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [offset, -offset]), {
    stiffness: 100,
    damping: 20,
  });

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

export default Parallax;