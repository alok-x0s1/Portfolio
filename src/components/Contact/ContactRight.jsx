import React from "react";
import Input from "./Input";

const ContactRight = () => {
  return (
    <div className="bg-white p-8 rounded-md flex flex-col gap-8">
      <div className="flex gap-8">
        <Input type="text" placeholder="First name..." />
        <Input type="text" placeholder="Last name..." />
      </div>
      <div className="flex gap-8">
        <Input type="email" placeholder="Enter email..." />
        <Input type="tel" placeholder="Phone number..." />
      </div>
      <div className="p-4 bg-primary-bg-light rounded-md">
        <p className="py-4">Why are you contacting me?</p>
        <div className="flex justify-between mb-6">
          <div className="flex">
            <input id="web-deign" className="h-6 w-6 mr-4 outline-none border" type="checkbox" />
            <label htmlFor="web-design">Web design</label>
          </div>
          <div className="flex">
            <input id="collaboration" className="h-6 w-6 mr-4" type="checkbox" />
            <label htmlFor="collaboration">Collaboration</label>
          </div>
        </div>
        <div className="flex justify-between mb-6">
          <div className="flex">
            <input id="web-deign" className="h-6 w-6 mr-4" type="checkbox" />
            <label htmlFor="web-design">Web design</label>
          </div>
          <div className="flex">
            <input id="collaboration" className="h-6 w-6 mr-4" type="checkbox" />
            <label htmlFor="collaboration">Collaboration</label>
          </div>
        </div>
      </div>
        <textarea className="w-full bg-primary-bg-light p-4 outline-none border shadow-md rounded-md" placeholder="Enter your message here..."></textarea>
        <button className="px-4 w-fit py-2 text-primary-bg-light bg-secondary-color-light mt-4 rounded-md shadow-md" type="submit">Submit</button>
    </div>
  );
};

export default ContactRight;
