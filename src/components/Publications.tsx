import React from "react";
import GradientHeading from "./GradientHeading";

const publication = {
  title: "Multimodal Data Fusion Framework for Fake News Detection",
  venue: "IEEE INDICON 2023",
  doi: "https://ieeexplore.ieee.org/document/10039737",
  summary:
    "This paper presents a novel data fusion approach combining textual and visual modalities for fake news detection. It leverages ensemble learning and NLP pipelines.",
};

const Publications: React.FC = () => {
  return (
    <section id="publications" className="bg-bg text-text py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <GradientHeading
          size="text-4xl"
          gradient="bg-gradient-to-r from-cyan-500 to-blue-400"
          className="mb-10 text-center"
        >
          Publications
        </GradientHeading>

        <div className="bg-surface p-6 rounded-2xl shadow-md">
          <h3 className="text-heading text-xl font-abhi mb-2">{publication.title}</h3>
          <p className="text-sm text-text mb-2 italic">{publication.venue}</p>
          <p className="text-base text-text mb-4">{publication.summary}</p>
          <a
            href={publication.doi}
            className="text-sm text-accent underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Paper →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;