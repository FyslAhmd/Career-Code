import React, { use } from "react";
import { Link, NavLink } from "react-router";
import AuthContext from "../../contexts/AuthContext";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  
  const links = (
    <>
      <NavLink className="btn" to="/">
        Home
      </NavLink>
      <NavLink className="btn" to="/">
        About
      </NavLink>
      <NavLink className="btn" to="/">
        Contact
      </NavLink>
    </>
  );

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("user siggned out");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Link onClick={handleSignOut} className="btn">
            Log Out
          </Link>
        ) : (
          <>
            <Link className="btn" to="/login">
              Login
            </Link>
            <Link className="btn" to="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
