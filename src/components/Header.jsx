import React from "react";
import { useState } from "react";

const Header = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div className="home containter-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="/">
          <img
            className="navbar-toggler-icon"
            src="https://www.linkpicture.com/q/logo_930.png"
            alt="Logo"
            width="36"
            height="36"
            className="vertical-align-middle"
          />
          <span className="">Alchimetis</span>
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarsExample09"
        >
          <div className="navbar-nav ml-auto">
            <a className="nav-link nav-item" href="#about-us">
              About
            </a>
            <a className="nav-link nav-item" href="#Join-Us">
              Join Us
            </a>
            <a className="nav-link nav-item" href="#contact">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
