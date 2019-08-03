import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            Google Books
          </Link>
        </div>
        <ul className="nav navbar-nav">
          <li className={window.location.pathname === "/" ||
            window.location.pathname === "/search"
            ? "active"
            : ""}>
            <Link to="/">Search</Link>
          </li>

          <li className={window.location.pathname === "/saved"
            ? "active"
            : ""}>
            <Link to="/">Search</Link>
          </li>

        </ul>
      </div>
    </nav >
  );
};

export default Navbar;
