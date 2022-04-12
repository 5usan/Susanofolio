import React from "react";
import Navbar from "./Navbar/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../pages/Homepage";

function Routing() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/portfolio" element={<Homepage />} />
        <Route path="/resume" element={<Homepage />} />
        <Route path="/about" element={<Homepage />} />
        <Route path="/contact" element={<Homepage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
}

export default Routing;
