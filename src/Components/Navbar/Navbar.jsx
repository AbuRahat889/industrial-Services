import { NavLink } from "react-router-dom";
import "../../../src/App.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="work contant">
      <div className="navbar bg-base-100">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <div
              tabIndex={0}
              className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-4"
            >
              <NavLink className="" to={"/"}>
                Home
              </NavLink>
              <NavLink to={"/PagetoRead"}>Pages to Read</NavLink>
              <NavLink>Update Profile</NavLink>
              <NavLink to={'/contactus'}>ContactUs</NavLink>
            </div>
          </div>
          <a className="btn btn-ghost text-3xl font-bold">UrbanNest</a>
        </div>
        <nav id="nav" className="navbar-center hidden lg:flex gap-4 text-2xl ">
          <NavLink className="btn btn-outline btn-info" to={"/"}>
            Home
          </NavLink>
          <NavLink className="btn btn-outline btn-info" to={'/contactus'}>ContactUs</NavLink>
          <NavLink className="btn btn-outline btn-info" to={'/PagetoRead'}>Update Profile</NavLink>
          
        </nav>

        <div className="navbar-end gap-3 ">
          <NavLink to={"/signin"}>
            <a className="btn bg-[#23be0a] text-white">Sign in</a>
          </NavLink>

          <NavLink to={"/signup"}>
            <a className="btn bg-[#59C6D2] text-white">Sign up</a>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
