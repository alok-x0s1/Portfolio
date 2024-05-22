import React from "react";
import { CustomBtn } from "../index"

const ContactRight = () => {
  return (
    <div className="bg-white min-h-96 flex justify-center p-8 rounded-md flex-col items-center gap-8 text-center">
      <h2 className="text-4xl font-ubuntu font-semibold">Get in touch</h2>
      <p className="px-12">I'm always interested in hearing about new projects and opportunities. <br /> Feel free to reach out to me if you have any questions or <br /> would like to discuss how I can help you with <br /> your upcoming creative endeavors.</p>
      <a href="mailto:'alok421yadav@gmail.com'">
      <CustomBtn name="Say hello" classname="w-[125px] h-[45px]" />
      </a>
    </div>
  );
};

export default ContactRight;
