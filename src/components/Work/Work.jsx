import React from "react";
import Project from "./Project";

const Work = () => {
  const techStack = ["ReactJs", "Appwrite", "Redux", "React-router"];
  return (
    <div className="w-full flex flex-col gap-12 justify-start pt-12 pl-12 pb-8">
      <div className="flex gap-2 items-center">
        <h1 className="text-2xl font-ubuntu font-normal">
          <span className="text-secondary-color-light">02.</span> Some things
          I've built
        </h1>
        <p className="w-80 h-[1px] bg-secondary-color-light opacity-80"></p>
      </div>

      <div className="flex flex-col w-full gap-6">
        <Project
          name="SaverSync"
          content="SaverSync is your go-to expense tracker for seamless financial management. Track expenses, plan budgets, and monitor savings all in one intuitive app."
          githubLink="/"
          liveLink="/"
          techStack={techStack}
        />
        <div className="w-full flex justify-end">
        <Project
          name="SaverSync"
          content="SaverSync is your go-to expense tracker for seamless financial management. Track expenses, plan budgets, and monitor savings all in one intuitive app."
          githubLink="/"
          liveLink="/"
          techStack={techStack}
        />
        </div>
      </div>
    </div>
  );
};

export default Work;
