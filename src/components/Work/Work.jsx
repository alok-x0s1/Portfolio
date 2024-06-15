import React from "react";
import Project from "./Project";
import preview1 from "../../../public/preview1.png";
import preview2 from "../../../public/preview2.png";
import preview3 from "../../../public/preview3.png";

const Work = () => {
  const techStack = [
    "ReactJs",
    "Appwrite",
    "Redux",
    "React-router",
    "TailwindCSS",
  ];
  return (
    <div className="w-full flex flex-col gap-12 md:gap-8 justify-start pt-12 pl-12 md:pl-8 sm:pl-4 xs:pl-2 pb-20 dark:text-primary-color-dark text-primary-color-light">
      <div className="flex gap-2 items-center">
        <h1 className="text-2xl sm:text-xl font-ubuntu font-normal">
          <span className="text-secondary-color-light dark:text-secondary-color-dark">03.</span> Some things
          I've built
        </h1>
        <p className="w-80 lg:w-40 md:w-20 sm:w-10 xs:w-0 h-[1px] bg-secondary-color-light dark:bg-secondary-color-dark opacity-80"></p>
      </div>

      <div className="flex flex-col w-full gap-12 md:gap-8">
        <div className="flex flex-wrap justify-start items-center">
          <Project
            name="SaverSync"
            content="SaverSync is your go-to expense tracker for seamless financial management. Track expenses, plan budgets, and monitor savings all in one intuitive app."
            githubLink="https://github.com/alok-x0s1/SaverSync"
            liveLink="/"
            techStack={techStack}
            className="z-10"
          />
          <div className="h-72 lg:hidden absolute left-[600px] rounded-md overflow-hidden">
            <img src={preview1} alt="preview1" width={500} className="h-full border border-secondary-color-light dark:border-secondary-color-dark rounded-md" />
            <div className="absolute inset-0 bg-secondary-color-light dark:bg-secondary-color-dark opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
          </div>
        </div>

        <div className="flex flex-wrap justify-end items-center">
          <div className="h-72 lg:hidden absolute right-[600px] rounded-md overflow-hidden">
            <img src={preview2} alt="preview2" width={500} className="h-full border border-secondary-color-light dark:border-secondary-color-dark rounded-md" />
            <div className="absolute inset-0 bg-secondary-color-light dark:bg-secondary-color-dark opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
          </div>
          <Project
            name="Frontify"
            content="Frontify is a dynamic blog website built with React on the frontend and utilizing Appwrite as a Backend-as-a-Service (BaaS) solution. Appwrite handles functionalities like user authentication, database management, and file storage."
            githubLink="https://github.com/alok-x0s1/frontify"
            liveLink="/"
            className="items-end z-10"
            techStack={techStack}
          />
        </div>

        <div className="flex flex-wrap justify-start items-center">
          <Project
            name="Password-Generator"
            content="Introducing a sleek React Password Generator leveraging useRef, useEffect, and useCallback hooks. It automatically generates strong passwords, updates in real-time, and offers a quick copy feature for seamless integration."
            githubLink="https://github.com/alok-x0s1/Password-Generator"
            liveLink="https://password-generator-alok.vercel.app/"
            techStack={["ReactJS", "TailwindCSS", "hooks"]}
            className="z-10"
          />
          <div className="h-72 lg:hidden absolute left-[600px] rounded-md overflow-hidden">
            <img src={preview3} alt="preview3" width={500} className="h-full border border-secondary-color-light dark:border-secondary-color-dark rounded-md" />
            <div className="absolute inset-0 bg-secondary-color-light dark:bg-secondary-color-dark opacity-50 hover:opacity-0 transition-opacity duration-300 z-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
