import React from "react";
import logo from "../../../public/logo.png";
import { FaInstagram, FaXTwitter, FaGitlab, FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-bg-light dark:bg-primary-bg-dark dark:text-primary-color-dark text-primary-color-light border-t-2">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <img src={logo} alt="logo" width={75} />
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center leading-relaxed">
          Copyright ©{" "}
          <a
            href="https://github.com/alok-x0s1"
            target="_blank"
            className="anchor-hover"
          >
            @LokYadav
          </a>{" "}
          | Portfolio {currentYear}. All rights reserved.
          <br />
          This portfolio is a testament to dedication, creativity, and
          relentless pursuit of excellence. Designed with passion, developed
          with precision, and crafted to inspire. Thank you for exploring my
          work and joining me on this journey of innovation and creativity.
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <NavLink
              className={({ isActive }) =>
                `text-primary-color-light dark:text-primary-color-dark transition dark:hover:text-secondary-color-light hover:text-secondary-color-light ${
                  isActive
                    ? "text-secondary-color-light dark:text-secondary-color-light underline"
                    : "text-primary-color-light dark:text-primary-color-dark"
                }`
              }
              to="/about"
            >
              {" "}
              About{" "}
            </NavLink>
          </li>

          <li>
            <Link
              className="text-primary-color-light dark:text-primary-color-dark transition hover:text-secondary-color-light dark:hover:text-secondary-color-light"
              to="/"
            >
              {" "}
              Careers{" "}
            </Link>
          </li>

          {/* <li>
            <a
              className="text-primary-color-light transition hover:text-primary-color-light/75"
              href="#"
            >
              {" "}
              History{" "}
            </a>
          </li> */}

          <li>
            <NavLink
              className={({ isActive }) =>
                `text-primary-color-light dark:text-primary-color-dark transition  dark:hover:text-secondary-color-light hover:text-secondary-color-light ${
                  isActive
                    ? "text-secondary-color-light dark:text-secondary-color-light underline"
                    : "text-primary-color-light dark:text-primary-color-dark"
                }`
              }
              to="/work"
            >
              {" "}
              Projects{" "}
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                `text-primary-color-light dark:text-primary-color-dark transition  dark:hover:text-secondary-color-light hover:text-secondary-color-light ${
                  isActive
                    ? "text-secondary-color-light dark:text-secondary-color-light underline"
                    : "text-primary-color-light dark:text-primary-color-dark"
                }`
              }
              to="/contact"
            >
              {" "}
              Contact{" "}
            </NavLink>
          </li>

          <li>
            <Link
              className="text-primary-color-light dark:text-primary-color-dark transition hover:text-secondary-color-light dark:hover:text-secondary-color-light"
              to="404"
            >
              404{" "}
            </Link>
          </li>
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="https://github.com/alok-x0s1"
              rel="noreferrer"
              target="_blank"
              className="text-primary-color-light dark:text-primary-color-dark text-xl"
            >
              <FaGithub className="hover:-translate-y-1 duration-500 hover:text-secondary-color-light" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mr-x0s1/"
              rel="noreferrer"
              target="_blank"
              className="text-primary-color-light dark:text-primary-color-dark text-xl"
            >
              <FaLinkedin className="hover:-translate-y-1 duration-500 hover:text-secondary-color-light" />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/"
              rel="noreferrer"
              target="_blank"
              className="text-primary-color-light dark:text-primary-color-dark text-xl"
            >
              <FaXTwitter className="hover:-translate-y-1 duration-500 hover:text-secondary-color-light" />
            </a>
          </li>
          <li>
            <a
              href="https://instagram/mr_x0s1"
              rel="noreferrer"
              target="_blank"
              className="text-primary-color-light dark:text-primary-color-dark text-xl"
            >
              <FaInstagram className="hover:-translate-y-1 duration-500 hover:text-secondary-color-light" />
            </a>
          </li>
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-primary-color-light dark:text-primary-color-dark text-xl"
            >
              <FaGitlab className="hover:-translate-y-1 duration-500 hover:text-secondary-color-light" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
