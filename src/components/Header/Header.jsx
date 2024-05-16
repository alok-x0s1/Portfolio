import React from "react";
import logo from "../../../public/logo.png";
import { Link, NavLink } from "react-router-dom";
import ResumeBtn from "../ResumeBtn";

const Header = () => {

  const navItems = [
    { id: 1, name: "Home", slug: "/" },
    { id: 2, name: "About", slug: "/about" },
    { id: 3, name: "Experience", slug: "/experience" },
    { id: 4, name: "Contact", slug: "/contact" },
  ];

  return (
    <div className="w-full px-6 py-2 bg-primary-bg-light text-primary-color-light flex justify-between items-center gap-4">
      <div id="left">
        <Link to="/">
          <img src={logo} alt="logo" width={50} />
        </Link>
      </div>

      <div id="right" className="flex gap-12 items-center pr-8">
        <ul className="flex gap-8 mr-6">
          {navItems.map((item) => (
            <li key={item.id}>
            <NavLink
            to={item.slug}
            className={({isActive}) =>
              `${isActive ? "text-secondary-color-light" : "text-primary-color-light"}`
          }
            >
              <span className="text-secondary-color-light">0{item.id}. </span> {" "}{item.name}
            </NavLink>
          </li>
          ))}
        </ul>

        <ResumeBtn />
      </div>
    </div>
  );
};

export default Header;
