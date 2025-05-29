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