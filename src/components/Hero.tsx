import { motion } from "framer-motion";
import GradientHeading from "./GradientHeading";
import Parallax from "./Parallax";

const Hero: React.FC = () => {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="h-screen flex flex-col items-center justify-center bg-bg text-text px-4 text-center"
    >
      <Parallax offset={30}>
        <GradientHeading
          size="text-6xl md:text-7xl"
          gradient="bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500"
        >
          Abhishek Tiwari
        </GradientHeading>
      </Parallax>
      <GradientHeading
        size="text-2xl md:text-3xl mt-4"
        gradient="bg-gradient-to-r to-teal-300 from-blue-500"
      >
        Software Engineer — Full Stack · Cloud · System Design
      </GradientHeading>

      <motion.p
        className="mt-6 max-w-xl text-[0.95rem] md:text-lg px-5 py-4 text-text bg-white/5 dark:bg-white/5 backdrop-blur-md rounded-xl shadow-xl border border-white/10 dark:border-gray-700 text-center font-medium leading-relaxed tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        I build modern distributed systems with <span className="text-accent">Go</span>, <span className="text-accent">Node.js</span>, <span className="text-accent">React</span>, and <span className="text-accent">cloud platforms</span>. Experience with high-availability, performance optimization, and DevOps culture.
      </motion.p>
    </motion.section>
  );
};

export default Hero;