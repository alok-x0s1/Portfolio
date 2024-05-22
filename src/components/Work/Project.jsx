import React from "react";
import { FaLink, FaGithub } from "react-icons/fa";

const Project = ({ name, content, techStack, liveLink, githubLink }) => {
  return (
    <div className="min-w-96 max-w-[600px] text-center flex flex-col gap-4 p-8 bg-white rounded-md w-fit shadow-md">
      <h2 className="font-infant text-4xl font-semibold">{name}</h2>
      <p className="text-xl mt-3 opacity-75 font-ubuntu">{content}</p>
      <div className="flex gap-8 flex-wrap mt-4">
        {techStack &&
          techStack.map((elem) => (
            <div
              key={elem}
              className="px-4 font-ubuntu text-lg py-2 duration-300 cursor-pointer hover:scale-105 bg-primary-bg-light rounded-md border"
            >
              {elem}
            </div>
          ))}
      </div>
      <div className="flex justify-center items-center gap-6 mt-4">
        <div className="flex justify-center cursor-pointer hover:-translate-y-2 duration-500 items-center p-3 rounded-md border bg-primary-bg-light text-3xl">
          <a href={liveLink}>
            <FaLink />
          </a>
        </div>
        <div className="flex justify-center cursor-pointer hover:-translate-y-2 duration-500 items-center p-3 rounded-md border bg-primary-bg-light text-3xl">
          <a href={githubLink}>
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
