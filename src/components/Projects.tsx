import React from "react";
import GradientHeading from "./GradientHeading";
import FadeInSection from "./FadeInSection";

const projects = [
  {
    title: "Blockchain Ledger",
    tech: "Go, Proof-of-Work",
    description: "A mini blockchain implementation focusing on integrity and hashing.",
    link: "https://github.com/abhishek-tiwari-016/Blockchain",
    gradient: "from-indigo-200 to-cyan-300",
    placeHolder: "Github",
  },
  {
    title: "Hadoop Cluster (Big Data)",
    tech: "Hadoop, Spark, Hive, Zookeeper",
    description: "Set up an 8-node Hadoop ecosystem; analyzed high-cardinality data from UIDAI, aviation, and financial datasets.",
    link: "https://qr.ae/pYALJn",
    gradient: "from-green-200 to-indigo-300",
    placeHolder: "Quora",
  },
  {
    title: "NGSCO Diagnostic Tool",
    tech: "Go, CLI, Docker",
    description: "CLI/GUI tool to debug container environments. Top 10 in NCR Hackathon.",
    link: "https://github.com/abhishek-tiwari-016/diagnostic-tool",
    gradient: "from-green-200 to-yellow-300",
    placeHolder: "Github",
  },
  {
    title: "AI Assistant",
    tech: "Dialogflow, GCP, Prometheus",
    description: "Virtual assistant for querying logs and metrics. Used by 10+ teams.",
    link: "https://github.com/abhishek-tiwari-016/ai-assistant",
    gradient: "from-pink-200 to-red-300",
    placeHolder: "Github",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-bg text-text py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <GradientHeading
          size="text-4xl"
          gradient="bg-gradient-to-r from-fuchsia-500 to-pink-500"
          className="mb-10 text-center"
        >
          Projects
        </GradientHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <FadeInSection
              key={index}
              delay={index * 0.1}>
              <div
                key={index}
                className={`
                rounded-3xl p-6 shadow-lg transition flex flex-col justify-between border
                bg-gradient-to-br ${project.gradient}
                dark:bg-surface dark:bg-none dark:border-gray-700
                text-heading dark:text-text
                transform transition-transform hover:scale-[1.02]
              `}
              >
                <h3 className="font-abhi text-2xl mb-2 text-heading dark:text-heading">
                  {project.title}
                </h3>
                <p className="text-sm font-semibold mb-3 text-accent dark:text-accent">
                  {project.tech}
                </p>
                <p className="mb-4 text-text dark:text-text">{project.description}</p>
                <div className="mt-auto">
                  <a
                    href={project.link}
                    className="underline text-blue-600 dark:text-blue-400 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.placeHolder}
                  </a>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;