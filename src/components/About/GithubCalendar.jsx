import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubCalendar = () => {

  return (
    <div className="flex flex-col gap-12 mt-12 py-8 justify-center items-center">
      <h1 className="text-5xl font-medium font-ubuntu">Days I <span className="text-secondary-color-light">code</span></h1>
      <GitHubCalendar
        username="alok-x0s1"
        blockSize={14}
        blockMargin={5}
        color="#c084f5"
        colorScheme='light'
        fontSize={16}
      />
    </div>
  );
};

export default GithubCalendar;
