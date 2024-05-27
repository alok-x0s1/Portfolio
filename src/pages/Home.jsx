import React from "react";
import { Container, CustomBtn } from "../components";

const Home = () => {
  return (
    <div className="bg-primary-bg-light text-primary-color-light dark:text-primary-color-dark dark:bg-primary-bg-dark">
      <Container>
        <div className="flex flex-col items-start pt-16 w-2/3 lg:w-full pl-8">
          <p className="text-secondary-color-light dark:text-secondary-color-dark text-3xl font-ubuntu">
            Hy, my name is
          </p>
          <h1 className="text-8xl font-ubuntu mt-3 font-medium leading-tight">
            Alok Yadav.
          </h1>
          {/* <h3 className="text-7xl font-medium font-ubuntu opacity-75 leading-tight tracking-tighter">Weaving Web with Code Mastery</h3> */}
          <p className="text-xl font-medium opacity-75 font-infant mt-3">
            Frontend Developer & Open-Source Advocate
            <br />
            Hey there! I'm Alok Yadav, a frontend developer on a journey toward mastering full-stack development. With a passion for both frontend intricacies and the broader spectrum of development, I'm dedicated to learning and contributing to open-source software. Let's explore the realms of technology together and create impactful solutions!
          </p>

          <div className="mt-6">
          <CustomBtn name="Connect with me!" classname="w-[175px] h-[42px]" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
