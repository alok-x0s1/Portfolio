import React from "react";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

const Contact = () => {
  const arr = [
    {
      id: 1,
      heading: "You can Email Me Here",
      content: "something@gmail.com",
      href: "/",
    },
    {
      id: 2,
      heading: "Give Me a Call on",
      content: "+91 81913 *****",
      href: "/",
    },
    {
      id: 3,
      heading: "Location",
      content: "Somewhere in the world",
      href: "/",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-12 justify-start pt-12 pl-12 md:p-6 sm:p-2 pb-8 dark:text-primary-color-dark text-primary-color-light">
      <div className="flex gap-2 items-center">
        <h1 className="text-2xl font-ubuntu font-normal">
          <span className="text-secondary-color-light dark:text-secondary-color-dark">04.</span> What's next?
        </h1>
        <p className="w-80 lg:w-40 sm:w-20 h-[1px] bg-secondary-color-light dark:bg-secondary-color-dark opacity-80"></p>
      </div>
      <div className="flex w-full gap-4 justify-between flex-wrap">
        <div className="flex w-[35%] lg:w-[75%] md:w-full flex-col gap-4">
          {arr &&
            arr.map((elem) => (
              <div key={elem.id}>
                <ContactLeft
                  heading={elem.heading}
                  content={elem.content}
                  href={elem.href}
                />
              </div>
            ))}
        </div>

        <div className="w-[60%] lg:w-full">
          <ContactRight />
        </div>
      </div>
    </div>
  );
};

export default Contact;
