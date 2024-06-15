import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ContactLeft = ({ heading, content, href = "/" }) => {
  const navigate = useNavigate();
  return (
    <div
      className="h-fit w-full gap-4 p-6 sm:p-4 md:p-4 flex justify-between items-center hover:-translate-y-1 duration-500 bg-white dark:bg-black/50 rounded-md border shadow-md dark:border-secondary-color-dark"
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-sm opacity-80">{heading}</h3>
        <p>{content}</p>
      </div>
      <div className="p-3 md:p-2 cursor-pointer rounded-md bg-primary-bg-light dark:bg-primary-bg-dark border"
      onClick={() => navigate(`${href}`)}
      >
        <FaArrowRight />
      </div>
    </div>
  );
};

export default ContactLeft;
