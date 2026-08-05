import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import { useAuth } from "../Context/Authprovider.jsx";
import Logout from "./Logout.jsx";
import { useSearch } from "../Context/SearchContext.jsx";
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Course" },
  { to: "/contact", label: "Contact" },
  { to: "/about", label: "About" },
];

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const { search, setSearch } = useSearch();

  const handleCoursesClick = (e) => {
    if (!authUser) {
      e.preventDefault();
      document.getElementById("my_modal_3")?.showModal();
    }
  };

  const handleSearch = (e) => { setSearch(e.target.value) };
  const [Sticky, setSticky] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light",
  );
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavLink = ({ to, label }) => (
    <li key={to}>
      <NavLink
        to={to}
        end
        onClick={label === "Course" ? handleCoursesClick : undefined}
        className={({ isActive }) =>
          `relative inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
            isActive
              ? "text-white bg-black shadow-lg"
              : "text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
          }`
        }
      >
        <span className="relative z-10">{label}</span>
      </NavLink>
    </li>
  );

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-1000 ${
        Sticky
          ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-900 duration-300 transition-all ease-in-out"
          : ""
      }`}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-slate-800 dark:text-slate-100"
            >
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
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 dark:bg-slate-900 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks.map((item) => renderNavLink(item))}
            </ul>
          </div>
          <NavLink
            to="/"
            className="text-2xl font-bold cursor-pointer text-slate-900 dark:text-slate-100"
          >
            Book Store
          </NavLink>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex space-x-2">
            <ul className="menu menu-horizontal flex-nowrap gap-2 px-1">
              {navLinks.map((item) => renderNavLink(item))}
            </ul>
            {/* //Search Bar */}
            <div>
              <label className="input input-bordered bg-white text-slate-900 dark:bg-slate-800 dark:text-slate-100 outline-none">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  type="search"
                  value={search}
                  onChange={handleSearch}
                  required
                  placeholder="Search"
                />
              </label>
            </div>
            {/* //Dark Mode */}
            <div>
              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  className="theme-controller"
                  checked={theme === "dark"}
                  onChange={() =>
                    setTheme((prev) => (prev === "light" ? "dark" : "light"))
                  }
                />
                <svg
                  className="swap-off h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg
                  className="swap-on h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
          </div>
          <div>
            {authUser ? (
              <Logout />
            ) : (
              <a
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="btn bg-black text-white px-3 py-2 rounded cursor-pointer ml-8 hover:bg-slate-300 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300 duration-300"
              >
                Login
              </a>
            )}
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
