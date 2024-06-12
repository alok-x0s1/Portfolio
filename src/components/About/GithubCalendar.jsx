import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubCalendar = () => {
  return (
    <div className="flex flex-col gap-12 mt-12 py-8 justify-center items-center dark:text-primary-color-dark text-primary-color-light px-4 sm:px-2">
      <h1 className="text-5xl font-medium font-ubuntu text-center">
        Days I <span className="text-secondary-color-light dark:text-secondary-color-dark">code</span>
      </h1>
      <div className="w-full overflow-auto">
        <GitHubCalendar
          username="alok-x0s1"
          blockSize={14}
          blockMargin={5}
          color="#c084f5"
          colorScheme="light"
          fontSize={16}
        />
      </div>
    </div>
  );
};

export default GithubCalendar;