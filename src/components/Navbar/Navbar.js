import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { NavLink, useLocation } from "react-router-dom";
import useWindowDimensions from "../../utils/useWindowsDimensions";
import "./Navbar.scss";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { width } = useWindowDimensions();
  const mobileView = 478;
  const displayNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const location = useLocation();
  return (
    <div className={location.pathname === "/home" ? "rootNavHome" : "rootNav"}>
      {width < mobileView && (
        <div className={`${showNavbar && "bg-white"}`}>
          <TiThMenu
            className="border p-1 px-0 rounded menuIcon mb-2"
            size={40}
            color="gray"
            onClick={displayNavbar}
          />
        </div>
      )}
      {showNavbar || width > mobileView ? (
        <div
          className={`d-flex ${
            width < mobileView && " flex-column h-100"
          } navbar justify-content-center align-items-center p-0`}
        >
          <div className="">
            <ul>
              <li>
                <NavLink to="/home" className="link" onClick={displayNavbar}>
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li>
                <NavLink
                  to="/portfolio"
                  className="link"
                  onClick={displayNavbar}
                >
                  Portfolio
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li>
                <NavLink to="/resume" className="link" onClick={displayNavbar}>
                  Resume
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li>
                <NavLink to="/about" className="link" onClick={displayNavbar}>
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li>
                <NavLink to="/contact" className="link" onClick={displayNavbar}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
