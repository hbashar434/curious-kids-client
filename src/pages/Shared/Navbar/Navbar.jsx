import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {});
  };

  const navItems = (
    <>
      <li className="mr-6  font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-pink-500" : "text-gray-600"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="mr-6  font-semibold">
        <NavLink
          to="/all-toys"
          className={({ isActive }) =>
            isActive ? "text-pink-500" : "text-gray-600"
          }
        >
          All Toys
        </NavLink>
      </li>
      <li className="mr-6  font-semibold">
        <NavLink
          to="/my-toys"
          className={({ isActive }) =>
            isActive ? "text-pink-500" : "text-gray-600"
          }
        >
          My Toys
        </NavLink>
      </li>
      <li className="mr-6  font-semibold">
        <NavLink
          to="/add-toys"
          className={({ isActive }) =>
            isActive ? "text-pink-500" : "text-gray-600"
          }
        >
          Add a Toy
        </NavLink>
      </li>
      <li className="mr-6  font-semibold">
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "text-pink-500" : "text-gray-600"
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
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
              className="menu-compact dropdown-content mt-1 p-2 shadow my-bg-pink rounded-box w-32"
            >
              {navItems}
            </ul>
          </div>
          <Link
            to="/"
            className=" btn bg-transparent hover:bg-transparent normal-case text-pink-600 text-lg border-none md:text-3xl font-bold flex items-center"
          >
            <img src={logo} alt="logo" className="w-12 pr-1" />
            Curious Kids
          </Link>
        </div>
        <div className=" navbar-start hidden lg:flex ml-10">
          <ul className="menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-purple-500 ring-offset-base-100 ring-offset-1 mr-4">
                <img src={user.photoURL} />
              </div>
              <button onClick={handleLogOut} className="my-btn-cherry">
                Log Out
              </button>
            </div>
          ) : (
            <Link to="/login" className="my-btn-cherry">
              Login Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
