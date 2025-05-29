import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const facts = [
  {
    text: "👨‍💻 I've worked on distributed systems using Go and Kubernetes.",
    gradient: "from-pink-500 via-red-500 to-yellow-500",
  },
  {
    text: "🌍 I love building on GCP and AWS cloud-native infra.",
    gradient: "from-blue-400 via-cyan-400 to-teal-400",
  },
  {
    text: "✍️ I love simplifying complex systems into readable code.",
    gradient: "from-orange-500 via-yellow-500 to-rose-400",
  },
  {
    text: "🧠 My current obsession: making dev tools more intuitive.",
    gradient: "from-lime-500 via-green-500 to-emerald-400",
  },
  {
    text: "🌎 I enjoy understanding world affairs and geopolitics",
    gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
  },
  {
    text: "💹 I'm fascinated by finance and love investing in financial markets",
    gradient: "from-cyan-500 via-fuchsia-500 to-violet-500",
  },
];

const FunFacts: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-slide every 4s with progress animation
  useEffect(() => {
    const duration = 4000;
    let start = Date.now();

    const loop = () => {
      const now = Date.now();
      const delta = now - start;
      const pct = (delta / duration) * 100;
      setProgress(Math.min(pct, 100));

      if (pct >= 100) {
        setIndex((i) => (i + 1) % facts.length);
        start = Date.now();
        setProgress(0);
      }

      requestAnimationFrame(loop);
    };

    const frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="relative bg-white/10 dark:bg-surface backdrop-blur-md border border-white/10 dark:border-gray-700 shadow-xl rounded-3xl p-6 md:p-8 max-w-lg mx-auto h-full">
      <h3 className="text-center text-xl md:text-2xl font-abhi font-black mb-6 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
        🎯 Fun Fact About Me
      </h3>

      {/* Fun Fact Text */}
      <div className="h-24 flex items-center justify-center text-center text-base md:text-lg font-medium text-text">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
            transition={{ duration: 0.5 }}
            className="px-2"
          >
            {facts[index].text}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Animated Gradient Progress Bar */}
      <div className="mt-6 h-2 w-full bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${facts[index].gradient}`}
          style={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
        />
      </div>
    </div>
  );
};

export default FunFacts;