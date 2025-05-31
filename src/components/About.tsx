import React from "react";
import GradientHeading from "./GradientHeading";
import { motion } from "framer-motion";
import Parallax from "./Parallax";
import FunFacts from "./FunFacts";

const About: React.FC = () => {
    return (
        <motion.section
            id="about"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-bg text-text py-20 px-6"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <GradientHeading
                        size="text-4xl"
                        gradient="bg-gradient-to-r from-blue-600 to-cyan-400"
                        className="mb-4"
                    >
                        About Me
                    </GradientHeading>
                    <div className="text-text space-y-4 text-[1rem] md:text-[1.1rem] font-[400] leading-relaxed font-sans tracking-wide">
                        <p>
                            I'm <span className="font-abhi text-heading">Abhishek Tiwari</span>, a software engineer passionate about building scalable, distributed systems that power real-world applications.
                        </p>
                        <p>
                            With 3+ years of experience in <span className="text-accent font-semibold">Go</span>, <span className="text-accent font-semibold">Node.js</span>, <span className="text-accent font-semibold">React</span>, and <span className="text-accent font-semibold">Kubernetes</span>, I specialize in backend architecture, observability, and cloud-native development.
                        </p>
                    </div>
                    <a
                        href="/Abhishek_Tiwari_Resume_FullStack.pdf"
                        download
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 text-white font-abhi font-bold text-base shadow-md hover:scale-105 transition-all mt-6"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-5 h-5"><path fill="currentColor" d="M9 2.75A.75.75 0 0 1 10 2a.75.75 0 0 1 .75.75V12l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06L9 12V2.75ZM2.75 17a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1-.75-.75Z" /></svg>
                        Download Resume
                    </a>
                </div>
                <Parallax offset={40}>
                    {/* <div className="bg-surface rounded-3xl h-64 md:h-96 shadow-lg flex items-center justify-center">
                        <p className="text-accent font-bold text-lg">[ 🎮 Future Animation Placeholder ]</p>
                    </div> */}
                    <FunFacts />
                </Parallax>
            </div>
        </motion.section>
    );
};

export default About;