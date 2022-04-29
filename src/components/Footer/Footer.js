import React from "react";
import { BiCopyright } from "react-icons/bi";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer d-flex justify-content-center align-items-center">
      <BiCopyright size="28px" color="white" />
        <p className="m-0">2022, Susanofolio</p>
    </footer>
  );
};

export default Footer;
