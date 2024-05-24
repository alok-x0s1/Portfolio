import React, { useEffect } from "react";
import logo from "../../../public/logo.png";
import { Link, NavLink } from "react-router-dom";
import CustomBtn from "../CustomBtn";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkmode } from "../../features/mode/toggleMode";

const Header = () => {
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

      <div id="right" className="flex gap-10 items-center pr-12">
        <ul className="flex gap-8 mr-6">
          {navItems.map((item) => (
            <li key={item.id} className="group">
              <NavLink
                to={item.slug}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-secondary-color-light"
                      : "text-primary-color-light dark:text-primary-color-dark"
                  } font-medium flex gap-2`
                }
              >
                <span className="text-primary-color-light dark:text-primary-color-dark">0{item.id}. </span>{" "}
                <div className="group-hover:text-secondary-color-light duration-300">
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
        className="p-2 bg-primary-bg-light dark:bg-primary-bg-dark border-black border dark:boder-white rounded-full focus:outline-none"
        onClick={ () => dispatch(toggleDarkmode())}
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
};

export default Header;
