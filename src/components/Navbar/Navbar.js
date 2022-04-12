import React, { useState } from "react";
import "./Navbar.scss";
import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import useWindowDimensions from "../../utils/useWindowsDimensions";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { width } = useWindowDimensions();
  const mobileView = 478;
  console.log(width);
  const displayNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <div className="rootNav">
      {width < mobileView && (
        <div className={`${showNavbar && "bg-white"}`}>
          <TiThMenu
            className="border p-1 px-0 rounded menuIcon "
            size={40}
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
                <NavLink to="/home" className="link">
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li>
                <NavLink to="/portfolio" className="link">
                  Portfolio
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li>
                <NavLink to="/resume" className="link">
                  Resume
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li>
                <NavLink to="/about" className="link">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li>
                <NavLink to="/contact" className="link">
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
