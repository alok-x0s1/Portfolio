import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { FaBootstrap } from "react-icons/fa";
import { DiJavascript1, DiReact, DiGit, DiJava } from "react-icons/di";
import { SiFirebase, SiAppwrite, SiRedux, SiReactrouter } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const TeckStack = () => {
  const logos = [
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <DiJava />, name: "Java" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
    { icon: <DiJavascript1 />, name: "Javascript" },
    { icon: <DiReact />, name: "React" },
    { icon: <SiReactrouter />, name: "React-router" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <DiGit />, name: "Git" },
    // { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiAppwrite />, name: "Appwrite" },
  ];
  return (
    <div className="w-full flex justify-center dark:text-primary-color-dark text-primary-color-light items-center flex-col gap-12">
      <h1 className="text-5xl font-medium font-ubuntu">
        Professional{" "}
        <span className="text-secondary-color-light dark:text-secondary-color-dark">Skillset</span>
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-12 mt-6">
        {logos.map((logo) => (
          <div
          key={logo.name}
            className="bg-primary-bg-light dark:bg-primary-bg-dark px-12 py-6 rounded-sm cursor-pointer border-2 border-secondary-color-light dark:border-secondary-color-dark hover:-translate-y-2 duration-500 shadow-md shadow-secondary-color-light/50 dark:shadow-secondary-color-dark/50"
          >
            <div className="text-8xl">{logo.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeckStack;
