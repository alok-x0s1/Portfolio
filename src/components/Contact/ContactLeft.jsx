import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ContactLeft = ({ heading, content, href = "/" }) => {
  const navigate = useNavigate();
  return (
    <div
      className="h-fit w-full p-6 flex justify-between items-center bg-white rounded-md border shadow-md"
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-sm opacity-80">{heading}</h3>
        <p>{content}</p>
      </div>
      <div className="p-3 cursor-pointer rounded-md bg-primary-bg-light border"
      onClick={() => navigate(`${href}`)}
      >
        <FaArrowRight />
      </div>
    </div>
  );
};

export default ContactLeft;
