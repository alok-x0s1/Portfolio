import React, { useEffect, useState } from "react";
import logo from "../../../public/logo.png";
import { Link, NavLink } from "react-router-dom";
import CustomBtn from "../CustomBtn";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkmode } from "../../features/mode/toggleMode";
import { SunIcon, MoonIcon } from "../Icon"
import { motion } from "framer-motion";

const Header = () => {
  const [isopen, setIsopen] = useState(false);
  const handleClick = () => {
    setIsopen(!isopen);
  };
  const navItems = [
    { id: 1, name: "Home", slug: "/" },
    { id: 2, name: "About", slug: "/about" },
    { id: 3, name: "Work", slug: "/work" },
    { id: 4, name: "Contact", slug: "/contact" },
  ];

  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="w-full top-0 px-6 py-2 bg-primary-bg-light dark:bg-primary-bg-dark dark:text-primary-color-dark text-primary-color-light flex justify-between items-center gap-4">
      <div id="left">
        <Link to="/">
          <img src={logo} alt="logo" width={50} />
        </Link>
      </div>

      <div id="right" className="flex lg:hidden gap-10 items-center pr-12">
        <ul className="flex gap-8 mr-6">
          {navItems.map((item) => (
            <li key={item.id} className="group">
              <NavLink
                to={item.slug}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-secondary-color-light dark:text-secondary-color-dark"
                      : "text-primary-color-light dark:text-primary-color-dark"
                  } font-medium flex gap-2`
                }
              >
                <span className="text-primary-color-light dark:text-primary-color-dark">
                  0{item.id}.{" "}
                </span>{" "}
                <div className="group-hover:text-secondary-color-light dark:group-hover:text-secondary-color-dark duration-300">
                  {item.name}
                </div>
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/resume">
          <CustomBtn name="Resume" />
        </Link>

        <button
          onClick={() => dispatch(toggleDarkmode())}
        >
          {darkMode ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>

      <button
        className="hidden lg:flex justify-center items-center flex-col"
        onClick={handleClick}
      >
        <span
          className={`bg-secondary-color-light dark:bg-secondary-color-dark w-6 transition-all duration-300 ease-out block h-0.5 rounded-sm ${
            isopen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        >
        </span>
        <span
          className={`bg-secondary-color-light dark:bg-secondary-color-dark w-6 transition-all duration-300 ease-out block h-0.5 rounded-sm my-0.5 ${
            isopen ? "opacity-0" : "opacity-100"
          }`}
        >
        </span>
        <span
          className={`bg-secondary-color-light dark:bg-secondary-color-dark w-6 transition-all duration-300 ease-out block h-0.5 rounded-sm ${
            isopen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        >
        </span>
      </button>

      {isopen ? (
        <motion.div
        initial={{scale: 0, opacity: 0, x: "-50%", y: "-50%"}}
        animate={{scale: 1, opacity: 1, transition: { duration: 0.3}}}
          className="min-w-[70vw] hidden lg:flex z-30 flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-bg-light/90 dark:bg-primary-bg-dark/75 rounded-lg backdrop-blur-md
        py-12 border dark:border-secondary-color-dark border-secondary-color-light shadow-sm shadow-secondary-color-light dark:shadow-secondary-color-dark"
        >
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.id} className="group" onClick={handleClick}>
                <NavLink
                  to={item.slug}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-secondary-color-light dark:text-secondary-color-dark"
                        : "text-primary-color-light dark:text-primary-color-dark"
                    } font-medium flex gap-2`
                  }
                >
                  <span className="text-primary-color-light dark:text-primary-color-dark">
                    0{item.id}.{" "}
                  </span>{" "}
                  <div className="group-hover:text-secondary-color-light dark:group-hover:text-secondary-color-dark duration-300">
                    {item.name}
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="my-6">
            <Link to="/resume">
              <CustomBtn name="Resume" />
            </Link>
          </div>

          <button
            onClick={() => dispatch(toggleDarkmode())}
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>
        </motion.div>
      ) : null}
    </div>
  );
};

export default Header;
