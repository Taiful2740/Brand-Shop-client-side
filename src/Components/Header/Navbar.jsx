import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/adidas-logo.png";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("Log Out Successfully"))
      .catch(error => console.log(error.message));
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/add-product">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      {/* <li>
        <NavLink to="/register">Register</NavLink>
      </li> */}
      {/* <li>
        <NavLink to="/login">Login</NavLink>
      </li> */}
      {user ? (
        ""
      ) : (
        <>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}
      {user && (
        <>
          <li>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="max-w-6xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-center">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <img
              className="w-16 h-10 invisible md:visible lg:visible"
              src={logo}
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-center -ml-28 md:navbar-center lg:navbar-center lg:ml-32">
          {user ? (
            <>
              <span>{user?.displayName}</span>
              <div>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <img
                    className="w-10 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                </label>
              </div>
              <a onClick={handleLogOut} className="btn btn-sm">
                Sign Out
              </a>
            </>
          ) : (
            <Link to="/login">
              <button className="btn  btn-sm">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
