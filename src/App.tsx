import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Publications from "./components/Publications";
import Educations from "./components/Educations";
import { motion } from "framer-motion";

const App: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Publications />
        <Educations />
        <Contact />
        {/* Other sections go here */}
      </main>
    </motion.div>
  );
};

export default App;