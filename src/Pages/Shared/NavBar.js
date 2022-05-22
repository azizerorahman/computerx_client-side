import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import logoText from "../../images/logo-text.png";

const NavBar = () => {
  return (
    <header className="bg-[#f3f3fa]">
      <div className="navbar py-6 lg:w-11/12 mx-auto lg:px-10 px-5">
        <div className="navbar-start lg:hidden">
          <Link className="font-semibold" to="/">
            <img src={logoText} alt="logo" />
          </Link>
        </div>
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost p-0 lg:hidden">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="font-semibold" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="font-semibold" to="/blogs">
                  Blogs
                </Link>
              </li>
              <li>
                <Link className="font-semibold" to="/my-portfolio">
                  My Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-start hidden lg:flex">
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link className="font-semibold" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="font-semibold" to="/blogs">
                  Blogs
                </Link>
              </li>
              <li>
                <Link className="font-semibold" to="/blogs">
                  Blogs
                </Link>
              </li>
              <li>
                <Link className="font-semibold" to="/my-portfolio">
                  My Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <Link className="font-semibold" to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-end flex-none hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link className="font-semibold" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="font-semibold" to="/blogs">
                Blogs
              </Link>
            </li>
            <li>
              <Link className="font-semibold" to="/my-portfolio">
                My Portfolio
              </Link>
            </li>
            <li>
              <Link className="font-semibold" to="/my-portfolio">
                My Portfolio
              </Link>
            </li>
          </ul>
          <div className="avatar pr-4">
            <div className="w-12 rounded-full">
              <img
                src="https://api.lorem.space/image/face?hash=92310"
                alt="user"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
