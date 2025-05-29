import React from "react";
import GradientHeading from "./GradientHeading";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-bg text-text py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <GradientHeading
          size="text-4xl"
          gradient="bg-gradient-to-r from-pink-600 to-red-400"
          className="mb-6"
        >
          Let’s Connect
        </GradientHeading>

        <p className="text-lg mb-8">
          Whether you have a project in mind, want to collaborate, or just say hi — feel free to reach out.
        </p>

        <div className="space-y-3 text-heading font-abhi text-xl">
          <p>📧 at03163@gmail.com</p>
          <p>📞 +91 8449974297</p>
        </div>

        <div className="mt-8">
          <a
            href="https://linkedin.com/in/abhishektiwari016"
            className="text-accent underline mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/abhishek-tiwari-016"
            className="text-accent underline mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;