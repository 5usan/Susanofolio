import React from "react";
import Navbar from "../Navbar/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../../pages/Homepage";
import PortfolioPage from "../../pages/PortfolioPage";
import ContactPage from "../../pages/ContactPage";

function Routing() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/resume" element={<Homepage />} />
        <Route path="/about" element={<Homepage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default Routing;
