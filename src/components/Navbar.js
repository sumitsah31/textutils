import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="./">
                <strong>Home</strong>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link " to="./about">
                <strong>About</strong>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`form-check form-switch text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={props.toggle}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {props.mode === "light" ? "Enable dark mode" : "disable dark mode"}
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
