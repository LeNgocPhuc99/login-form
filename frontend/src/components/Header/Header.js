import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={"/login"}>
          Login Form
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/login"}>
                Login
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link" to={"/register"}>
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
