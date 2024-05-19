import React from "react";
import { Container, CustomBtn } from "../components";

const Home = () => {
  return (
    <div className="bg-primary-bg-light">
      <Container>
        <div className="flex flex-col items-start pt-16 w-2/3 pl-8">
          <p className="text-secondary-color-light text-3xl font-ubuntu">
            Hy, my name is
          </p>
          <h1 className="text-8xl max-[836px]:text-7xl font-ubuntu font-medium leading-snug">
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
