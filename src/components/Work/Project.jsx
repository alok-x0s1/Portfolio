import React from "react";
import { FaLink, FaGithub } from "react-icons/fa";

const Project = ({
  name,
  content,
  techStack,
  liveLink,
  githubLink,
  className = "items-start",
}) => {
  return (
    <div
      className={`min-w-96 max-w-[620px] flex flex-col ${className} gap-4 mt-8 w-fit rounded-md border p-4 sm:p-2 xs:m-1 shadow-sm shadow-secondary-color-light dark:shadow-secondary-color-dark hover:-translate-y-1 duration-500`}
    >
      <p className="text-secondary-color-light dark:text-secondary-color-dark text-lg">Featured Project</p>
      <h2 className="font-infant text-4xl md:text-3xl sm:text-2xl font-semibold">{name}</h2>
      <p className="text-xl md:text-lg sm:text-base p-4 sm:p-2 rounded-md font-ubuntu bg-secondary-color-light/90 dark:bg-secondary-color-dark/90 text-primary-color-light shadow-md">
        {content}
      </p>
      <div className="flex gap-2 flex-wrap mt-2 sm:mt-1">
        {techStack &&
          techStack.map((elem) => (
            <div
              key={elem}
              className="px-4 md:px-3 sm:px-2 font-ubuntu text-lg py-2 sm:py-1 duration-300"
            >
              {elem}
            </div>
          ))}
      </div>
      <div className="flex justify-start items-center gap-6 mt-4 md:mt-2">
        <div className="cursor-pointer hover:text-secondary-color-light dark:hover:text-secondary-color-dark duration-500 text-3xl">
          <a href={liveLink} target="_blank">
            <FaLink />
          </a>
        </div>
        <div className="cursor-pointer hover:text-secondary-color-light dark:hover:text-secondary-color-dark duration-500 text-3xl">
          <a href={githubLink} target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
