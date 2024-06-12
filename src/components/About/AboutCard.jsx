import React from "react";

const AboutCard = () => {
  return (
    <div className="w-full flex flex-col dark:text-primary-color-dark text-primary-color-light gap-12 justify-start pt-12 pl-12 sm:pl-8 xs:pl-4">
      <div className="flex gap-2 items-center">
        <h1 className="text-2xl font-ubuntu font-normal">
          <span className="text-secondary-color-light dark:text-secondary-color-dark">02.</span> About me
        </h1>
        <p className="flex-grow h-[1px] bg-secondary-color-light dark:bg-secondary-color-dark opacity-80"></p>
      </div>
      <p className="w-2/3 text-lg sm:w-full">
        Hello! I'm{" "}
        <span className="anchor-hover">
          Alok Yadav
        </span>{" "}
        a passionate creator of digital experiences from{" "}
        <span className="anchor-hover">
          UP, India
        </span>{" "}
        . My journey into web development began started back in 2023 when I
        first experimented with customizing profile cards. What started as a
        simple exploration soon led me to create engaging experiences like the
        heart effect you see here, using HTML, CSS, and JavaScript.
      </p>

      <p className="w-2/3 text-lg mb-12 sm:w-full">
        I'm pursuing my Bachelor's degree in Computer application from{" "}
        <span className="anchor-hover">
          VBS Purvanchal University
        </span>{" "}
        .The initial exploration into HTML and CSS ignited a passion that has
        driven my career in creating dynamic and user-friendly web applications.
        <br />
        Beyond coding, I enjoy -
        <ul className="mt-3 ml-6">
          <li className="text-lg flex items-center">
            <span className="text-secondary-color-light dark:text-secondary-color-dark text-2xl">▹</span>
            Blogging
          </li>
          <li className="text-lg flex items-center">
            <span className="text-secondary-color-light dark:text-secondary-color-dark text-2xl">▹</span>
            Travelling
          </li>
          <li className="text-lg flex items-center">
            <span className="text-secondary-color-light dark:text-secondary-color-dark text-2xl">▹</span>
            Playing games
          </li>
        </ul>
      </p>
    </div>
  );
};

export default AboutCard;