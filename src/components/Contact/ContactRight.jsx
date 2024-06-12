import React from "react";
import { CustomBtn } from "../index"

const ContactRight = () => {
  return (
    <div className="bg-white dark:bg-black/50 min-h-96 flex justify-center p-8 md:p-4 sm:p-2 rounded-md flex-col items-center gap-8 text-center border dark:border-secondary-color-dark">
      <h2 className="text-4xl md:text-3xl sm:text-2xl font-ubuntu font-semibold">Get in touch</h2>
      <p className="px-12 md:px-8 sm:px-2 md:text-base md:w-full">I'm always interested in hearing about new projects and opportunities. Feel free to reach out to me if you have any questions or would like to discuss how I can help you with your upcoming creative endeavors.</p>
      <a href="mailto:alok421yadav@gmail.com">
      <CustomBtn name="Say hello" classname="w-[125px] h-[45px]" />
      </a>
    </div>
  );
};

export default ContactRight;
