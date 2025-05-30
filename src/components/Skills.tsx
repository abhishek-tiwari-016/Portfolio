import React from "react";
import GradientHeading from "./GradientHeading";
import FadeInSection from "./FadeInSection";
import Parallax from "./Parallax";

const skills = {
    Languages: ["Go", "C++", "Python", "JavaScript", "TypeScript"],
    Frameworks: ["Node.js", "React", "Blockchain"],
    DevOps: ["Docker", "Kubernetes", "Helm", "CI/CD"],
    Cloud: ["GCP", "AWS"],
    Databases: ["Redis", "MySQL", "SQL"],
    Tools: ["Prometheus", "Grafana", "GitHub Actions", "VSCode", "Jira"],
};

// Theme-aware color mappings
const tagColors: Record<string, string> = {
    Go: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
    "C++": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    Python: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    JavaScript: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    TypeScript: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",

    "Node.js": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    React: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200",
    Blockchain: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",

    Docker: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    Kubernetes: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    Helm: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    "CI/CD": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",

    GCP: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    AWS: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",

    Redis: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    MySQL: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
    SQL: "bg-cyan-100 text-cyan-800 dark:bg-cyan-800 dark:text-cyan-200",

    Prometheus: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    Grafana: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
    "GitHub Actions": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    VSCode: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    Jira: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
};

const Skills: React.FC = () => {
    return (
        <section id="skills" className="bg-bg text-text py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <Parallax offset={20}>
                    <GradientHeading
                        size="text-4xl"
                        gradient="bg-gradient-to-r from-green-500 to-blue-400"
                        className="mb-10 text-center"
                    >
                        Technical Skills
                    </GradientHeading>
                </Parallax>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items], i) => (
                        <FadeInSection
                            key={category}
                            delay={i * 0.1}>
                            <div
                                key={category}
                                className="p-6 rounded-3xl shadow-md bg-surface dark:bg-surface border border-transparent dark:border-gray-700
                                transform transition-transform hover:scale-[1.02]"
                            >
                                <h3 className="font-abhi text-xl mb-4 text-heading">{category}</h3>
                                <div className="flex flex-wrap gap-3">
                                    {items.map((skill) => (
                                        <span
                                            key={skill}
                                            className={`px-3 py-1 rounded-full font-semibold text-sm shadow-sm ${tagColors[skill]}`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;