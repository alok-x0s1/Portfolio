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
      className={`min-w-96 max-w-[620px] flex flex-col ${className} gap-4 mt-8 w-fit rounded-md border p-4 shadow-sm shadow-secondary-color-light`}
    >
      <p className="text-secondary-color-light text-lg">Featured Project</p>
      <h2 className="font-infant text-4xl font-semibold">{name}</h2>
      <p className="text-xl p-4 rounded-md font-ubuntu bg-secondary-color-light/90 text-primary-color-light shadow-md">
        {content}
      </p>
      <div className="flex gap-2 flex-wrap mt-2">
        {techStack &&
          techStack.map((elem) => (
            <div
              key={elem}
              className="px-4 font-ubuntu text-lg py-2 duration-300"
            >
              {elem}
            </div>
          ))}
      </div>
      <div className="flex justify-start items-center gap-6 mt-4">
        <div className="cursor-pointer hover:text-secondary-color-light duration-500 bg-primary-bg-light text-3xl">
          <a href={liveLink} target="_blank">
            <FaLink />
          </a>
        </div>
        <div className="cursor-pointer hover:text-secondary-color-light duration-500 bg-primary-bg-light text-3xl">
          <a href={githubLink} target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
