import React from "react";
import GradientHeading from "./GradientHeading";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-bg text-text py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <GradientHeading
          size="text-4xl"
          gradient=" bg-gradient-to-r from-pink-500 to-yellow-400"
          className="mb-6"
        >
          Let's Connect
        </GradientHeading>

        <p className="text-lg mb-8">
          Whether you have a project in mind, want to collaborate, or just say hi —<br />
          <span className="bg-gradient-to-r from-pink-500 to-green-400 bg-clip-text text-transparent font-bold"> feel free to reach out!</span>
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
          <a href="mailto:at03163@gmail.com"
            className="flex items-center px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-500 to-orange-400 shadow transition-transform hover:scale-105"
          >
            <FaEnvelope className="text-2xl mr-3" /> at03163@gmail.com
          </a>
          <a href="tel:+918449974297"
            className="flex items-center px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-green-400 to-emerald-500 shadow transition-transform hover:scale-105"
          >
            <FaPhone className="text-2xl mr-3" /> +91 8449974297
          </a>
          <a href="https://wa.me/+918445537711"
            className="flex items-center px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-green-400 to-emerald-500 shadow transition-transform hover:scale-105"
          >
            <FaWhatsapp className="text-2xl mr-3" /> 8445537711
          </a>
        </div>

        <div className="flex flex-row gap-5 justify-center">
          <a href="https://linkedin.com/in/abhishektiwari016" target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-white/20 dark:bg-[#223369] p-3 text-2xl text-blue-400 hover:scale-110 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/abhishek-tiwari-016" target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-white/20 dark:bg-[#223369] p-3 text-2xl text-gray-800 dark:text-gray-200 hover:scale-110 transition">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;