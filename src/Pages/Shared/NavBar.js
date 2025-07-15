import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import logoMobile from "../../images/logo_mobile.svg";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  return (
    <header className="bg-[#f3f3fa]">
      <div className="navbar py-6 lg:w-11/12 mx-auto lg:px-10 px-5">
        <div className="navbar-start lg:hidden">
          <Link className="font-semibold" to="/">
            <img src={logoMobile} alt="logo" />
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
                <Link className="font-semibold" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              {user ? (
                <>
                  <h3 className="font-bold text-center text-neutral text-xl lg:pr-5 lg:py-0 py-3">
                    {user?.displayName}
                  </h3>
                  <button
                    onClick={logOut}
                    className="font-semibold btn btn-outline border-2 btn-accent px-5"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <li>
                    <Link className="font-semibold" to="/log-in">
                      Log In
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-semibold btn btn-secondary px-5 text-white"
                      to="/sign-up"
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="navbar-start hidden lg:flex">
          <div className="flex-none">
            <ul className="menu menu-horizontal gap-2 p-0">
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
              {user && (
                <li>
                  <Link className="font-semibold" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <Link className="font-semibold" to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-end flex-none hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-2 p-0">
            {user ? (
              <>
                <h3 className="font-bold text-neutral text-xl pr-5">
                  {user?.displayName}
                </h3>
                <li>
                  <button
                    onClick={logOut}
                    className="font-semibold btn btn-outline border-2 btn-accent px-5"
                  >
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className="font-semibold" to="/log-in">
                    Log In
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-semibold btn btn-secondary px-5 text-white"
                    to="/sign-up"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
