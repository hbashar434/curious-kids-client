import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li className="mr-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-700"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="mr-6">
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-700"
          }
        >
          Blog
        </NavLink>
      </li>
      <li className="mr-6">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-700"
          }
        >
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="mx-8 md:mx-16 lg:mx-24">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              tabIndex={0}
              className="menu-compact dropdown-content mt-1 p-2 shadow  bg-orange-100 rounded-box w-32"
            >
              {navItems}
            </ul>
          </div>
          <Link
            to="/"
            className="normal-case text-blue-500 border-none text-lg md:text-3xl font-bold"
          >
            Curious Kids
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <button>Login Now</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
