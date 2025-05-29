import React from "react";
import GradientHeading from "./GradientHeading";

const degrees = [
  {
    degree: "M.Tech in Computer Science",
    institution: "NIT Calicut",
    period: "2020 – 2022",
    score: "GPA: 8.6 / 10.0",
  },
  {
    degree: "B.Tech in Computer Science",
    institution: "BTKIT, Uttarakhand",
    period: "2015 – 2019",
    score: "Percentage: 70.48%",
  },
];

const Educations: React.FC = () => {
  return (
    <section id="education" className="bg-bg text-text py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <GradientHeading
          size="text-4xl"
          gradient="bg-gradient-to-r from-purple-500 to-indigo-400"
          className="mb-10 text-center"
        >
          Education
        </GradientHeading>

        <div className="space-y-8">
          {degrees.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface rounded-2xl p-6 shadow-md flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h3 className="text-heading text-xl font-abhi mb-1">{item.degree}</h3>
                <p className="text-text text-base">{item.institution}</p>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <p className="text-sm text-text">{item.period}</p>
                <p className="text-sm font-semibold text-accent">{item.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Educations;