import React from "react";
import {
  SiVisualstudiocode,
  SiPostman,
  SiNetlify,
  SiVercel,
} from "react-icons/si";
import { FaWindows, FaGithub } from "react-icons/fa";

const Tools = () => {
  const tools = [
    { name: "Visual Studio Code", icon: <SiVisualstudiocode /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Netlify", icon: <SiNetlify /> },
    { name: "Github", icon: <FaGithub /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Windows", icon: <FaWindows /> },
  ];

  return (
    <div className="w-full flex justify-center dark:text-primary-color-dark text-primary-color-light items-center flex-col gap-12 mt-16 p-4">
      <h1 className="text-5xl font-medium font-ubuntu text-center">
        <span className="text-secondary-color-light dark:text-secondary-color-dark mr-2">Tools</span> I use
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-8 mt-6">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="bg-primary-bg-light dark:bg-primary-bg-dark p-6 sm:p-4 xs:p-3 rounded-sm cursor-pointer border-2 border-secondary-color-light dark:border-secondary-color-dark hover:-translate-y-2 duration-500 shadow-md shadow-secondary-color-light/50 dark:shadow-secondary-color-dark/50"
          >
            <div className="text-8xl sm:text-6xl xs:text-5xl">{tool.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;