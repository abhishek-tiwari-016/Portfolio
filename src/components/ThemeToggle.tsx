import React, { useEffect, useState } from "react";

const ThemeToggle: React.FC = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-105 transition"
      aria-label="Toggle Theme"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;