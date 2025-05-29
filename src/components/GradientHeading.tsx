import React from "react";

interface Props {
  children: React.ReactNode;
  size?: string;
  gradient?: string;
  className?: string;
}

const GradientHeading: React.FC<Props> = ({
  children,
  size = "text-5xl",
  gradient = "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
  className = "",
}) => {
  return (
    <h2
      className={`font-abhi font-black ${size} bg-clip-text text-transparent ${gradient} ${className}`}
    >
      {children}
    </h2>
  );
};

export default GradientHeading;