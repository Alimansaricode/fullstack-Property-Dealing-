import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav({ onLoginClick, onSignupClick }) {
  const navigate = useNavigate();

 const userName = localStorage.getItem("userName");

console.log("Navbar Name:", userName);
  const token = localStorage.getItem("accessToken");

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md shadow-md">
      <div className="navbar max-w-7xl mx-auto px-6">

        {/* Logo */}
        <div className="navbar-start">
          <div className="dropdown md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-white shadow z-50"
            >
              <li><Link to="/">Home</Link></li>
              <li><Link to="/buy">Buy</Link></li>
              <li><Link to="/rent">Rent</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>

          <Link
            to="/"
            className="text-2xl font-bold text-blue-600"
          >
            Dream Home
          </Link>
        </div>

        {/* Center Menu */}
        <div className="navbar-center hidden md:flex ml-10">
          <ul className="menu menu-horizontal gap-2 text-lg ">

            <li>
              <Link
                to="/"
                className="hover:bg-blue-600 hover:text-white rounded-lg"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/buy"
                className="hover:bg-blue-600 hover:text-white rounded-lg"
              >
                Buy
              </Link>
            </li>

            <li>
              <Link
                to="/rent"
                className="hover:bg-blue-600 hover:text-white rounded-lg"
              >
                Rent
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:bg-blue-600 hover:text-white rounded-lg"
              >
                About
              </Link>
            </li>

          </ul>
        </div>

        {/* Right Side */}
<div className="navbar-end">

  {!token ? (
    <div className="flex items-center gap-4">
      <button
        onClick={onLoginClick}
        className="px-5 py-2 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
      >
        Login
      </button>

      <button
        onClick={onSignupClick}
        className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
      >
        Signup
      </button>
    </div>
  ) : (
    <div className="flex items-center gap-4">
      <p className="text-gray-700 font-semibold whitespace-nowrap">
        👋 Welcome, {userName}
      </p>

      <button
        onClick={handleLogout}
        className="px-5 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-all duration-300"
      >
        Logout
      </button>
    </div>
  )}

</div>
      </div>
    </div>
  );
}

export default Nav;