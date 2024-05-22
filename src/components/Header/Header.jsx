import React from "react";
import logo from "../../../public/logo.png";
import { Link, NavLink } from "react-router-dom";
import CustomBtn from "../CustomBtn";

const Header = () => {
  const navItems = [
    { id: 1, name: "About", slug: "/about" },
    { id: 2, name: "Work", slug: "/work" },
    { id: 3, name: "Blogs", slug: "/blogs" },
    { id: 4, name: "Contact", slug: "/contact" },
  ];

  return (
    <div className="w-full top-0 px-6 py-2 bg-primary-bg-light text-primary-color-light flex justify-between items-center gap-4">
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
                      : "text-primary-color-light"
                  } font-medium flex gap-2`
                }
              >
                <span className="text-primary-color-light">0{item.id}. </span>{" "}
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
      </div>
    </div>
  );
};

export default Header;
